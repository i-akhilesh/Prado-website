import { FaLeaf } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServiceEcotoxicological() {
    return (
        <ServiceDetailLayout
            title="Ecotoxicological"
            subtitle="Environmental Safety Testing"
            intro="PRADO's Ecotoxicological Services evaluate the impact of pharmaceuticals, agrochemicals, and industrial chemicals on environmental organisms. Our studies meet OECD guideline requirements for global regulatory submissions."
            image="/images/services/ecotox.png"
            icon={<FaLeaf />}
            subServices={[
                {
                    title: "Other Aquatic and Terrestrial Studies",
                    bullets: [
                        "Daphnia Reproduction Test",
                        "Earthworm Reproduction Toxicity Test",
                        "Avian Dietary Toxicity Test",
                        "Honey bee oral chronic Toxicity Test"
                    ]
                },
                {
                    title: "Acute Aquatic and Terrestrial Studies",
                    bullets: [
                        "Alga Growth Inhibition Test",
                        "Acute Daphnia Immobilisation Test",
                        "Acute Fish Toxicity Tests",
                        "Acute Honey Bee Contact Toxicity Test",
                        "Acute Honey Bee Oral Toxicity Test",
                        "Acute Earthworm Toxicity Test",
                        "Acute Avian Oral Toxicity"
                    ]
                }
            ]}
        />
    );
}
