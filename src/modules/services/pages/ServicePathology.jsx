import { FaMicroscope } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServicePathology() {
    return (
        <ServiceDetailLayout
            title="Pathology"
            subtitle="Disease & Tissue Analysis"
            intro="Our Pathology Services provide comprehensive evaluation and interpretation of biological samples to support toxicology, pharmacology, and clinical studies. All interpretations are handled by board-certified veterinary and anatomic pathologists."
            image="/src/assets/images/img-facility-path-1.png"
            icon={<FaMicroscope />}
            subServices={[
                {
                    title: "Pathology Services",
                    bullets: [
                        "Necropsy, Gross Pathology, Histopathology",
                        "Immunohistochemistry",
                        "Hematoxylin and Eosin (H & E) Staining and Special Staining (as per requirement)",
                        "Clinical Pathology",
                        "Hematology, Clinical Chemistry, ELISA",
                        "Urinalysis"
                    ]
                }
            ]}
        />
    );
}
