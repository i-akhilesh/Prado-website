import { FaVial } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServiceToxicology() {
    return (
        <ServiceDetailLayout
            title="Toxicology"
            subtitle="Safety Assessment Studies"
            intro="We offer a full range of GLP-compliant toxicology studies to assess the safety of pharmaceuticals, chemicals, and medical devices. Delivering reliable, regulatory-accepted data since 2010."
            image="/src/assets/images/img-facility-tox-1.png"
            icon={<FaVial />}
            subServices={[
                {
                    title: "Acute toxicity Studies (including 6 Pack)",
                    bullets: [
                        "Single-Dose Toxicity Study in Rodents",
                        "Acute Eye Irritation study",
                        "Acute Dermal Toxicity",
                        "Acute Skin sensitization study",
                        "Guinea Pig Maximization study",
                        "Acute Systemic toxicity study",
                        "Acute Inhalation toxicity study"
                    ]
                },
                {
                    title: "Repeated Dose toxicity Studies",
                    bullets: [
                        "7-14-Day Repeat Dose Toxicity Study",
                        "28-Day Repeat Dose Toxicity Study",
                        "90-Day Repeat Dose Toxicity Study",
                        "180-Day Chronic Toxicity Study",
                        "Repeat Dose Inhalation Studies"
                    ]
                },
                {
                    title: "Genetic Toxicity Studies",
                    bullets: [
                        "Reverse Mutation Assay (Ames Assay)",
                        "Micronucleus Test (MNT)",
                        "Chromosomal Aberration Assay",
                        "In vitro mammalian gene mutation assay"
                    ]
                },
                {
                    title: "Developmental & Reproductive Toxicology",
                    description: "Species: Rat, Mice, Rabbit, Guinea Pig, (Pig, Dog (3rd Party Collaboration))",
                    bullets: [
                        "Extended One Generation Reproductive Study in rats (EOGRT)",
                        "Embryo Foetal Development Study in Rodents and Rabbits",
                        "Male and Female Fertility Study"
                    ]
                },
                {
                    title: "Risk Assessment",
                    description: "PDE, OEL, AI Calculations and review of reports"
                },
                {
                    title: "Immunogenicity studies",
                    bullets: [
                        "Immunogenicity studies in lab animals",
                        "Detection of specific and neutralizing antibodies.",
                        "Detection of cellular immune responses.",
                        "Bio distribution studies."
                    ]
                },
                {
                    title: "Ecotoxicology Studies",
                    bullets: [
                        "Fresh Water Alga Growth Inhibition Test",
                        "Acute Immobilisation Daphnia",
                        "Acute Fish Toxicity Test",
                        "Acute Earthworm Toxicity Test",
                        "Acute Honeybee Contact Toxicity Test",
                        "Acute Honeybee Oral Toxicity Test",
                        "Avian Acute Oral Toxicity Test"
                    ]
                }
            ]}
        />
    );
}
