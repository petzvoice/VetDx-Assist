import { getDrugById } from "@/lib/drugs/repository";

import DrugHeader from "@/components/drugs/details/DrugHeader";
import DrugDisclaimer from "@/components/drugs/details/DrugDisclaimer";
import QuickFacts from "@/components/drugs/details/QuickFacts";
import Formulations from "@/components/drugs/details/Formulations";
import DoseReferences from "@/components/drugs/details/DoseReferences";
import ClinicalInfo from "@/components/drugs/details/ClinicalInfo";
import ClinicalPearls from "@/components/drugs/details/ClinicalPearls";
import ReproductionInfo from "@/components/drugs/details/ReproductionInfo";
import OverdoseInfo from "@/components/drugs/details/OverdoseInfo";
import SafetyInfo from "@/components/drugs/details/SafetyInfo";
import References from "@/components/drugs/details/References";
import DoseCalculator from "@/components/drugs/DoseCalculator";


interface DrugDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}


export default async function DrugDetailsPage({
  params,
}: DrugDetailsPageProps) {


  const { id } = await params;


  const drug = getDrugById(id);



  if (!drug) {

    return (
      <main className="min-h-screen bg-black px-6 py-10">

        <div className="text-white">
          Drug not found.
        </div>

      </main>
    );

  }



  return (

    <main className="min-h-screen bg-black px-6 py-10">


      <div className="mx-auto max-w-5xl">


        <DrugHeader drug={drug} />

        <DrugDisclaimer />


        <QuickFacts drug={drug} />


        <Formulations drug={drug} />


        <DoseReferences drug={drug} />


        <ClinicalInfo drug={drug} />


        <ClinicalPearls drug={drug} />

        <ReproductionInfo drug={drug} />

        <OverdoseInfo drug={drug} />


        <SafetyInfo drug={drug} />


        <References drug={drug} />

        <DoseCalculator drug={drug} />


      </div>


    </main>

  );

}