import { diseaseLibrary } from "@/lib/diseases/library";
import { relatedDiseases } from "@/lib/diseases/related";
import { getDrugById } from "@/lib/drugs/repository";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DiseaseDetailsPage({
  params,
}: PageProps) {

  const { id } = await params;


  const disease = diseaseLibrary.find(
    (d) => d.id === id
  );


  if (!disease) {

    return (
      <main className="p-6">

        <h1 className="text-2xl font-bold">
          Disease Not Found
        </h1>

        <p className="mt-2 text-gray-600">
          Requested ID: {id}
        </p>

      </main>
    );

  }


  const data = disease.disease;


  return (

    <main className="p-6 max-w-5xl mx-auto">


      {/* Header */}

      <h1 className="text-3xl font-bold">
        {disease.name}
      </h1>


      <div className="mt-3 text-gray-600 space-y-1">

  <p>
    Species: {disease.species.join(", ")}
  </p>

  {disease.category !== "Uncategorized" && (
    <p>
      Category: {disease.category}
    </p>
  )}

  {disease.system !== "General" && (
    <p>
      System: {disease.system}
    </p>
  )}

</div>


      {/* Synonyms */}

      {data.synonyms && (

        <section className="mt-6 border rounded-lg p-5">

          <h2 className="text-xl font-semibold mb-3">
            Synonyms
          </h2>


          <p>
            {data.synonyms.join(", ")}
          </p>

        </section>

      )}



      {/* Overview */}

      <section className="mt-6 border rounded-lg p-5">

        <h2 className="text-xl font-semibold mb-3">
          Overview
        </h2>

        <p>
          {data.overview}
        </p>

      </section>




      {/* Clinical Problems */}

      <section className="mt-6 border rounded-lg p-5">

        <h2 className="text-xl font-semibold mb-3">
          Clinical Problems
        </h2>


        <ul className="list-disc ml-6">

          {data.clinicalProblems.map(
            (problem) => (

              <li key={problem}>
                {problem}
              </li>

            )
          )}

        </ul>

      </section>





      {/* Workflow */}

      <section className="mt-6 border rounded-lg p-5">

        <h2 className="text-xl font-semibold mb-3">
          Clinical Workflow
        </h2>


        {data.workflow.map((step) => (

          <div
            key={step.id}
            className="mb-4"
          >

            <h3 className="font-semibold">
              {step.step}. {step.title}
            </h3>


            <p className="text-gray-700">
              {step.description}
            </p>


          </div>

        ))}

      </section>





      {/* Diagnostics */}

      <section className="mt-6 border rounded-lg p-5">

        <h2 className="text-xl font-semibold mb-3">
          Diagnostics
        </h2>


        {data.diagnostics.map((test) => (

          <div
            key={test.id}
            className="mb-4"
          >

            <h3 className="font-semibold">
              {test.name}
            </h3>


            <p>
              Priority: {test.priority}
            </p>


            <p className="text-gray-700">
              {test.reason}
            </p>


          </div>

        ))}

      </section>





      {/* Drug Categories */}

      <section className="mt-6 border rounded-lg p-5">

        <h2 className="text-xl font-semibold mb-3">
          Treatment Approach
        </h2>


        {data.drugCategories.map((drug) => (

          <div
            key={drug.category}
            className="mb-3"
          >

            <h3 className="font-semibold">
              {drug.category}
            </h3>

            <p>
              Indication: {drug.indication}
            </p>

            <p>
              {drug.reason}
            </p>


          </div>

        ))}

      </section>





      {/* Recommended Drugs */}

      {data.recommendedDrugs && (

        <section className="mt-6 border rounded-lg p-5">

          <h2 className="text-xl font-semibold mb-3">
            Recommended Drugs
          </h2>


         {data.recommendedDrugs.map((drug) => {

  const drugInfo = getDrugById(drug.drugId);

  return (

    <div
      key={drug.drugId}
      className="mb-4 border rounded-lg p-3"
    >

      <a
        href={`/drug-index/${drug.drugId}`}
        className="text-lg font-semibold text-blue-600 hover:underline"
      >
        {drugInfo?.genericName ?? drug.drugId}
      </a>

      <p className="text-sm text-gray-600 mt-1">
        {drug.category} • {drug.priority}
      </p>

    </div>

  );

})}


        </section>

      )}
      {/* Monitoring */}

      <section className="mt-6 border rounded-lg p-5">

        <h2 className="text-xl font-semibold mb-3">
          Monitoring
        </h2>


        {data.monitoring.map((item) => (

          <div
            key={item.id}
            className="mb-4"
          >

            <h3 className="font-semibold">
              {item.parameter}
            </h3>

            <p>
              Frequency: {item.frequency}
            </p>

            <p className="text-gray-700">
              {item.reason}
            </p>

          </div>

        ))}

      </section>





      {/* Precautions */}

      <section className="mt-6 border rounded-lg p-5">

        <h2 className="text-xl font-semibold mb-3">
          Precautions
        </h2>


        {data.precautions.map((item) => (

          <div
            key={item.id}
            className="mb-4"
          >

            <h3 className="font-semibold">
              {item.title}
            </h3>


            <p className="text-gray-700">
              {item.description}
            </p>


          </div>

        ))}

      </section>

                  {/* Clinical Evidence */}

      {data.clinicalEvidence && (

        <section className="mt-6 border rounded-lg p-5">

          <h2 className="text-xl font-semibold mb-4">
            Clinical Evidence
          </h2>


          <div className="space-y-5">


            {data.clinicalEvidence.history &&
             data.clinicalEvidence.history.length > 0 && (

              <div>

                <h3 className="font-semibold">
                  History Findings
                </h3>


                <ul className="list-disc ml-6 mt-2">

                  {data.clinicalEvidence.history.map(
                    (item) => (

                      <li key={item.finding}>
                        {item.finding}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )}




            {data.clinicalEvidence.clinicalSigns &&
             data.clinicalEvidence.clinicalSigns.length > 0 && (

              <div>

                <h3 className="font-semibold">
                  Clinical Signs
                </h3>


                <ul className="list-disc ml-6 mt-2">

                  {data.clinicalEvidence.clinicalSigns.map(
                    (item) => (

                      <li key={item.finding}>
                        {item.finding}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )}




            {data.clinicalEvidence.biochemistry &&
             data.clinicalEvidence.biochemistry.length > 0 && (

              <div>

                <h3 className="font-semibold">
                  Biochemistry Findings
                </h3>


                <ul className="list-disc ml-6 mt-2">

                  {data.clinicalEvidence.biochemistry.map(
                    (item) => (

                      <li key={item.finding}>
                        {item.finding}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )}




            {data.clinicalEvidence.urinalysis &&
             data.clinicalEvidence.urinalysis.length > 0 && (

              <div>

                <h3 className="font-semibold">
                  Urinalysis Findings
                </h3>


                <ul className="list-disc ml-6 mt-2">

                  {data.clinicalEvidence.urinalysis.map(
                    (item) => (

                      <li key={item.finding}>
                        {item.finding}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )}




            {data.clinicalEvidence.supports &&
             data.clinicalEvidence.supports.length > 0 && (

              <div>

                <h3 className="font-semibold text-green-700">
                  Findings Supporting Diagnosis
                </h3>


                <ul className="list-disc ml-6 mt-2">

                  {data.clinicalEvidence.supports.map(
                    (item) => (

                      <li key={item.finding}>
                        {item.finding}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )}




            {data.clinicalEvidence.against &&
             data.clinicalEvidence.against.length > 0 && (

              <div>

                <h3 className="font-semibold text-red-700">
                  Findings Against Diagnosis
                </h3>


                <ul className="list-disc ml-6 mt-2">

                  {data.clinicalEvidence.against.map(
                    (item) => (

                      <li key={item.finding}>
                        {item.finding}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )}



          </div>


        </section>

      )}

      {/* Prognosis */}

      <section className="mt-6 border rounded-lg p-5">

        <h2 className="text-xl font-semibold mb-3">
          Prognosis
        </h2>


        <p>
          {data.prognosis}
        </p>


      </section>

      {/* Related Diseases */}

      {relatedDiseases[disease.id] &&
       relatedDiseases[disease.id].length > 0 && (

        <section className="mt-6 border rounded-lg p-5">

          <h2 className="text-xl font-semibold mb-3">
            Related Diseases
          </h2>


          <ul className="list-disc ml-6">

            {relatedDiseases[disease.id].map((id) => {

              const related = diseaseLibrary.find(
                (d) => d.id === id
              );


              return (

                <li key={id}>

                  {related ? (

                    <a
                      href={`/diseases/${related.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {related.name}
                    </a>

                  ) : (

                    id

                  )}

                </li>

              );

            })}

          </ul>


        </section>

        

      )}
      {/* Differential Diagnosis */}

      {data.ruleOutFindings.length > 0 && (

        <section className="mt-6 border rounded-lg p-5">

          <h2 className="text-xl font-semibold mb-3">
            Differential Diagnosis
          </h2>

          <ul className="list-disc ml-6">

            {data.ruleOutFindings.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </section>

      )}
    </main>

  );

}