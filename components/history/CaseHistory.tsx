"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import SearchBar from "./SearchBar";
import CaseCard from "./CaseCard";

export default function CaseHistory() {
  const [cases, setCases] = useState<any[]>([]);
  const [filteredCases, setFilteredCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchCases();
  }, []);



  async function fetchCases() {

    setLoading(true);


    const { data, error } = await supabase
      .from("cases")
      .select("*")
      .order("created_at", {
        ascending: false,
      });



    if (error) {

      console.error(
        "Supabase Error:",
        error
      );

    } else {

      console.log(
        "Cases:",
        data
      );


      setCases(data || []);

      setFilteredCases(data || []);

    }


    setLoading(false);

  }



  function handleDelete(caseId:number) {

    const updatedCases =
      cases.filter(
        (item) =>
          item.id !== caseId
      );


    setCases(updatedCases);

    setFilteredCases(updatedCases);

  }



  function handleSearch(search: string) {

    if (!search.trim()) {

      setFilteredCases(cases);

      return;

    }


    const keyword =
      search.toLowerCase();



    const filtered =
      cases.filter((item) => {


        const historyText =
          typeof item.history === "string"
            ? item.history
            : JSON.stringify(
                item.history || {}
              );


        const patient =
          item.patient || {};

        const history =
          item.history || {};



        const species =
          String(
            patient.species || ""
          ).toLowerCase();



        const breed =
          String(
            patient.breed || ""
          ).toLowerCase();



        const complaint =
          String(
            history.chiefComplaint || ""
          ).toLowerCase();



        return (

          species.includes(keyword) ||

          breed.includes(keyword) ||

          complaint.includes(keyword) ||

          historyText
            .toLowerCase()
            .includes(keyword)

        );

      });



    setFilteredCases(filtered);

  }



  if (loading) {

    return (

      <div className="py-20 text-center text-slate-400">

        Loading previous cases...

      </div>

    );

  }



  return (

    <div className="space-y-8">


      <SearchBar
        onSearch={handleSearch}
      />



      {
        filteredCases.length === 0 ? (

          <div className="rounded-xl border border-dashed border-slate-700 py-16 text-center text-slate-400">

            No cases found.

          </div>


        ) : (


          filteredCases.map((item) => (

            <CaseCard

              key={item.id}

              data={item}

              onDelete={handleDelete}

            />

          ))


        )
      }


    </div>

  );

}