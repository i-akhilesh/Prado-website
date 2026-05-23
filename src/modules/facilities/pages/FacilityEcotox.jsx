import { FaLeaf } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityEcotox() {
    const glob = import.meta.glob('/src/assets/images/facilities/ecotox/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob);

    return (
        <FacilityDetailLayout
            title="Ecotoxicology"
            subtitle="Environmental Safety Testing"
            galleryImages={galleryImages}
            intro="PRADO's Ecotoxicology Facility (ECOTOX) conducts comprehensive environmental risk assessments on pharmaceuticals, agrochemicals, and industrial chemicals. We evaluate potential hazards to aquatic and terrestrial ecosystems in strict compliance with GLP and OECD guidelines."
            image="/src/assets/images/img-home-strength-3.png"
            icon={<FaLeaf />}
            stats={[
                { value: '100%', label: 'GLP Compliant' },
                { value: 'OECD', label: 'Guidelines Met' },
                { value: 'Aquatic', label: 'Ecosystems' },
                { value: 'Soil', label: 'Ecosystems' },
            ]}
            features={[
                {
                    title: 'Aquatic Ecotoxicology',
                    description: 'Testing chemical impact on vital aquatic organisms across different trophic levels to determine acute and chronic toxicity values.',
                    bullets: [
                        'Fish Acute Toxicity (OECD 203) & Chronic tests',
                        'Daphnia magna Immobilisation & Reproduction studies (OECD 202/211)',
                        'Freshwater Alga and Cyanobacteria Growth Inhibition (OECD 201)',
                        'Lemna gibba (Duckweed) Growth Inhibition studies',
                    ]
                },
                {
                    title: 'Terrestrial & Soil Ecotoxicology',
                    description: 'Evaluating hazards posed to soil organisms and beneficial terrestrial fauna essential for agriculture and soil health.',
                    bullets: [
                        'Earthworm Acute & Reproduction toxicity assays (OECD 207/222)',
                        'Soil Microorganism Nitrogen & Carbon Transformation tests (OECD 216/217)',
                        'Honeybee Acute Oral & Contact toxicity studies (OECD 213/214)',
                        'Terrestrial Non-Target Plants Seedling Emergence assays (OECD 208)',
                    ]
                },
                {
                    title: 'Biodegradability & Fate',
                    description: 'Analyzing environmental persistence, degradation pathways, and potential bioaccumulation of active ingredients.',
                    bullets: [
                        'Ready Biodegradability testing (OECD 301 series)',
                        'Adsorption / Desorption using batch equilibrium method (OECD 106)',
                        'Partition Coefficient determinations (OECD 107/117)',
                    ]
                },
                {
                    title: 'Environmental Risk Assessment (ERA)',
                    description: 'Comprehensive risk assessments utilizing study data to compile environmental safety reports for global regulatory submissions.',
                }
            ]}
        />
    );
}
