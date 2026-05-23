import { FaFileAlt } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServiceRiskAssessment() {
    return (
        <ServiceDetailLayout
            title="Risk Assessment"
            subtitle="Regulatory & Safety Services"
            intro="PRADO provides expert toxicological risk assessment services designed to meet the evolving regulatory expectations of global drug and device manufacturers. With deep scientific expertise, we prepare defensible, submission-ready TRA reports."
            image="/images/img-home-strength-1.png"
            icon={<FaFileAlt />}
            subServices={[
                {
                    title: "Permitted Daily Exposure (PDE) Calculations",
                    description: "Scientifically rigorous PDE determinations for cleaning validation and cross-contamination risk assessment in multi-product manufacturing facilities.",
                    bullets: [
                        "ICH Q3C-compliant PDE calculations",
                        "Route-specific PDE (oral, parenteral, inhalation)",
                        "Literature and pre-clinical data integration"
                    ]
                },
                {
                    title: "Occupational Exposure Limits (OEL) Derivation",
                    description: "Derivation of OELs and Occupational Exposure Bands (OEBs) to protect workers handling highly potent active pharmaceutical ingredients (HPAPIs)."
                },
                {
                    title: "Acceptable Intake (AI) & 'F' Value Reports",
                    description: "Assessment of acceptable intake values and threshold-of-toxicological-concern (TTC) evaluations for regulatory submissions."
                },
                {
                    title: "Maximum Daily Dose (MDD) Determination",
                    description: "Systematic determination of MDD with relevance to cleaning validation and dosage form risk characterization."
                },
                {
                    title: "Toxicological Risk Assessment (TRA) Reports",
                    description: "Preparation of comprehensive, sponsor-specific TRA reports that integrate in silico, in vitro, and in vivo data into a structured regulatory narrative.",
                    bullets: [
                        "Genotoxic and carcinogenic risk assessment",
                        "ICH M7-compliant risk assessments for impurities",
                        "Medical device biocompatibility risk reports (ISO 10993-1)"
                    ]
                }
            ]}
        />
    );
}
