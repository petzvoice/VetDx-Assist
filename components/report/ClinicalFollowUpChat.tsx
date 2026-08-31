"use client";

import type { AIClinicalReport as AIClinicalReportType } from "@/types/ai";
import { useEffect, useMemo, useState } from "react";

type Props = {
  report: AIClinicalReportType;
};

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function formatList(value: unknown): string {
  if (!Array.isArray(value)) {
    return "";
  }

  return value
    .map((item) => {
      if (typeof item === "string") {
        return item;
      }

      if (item && typeof item === "object") {
        const obj = item as Record<string, unknown>;

        return [
          obj.problem,
          obj.description,
          obj.recommendation,
          obj.details,
          obj.parameter,
          obj.test,
          obj.justification,
        ]
          .filter(
            (part): part is string =>
              typeof part === "string" && part.trim().length > 0
          )
          .join(" — ");
      }

      return "";
    })
    .filter(Boolean)
    .join("\n");
}

function buildClinicalContext(report: AIClinicalReportType): string {
  const differentials = Array.isArray(report.differentials)
    ? report.differentials
        .map((differential, index) => {
          return [
            `${index + 1}. ${differential?.name ?? "Unknown"}`,
            differential?.likelihood
              ? `Likelihood: ${differential.likelihood}`
              : "",
            differential?.reasoning?.length
              ? `Reasoning: ${differential.reasoning.join("; ")}`
              : "",
            differential?.supportingFindings?.length
              ? `Supporting findings: ${differential.supportingFindings.join(
                  "; "
                )}`
              : "",
            differential?.againstFindings?.length
              ? `Against findings: ${differential.againstFindings.join("; ")}`
              : "",
            differential?.classicFindings?.length
              ? `Classic findings: ${differential.classicFindings.join("; ")}`
              : "",
            differential?.strengtheningEvidence?.length
              ? `Strengthening evidence: ${differential.strengtheningEvidence.join(
                  "; "
                )}`
              : "",
            differential?.weakeningEvidence?.length
              ? `Weakening evidence: ${differential.weakeningEvidence.join(
                  "; "
                )}`
              : "",
            differential?.ruleOutFindings?.length
              ? `Rule-out findings: ${differential.ruleOutFindings.join("; ")}`
              : "",
          ]
            .filter(Boolean)
            .join("\n");
        })
        .join("\n\n")
    : "";

  const prognosis =
    typeof report.prognosis === "string"
      ? report.prognosis
      : [
          report.prognosis?.initialPrognosis,
          report.prognosis?.shortTerm,
          report.prognosis?.longTerm,
        ]
          .filter(Boolean)
          .join("; ");

  return `
The following is the current VetDx Assist AI Clinical Report.

IMPORTANT:
This context belongs ONLY to the CURRENT clinical case.
All follow-up questions must be answered specifically in relation to this case.

PATIENT SUMMARY
Species: ${report.patientSummary?.species ?? ""}
Breed: ${report.patientSummary?.breed ?? ""}
Age: ${report.patientSummary?.age ?? ""}
Sex: ${report.patientSummary?.sex ?? ""}
Weight: ${report.patientSummary?.weight ?? ""}
Summary: ${report.patientSummary?.summary ?? ""}

TRIAGE
Status: ${report.triage?.status ?? ""}
Reason: ${report.triage?.reason ?? ""}

PROBLEM LIST
${formatList(report.problemList)}

RANKED DIFFERENTIAL DIAGNOSES
${differentials}

RECOMMENDED DIAGNOSTICS
${formatList(report.recommendedDiagnostics)}

STABILIZATION
${formatList(report.stabilization)}

TREATMENT CONSIDERATIONS
${formatList(report.treatmentConsiderations)}

MONITORING
${formatList(report.monitoring)}

RED FLAGS / EMERGENCY CONCERNS
${formatList(report.redFlags)}

CLINICAL PEARLS
${
  Array.isArray(report.clinicalPearls)
    ? report.clinicalPearls.join("\n")
    : ""
}

PROGNOSIS
${prognosis}

Maintain the veterinary clinical-mentor and educational style.

Do not claim a definitive diagnosis.

If information is insufficient, clearly state what additional clinical findings would help narrow the differentials.

Answer follow-up questions specifically about THIS clinical case.
`;
}

