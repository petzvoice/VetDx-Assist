"use client";

import Link from "next/link";
import { useState } from "react";

import { deleteCase } from "@/lib/deleteCase";


type Props = {
  data: any;
  onDelete: (id: number) => void;
};


function getLikelihood(value: any) {

  if (!value) return "Not available";

  if (value >= 85) return "Very High";
  if (value >= 70) return "High";
  if (value >= 50) return "Moderate";
  if (value >= 30) return "Low";

  return "Unlikely";
}



export default function CaseCard({
  data,
  onDelete,
}: Props) {


  const [deleting, setDeleting] =
    useState(false);



  const patient =
    data.patient || {};

  const history =
    data.history || {};

  const aiReport =
    data.ai_response || {};




  async function handleDelete() {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this saved case?"
      );


    if (!confirmed) return;


    try {

      setDeleting(true);


      await deleteCase(
        data.id
      );


      onDelete(
        data.id
      );


    } catch (error: any) {

      alert(
        error.message ||
        "Unable to delete case."
      );


    } finally {

      setDeleting(false);

    }

  }





  return (

    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition hover:border-cyan-500">


      {/* Header */}

      <div className="flex items-start justify-between">


        <div>

          <h2 className="text-2xl font-bold uppercase text-white">

            🐾 {patient.species || "Unknown"}

          </h2>


          <p className="mt-1 text-slate-400">

            Breed: {patient.breed || "Not recorded"}

          </p>


          <p className="mt-2 text-sm text-slate-500">

            Age: {patient.age || "Unknown"}

            {" | "}

            Sex: {patient.sex || "Unknown"}

          </p>


        </div>



        <div className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300">

          {new Date(
            data.created_at
          ).toLocaleDateString()}

        </div>


      </div>





      {/* Chief Complaint */}

      <div className="mt-6">

        <h3 className="font-semibold text-cyan-400">
          Chief Complaint
        </h3>


        <p className="mt-2 text-slate-300">

          {history.chiefComplaint ||
          "Not provided"}

        </p>


      </div>





      {/* Clinical History */}

      <div className="mt-6">

        <h3 className="font-semibold text-cyan-400">
          Clinical History
        </h3>


        <div className="mt-3 rounded-xl bg-slate-800 p-4 text-sm text-slate-300">


          {history.duration && (

            <p>
              <b>Duration:</b>{" "}
              {history.duration}
            </p>

          )}



          {history.illnessHistory && (

            <p className="mt-2">

              <b>Illness History:</b>{" "}
              {history.illnessHistory}

            </p>

          )}


        </div>


      </div>





      {/* AI Summary */}

      <div className="mt-6">


        <h3 className="font-semibold text-cyan-400">
          AI Clinical Summary
        </h3>


        <div className="mt-3 rounded-xl bg-slate-800 p-4">


          <p className="whitespace-pre-wrap text-slate-300">

            {aiReport.clientSummary ||
            aiReport.summary ||
            "No AI summary available."}

          </p>


        </div>


      </div>





      {/* Differentials */}

      {Array.isArray(aiReport.differentials) &&
        aiReport.differentials.length > 0 && (

        <div className="mt-6">


          <h3 className="font-semibold text-cyan-400">

            Top Differentials

          </h3>



          <div className="mt-3 space-y-3">


            {aiReport.differentials
              .slice(0,3)
              .map(
                (
                  item:any,
                  index:number
                ) => (

                <div
                  key={index}
                  className="rounded-xl bg-slate-800 p-4"
                >


                  <p className="font-medium text-white">

                    {index + 1}.{" "}

                    {item.name ||
                    "Unnamed differential"}

                  </p>



                  <p className="mt-2 text-sm text-cyan-400">

                    Clinical Likelihood:{" "}

                    {getLikelihood(
                      item.confidence
                    )}

                  </p>



                  {item.supportingFindings &&
                    item.supportingFindings.length > 0 && (

                    <p className="mt-2 text-sm text-slate-400">

                      Supporting finding:{" "}

                      {item.supportingFindings[0]}

                    </p>

                  )}


                </div>

              ))}


          </div>


        </div>

      )}





      {/* Footer */}

      <div className="mt-8 flex items-center justify-between gap-4">


        <span className="rounded-full bg-cyan-900/40 px-3 py-1 text-sm text-cyan-300">

          Saved Case

        </span>




        <div className="flex gap-3">


          <Link

            href={`/history/${data.id}`}

            className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"

          >

            View Full Report →

          </Link>



          <button

            onClick={handleDelete}

            disabled={deleting}

            className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"

          >

            {deleting
              ? "Deleting..."
              : "🗑 Delete"}

          </button>


        </div>


      </div>


    </div>

  );

}