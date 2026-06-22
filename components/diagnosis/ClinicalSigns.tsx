"use client";

import Card from "../ui/Card";
import SelectableChipGroup from "../ui/SelectableChipGroup";

import { useCase } from "@/context/CaseContext";

import {
  GENERAL_SIGNS,
  GI_SIGNS,
  RESPIRATORY_SIGNS,
  CARDIO_SIGNS,
  URINARY_SIGNS,
  NEUROLOGICAL_SIGNS,
  MUSCULOSKELETAL_SIGNS,
  DERMATOLOGY_SIGNS,
  REPRODUCTIVE_SIGNS,
} from "@/lib/clinicalSigns";

export default function ClinicalSigns() {
  const { caseData, updateClinicalSigns } = useCase();

  return (
    <Card title="🩺 Clinical Signs">
      <div className="space-y-10">

        {/* General */}

        <section>
          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            General
          </h3>

          <SelectableChipGroup
            title="General Clinical Signs"
            options={GENERAL_SIGNS}
            selected={caseData.clinicalSigns.general}
            onChange={(value) =>
              updateClinicalSigns("general", value)
            }
          />
        </section>

        {/* Gastrointestinal */}

        <section>
          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Gastrointestinal
          </h3>

          <SelectableChipGroup
            title="Gastrointestinal Signs"
            options={GI_SIGNS}
            selected={caseData.clinicalSigns.gastrointestinal}
            onChange={(value) =>
              updateClinicalSigns("gastrointestinal", value)
            }
          />
        </section>

        {/* Respiratory */}

        <section>
          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Respiratory
          </h3>

          <SelectableChipGroup
            title="Respiratory Signs"
            options={RESPIRATORY_SIGNS}
            selected={caseData.clinicalSigns.respiratory}
            onChange={(value) =>
              updateClinicalSigns("respiratory", value)
            }
          />
        </section>

        {/* Cardiovascular */}

        <section>
          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Cardiovascular
          </h3>

          <SelectableChipGroup
            title="Cardiovascular Signs"
            options={CARDIO_SIGNS}
            selected={caseData.clinicalSigns.cardiovascular}
            onChange={(value) =>
              updateClinicalSigns("cardiovascular", value)
            }
          />
        </section>

        {/* Urinary */}

        <section>
          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Urinary
          </h3>

          <SelectableChipGroup
            title="Urinary Signs"
            options={URINARY_SIGNS}
            selected={caseData.clinicalSigns.urinary}
            onChange={(value) =>
              updateClinicalSigns("urinary", value)
            }
          />
        </section>

        {/* Neurological */}

        <section>
          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Neurological
          </h3>

          <SelectableChipGroup
            title="Neurological Signs"
            options={NEUROLOGICAL_SIGNS}
            selected={caseData.clinicalSigns.neurological}
            onChange={(value) =>
              updateClinicalSigns("neurological", value)
            }
          />
        </section>

        {/* Musculoskeletal */}

        <section>
          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Musculoskeletal
          </h3>

          <SelectableChipGroup
            title="Musculoskeletal Signs"
            options={MUSCULOSKELETAL_SIGNS}
            selected={caseData.clinicalSigns.musculoskeletal}
            onChange={(value) =>
              updateClinicalSigns("musculoskeletal", value)
            }
          />
        </section>

        {/* Dermatology */}

        <section>
          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Dermatology
          </h3>

          <SelectableChipGroup
            title="Dermatological Signs"
            options={DERMATOLOGY_SIGNS}
            selected={caseData.clinicalSigns.dermatology}
            onChange={(value) =>
              updateClinicalSigns("dermatology", value)
            }
          />
        </section>

        {/* Reproductive */}

        <section>
          <h3 className="mb-5 border-b border-slate-700 pb-2 text-xl font-bold text-cyan-400">
            Reproductive
          </h3>

          <SelectableChipGroup
            title="Reproductive Signs"
            options={REPRODUCTIVE_SIGNS}
            selected={caseData.clinicalSigns.reproductive}
            onChange={(value) =>
              updateClinicalSigns("reproductive", value)
            }
          />
        </section>

      </div>
    </Card>
  );
}