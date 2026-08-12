"use client";

import Card from "../ui/Card";
import Link from "next/link";
import { diseaseLibrary } from "@/lib/diseases/library";


type DifferentialDiagnosisCardProps = {
  rank: number;
  name: string;
  diseaseCardId?: string | null;
  likelihood?: string;

  reasons: string[];

  supportingFindings: string[];

  againstFindings: string[];

  classicFindings: string[];

  strengtheningEvidence: string[];

  weakeningEvidence: string[];

  ruleOutFindings: string[];
};




export default function DifferentialDiagnosisCard({

  rank,
  name,
  diseaseCardId,
  likelihood = "Moderate",
  reasons = [],

  supportingFindings = [],

  againstFindings = [],

  classicFindings = [],

  strengtheningEvidence = [],

  weakeningEvidence = [],

  ruleOutFindings = [],

}: DifferentialDiagnosisCardProps) {

const badgeColor = {
  "Very High": "bg-green-600",
  High: "bg-green-500",
  Moderate: "bg-yellow-500",
  Low: "bg-orange-500",
  "Very Low": "bg-red-500",
}[likelihood] ?? "bg-yellow-500";

const matchedDisease = diseaseCardId
  ? diseaseLibrary.find((d) => d.id === diseaseCardId)
  : null;

  return (

    <Card title={`🏆 Differential Diagnosis #${rank}`}>

      <div className="space-y-8">


        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            {matchedDisease ? (

  <Link
    href={`/diseases/${matchedDisease.id}`}
    className="text-2xl font-bold text-cyan-400 hover:underline"
  >
    {matchedDisease.name}
  </Link>

) : (

  <h2 className="text-2xl font-bold text-white">
    {name}
  </h2>

)}


            <p className="text-slate-400">
              AI Differential Diagnosis
            </p>

          </div>



          <div className="text-right">

            <p className="text-sm text-slate-400">
              Likelihood
            </p>


            <span
              className={`inline-block rounded-full px-4 py-2 font-bold text-white ${badgeColor}`}
            >
              {likelihood}
            </span>

          </div>

        </div>




        {/* Clinical reasoning */}

        <div>

          <h3 className="mb-3 text-lg font-semibold text-cyan-400">
            🧠 Clinical Reasoning
          </h3>


          {reasons.length > 0 ? (

            <ul className="space-y-2">

              {reasons.map((reason,index)=>(

                <li
                  key={index}
                  className="rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-slate-300"
                >
                  • {reason}
                </li>

              ))}

            </ul>

          ) : (

            <p className="text-slate-400">
              No clinical reasoning provided.
            </p>

          )}

        </div>





        {/* Supporting findings */}

        <div>

          <h3 className="mb-3 text-lg font-semibold text-green-400">
            ✅ Supporting Findings
          </h3>


          {supportingFindings.length > 0 ? (

            <ul className="space-y-2">

              {supportingFindings.map((finding,index)=>(

                <li
                  key={index}
                  className="rounded-lg border border-green-800 bg-green-900/20 p-3 text-slate-300"
                >
                  • {finding}
                </li>

              ))}

            </ul>

          ) : (

            <p className="text-slate-400">
              No supporting findings available.
            </p>

          )}

        </div>

{/* VetDx Classic Findings */}

{classicFindings.length > 0 && (

<div>

  <h3 className="mb-3 text-lg font-semibold text-sky-400">
    📚 Classic Disease Findings
  </h3>

  <ul className="space-y-2">

    {classicFindings.map((finding,index)=>(

      <li
        key={index}
        className="rounded-lg border border-sky-800 bg-sky-900/20 p-3 text-slate-300"
      >
        • {finding}
      </li>

    ))}

  </ul>

</div>

)}

{/* Findings that Strengthen Diagnosis */}

{strengtheningEvidence.length > 0 && (

<div>

  <h3 className="mb-3 text-lg font-semibold text-emerald-400">
    📈 Findings That Strengthen Diagnosis
  </h3>

  <ul className="space-y-2">

    {strengtheningEvidence.map((finding, index) => (

      <li
        key={index}
        className="rounded-lg border border-emerald-800 bg-emerald-900/20 p-3 text-slate-300"
      >
        • {finding}
      </li>

    ))}

  </ul>

</div>

)}

{/* Findings that Weaken Diagnosis */}

{weakeningEvidence.length > 0 && (

<div>

  <h3 className="mb-3 text-lg font-semibold text-amber-400">
    ⚠️ Findings That Weaken Diagnosis
  </h3>

  <ul className="space-y-2">

    {weakeningEvidence.map((finding, index) => (

      <li
        key={index}
        className="rounded-lg border border-amber-800 bg-amber-900/20 p-3 text-slate-300"
      >
        • {finding}
      </li>

    ))}

  </ul>

</div>

)}

{/* Findings Suggesting Another Disease */}

{ruleOutFindings.length > 0 && (

<div>

  <h3 className="mb-3 text-lg font-semibold text-rose-400">
    🚫 Findings Suggesting Another Disease
  </h3>

  <ul className="space-y-2">

    {ruleOutFindings.map((finding, index) => (

      <li
        key={index}
        className="rounded-lg border border-rose-800 bg-rose-900/20 p-3 text-slate-300"
      >
        • {finding}
      </li>

    ))}

  </ul>

</div>

)}



        {/* Against findings */}

        <div>

          <h3 className="mb-3 text-lg font-semibold text-red-400">
            ❌ Findings Against
          </h3>


          {againstFindings.length > 0 ? (

            <ul className="space-y-2">

              {againstFindings.map((finding,index)=>(

                <li
                  key={index}
                  className="rounded-lg border border-red-800 bg-red-900/20 p-3 text-slate-300"
                >
                  • {finding}
                </li>

              ))}

            </ul>

          ) : (

            <p className="text-slate-400">
              No conflicting findings identified.
            </p>

          )}

        </div>


      </div>

    </Card>

  );

}