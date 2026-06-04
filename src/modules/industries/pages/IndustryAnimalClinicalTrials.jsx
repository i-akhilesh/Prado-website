import { FaPaw } from 'react-icons/fa';
import IndustryDetailLayout from '../components/IndustryDetailLayout';

export default function IndustryAnimalClinicalTrials() {
    const cards = [
        {
            title: "Target Animal Safety (TAS)",
            bullets: [
                "Establish margin of safety for veterinary drugs in target species.",
                "Assess tolerance, local tolerance, and physiological responses.",
                "Detailed physiological and pathological monitoring."
            ]
        },
        {
            title: "Clinical Field Trials",
            bullets: [
                "Multi-center field efficacy and safety evaluations.",
                "Compliance with VICH GL9 guidelines.",
                "Robust veterinary monitoring and reporting protocols."
            ]
        },
        {
            title: "Regulatory Submissions support",
            bullets: [
                "Veterinary medicine dossier preparation.",
                "Target animal safety study report generation.",
                "Acceptance support with international veterinary regulatory bodies."
            ]
        }
    ];

    return (
        <IndustryDetailLayout
            title="Animal Clinical Trials"
            subtitle="Veterinary Safety & Efficacy Studies"
            intro="PRADO designs and conducts clinical field trials and safety evaluation studies in target animal species to support product development and veterinary regulatory filings. We work side-by-side with veterinary health developers to ensure target animal safety."
            image="/images/facilities/arf.png"
            icon={<FaPaw />}
            cards={cards}
        />
    );
}
