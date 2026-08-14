import type { DiseaseCard } from '@/lib/knowledge-engine/types';

import { anaplasmosis } from '@/lib/knowledge-engine/diseases/anaplasmosis';
import { babesiosis } from '@/lib/knowledge-engine/diseases/babesiosis';
import { bovineAbomasalUlcer } from '@/lib/knowledge-engine/diseases/bovine_abomasal_ulcer';
import { bovineAnaplasmosis } from '@/lib/knowledge-engine/diseases/bovine_anaplasmosis';
import { bovineAnthrax } from '@/lib/knowledge-engine/diseases/bovine_anthrax';
import { bovineBabesiosis } from '@/lib/knowledge-engine/diseases/bovine_babesiosis';
import { bovineBloat } from '@/lib/knowledge-engine/diseases/bovine_bloat';
import { bovineClostridialDiseases } from '@/lib/knowledge-engine/diseases/bovine_clostridial_diseases';
import { bovineCoccidiosis } from '@/lib/knowledge-engine/diseases/bovine_coccidiosis';
import { bovineDiaphragmaticHernia } from '@/lib/knowledge-engine/diseases/bovine_diaphragmatic_hernia';
import { bovineDystocia } from '@/lib/knowledge-engine/diseases/bovine_dystocia';
import { bovineEarlyEmbryonicDeath } from '@/lib/knowledge-engine/diseases/bovine_early_embryonic_death';
import { bovineEndometritis } from '@/lib/knowledge-engine/diseases/bovine_endometritis';
import { bovineFasciolosis } from '@/lib/knowledge-engine/diseases/bovine_fasciolosis';
import { bovineFootAndMouthDisease } from '@/lib/knowledge-engine/diseases/bovine_foot_and_mouth_disease';
import { bovineFootRot } from '@/lib/knowledge-engine/diseases/bovine_foot_rot';
import { bovineGastrointestinalNematodiasis } from '@/lib/knowledge-engine/diseases/bovine_gastrointestinal_nematodiasis';
import { bovineHaemorrhagicSepticaemia } from '@/lib/knowledge-engine/diseases/bovine_haemorrhagic_septicaemia';
import { bovineHardwareDisease } from '@/lib/knowledge-engine/diseases/bovine_hardware_disease';
import { bovineHypomagnesemia } from '@/lib/knowledge-engine/diseases/bovine_hypomagnesemia';
import { bovineInfectiousRhinotracheitis } from '@/lib/knowledge-engine/diseases/bovine_infectious_rhinotracheitis';
import { bovineJohnesDisease } from '@/lib/knowledge-engine/diseases/bovine_johnes_disease';
import { bovineKetosis } from '@/lib/knowledge-engine/diseases/bovine_ketosis';
import { bovineLeptospirosis } from '@/lib/knowledge-engine/diseases/bovine_leptospirosis';
import { bovineLeadPoisoning } from '@/lib/knowledge-engine/diseases/bovine_lead_poisoning';
import { bovineLumpySkinDisease } from '@/lib/knowledge-engine/diseases/bovine_lumpy_skin_disease';
import { bovineMastitis } from '@/lib/knowledge-engine/diseases/bovine_mastitis';
import { bovineMetritis } from '@/lib/knowledge-engine/diseases/bovine_metritis';
import { bovineMilkFever } from '@/lib/knowledge-engine/diseases/bovine_milk_fever';
import { bovineMycoplasmosis } from '@/lib/knowledge-engine/diseases/bovine_mycoplasmosis';
import { bovineNitratePoisoning } from '@/lib/knowledge-engine/diseases/bovine_nitrate_poisoning';
import { bovineParainfluenza3 } from '@/lib/knowledge-engine/diseases/bovine_parainfluenza_3';
import { bovineProlapse } from '@/lib/knowledge-engine/diseases/bovine_prolapse';
import { bovineRabies } from '@/lib/knowledge-engine/diseases/bovine_rabies';
import { bovineRespiratorySyncytialVirus } from '@/lib/knowledge-engine/diseases/bovine_respiratory_syncytial_virus';
import { bovineRetainedFetalMembranes } from '@/lib/knowledge-engine/diseases/bovine_retained_fetal_membranes';
import { bovineRumenAcidosis } from '@/lib/knowledge-engine/diseases/bovine_rumen_acidosis';
import { bovineSalmonellosis } from '@/lib/knowledge-engine/diseases/bovine_salmonellosis';
import { bovineSeleniumToxicity } from '@/lib/knowledge-engine/diseases/bovine_selenium_toxicity';
import { bovineTheileriosis } from '@/lib/knowledge-engine/diseases/bovine_theileriosis';
import { bovineTraumaticReticuloperitonitis } from '@/lib/knowledge-engine/diseases/bovine_traumatic_reticuloperitonitis';
import { bovineTuberculosis } from '@/lib/knowledge-engine/diseases/bovine_tuberculosis';
import { bovineUreaToxicity } from '@/lib/knowledge-engine/diseases/bovine_urea_toxicity';
import { bovineViralDiarrhea } from '@/lib/knowledge-engine/diseases/bovine_viral_diarrhea';
import { brachycephalicAirwaySyndrome } from '@/lib/knowledge-engine/diseases/brachycephalic_airway_syndrome';
import { brucellosis } from '@/lib/knowledge-engine/diseases/brucellosis';
import { canineAdenovirus2 } from '@/lib/knowledge-engine/diseases/canine-adenovirus-2';
import { canineBronchitis } from '@/lib/knowledge-engine/diseases/canine-bronchitis';
import { canineCoronavirus } from '@/lib/knowledge-engine/diseases/canine-coronavirus';
import { canineHerpesvirus } from '@/lib/knowledge-engine/diseases/canine-herpesvirus';
import { canineInfectiousRespiratoryDiseaseComplex } from '@/lib/knowledge-engine/diseases/canine-infectious-respiratory-disease-complex';
import { canineInfluenza } from '@/lib/knowledge-engine/diseases/canine-influenza';
import { canineLaryngealParalysis } from '@/lib/knowledge-engine/diseases/canine-laryngeal-paralysis';
import { canineTrachealCollapse } from '@/lib/knowledge-engine/diseases/canine-tracheal-collapse';
import { canineDistemper } from '@/lib/knowledge-engine/diseases/canineDistemper';
import { canineInfectiousHepatitis } from '@/lib/knowledge-engine/diseases/canineInfectiousHepatitis';
import { canineParvoviralEnteritis } from '@/lib/knowledge-engine/diseases/canineParvoviralEnteritis';
import { canineAcuteGastroenteritis } from '@/lib/knowledge-engine/diseases/canine_acute_gastroenteritis';
import { canineAcuteHemorrhagicDiarrheaSyndrome } from '@/lib/knowledge-engine/diseases/canine_acute_hemorrhagic_diarrhea_syndrome';
import { canineAcuteKidneyInjury } from '@/lib/knowledge-engine/diseases/canine_acute_kidney_injury';
import { canineAcutePancreatitis } from '@/lib/knowledge-engine/diseases/canine_acute_pancreatitis';
import { canineAnteriorUveitis } from '@/lib/knowledge-engine/diseases/canine_anterior_uveitis';
import { canineArrhythmias } from '@/lib/knowledge-engine/diseases/canine_arrhythmias';
import { canineAsthma } from '@/lib/knowledge-engine/diseases/canine_asthma';
import { canineAtopicDermatitis } from '@/lib/knowledge-engine/diseases/canine_atopic_dermatitis';
import { canineAtrialFibrillation } from '@/lib/knowledge-engine/diseases/canine_atrial_fibrillation';
import { canineAtrialSeptalDefect } from '@/lib/knowledge-engine/diseases/canine_atrial_septal_defect';
import { canineAtrioventricularBlock } from '@/lib/knowledge-engine/diseases/canine_atrioventricular_block';
import { canineBacterialCystitis } from '@/lib/knowledge-engine/diseases/canine_bacterial_cystitis';
import { canineBenignProstaticHyperplasia } from '@/lib/knowledge-engine/diseases/canine_benign_prostatic_hyperplasia';
import { canineCardiacTamponade } from '@/lib/knowledge-engine/diseases/canine_cardiac_tamponade';
import { canineCataract } from '@/lib/knowledge-engine/diseases/canine_cataract';
import { canineCerebrovascularAccident } from '@/lib/knowledge-engine/diseases/canine_cerebrovascular_accident';
import { canineCherryEye } from '@/lib/knowledge-engine/diseases/canine_cherry_eye';
import { canineChronicBronchitis } from '@/lib/knowledge-engine/diseases/canine_chronic_bronchitis';
import { canineChronicKidneyDisease } from '@/lib/knowledge-engine/diseases/canine_chronic_kidney_disease';
import { canineColitis } from '@/lib/knowledge-engine/diseases/canine_colitis';
import { canineCongestiveHeartFailure } from '@/lib/knowledge-engine/diseases/canine_congestive_heart_failure';
import { canineConjunctivitis } from '@/lib/knowledge-engine/diseases/canine_conjunctivitis';
import { canineConstipationObstipation } from '@/lib/knowledge-engine/diseases/canine_constipation_obstipation';
import { canineCornealUlcer } from '@/lib/knowledge-engine/diseases/canine_corneal_ulcer';
import { canineDeepPyoderma } from '@/lib/knowledge-engine/diseases/canine_deep_pyoderma';
import { canineDegenerativeMitralValveDisease } from '@/lib/knowledge-engine/diseases/canine_degenerative_mitral_valve_disease';
import { canineDegenerativeMyelopathy } from '@/lib/knowledge-engine/diseases/canine_degenerative_myelopathy';
import { canineDemodicosis } from '@/lib/knowledge-engine/diseases/canine_demodicosis';
import { canineDermatophytosis } from '@/lib/knowledge-engine/diseases/canine_dermatophytosis';
import { canineDiabetesMellitus } from '@/lib/knowledge-engine/diseases/canine_diabetes_mellitus';
import { canineDiabeticKetoacidosis } from '@/lib/knowledge-engine/diseases/canine_diabetic_ketoacidosis';
import { canineDilatedCardiomyopathy } from '@/lib/knowledge-engine/diseases/canine_dilated_cardiomyopathy';
import { canineDiscoidLupusErythematosus } from '@/lib/knowledge-engine/diseases/canine_discoid_lupus_erythematosus';
import { canineEhrlichiosis } from '@/lib/knowledge-engine/diseases/canine_ehrlichiosis';
import { canineEntropion } from '@/lib/knowledge-engine/diseases/canine_entropion';
import { canineExocrinePancreaticInsufficiency } from '@/lib/knowledge-engine/diseases/canine_exocrine_pancreatic_insufficiency';
import { canineFibrocartilaginousEmbolism } from '@/lib/knowledge-engine/diseases/canine_fibrocartilaginous_embolism';
import { canineFleaAllergyDermatitis } from '@/lib/knowledge-engine/diseases/canine_flea_allergy_dermatitis';
import { canineFoodAllergyDermatitis } from '@/lib/knowledge-engine/diseases/canine_food_allergy_dermatitis';
import { canineGastricDilatationVolvulus } from '@/lib/knowledge-engine/diseases/canine_gastric_dilatation_volvulus';
import { canineGastroesophagealRefluxDisease } from '@/lib/knowledge-engine/diseases/canine_gastroesophageal_reflux_disease';
import { canineGastrointestinalLymphoma } from '@/lib/knowledge-engine/diseases/canine_gastrointestinal_lymphoma';
import { canineGiardiasis } from '@/lib/knowledge-engine/diseases/canine_giardiasis';
import { canineGlaucoma } from '@/lib/knowledge-engine/diseases/canine_glaucoma';
import { canineHeartwormDisease } from '@/lib/knowledge-engine/diseases/canine_heartworm_disease';
import { canineHemangiosarcoma } from '@/lib/knowledge-engine/diseases/canine_hemangiosarcoma';
import { canineHistiocytoma } from '@/lib/knowledge-engine/diseases/canine_histiocytoma';
import { canineHookwormInfection } from '@/lib/knowledge-engine/diseases/canine_hookworm_infection';
import { canineHyperadrenocorticism } from '@/lib/knowledge-engine/diseases/canine_hyperadrenocorticism';
import { canineHypoadrenocorticism } from '@/lib/knowledge-engine/diseases/canine_hypoadrenocorticism';
import { canineHypothyroidism } from '@/lib/knowledge-engine/diseases/canine_hypothyroidism';
import { canineIdiopathicEpilepsy } from '@/lib/knowledge-engine/diseases/canine_idiopathic_epilepsy';
import { canineImmuneMediatedHemolyticAnemia } from '@/lib/knowledge-engine/diseases/canine_immune_mediated_hemolytic_anemia';
import { canineInflammatoryBowelDisease } from '@/lib/knowledge-engine/diseases/canine_inflammatory_bowel_disease';
import { canineInterdigitalFurunculosis } from '@/lib/knowledge-engine/diseases/canine_interdigital_furunculosis';
import { canineIntervertebralDiscDisease } from '@/lib/knowledge-engine/diseases/canine_intervertebral_disc_disease';
import { canineIntestinalForeignBodyObstruction } from '@/lib/knowledge-engine/diseases/canine_intestinal_foreign_body_obstruction';
import { canineIntussusception } from '@/lib/knowledge-engine/diseases/canine_intussusception';
import { canineKeratoconjunctivitisSicca } from '@/lib/knowledge-engine/diseases/canine_keratoconjunctivitis_sicca';
import { canineLensLuxation } from '@/lib/knowledge-engine/diseases/canine_lens_luxation';
import { canineLungLobeTorsion } from '@/lib/knowledge-engine/diseases/canine_lung_lobe_torsion';
import { canineLymphoma } from '@/lib/knowledge-engine/diseases/canine_lymphoma';
import { canineMalasseziaDermatitis } from '@/lib/knowledge-engine/diseases/canine_malassezia_dermatitis';
import { canineMammaryGlandTumor } from '@/lib/knowledge-engine/diseases/canine_mammary_gland_tumor';
import { canineMastCellTumor } from '@/lib/knowledge-engine/diseases/canine_mast_cell_tumor';
import { canineMegacolon } from '@/lib/knowledge-engine/diseases/canine_megacolon';
import { canineMegaesophagus } from '@/lib/knowledge-engine/diseases/canine_megaesophagus';
import { canineMeningoencephalitisUnknownOrigin } from '@/lib/knowledge-engine/diseases/canine_meningoencephalitis_unknown_origin';
import { canineMitralValveDysplasia } from '@/lib/knowledge-engine/diseases/canine_mitral_valve_dysplasia';
import { canineMulticentricLymphoma } from '@/lib/knowledge-engine/diseases/canine_multicentric_lymphoma';
import { canineOsteosarcoma } from '@/lib/knowledge-engine/diseases/canine_osteosarcoma';
import { canineOtitisExterna } from '@/lib/knowledge-engine/diseases/canine_otitis_externa';
import { canineOtitisMediaInterna } from '@/lib/knowledge-engine/diseases/canine_otitis_media_interna';
import { caninePancreatitis } from '@/lib/knowledge-engine/diseases/canine_pancreatitis';
import { caninePapilloma } from '@/lib/knowledge-engine/diseases/canine_papilloma_warts';
import { caninePatentDuctusArteriosus } from '@/lib/knowledge-engine/diseases/canine_patent_ductus_arteriosus';
import { caninePemphigusFoliaceus } from '@/lib/knowledge-engine/diseases/canine_pemphigus_foliaceus';
import { caninePericardialEffusion } from '@/lib/knowledge-engine/diseases/canine_pericardial_effusion';
import { caninePeritoneopericardialDiaphragmaticHernia } from '@/lib/knowledge-engine/diseases/canine_peritoneopericardial_diaphragmatic_hernia';
import { caninePleuralEffusion } from '@/lib/knowledge-engine/diseases/canine_pleural_effusion';
import { caninePneumonia } from '@/lib/knowledge-engine/diseases/canine_pneumonia';
import { caninePneumothorax } from '@/lib/knowledge-engine/diseases/canine_pneumothorax';
import { caninePortosystemicShunt } from '@/lib/knowledge-engine/diseases/canine_portosystemic_shunt';
import { canineProgressiveRetinalAtrophy } from '@/lib/knowledge-engine/diseases/canine_progressive_retinal_atrophy';
import { canineProstatitis } from '@/lib/knowledge-engine/diseases/canine_prostatitis';
import { canineProteinLosingEnteropathy } from '@/lib/knowledge-engine/diseases/canine_protein_losing_enteropathy';
import { caninePulmonaryEdema } from '@/lib/knowledge-engine/diseases/canine_pulmonary_edema';
import { caninePulmonaryThromboembolism } from '@/lib/knowledge-engine/diseases/canine_pulmonary_thromboembolism';
import { canineRabies } from '@/lib/knowledge-engine/diseases/canine_rabies';
import { canineRoundwormInfection } from '@/lib/knowledge-engine/diseases/canine_roundworm_infection';
import { canineSalmonellosis } from '@/lib/knowledge-engine/diseases/canine_salmonellosis_bacterial_enteritis';
import { canineSarcopticMange } from '@/lib/knowledge-engine/diseases/canine_sarcoptic_mange';
import { canineSARDS } from '@/lib/knowledge-engine/diseases/canine_sards';
import { canineSeborrhea } from '@/lib/knowledge-engine/diseases/canine_seborrhea';
import { canineSickSinusSyndrome } from '@/lib/knowledge-engine/diseases/canine_sick_sinus_syndrome';
import { canineSkinFoldDermatitis } from '@/lib/knowledge-engine/diseases/canine_skin_fold_dermatitis';
import { canineSquamousCellCarcinoma } from '@/lib/knowledge-engine/diseases/canine_squamous_cell_carcinoma';
import { canineSubaorticStenosis } from '@/lib/knowledge-engine/diseases/canine_subaortic_stenosis';
import { canineSuperficialPyoderma } from '@/lib/knowledge-engine/diseases/canine_superficial_pyoderma';
import { canineSystemicLupusErythematosus } from '@/lib/knowledge-engine/diseases/canine_systemic_lupus_erythematosus';
import { canineTetralogyOfFallot } from '@/lib/knowledge-engine/diseases/canine_tetralogy_of_fallot';
import { canineTransitionalCellCarcinoma } from '@/lib/knowledge-engine/diseases/canine_transitional_cell_carcinoma';
import { canineTransmissibleVenerealTumor } from '@/lib/knowledge-engine/diseases/canine_transmissible_veneral_tumor';
import { canineTricuspidDysplasia } from '@/lib/knowledge-engine/diseases/canine_tricuspid_dysplasia';
import { canineVentricularSeptalDefect } from '@/lib/knowledge-engine/diseases/canine_ventricular_septal_defect';
import { canineVentricularTachycardia } from '@/lib/knowledge-engine/diseases/canine_ventricular_tachycardia';
import { canineVestibularDisease } from '@/lib/knowledge-engine/diseases/canine_vestibular_disease';
import { canineWhipwormInfection } from '@/lib/knowledge-engine/diseases/canine_whipworm_infection';
import { ehrlichiosis } from '@/lib/knowledge-engine/diseases/ehrlichiosis';
import { felineAorticThromboembolism } from '@/lib/knowledge-engine/diseases/feline_aortic_thromboembolism';
import { felineAsthma } from '@/lib/knowledge-engine/diseases/feline_asthma';
import { felineBacterialPyoderma } from '@/lib/knowledge-engine/diseases/feline_bacterial_pyoderma';
import { felineCalicivirus } from '@/lib/knowledge-engine/diseases/feline_calicivirus';
import { felineCataract } from '@/lib/knowledge-engine/diseases/feline_cataract';
import { felineCholangitis } from '@/lib/knowledge-engine/diseases/feline_cholangitis';
import { felineChronicKidneyDisease } from '@/lib/knowledge-engine/diseases/feline_chronic_kidney_disease';
import { felineConjunctivitis } from '@/lib/knowledge-engine/diseases/feline_conjunctivitis';
import { felineCornealSequestrum } from '@/lib/knowledge-engine/diseases/feline_corneal_sequestrum';
import { felineCornealUlcer } from '@/lib/knowledge-engine/diseases/feline_corneal_ulcer';
import { felineDemodicosis } from '@/lib/knowledge-engine/diseases/feline_demodicosis';
import { felineDermatophytosis } from '@/lib/knowledge-engine/diseases/feline_dermatophytosis';
import { felineDiabetesMellitus } from '@/lib/knowledge-engine/diseases/feline_diabetes_mellitus';
import { felineFleaAllergyDermatitis } from '@/lib/knowledge-engine/diseases/feline_flea_allergy_dermatitis';
import { felineGlaucoma } from '@/lib/knowledge-engine/diseases/feline_glaucoma';
import { felineHeartwormDisease } from '@/lib/knowledge-engine/diseases/feline_heartworm_disease';
import { felineHemangiosarcoma } from '@/lib/knowledge-engine/diseases/feline_hemangiosarcoma';
import { felineHepaticLipidosis } from '@/lib/knowledge-engine/diseases/feline_hepatic_lipidosis';
import { felineHerpesvirus1 } from '@/lib/knowledge-engine/diseases/feline_herpesvirus_1';
import { felineHerpesvirusKeratitis } from '@/lib/knowledge-engine/diseases/feline_herpesvirus_keratitis';
import { felineHyperthyroidism } from '@/lib/knowledge-engine/diseases/feline_hyperthyroidism';
import { felineHypertrophicCardiomyopathy } from '@/lib/knowledge-engine/diseases/feline_hypertrophic_cardiomyopathy';
import { felineImmunodeficiencyVirus } from '@/lib/knowledge-engine/diseases/feline_immunodeficiency_virus';
import { felineInfectiousPeritonitis } from '@/lib/knowledge-engine/diseases/feline_infectious_peritonitis';
import { felineInflammatoryBowelDisease } from '@/lib/knowledge-engine/diseases/feline_inflammatory_bowel_disease';
import { felineInjectionSiteSarcoma } from '@/lib/knowledge-engine/diseases/feline_injection_site_sarcoma';
import { felineLensLuxation } from '@/lib/knowledge-engine/diseases/feline_lens_luxation';
import { felineLeukemiaVirus } from '@/lib/knowledge-engine/diseases/feline_leukemia_virus';
import { felineLowerUrinaryTractDisease } from '@/lib/knowledge-engine/diseases/feline_lower_urinary_tract_disease';
import { felineLymphoma } from '@/lib/knowledge-engine/diseases/feline_lymphoma';
import { felineMalasseziaDermatitis } from '@/lib/knowledge-engine/diseases/feline_malassezia_dermatitis';
import { felineMammaryTumor } from '@/lib/knowledge-engine/diseases/feline_mammary_tumor';
import { felineMycoplasmosis } from '@/lib/knowledge-engine/diseases/feline_mycoplasmosis';
import { felineOsteosarcoma } from '@/lib/knowledge-engine/diseases/feline_osteosarcoma';
import { felinePancreatitis } from '@/lib/knowledge-engine/diseases/feline_pancreatitis';
import { felinePanleukopenia } from '@/lib/knowledge-engine/diseases/feline_panleukopenia';
import { felineRabies } from '@/lib/knowledge-engine/diseases/feline_rabies';
import { felineRetinalDegeneration } from '@/lib/knowledge-engine/diseases/feline_retinal_degeneration';
import { felineSarcopticMange } from '@/lib/knowledge-engine/diseases/feline_sarcoptic_mange';
import { felineToxoplasmosis } from '@/lib/knowledge-engine/diseases/feline_toxoplasmosis';
import { felineTriaditis } from '@/lib/knowledge-engine/diseases/feline_triaditis';
import { felineUpperRespiratoryInfectionComplex } from '@/lib/knowledge-engine/diseases/feline_upper_respiratory_infection_complex';
import { felineUrethralObstruction } from '@/lib/knowledge-engine/diseases/feline_urethral_obstruction';
import { leptospirosis } from '@/lib/knowledge-engine/diseases/leptospirosis';
import { lymeDisease } from '@/lib/knowledge-engine/diseases/lyme-disease';
import { pyometra } from '@/lib/knowledge-engine/diseases/pyometra';
import { smallRuminantAbortion } from '@/lib/knowledge-engine/diseases/small_ruminant_abortion';
import { smallRuminantBrucellosis } from '@/lib/knowledge-engine/diseases/small_ruminant_brucellosis';
import { smallRuminantCaseousLymphadenitis } from '@/lib/knowledge-engine/diseases/small_ruminant_caseous_lymphadenitis';
import { smallRuminantCoccidiosis } from '@/lib/knowledge-engine/diseases/small_ruminant_coccidiosis';
import { smallRuminantContagiousCaprinePleuropneumonia } from '@/lib/knowledge-engine/diseases/small_ruminant_contagious_caprine_pleuropneumonia';
import { smallRuminantContagiousOvineDigitalDermatitis } from '@/lib/knowledge-engine/diseases/small_ruminant_contagious_ovine_digital_dermatitis';
import { smallRuminantCopperToxicity } from '@/lib/knowledge-engine/diseases/small_ruminant_copper_toxicity';
import { smallRuminantEarlyEmbryonicDeath } from '@/lib/knowledge-engine/diseases/small_ruminant_early_embryonic_death';
import { smallRuminantEnterotoxemia } from '@/lib/knowledge-engine/diseases/small_ruminant_enterotoxemia';
import { smallRuminantFasciolosis } from '@/lib/knowledge-engine/diseases/small_ruminant_fasciolosis';
import { smallRuminantFootAbscess } from '@/lib/knowledge-engine/diseases/small_ruminant_foot_abscess';
import { smallRuminantFootRot } from '@/lib/knowledge-engine/diseases/small_ruminant_foot_rot';
import { smallRuminantGastrointestinalNematodiasis } from '@/lib/knowledge-engine/diseases/small_ruminant_gastrointestinal_nematodiasis';
import { smallRuminantHaemonchosis } from '@/lib/knowledge-engine/diseases/small_ruminant_haemonchosis';
import { smallRuminantHeatStress } from '@/lib/knowledge-engine/diseases/small_ruminant_heat_stress';
import { smallRuminantHypocalcemia } from '@/lib/knowledge-engine/diseases/small_ruminant_hypocalcemia';
import { smallRuminantHypomagnesemia } from '@/lib/knowledge-engine/diseases/small_ruminant_hypomagnesemia';
import { smallRuminantHypothermia } from '@/lib/knowledge-engine/diseases/small_ruminant_hypothermia';
import { smallRuminantListeriosis } from '@/lib/knowledge-engine/diseases/small_ruminant_listeriosis';
import { smallRuminantLungworm } from '@/lib/knowledge-engine/diseases/small_ruminant_lungworm';
import { smallRuminantMange } from '@/lib/knowledge-engine/diseases/small_ruminant_mange';
import { smallRuminantMastitis } from '@/lib/knowledge-engine/diseases/small_ruminant_mastitis';
import { smallRuminantMetritis } from '@/lib/knowledge-engine/diseases/small_ruminant_metritis';
import { smallRuminantNitratePoisoning } from '@/lib/knowledge-engine/diseases/small_ruminant_nitrate_poisoning';
import { smallRuminantOrf } from '@/lib/knowledge-engine/diseases/small_ruminant_orf';
import { smallRuminantPesteDesPetitsRuminants } from '@/lib/knowledge-engine/diseases/small_ruminant_peste_des_petits_ruminants';
import { smallRuminantPlantPoisoning } from '@/lib/knowledge-engine/diseases/small_ruminant_plant_poisoning';
import { smallRuminantPneumonia } from '@/lib/knowledge-engine/diseases/small_ruminant_pneumonia';
import { smallRuminantPolioencephalomalacia } from '@/lib/knowledge-engine/diseases/small_ruminant_polioencephalomalacia';
import { smallRuminantPregnancyToxemia } from '@/lib/knowledge-engine/diseases/small_ruminant_pregnancy_toxemia';
import { smallRuminantRetainedFetalMembranes } from '@/lib/knowledge-engine/diseases/small_ruminant_retained_fetal_membranes';
import { smallRuminantTapewormInfection } from '@/lib/knowledge-engine/diseases/small_ruminant_tapeworm_infection';
import { smallRuminantTetanus } from '@/lib/knowledge-engine/diseases/small_ruminant_tetanus';
import { smallRuminantUreaToxicity } from '@/lib/knowledge-engine/diseases/small_ruminant_urea_toxicity';
import { smallRuminantUrolithiasis } from '@/lib/knowledge-engine/diseases/small_ruminant_urolithiasis';
import { smallRuminantWhiteMuscleDisease } from '@/lib/knowledge-engine/diseases/small_ruminant_white_muscle_disease';

