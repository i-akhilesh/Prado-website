import { FaSeedling } from 'react-icons/fa';
import IndustryDetailLayout from '../components/IndustryDetailLayout';

export default function IndustryAgrochemicals() {
    const cards = [
        {
            title: "Acute Toxicity Studies (Six Pack)",
            bullets: [
                "Acute Oral Toxicity Study in Rats",
                "Acute Oral Toxicity Study in Mice",
                "Acute Dermal Toxicity in Rats",
                "Acute Eye Irritation Study in Rabbits",
                "Acute Skin Irritation Study in Rabbits",
                "Acute Inhalation Study in Rats",
                "Guinea Pig Maximization Test (GPMT) / Buhler Sensitization Test."
            ]
        },
        {
            title: "Repeated Dose & Chronic Studies",
            bullets: [
                "Sub-acute (28-Day) Toxicity Study in Rodents and Non-Rodents.",
                "Sub-chronic (90-Day) Toxicity Studies in Rodents.",
                "Chronic (180-Day) Toxicity Studies in Rodents."
            ]
        },
        {
            title: "Genetic & Developmental Toxicology",
            bullets: [
                "Genetic toxicology studies (Ames Assay; Micronucleus Test and Chromosomal Aberration Test).",
                "Reproductive Toxicity Studies including Male and Female Fertility Study.",
                "Developmental Toxicity / Teratology studies in rats and rabbits."
            ]
        }
    ];

    return (
        <IndustryDetailLayout
            title="Agrochemicals"
            subtitle="CIBRC Regulatory Safety Testing"
            intro="At PRADO, we understand the need for accurate and reliable data for regulatory submissions such as those of the Central Insecticide Board. As your development partner, we will work side-by-side with you and offer you with the following range of toxicology services to enable you to provide adequate assurances for development of your agrochemical products."
            image="/images/facilities/ecotox.png"
            icon={<FaSeedling />}
            cards={cards}
        />
    );
}
