"use client";

import type { AIClinicalReport as AIClinicalReportType } from "@/types/ai";

import ReportHeader from "./ReportHeader";
import PatientSummaryCard from "./PatientSummaryCard";
import ProblemListCard from "./ProblemListCard";
import DifferentialDiagnosisCard from "./DifferentialDiagnosisCard";
import RecommendedDiagnosticsCard from "./RecommendedDiagnosticsCard";
import EmergencyFlagsCard from "./EmergencyFlagsCard";
import StabilizationCard from "./StabilizationCard";
import TreatmentConsiderationsCard from "./TreatmentConsiderationsCard";
import MonitoringCard from "./MonitoringCard";
import PrognosisCard from "./PrognosisCard";
import ClientSummaryCard from "./ClientSummaryCard";

type Props = {
  report: AIClinicalReportType;
};

export default function AIClinicalReport({
  report,
}: Props) {
  return (
    <div className="space-y-8">

      <ReportHeader
        patientName=""
        species={report.patientSummary.species}
      />

      <PatientSummaryCard
        species={report.patientSummary.species}
        breed={report.patientSummary.breed}
        age={report.patientSummary.age}
        sex={report.patientSummary.sex}
        weight={report.patientSummary.weight}
        summary={report.patientSummary.summary}
      />

      <ProblemListCard
        problems={report.problemList}
      />

      {report.differentials.map((disease, index) => (
        <DifferentialDiagnosisCard
          key={index}
          rank={index + 1}
          name={disease.name}
          confidence={disease.confidence}
          reasons={disease.reasons}
          tests={disease.tests}
        />
      ))}

      <RecommendedDiagnosticsCard
        diagnostics={report.recommendedDiagnostics}
      />

      <EmergencyFlagsCard
        flags={report.emergencyFlags}
      />

      <StabilizationCard
        stabilization={report.stabilization}
      />

      <TreatmentConsiderationsCard
        considerations={report.treatmentConsiderations}
      />

      <MonitoringCard
        monitoring={report.monitoring}
      />

      <PrognosisCard
        prognosis={report.prognosis}
      />

      <ClientSummaryCard
        summary={report.clientSummary}
      />

    </div>
  );
}