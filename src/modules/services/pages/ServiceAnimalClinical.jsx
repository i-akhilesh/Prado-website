import { FaPaw } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServiceAnimalClinical() {
    return (
        <ServiceDetailLayout
            title="Animal Clinical"
            subtitle="Veterinary Product Evaluation"
            intro="PRADO conducts dedicated field clinical trials for veterinary products, assessing their efficacy and safety in real-world conditions. Our collaborative network and diverse species capabilities make us a trusted partner for veterinary pharma and agri-biotech companies."
            image="/images/services/animal-clinical.png"
            icon={<FaPaw />}
            subServices={[
                {
                    title: "Animal Clinical / Field Trials",
                    bullets: [
                        "Dedicated expertise to conduct Animal Clinical trials of veterinary products for Efficacy and safety evaluation.",
                        "Diverse target species- Dogs, Cattle, Sheep, Goats, Poultry etc., as per sponsor requirements.",
                        "Collaboration with veterinary clinics and farms.",
                        "Prior permissions from the Central Drugs Standard Control Organization (CDSCO).",
                        "Adherence to Good Clinical Practice wherever possible.",
                        "Aptly drafted Protocols and draft report based on species, age, breed, and sex of animal.",
                        "PRADO - Your trusted partner ensuring highest standards of quality towards regulatory acceptance."
                    ]
                }
            ]}
        />
    );
}
