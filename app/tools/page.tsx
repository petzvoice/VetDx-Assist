import Link from "next/link";


const tools = [
  {
    title: "💧 Fluid Therapy Planner",
    description:
      "Calculate fluid deficit, maintenance requirements, total fluids and hourly rates with clinical interpretation.",
    href: "/tools/fluid",
    status: "Available",
  },

  {
    title: "💊 Drug Dose Calculator",
    description:
      "Calculate veterinary drug doses, volumes and administration details.",
    href: "#",
    status: "Coming Soon",
  },

  {
  title: "💉 CRI Planner",
  description:
    "Calculate infusion pump rates for continuous rate infusions using user-entered drug concentration and prescribed dose.",
  href: "/tools/cri",
  status: "Available",
},

 {
  title: "🩸 Blood Transfusion Planner",
  description:
    "Estimate transfusion volume using patient and donor PCV parameters.",
  href: "/tools/transfusion",
  status: "Available",
},

  {
    title: "⚡ Emergency Calculator",
    description:
      "Quick reference calculations for emergency and critical care situations.",
    href: "#",
    status: "Coming Soon",
  },
];


export default function ClinicalToolkitPage() {


  return (

    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">


      <div className="mx-auto max-w-6xl">


        <h1 className="text-4xl font-bold text-cyan-400">
          🩺 VetDx Clinical Toolkit
        </h1>


        <p className="mt-4 max-w-3xl text-lg text-slate-400">

          Fast, reliable veterinary clinical calculators
          designed to support students, interns and clinicians
          during case management.

        </p>





        <div className="mt-10 grid gap-6 md:grid-cols-2">


          {tools.map((tool, index) => (

            <div

              key={index}

              className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-cyan-500"

            >


              <div className="flex items-start justify-between">


                <h2 className="text-xl font-bold text-white">

                  {tool.title}

                </h2>


                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    tool.status === "Available"
                      ? "bg-green-900 text-green-300"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >

                  {tool.status}

                </span>


              </div>




              <p className="mt-4 text-slate-400">

                {tool.description}

              </p>





              {tool.status === "Available" ? (

                <Link

                  href={tool.href}

                  className="mt-6 inline-block rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"

                >

                  Open Tool →

                </Link>

              ) : (

                <button

                  disabled

                  className="mt-6 rounded-xl bg-slate-800 px-5 py-3 text-slate-500"

                >

                  Coming Soon

                </button>

              )}



            </div>


          ))}


        </div>





      </div>


    </main>

  );

}
