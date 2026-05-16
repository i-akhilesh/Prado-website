import { FaFlask } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServicePharmacokineticPage() {
    return (
        <ServiceDetailLayout
            title="Pharmacokinetic"
            subtitle="ADME & Drug Disposition"
            intro="Comprehensive analysis of how a drug moves through the body. Our PK platform delivers precise, GLP-compliant data that forms the scientific backbone of every IND-enabling submission."
            image="/src/assets/images/img-facility-lab-1.png"
            icon={<FaFlask />}
            subServices={[
                {
                    title: "Pharmacokinetic Services",
                    bullets: [
                        "Single, multiple and cassette dosing of compound(s)",
                        "Dose escalation study (dose linearity and range finding)",
                        "Tissue distribution study (brain, heart, liver, lung, kidney, Eye etc.)",
                        "Rank-ordering compounds/formulations",
                        "Determination of fundamental PK parameters (Tmax, Cmax, AUC, clearance, oral bioavailability, volume of distribution, etc.)",
                        "Blood brain barrier",
                        "Continuous infusion PK study."
                    ]
                },
                {
                    title: "Routes",
                    bullets: [
                        "Oral, intravenous (bolus and infusion)",
                        "Intra-peritoneal",
                        "Subcutaneous",
                        "Intranasal",
                        "Intramuscular",
                        "Intra-rectal or intra-ocular"
                    ]
                },
                {
                    title: "Biological Matrices",
                    bullets: [
                        "Blood/plasma/urine/feces",
                        "Bile, Cerebrospinal fluid",
                        "Various tissues such as brain, lung, heart, liver, kidney, spleen, skeletal muscle",
                        "Ocular tissues like aqueous humor, vitreous humor, lens, cornea, optic nerve"
                    ]
                },
                {
                    title: "Species",
                    bullets: [
                        "Rat, Mice",
                        "Rabbit",
                        "Guinea Pig",
                        "Pig, Dog (3rd Party Collaboration)"
                    ]
                }
            ]}
        />
    );
}
