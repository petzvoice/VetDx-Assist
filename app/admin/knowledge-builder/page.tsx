"use client";

import { useState } from "react";
import { Species } from "@/lib/drugs/types";

export default function KnowledgeBuilderPage() {
  const [knowledgeType, setKnowledgeType] =
    useState("Disease");

  const [knowledgeName, setKnowledgeName] =
    useState("");

  const [species, setSpecies] =
    useState(Species.DOG);
  
  const [loading, setLoading] =
  useState(false);

const [generatedCard, setGeneratedCard] =
  useState<any>(null);
const generateKnowledge = async () => {
  if (!knowledgeName.trim()) {
    alert("Enter a knowledge name.");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(
      "/api/generate-knowledge-card",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: knowledgeType,
          name: knowledgeName,
          species,
        }),
      }
    );

    const result = await response.json();

    if (!result.success) {
      throw new Error(
        result.message ?? "Generation failed."
      );
    }

    setGeneratedCard(result.data);

  } catch (error: any) {

    alert(error.message);

  } finally {

    setLoading(false);

  }
};

  return (
    <div className="mx-auto max-w-4xl p-8">

      <h1 className="mb-8 text-3xl font-bold">
        VetDx Knowledge Builder
      </h1>

      <div className="space-y-6 rounded-xl border bg-white p-6">

        <div>
          <label className="mb-2 block font-medium">
            Knowledge Type
          </label>

          <select
            value={knowledgeType}
            onChange={(e) =>
              setKnowledgeType(e.target.value)
            }
            className="w-full rounded-lg border p-3"
          >
            <option>Disease</option>
            <option>Clinical Problem</option>
            <option>Procedure</option>
            <option>Emergency</option>
            <option>Toxicology</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Knowledge Name
          </label>

          <input
            type="text"
            value={knowledgeName}
            onChange={(e) =>
              setKnowledgeName(e.target.value)
            }
            placeholder="Example: Leptospirosis"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Species
          </label>

          <select
            value={species}
            onChange={(e) =>
              setSpecies(
                e.target.value as Species
              )
            }
            className="w-full rounded-lg border p-3"
          >
            <option value={Species.DOG}>
              Dog
            </option>

            <option value={Species.CAT}>
              Cat
            </option>

            <option value={Species.HORSE}>
              Horse
            </option>

            <option value={Species.CATTLE}>
              Cattle
            </option>

            <option value={Species.SHEEP}>
              Sheep
            </option>

            <option value={Species.GOAT}>
              Goat
            </option>
          </select>
        </div>

       <button
  onClick={generateKnowledge}
  disabled={loading}
  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
>
  {loading
    ? "Generating..."
    : "Generate"}
</button>
      </div>

      <div className="mt-8 rounded-xl border p-6">

  <h2 className="mb-6 text-2xl font-bold">
    Disease Preview
  </h2>

  <button
    onClick={() => {
      navigator.clipboard.writeText(
        JSON.stringify(
          generatedCard,
          null,
          2
        )
      );

      alert("Knowledge card copied");
    }}
    disabled={!generatedCard}
    className="mb-6 rounded-lg bg-gray-800 px-5 py-2 text-white disabled:opacity-50"
  >
    Copy JSON
  </button>

  {!generatedCard ? (

    <div className="rounded-lg bg-gray-100 p-6 text-gray-500">
      AI output will appear here.
    </div>

  ) : (

    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          {generatedCard.title}
        </h1>

        <p className="mt-2 text-gray-600">
          {generatedCard.description}
        </p>

      </div>

      <div>

        <h2 className="mb-2 text-xl font-semibold">
          Overview
        </h2>

        <p>
          {generatedCard.overview}
        </p>

      </div>

      <div>

        <h2 className="mb-2 text-xl font-semibold">
          Clinical Problems
        </h2>

        <ul className="list-disc pl-6">

          {generatedCard.clinicalProblems?.map(
            (problem: string) => (

              <li key={problem}>
                {problem}
              </li>

            )
          )}

        </ul>

      </div>

<div>

  <h2 className="mb-2 text-xl font-semibold">
    Clinical Workflow
  </h2>

  <ol className="list-decimal pl-6 space-y-2">

   {generatedCard.workflow?.length ? (

  generatedCard.workflow.map(
    (item: any) => (

      <li key={item.id}>

        <strong>
          {item.title}
        </strong>

        <p className="text-gray-700">
          {item.description}
        </p>

      </li>

    )
  )

) : (

  <li>
    Workflow not generated.
  </li>

)}

  </ol>

</div>


<div>

  <h2 className="mb-2 text-xl font-semibold">
    Drug Categories
  </h2>

  {generatedCard.drugCategories?.length ? (

    <div className="space-y-3">

      {generatedCard.drugCategories.map(
        (item: any) => (

          <div
            key={item.category}
            className="rounded-lg border p-3"
          >

            <h3 className="font-semibold">
              {item.category}
            </h3>

            <p>
              <strong>
                Indication:
              </strong>{" "}
              {item.indication || "Not specified"}
            </p>

            <p>
              <strong>
                Reason:
              </strong>{" "}
              {item.reason || "Not specified"}
            </p>

          </div>

        )
      )}

    </div>

  ) : (

    <p className="text-gray-500">
      Drug categories not generated.
    </p>

  )}

</div>

      <div>

        <h2 className="mb-2 text-xl font-semibold">
          Monitoring
        </h2>

        <ul className="list-disc pl-6">

          {generatedCard.monitoring?.map(
            (item: any) => (

              <li key={item.id}>
                {item.parameter}
              </li>

            )
          )}

        </ul>

      </div>

      <div>

        <h2 className="mb-2 text-xl font-semibold">
          Precautions
        </h2>

        <ul className="list-disc pl-6">

          {generatedCard.precautions?.map(
            (item: any) => (

              <li key={item.id}>
                <strong>
                  {item.title}
                </strong>

                {" — "}

                {item.description}

              </li>

            )
          )}

        </ul>

      </div>

      <div>

        <h2 className="mb-2 text-xl font-semibold">
          Prognosis
        </h2>

        <p>
          {generatedCard.prognosis}
        </p>

      </div>

    </div>

  )}

</div>

    </div>
  );
}