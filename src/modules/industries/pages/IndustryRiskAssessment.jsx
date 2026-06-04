import { FaShieldAlt } from 'react-icons/fa';
import IndustryDetailLayout from '../components/IndustryDetailLayout';

export default function IndustryRiskAssessment() {
    const cards = [
        {
            title: "PDE & OEL Derivations",
            bullets: [
                "Permitted Daily Exposure (PDE) & Acceptable Daily Exposure (ADE) evaluations.",
                "Occupational Exposure Limit (OEL) and Occupational Exposure Band (OEB) categorizations.",
                "Scientific monographs supporting clean validation limits in multi-product facilities."
            ]
        },
        {
            title: "Impurity Qualifications",
            bullets: [
                "Toxicological evaluations of elemental, mutagenic (ICH M7), and nitrosamine impurities.",
                "Structure-Activity Relationship (SAR) and QSAR in-silico assessments.",
                "Expert toxicology opinions and regulatory justifications."
            ]
        },
        {
            title: "Extractables & Leachables",
            bullets: [
                "Toxicological risk assessment of E&L profiles from container closure systems and medical devices.",
                "Safety evaluation of chemical substances in cosmetic products.",
                "Product safety assessments for regulatory clearance."
            ]
        }
    ];

    return (
        <IndustryDetailLayout
            title="Risk Assessment"
            subtitle="Toxicological Risk & Impurity Evaluations"
            intro="PRADO offers expert scientific consulting for toxicological risk assessments, impurity qualifications, and health-based exposure limit derivations. We ensure compliance with global regulatory standards like ICH, FDA, and EMA guidelines."
            image="/images/facilities/qau.png"
            icon={<FaShieldAlt />}
            cards={cards}
        />
    );
}
