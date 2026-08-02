import { extractPatient } from "../ai/fallbackExtractor/patient";
import { extractHistory } from "../ai/fallbackExtractor/history";
import { extractClinicalSigns } from "../ai/fallbackExtractor/clinicalSigns";
import { extractPhysicalExam } from "../ai/fallbackExtractor/physicalExam";
import { extractDiagnostics } from "../ai/fallbackExtractor/diagnostics";

export function generateFallbackExtraction(notes: string) {

  const patient = extractPatient(notes);

  const history = extractHistory(notes);

  const clinicalSigns = extractClinicalSigns(notes);

  const physicalExam = extractPhysicalExam(notes, clinicalSigns);

  const diagnostics = extractDiagnostics(notes);

  return {
    patient,
    history,
    clinicalSigns,
    physicalExam,
    diagnostics,
  };
}