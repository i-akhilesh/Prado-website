import { FaShieldAlt } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServiceBiocompatibility() {
    return (
        <ServiceDetailLayout
            title="Biocompatibility"
            subtitle="Medical Device Safety Testing"
            intro="ISO 10993 compliant biocompatibility testing for medical devices, ensuring absolute patient safety across global regulatory markets. PRADO delivers comprehensive testing programs that support CE marking, FDA 510(k), and PMA submissions."
            image="/images/services/biocompatibility.png"
            icon={<FaShieldAlt />}
            subServices={[
                {
                    title: "Genotoxicity Test (ISO 10993:3, OECD)",
                    bullets: [
                        "Gene mutations in bacteria (GL 471)",
                        "Gene mutations in mammalian cells (GL 476)",
                        "Clastogenicity in mammalian cells (GL 473)",
                        "Mouse Micronucleus test (GL 474)",
                        "Metaphase analysis - rodent bone marrow (GL 475)"
                    ]
                },
                {
                    title: "In Vitro Cytotoxicity Test (ISO 10993:5)",
                    bullets: [
                        "Extract Elution test"
                    ]
                },
                {
                    title: "Hemocompatibility Studies (ISO 10993:4)",
                    bullets: [
                        "In vivo thrombosis",
                        "In vitro hemolysis (ASTM F756-17)",
                        "Coagulation and Platelet",
                        "Complement activation"
                    ]
                },
                {
                    title: "Implantation Studies (ISO 10993:6)",
                    bullets: [
                        "Sub-cutaneous implantation",
                        "Intra-muscular implantation",
                        "Bone implantation"
                    ]
                },
                {
                    title: "Systemic Toxicity (ISO 10993:11)",
                    bullets: [
                        "Acute systemic toxicity",
                        "Repeated dose (14, 28, 90 day) toxicity studies",
                        "Chronic toxicity"
                    ]
                },
                {
                    title: "Irritation Studies (ISO 10993:10)",
                    bullets: [
                        "Mucosal Irritation (ocular, penile, vaginal, rectal, oral)",
                        "Skin Irritation / intracutaneous reactivity test"
                    ]
                },
                {
                    title: "Skin Sensitization (ISO 10993:10)",
                    bullets: [
                        "GPMT",
                        "Buehler Test"
                    ]
                },
                {
                    title: "Special Customized studies",
                    bullets: [
                        "Sub-acute (28 day) or Sub-chronic (90 day) cum implantation studies (clinical, gross and histopathology)"
                    ]
                }
            ]}
        />
    );
}
