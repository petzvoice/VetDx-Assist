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
        species={report.patientSummary?.species ?? ""}
      />

      <PatientSummaryCard
        species={report.patientSummary?.species ?? ""}
        breed={report.patientSummary?.breed ?? ""}
        age={report.patientSummary?.age ?? ""}
        sex={report.patientSummary?.sex ?? ""}
        weight={report.patientSummary?.weight ?? ""}
        summary={report.patientSummary?.summary ?? ""}
      />

      <ProblemListCard
        problems={
          Array.isArray(report.problemList)
            ? report.problemList
            : []
        }
      />

      {Array.isArray(report.differentials) &&
        report.differentials.map(
          (disease, index) => (
            <DifferentialDiagnosisCard
              key={index}
              rank={index + 1}
              name={disease?.name ?? "Unknown"}
              confidence={
                disease?.confidence ?? 50
              }
              reasons={
                Array.isArray(
                  disease?.reasoning
                )
                  ? disease.reasoning
                  : []
              }
              tests={
                Array.isArray(
                  disease?.recommendedTests
                )
                  ? disease.recommendedTests
                  : []
              }
            />
          )
        )}

      <RecommendedDiagnosticsCard
        diagnostics={
          Array.isArray(
            report.recommendedDiagnostics
          )
            ? report.recommendedDiagnostics
            : []
        }
      />

      <EmergencyFlagsCard
        flags={
          Array.isArray(report.redFlags)
            ? report.redFlags
            : []
        }
      />

      <StabilizationCard
        stabilization={
          Array.isArray(report.stabilization)
            ? report.stabilization
            : []
        }
      />

      <TreatmentConsiderationsCard
        considerations={
          Array.isArray(
            report.treatmentConsiderations
          )
            ? report.treatmentConsiderations
            : []
        }
      />

      <MonitoringCard
        monitoring={
          Array.isArray(report.monitoring)
            ? report.monitoring
            : []
        }
      />

      <PrognosisCard
        prognosis={
          report.prognosis ?? {
            shortTerm: "",
            longTerm: "",
          }
        }
      />

      <ClientSummaryCard
        summary={
          report.clientSummary ?? ""
        }
      />

    </div>
  );
}