export const diseases: DiseaseCard[] = [
  anaplasmosis,
  babesiosis,
  bovineAbomasalUlcer,
  bovineAnaplasmosis,
  bovineAnthrax,
  bovineBabesiosis,
  bovineBloat,
  bovineClostridialDiseases,
  bovineCoccidiosis,
  bovineDiaphragmaticHernia,
  bovineDystocia,
  bovineEarlyEmbryonicDeath,
  bovineEndometritis,
  bovineFasciolosis,
  bovineFootAndMouthDisease,
  bovineFootRot,
  bovineGastrointestinalNematodiasis,
  bovineHaemorrhagicSepticaemia,
  bovineHardwareDisease,
  bovineHypomagnesemia,
  bovineInfectiousRhinotracheitis,
  bovineJohnesDisease,
  bovineKetosis,
  bovineLeptospirosis,
  bovineLeadPoisoning,
  bovineLumpySkinDisease,
  bovineMastitis,
  bovineMetritis,
  bovineMilkFever,
  bovineMycoplasmosis,
  bovineNitratePoisoning,
  bovineParainfluenza3,
  bovineProlapse,
  bovineRabies,
  bovineRespiratorySyncytialVirus,
  bovineRetainedFetalMembranes,
  bovineRumenAcidosis,
  bovineSalmonellosis,
  bovineSeleniumToxicity,
  bovineTheileriosis,
  bovineTraumaticReticuloperitonitis,
  bovineTuberculosis,
  bovineUreaToxicity,
  bovineViralDiarrhea,
  brachycephalicAirwaySyndrome,
  brucellosis,
  canineAdenovirus2,
  canineBronchitis,
  canineCoronavirus,
  canineHerpesvirus,
  canineInfectiousRespiratoryDiseaseComplex,
  canineInfluenza,
  canineLaryngealParalysis,
  canineTrachealCollapse,
  canineDistemper,
  canineInfectiousHepatitis,
  canineParvoviralEnteritis,
  canineAcuteGastroenteritis,
  canineAcuteHemorrhagicDiarrheaSyndrome,
  canineAcuteKidneyInjury,
  canineAcutePancreatitis,
  canineAnteriorUveitis,
  canineArrhythmias,
  canineAsthma,
  canineAtopicDermatitis,
  canineAtrialFibrillation,
  canineAtrialSeptalDefect,
  canineAtrioventricularBlock,
  canineBacterialCystitis,
  canineBenignProstaticHyperplasia,
  canineCardiacTamponade,
  canineCataract,
  canineCerebrovascularAccident,
  canineCherryEye,
  canineChronicBronchitis,
  canineChronicKidneyDisease,
  canineColitis,
  canineCongestiveHeartFailure,
  canineConjunctivitis,
  canineConstipationObstipation,
  canineCornealUlcer,
  canineDeepPyoderma,
  canineDegenerativeMitralValveDisease,
  canineDegenerativeMyelopathy,
  canineDemodicosis,
  canineDermatophytosis,
  canineDiabetesMellitus,
  canineDiabeticKetoacidosis,
  canineDilatedCardiomyopathy,
  canineDiscoidLupusErythematosus,
  canineEhrlichiosis,
  canineEntropion,
  canineExocrinePancreaticInsufficiency,
  canineFibrocartilaginousEmbolism,
  canineFleaAllergyDermatitis,
  canineFoodAllergyDermatitis,
  canineGastricDilatationVolvulus,
  canineGastroesophagealRefluxDisease,
  canineGastrointestinalLymphoma,
  canineGiardiasis,
  canineGlaucoma,
  canineHeartwormDisease,
  canineHemangiosarcoma,
  canineHistiocytoma,
  canineHookwormInfection,
  canineHyperadrenocorticism,
  canineHypoadrenocorticism,
  canineHypothyroidism,
  canineIdiopathicEpilepsy,
  canineImmuneMediatedHemolyticAnemia,
  canineInflammatoryBowelDisease,
  canineInterdigitalFurunculosis,
  canineIntervertebralDiscDisease,
  canineIntestinalForeignBodyObstruction,
  canineIntussusception,
  canineKeratoconjunctivitisSicca,
  canineLensLuxation,
  canineLungLobeTorsion,
  canineLymphoma,
  canineMalasseziaDermatitis,
  canineMammaryGlandTumor,
  canineMastCellTumor,
  canineMegacolon,
  canineMegaesophagus,
  canineMeningoencephalitisUnknownOrigin,
  canineMitralValveDysplasia,
  canineMulticentricLymphoma,
  canineOsteosarcoma,
  canineOtitisExterna,
  canineOtitisMediaInterna,
  caninePancreatitis,
  caninePapilloma,
  caninePatentDuctusArteriosus,
  caninePemphigusFoliaceus,
  caninePericardialEffusion,
  caninePeritoneopericardialDiaphragmaticHernia,
  caninePleuralEffusion,
  caninePneumonia,
  caninePneumothorax,
  caninePortosystemicShunt,
  canineProgressiveRetinalAtrophy,
  canineProstatitis,
  canineProteinLosingEnteropathy,
  caninePulmonaryEdema,
  caninePulmonaryThromboembolism,
  canineRabies,
  canineRoundwormInfection,
  canineSalmonellosis,
  canineSarcopticMange,
  canineSARDS,
  canineSeborrhea,
  canineSickSinusSyndrome,
  canineSkinFoldDermatitis,
  canineSquamousCellCarcinoma,
  canineSubaorticStenosis,
  canineSuperficialPyoderma,
  canineSystemicLupusErythematosus,
  canineTetralogyOfFallot,
  canineTransitionalCellCarcinoma,
  canineTransmissibleVenerealTumor,
  canineTricuspidDysplasia,
  canineVentricularSeptalDefect,
  canineVentricularTachycardia,
  canineVestibularDisease,
  canineWhipwormInfection,
  ehrlichiosis,
  felineAorticThromboembolism,
  felineAsthma,
  felineBacterialPyoderma,
  felineCalicivirus,
  felineCataract,
  felineCholangitis,
  felineChronicKidneyDisease,
  felineConjunctivitis,
  felineCornealSequestrum,
  felineCornealUlcer,
  felineDemodicosis,
  felineDermatophytosis,
  felineDiabetesMellitus,
  felineFleaAllergyDermatitis,
  felineGlaucoma,
  felineHeartwormDisease,
  felineHemangiosarcoma,
  felineHepaticLipidosis,
  felineHerpesvirus1,
  felineHerpesvirusKeratitis,
  felineHyperthyroidism,
  felineHypertrophicCardiomyopathy,
  felineImmunodeficiencyVirus,
  felineInfectiousPeritonitis,
  felineInflammatoryBowelDisease,
  felineInjectionSiteSarcoma,
  felineLensLuxation,
  felineLeukemiaVirus,
  felineLowerUrinaryTractDisease,
  felineLymphoma,
  felineMalasseziaDermatitis,
  felineMammaryTumor,
  felineMycoplasmosis,
  felineOsteosarcoma,
  felinePancreatitis,
  felinePanleukopenia,
  felineRabies,
  felineRetinalDegeneration,
  felineSarcopticMange,
  felineToxoplasmosis,
  felineTriaditis,
  felineUpperRespiratoryInfectionComplex,
  felineUrethralObstruction,
  leptospirosis,
  lymeDisease,
  pyometra,
  smallRuminantAbortion,
  smallRuminantBrucellosis,
  smallRuminantCaseousLymphadenitis,
  smallRuminantCoccidiosis,
  smallRuminantContagiousCaprinePleuropneumonia,
  smallRuminantContagiousOvineDigitalDermatitis,
  smallRuminantCopperToxicity,
  smallRuminantEarlyEmbryonicDeath,
  smallRuminantEnterotoxemia,
  smallRuminantFasciolosis,
  smallRuminantFootAbscess,
  smallRuminantFootRot,
  smallRuminantGastrointestinalNematodiasis,
  smallRuminantHaemonchosis,
  smallRuminantHeatStress,
  smallRuminantHypocalcemia,
  smallRuminantHypomagnesemia,
  smallRuminantHypothermia,
  smallRuminantListeriosis,
  smallRuminantLungworm,
  smallRuminantMange,
  smallRuminantMastitis,
  smallRuminantMetritis,
  smallRuminantNitratePoisoning,
  smallRuminantOrf,
  smallRuminantPesteDesPetitsRuminants,
  smallRuminantPlantPoisoning,
  smallRuminantPneumonia,
  smallRuminantPolioencephalomalacia,
  smallRuminantPregnancyToxemia,
  smallRuminantRetainedFetalMembranes,
  smallRuminantTapewormInfection,
  smallRuminantTetanus,
  smallRuminantUreaToxicity,
  smallRuminantUrolithiasis,
  smallRuminantWhiteMuscleDisease
];
