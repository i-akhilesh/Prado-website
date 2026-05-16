import { FaAtom } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServiceAnalytical() {
    return (
        <ServiceDetailLayout
            title="Analytical"
            subtitle="Bioanalytical Services"
            intro="We offer comprehensive analytical and bioanalytical testing to support toxicokinetic, pharmacokinetic, and drug development studies for small and large molecules. Our capabilities span from early pre-formulation to product lifecycle support."
            image="/src/assets/images/img-facility-lab-3.png"
            icon={<FaAtom />}
            subServices={[
                {
                    title: "Analytical-Bioanalytical Services",
                    bullets: [
                        "Dedicated expertise to conduct Toxicokinetic/ Pharmacokinetic analysis for small and large molecules",
                        "Method development/Validation/Sample analysis in blood, urine, and other matrices.",
                        "Formulation Analysis for Drug Development as per sponsor requirements.",
                        "Chemical Characterization, Leachable and extractable analysis of Medical Devices.",
                        "Extraction studies, Stability testing, Analysis of degradation products",
                        "Concentration Verification & Stability Studies.",
                        "ADMEK Studies for Comprehensive Drug Evaluation.",
                        "Pre-formulation study support for forced degradation/compatibility studies.",
                        "Product lifecycle from the early stages of pre-formulation all way to product introduction for commercialization and beyond."
                    ]
                }
            ]}
        />
    );
}
