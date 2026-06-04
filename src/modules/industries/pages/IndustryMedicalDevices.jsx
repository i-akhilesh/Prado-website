import { FaStethoscope } from 'react-icons/fa';
import IndustryDetailLayout from '../components/IndustryDetailLayout';

export default function IndustryMedicalDevices() {
    const cards = [
        {
            title: "Core Biocompatibility & Irritation",
            bullets: [
                "Cytotoxicity Tests.",
                "Device implantation in various sites.",
                "Evaluation of Irritation potential at various sites.",
                "Evaluation of allergic or sensitization potential."
            ]
        },
        {
            title: "Specialized Compatibility & Toxicity",
            bullets: [
                "Hemocompatibility testing.",
                "Phototoxicity testing.",
                "Reproductive toxicity testing."
            ]
        },
        {
            title: "Genetic & Systemic Toxicology",
            bullets: [
                "Genetic Toxicity testing.",
                "Systemic Acute, subacute, sub-chronic and chronic toxicity studies."
            ]
        }
    ];

    return (
        <IndustryDetailLayout
            title="Medical Devices"
            subtitle="ISO 10993 Biocompatibility Evaluations"
            intro="The determination of the safety or biocompatibility of a device in a biological host environment is critical step in the development of an entire range of implants and devices that are needed for both disease management as well as for enhancing biological performance of organs. PRADO has developed expertise to design and conduct evaluations to determine the ability of a medical device to perform safely within any appropriate host environment's response in a given application."
            image="/images/facilities/in-vitro.png"
            icon={<FaStethoscope />}
            cards={cards}
        />
    );
}
