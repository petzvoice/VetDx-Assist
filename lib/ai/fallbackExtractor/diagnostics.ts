export function extractDiagnostics(notes: string) {
  const lower = notes.toLowerCase();
const diagnostics = {
  cbc: "",
  biochemistry: "",
  urinalysis: "",
  imaging: "",
  otherTests: "",
};

if (
  lower.includes("cbc") ||
  lower.includes("complete blood count")
) {
  diagnostics.cbc = "Performed";
}

if (
  lower.includes("biochemistry") ||
  lower.includes("serum chemistry") ||
  lower.includes("blood chemistry")
) {
  diagnostics.biochemistry = "Performed";
}

if (
  lower.includes("urinalysis") ||
  lower.includes("urine analysis")
) {
  diagnostics.urinalysis = "Performed";
}

const imaging = new Set<string>();

if (
  lower.includes("x-ray") ||
  lower.includes("radiograph") ||
  lower.includes("radiography")
) {
  imaging.add("Radiography");
}

if (lower.includes("ultrasound")) {
  imaging.add("Ultrasound");
}

if (
  /\bct\b/i.test(notes) ||
  lower.includes("computed tomography")
) {
  imaging.add("CT");
}

if (lower.includes("mri")) {
  imaging.add("MRI");
}

diagnostics.imaging = Array.from(imaging).join(", ");

const otherTests = new Set<string>();

if (lower.includes("snap")) {
  otherTests.add("SNAP Test");
}

if (lower.includes("pcr")) {
  otherTests.add("PCR");
}

if (lower.includes("culture")) {
  otherTests.add("Culture");
}

if (lower.includes("cytology")) {
  otherTests.add("Cytology");
}

if (lower.includes("histopathology")) {
  otherTests.add("Histopathology");
}

diagnostics.otherTests = Array.from(otherTests).join(", ");
return diagnostics;
}
