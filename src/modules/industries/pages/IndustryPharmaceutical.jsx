import { FaPills } from 'react-icons/fa';
import IndustryDetailLayout from '../components/IndustryDetailLayout';

export default function IndustryPharmaceutical() {
    const cards = [
        {
            title: "Toxicity Studies",
            bullets: [
                "Acute toxicity studies.",
                "Guinea Pig Maximization Test (GPMT) / Buhler Sensitization Test.",
                "Sub-acute toxicity studies.",
                "Sub-chronic toxicity studies.",
                "Chronic Toxicity Studies.",
                "Genetic Toxicity studies.",
                "Reproductive toxicity studies."
            ]
        },
        {
            title: "DMPK & ADME Studies",
            bullets: [
                "Single, multiple and cassette dosing; Dose escalation study; Determination of fundamental PK parameters.",
                "Tissue distribution study; Blood brain barrier.",
                "Rank-ordering compounds/formulations.",
                "PK-PD Evaluation."
            ]
        },
        {
            title: "Species, Routes & Matrices",
            bullets: [
                "Species Used: Rat, Mice, Rabbit, Guinea Pig (Pig, Dog via 3rd Party Collaboration).",
                "Routes of Administration: Oral, Intravenous (bolus and infusion), Intra-peritoneal, Subcutaneous, Intranasal, Intramuscular, Intra-rectal, Intra-ocular.",
                "Biological Matrices Include: Blood/plasma/urine/faeces, Bile, Cerebrospinal fluid.",
                "Various tissues such as brain, lung, heart, liver, kidney, spleen, skeletal muscle.",
                "Ocular tissues like aqueous humor, vitreous humor, lens, cornea, optic nerve."
            ]
        },
        {
            title: "Biology Studies",
            bullets: [
                "Inflammation and Pain Models.",
                "Metabolic Disorders Models.",
                "Antipsychotic Activity Models.",
                "Osteoporosis Models.",
                "Safety Pharmacology Models."
            ]
        },
        {
            title: "Pathology Evaluations",
            bullets: [
                "Necropsy.",
                "Histopathology slide preparation.",
                "H & E staining.",
                "Special staining.",
                "Haematology.",
                "Clinical chemistry.",
                "Urinalysis.",
                "Coagulation."
            ]
        },
        {
            title: "PDE, OEL, AI Assessments",
            bullets: [
                "Acceptable Daily Exposure (ADE) / Permitted Daily Exposure (PDE) & Acceptable Intake (AI) reports.",
                "OEL, NOEL, NOAEL, LOEL, LOAEL determinations."
            ]
        }
    ];

    return (
        <IndustryDetailLayout
            title="Pharmaceutical"
            subtitle="Preclinical Drug Development Partner"
            intro="At PRADO, we understand how important on-time delivery is for meeting your goals for IND, NDA, and other regulatory submissions. As your development partner, we will work side-by-side with you to learn the particulars of your application, and deliver timely reports with accurate and reliable data from the following range of services."
            image="/images/facilities/arf.png"
            icon={<FaPills />}
            cards={cards}
        />
    );
}
