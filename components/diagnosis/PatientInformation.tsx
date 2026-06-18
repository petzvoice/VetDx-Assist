export default function PatientInformation() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Patient Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Species
          </label>

          <select className="w-full rounded-lg border p-3">
            <option>Dog</option>
            <option>Cat</option>
            <option>Horse</option>
            <option>Cattle</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Breed
          </label>

          <input
            type="text"
            placeholder="Enter breed"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Age
          </label>

          <input
            type="text"
            placeholder="e.g. 5 years"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Sex
          </label>

          <select className="w-full rounded-lg border p-3">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Weight (kg)
          </label>

          <input
            type="number"
            placeholder="Weight"
            className="w-full rounded-lg border p-3"
          />
        </div>
      </div>
    </div>
  );
}