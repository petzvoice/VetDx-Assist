import Navbar from "../../components/Navbar";
import DiagnosisForm from "../../components/diagnosis/DiagnosisForm";

export default function DiagnosisPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100 p-6">
        <h1 className="mb-8 text-center text-4xl font-bold text-slate-800">
          New Veterinary Case
        </h1>

        <DiagnosisForm />
      </main>
    </>
  );
}