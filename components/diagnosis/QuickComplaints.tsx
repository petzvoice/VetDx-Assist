import Chip from "../ui/Chip";

const complaints = [
  "Vomiting",
  "Diarrhea",
  "Anorexia",
  "Weight Loss",
  "Cough",
  "Dyspnea",
  "Lameness",
  "Seizure",
  "PU/PD",
  "Fever",
];

export default function QuickComplaints() {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-slate-300">
        Common Presenting Complaints
      </h3>

      <div className="flex flex-wrap gap-3">
        {complaints.map((complaint) => (
          <Chip
            key={complaint}
            label={complaint}
          />
        ))}
      </div>
    </div>
  );
}