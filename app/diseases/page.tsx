"use client";

import { useState } from "react";
import { diseaseLibrary } from "@/lib/diseases/library";
import DiseaseCard from "@/components/diseases/DiseaseCard";


export default function DiseasesPage() {

  const [search, setSearch] = useState("");

  const [selectedSpecies, setSelectedSpecies] = useState("All");


  const speciesOptions = [
    "All",
    ...Array.from(
      new Set(
        diseaseLibrary.flatMap(
          (disease) => disease.species
        )
      )
    ),
  ];



  const filteredDiseases = diseaseLibrary.filter(
    (disease) => {

      const term = search.toLowerCase();


      const matchesSearch =
        disease.name
          .toLowerCase()
          .includes(term)

        ||

        disease.synonyms?.some(
          (s) =>
            s.toLowerCase().includes(term)
        )

        ||

        disease.species.some(
          (s) =>
            s.toLowerCase().includes(term)
        );



      const matchesSpecies =
        selectedSpecies === "All"

        ||

        disease.species.includes(
          selectedSpecies as any
        );


      return (
        matchesSearch &&
        matchesSpecies
      );

    }
  );



  return (

    <main className="p-6">


      <h1 className="text-3xl font-bold mb-6">
        Disease Library
      </h1>


      <p className="mb-6 text-gray-600">
        Browse veterinary diseases available in VetDx Assist.
      </p>



      <div className="flex flex-col md:flex-row gap-4 mb-6">


        <input
          type="text"
          placeholder="Search diseases..."
          value={search}
          onChange={(e)=>
            setSearch(e.target.value)
          }
          className="border rounded-lg p-3 flex-1"
        />



        <select
          value={selectedSpecies}
          onChange={(e)=>
            setSelectedSpecies(e.target.value)
          }
          className="border rounded-lg p-3"
        >

          {
            speciesOptions.map(
              (species)=>(
                <option
                  key={species}
                  value={species}
                >
                  {species}
                </option>
              )
            )
          }

        </select>


      </div>



      <p className="mb-4 text-sm text-gray-500">
        Showing {filteredDiseases.length} diseases
      </p>



      <div className="grid gap-4 md:grid-cols-3">


        {
          filteredDiseases.map(
            (disease)=>(
              
              <DiseaseCard
                key={disease.id}
                disease={disease}
              />

            )
          )
        }


      </div>


    </main>

  );
}