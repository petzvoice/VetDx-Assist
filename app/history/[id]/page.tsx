import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};


function getLikelihood(value: any) {
  if (!value) return "Not available";

  if (value >= 85) return "Very High";
  if (value >= 70) return "High";
  if (value >= 50) return "Moderate";
  if (value >= 30) return "Low";

  return "Unlikely";
}


function show(value:any){
  if(!value) return null;

  if(Array.isArray(value)){
    if(value.length===0) return null;
    return value.join(", ");
  }

  if(typeof value==="object"){
    return null;
  }

  return value;
}



export default async function CaseReportPage({params}:Props){

  const {id}=await params;


  const supabase=createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );


  const {data,error}=await supabase
    .from("cases")
    .select("*")
    .eq("id",id)
    .single();



  if(error || !data){
    notFound();
  }



  const patient=data.patient || {};
  const history=data.history || {};
  const exam=data.physical_exam || {};
  const report=data.ai_response || {};



return (

<main className="min-h-screen bg-slate-950 px-6 py-10">

<div className="mx-auto max-w-5xl">


<div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">


<div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-8">

<h1 className="text-4xl font-bold text-white">
🩺 AI Clinical Report
</h1>

<p className="mt-2 text-cyan-100">
Case #{data.id}
</p>

</div>



<div className="space-y-8 p-8">



<section>

<h2 className="text-xl font-bold text-cyan-400">
Patient Information
</h2>


<div className="mt-3 rounded-xl bg-slate-800 p-5 text-slate-300">

<p><b>Species:</b> {patient.species || "Unknown"}</p>
<p><b>Breed:</b> {patient.breed || "Not recorded"}</p>
<p><b>Age:</b> {patient.age || "Unknown"}</p>
<p><b>Sex:</b> {patient.sex || "Unknown"}</p>
<p><b>Weight:</b> {patient.weight || "Unknown"}</p>

</div>

</section>





<section>

<h2 className="text-xl font-bold text-cyan-400">
Chief Complaint
</h2>

<div className="mt-3 rounded-xl bg-slate-800 p-5 text-slate-300">

{history.chiefComplaint || "Not provided"}

</div>

</section>






<section>

<h2 className="text-xl font-bold text-cyan-400">
Clinical History
</h2>


<div className="mt-3 space-y-3 rounded-xl bg-slate-800 p-5 text-slate-300">


{history.duration && (
<p>
<b>Duration:</b> {history.duration}
</p>
)}


{history.illnessHistory && (
<p>
<b>Illness History:</b> {history.illnessHistory}
</p>
)}


{history.previousTreatment && (
<p>
<b>Previous Treatment:</b> {history.previousTreatment}
</p>
)}


</div>


</section>







<section>

<h2 className="text-xl font-bold text-cyan-400">
Physical Examination
</h2>


<div className="mt-3 rounded-xl bg-slate-800 p-5 text-slate-300">


{
Object.entries(exam).map(([key,value])=>{

const text=show(value);

if(!text) return null;


return (

<p key={key} className="mb-2">

<b>{key.replaceAll("_"," ")}:</b>{" "}
{text}

</p>

);


})
}


</div>


</section>








<section>


<h2 className="text-xl font-bold text-cyan-400">
AI Clinical Assessment
</h2>


<div className="mt-3 rounded-xl bg-slate-800 p-6 text-slate-300">


{report.clientSummary && (

<div>

<h3 className="font-bold text-white">
Summary
</h3>

<p className="mt-3">
{report.clientSummary}
</p>

</div>

)}





{Array.isArray(report.differentials) && (

<div className="mt-6">


<h3 className="font-bold text-white">
Top Differentials
</h3>


<div className="mt-3 space-y-3">


{
report.differentials
.slice(0,3)
.map((item:any,index:number)=>(

<div
key={index}
className="rounded-xl bg-slate-900 p-4"
>


<p className="font-semibold text-white">

{index+1}. {item.name}

</p>


<p className="mt-2 text-cyan-400">

Clinical Likelihood:{" "}
{getLikelihood(item.confidence)}

</p>


{item.supportingFindings?.length>0 && (

<p className="mt-2 text-sm text-slate-400">

Supporting finding:{" "}
{item.supportingFindings[0]}

</p>

)}


</div>


))
}


</div>


</div>

)}



</div>


</section>



</div>


</div>


</div>


</main>

);


}