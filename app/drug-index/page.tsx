"use client";

import { useState } from "react";

import DrugList from "@/components/drugs/DrugList";
import DrugSearchBar from "@/components/drugs/DrugSearchBar";
import DrugCategoryFilter from "@/components/drugs/DrugCategoryFilter";

import { getAllDrugs } from "@/lib/drugs/repository";
import { searchDrugs } from "@/lib/drugs/search";


export default function DrugIndexPage() {


  const [searchQuery, setSearchQuery] = useState("");

  const [category, setCategory] = useState("All");



  const allDrugs = getAllDrugs();



  let filteredDrugs = searchQuery
    ? searchDrugs(allDrugs, searchQuery)
    : allDrugs;



  if (category !== "All") {

    filteredDrugs = filteredDrugs.filter(
      (drug) =>
        drug.quickFacts.category.toLowerCase() ===
        category.toLowerCase()
    );

  }



  return (

    <main className="min-h-screen bg-black px-6 py-10">


      <div className="mx-auto max-w-7xl">


        <div className="mb-8">

          <h1 className="text-3xl font-bold text-white">
            💊 Drug Index
          </h1>


          <p className="mt-2 text-gray-400">
            Veterinary drug reference database with clinical information, formulations, safety, and dose references.
          </p>


        </div>



        <DrugSearchBar
          value={searchQuery}
          onChange={setSearchQuery}
        />



        <DrugCategoryFilter
          value={category}
          onChange={setCategory}
        />



        <div className="mt-8">

          <DrugList
            drugs={filteredDrugs}
          />

        </div>


      </div>


    </main>

  );

}