"use client";

import type { AIClinicalReport as AIClinicalReportType } from "@/types/ai";

import ReportHeader from "./ReportHeader";
import PatientSummaryCard from "./PatientSummaryCard";
import ProblemListCard from "./ProblemListCard";
import DifferentialDiagnosisCard from "./DifferentialDiagnosisCard";
import RecommendedDiagnosticsCard from "./RecommendedDiagnosticsCard";
import EmergencyFlagsCard from "./EmergencyFlagsCard";
import PrognosisCard from "./PrognosisCard";
import ClientSummaryCard from "./ClientSummaryCard";

type Props = {
  report: AIClinicalReportType;
};

export default function AIClinicalReport({
  report,
}: Props) {
  return (
    <div className="space-y-8">

      <ReportHeader
        patientName=""
        species={report.patientSummary?.species ?? ""}
      />

      <PatientSummaryCard
        species={report.patientSummary?.species ?? ""}
        breed={report.patientSummary?.breed ?? ""}
        age={report.patientSummary?.age ?? ""}
        sex={report.patientSummary?.sex ?? ""}
        weight={report.patientSummary?.weight ?? ""}
        summary={report.patientSummary?.summary ?? ""}
      />

      <ProblemListCard
        problems={
          Array.isArray(report.problemList)
            ? report.problemList
            : []
        }
      />

      {Array.isArray(report.differentials) &&
  report.differentials.map(
    (disease, index) => (
      <DifferentialDiagnosisCard
  key={index}
  rank={index + 1}
  name={disease?.name ?? "Unknown"}
  likelihood={disease?.likelihood ?? "Moderate"}

  reasons={
    Array.isArray(disease?.reasoning)
      ? disease.reasoning
      : []
  }

  supportingFindings={
    Array.isArray(disease?.supportingFindings)
      ? disease.supportingFindings
      : []
  }

  againstFindings={
    Array.isArray(disease?.againstFindings)
      ? disease.againstFindings
      : []
  }

  classicFindings={
    Array.isArray(disease?.classicFindings)
      ? disease.classicFindings
      : []
  }

  strengtheningEvidence={
    Array.isArray(disease?.strengtheningEvidence)
      ? disease.strengtheningEvidence
      : []
  }

  weakeningEvidence={
    Array.isArray(disease?.weakeningEvidence)
      ? disease.weakeningEvidence
      : []
  }

  ruleOutFindings={
    Array.isArray(disease?.ruleOutFindings)
      ? disease.ruleOutFindings
      : []
  }
/>
    )
  )}

      <RecommendedDiagnosticsCard
        diagnostics={
          Array.isArray(
            report.recommendedDiagnostics
          )
            ? report.recommendedDiagnostics
            : []
        }
      />

      <EmergencyFlagsCard
        flags={
          Array.isArray(report.redFlags)
            ? report.redFlags
            : []
        }
      />

      
      <PrognosisCard
        prognosis={
          report.prognosis ?? {
            shortTerm: "",
            longTerm: "",
          }
        }
      />

      <ClientSummaryCard
        summary={
          report.clientSummary ?? ""
        }
      />
       {/* ======================================================
          NOTES
          Static UI information — NOT AI GENERATED
          ====================================================== */}

      <section className="rounded-xl border border-blue-200 bg-blue-50 p-5">
        <h2 className="text-lg font-semibold text-blue-900">
          📝 Notes
        </h2>

        <p className="mt-2 text-sm leading-6 text-blue-800">
          The differential diagnoses above provide clinical
          considerations based on the information documented
          in this case.
        </p>

        <p className="mt-2 text-sm leading-6 text-blue-800">
          Click the relevant disease cards when available to
          review more detailed information about the condition,
          including clinical features, diagnostics, treatment,
          and other disease-specific information.
        </p>
      </section>

      {/* ======================================================
          DISCLAIMER
          Static UI information — NOT AI GENERATED
          ====================================================== */}

      <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-lg font-semibold text-amber-900">
          ⚠️ Clinical Decision-Support Disclaimer
        </h2>

        <p className="mt-2 text-sm leading-6 text-amber-800">
          VetDx Assist is an educational and clinical
          decision-support tool. The information provided by
          this report is intended to support veterinary
          clinical reasoning and does not replace professional
          veterinary judgment, physical examination, diagnostic
          testing, or clinical decision-making.
        </p>

        <p className="mt-2 text-sm leading-6 text-amber-800">
          AI-generated assessments may contain errors or
          omissions. All findings, differential diagnoses,
          diagnostic recommendations, and clinical decisions
          should be independently evaluated by a qualified
          veterinary professional.
        </p>
      </section>

    </div>
  );
}

    