export default function ClinicalFollowUpChat({
  report,
}: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] =
    useState<string | null>(null);
  const [chatUser, setChatUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const clinicalContext = useMemo(
    () => buildClinicalContext(report),
    [report]
  );

  /*
   * IMPORTANT:
   * Every time the clinical report changes,
   * start a completely fresh Dify conversation.
   */
  useEffect(() => {
    setChatUser(`vetdx-case-${crypto.randomUUID()}`);

    setMessages([]);
    setConversationId(null);
    setInput("");
    setError("");
    setLoading(false);
  }, [report]);

  const sendMessage = async () => {
    const question = input.trim();

    if (!question || loading || !chatUser) {
      return;
    }

    setError("");
    setLoading(true);

    const userMessage: ChatMessage = {
      role: "user",
      content: question,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setInput("");

    try {
      const firstMessage = !conversationId;

      /*
       * First message:
       * Send the complete clinical report context.
       *
       * Later messages:
       * Use the existing Dify conversation.
       */
      const query = firstMessage
        ? `${clinicalContext}

USER FOLLOW-UP QUESTION:
${question}`
        : question;

      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          user: chatUser,
          ...(conversationId
            ? {
                conversation_id: conversationId,
              }
            : {}),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message ||
            "Unable to get a response from the clinical assistant."
        );
      }

      const answer =
        result?.data?.answer ||
        "No response was returned.";

      /*
       * Save the conversation ID for this case only.
       */
      if (result?.data?.conversationId) {
        setConversationId(
          result.data.conversationId
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: answer,
        },
      ]);
    } catch (chatError: unknown) {
      console.error(
        "[VetDx Assist] Follow-up chat error:",
        chatError
      );

      setError(
        chatError instanceof Error
          ? chatError.message
          : "Unable to connect to the clinical assistant."
      );

      /*
       * Remove only the user message that failed.
       */
      setMessages((previous) =>
        previous.slice(0, -1)
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  };

  return (
    <section className="rounded-xl border border-cyan-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-white">
          💬 Discuss This Clinical Case
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Ask follow-up questions about the differential
          diagnoses, clinical reasoning, diagnostics,
          emergency concerns, stabilization, or other
          aspects of this report.
        </p>
      </div>

      {messages.length > 0 && (
        <div className="mb-5 max-h-[500px] space-y-4 overflow-y-auto rounded-lg bg-slate-950 p-4">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={
                message.role === "user"
                  ? "ml-auto max-w-[85%] rounded-lg bg-cyan-900/40 p-4"
                  : "mr-auto max-w-[90%] rounded-lg bg-slate-800 p-4"
              }
            >
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {message.role === "user"
                  ? "You"
                  : "VetDx Assist"}
              </div>

              <div className="whitespace-pre-wrap text-sm leading-6 text-slate-200">
                {message.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="mr-auto max-w-[90%] rounded-lg bg-slate-800 p-4">
              <div className="text-sm text-slate-400">
                VetDx Assist is thinking...
              </div>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="mb-4 rounded-lg border border-red-800 bg-red-950/40 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <textarea
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          onKeyDown={handleKeyDown}
          disabled={loading || !chatUser}
          rows={2}
          placeholder="Ask a follow-up question about this case..."
          className="min-h-[70px] flex-1 resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
        />

        <button
          type="button"
          onClick={() => void sendMessage()}
          disabled={
            loading ||
            !input.trim() ||
            !chatUser
          }
          className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 sm:self-end"
        >
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Educational clinical reasoning support only. Verify
        recommendations independently before clinical use.
      </p>
    </section>
  );
}