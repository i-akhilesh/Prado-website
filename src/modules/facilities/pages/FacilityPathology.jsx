import { FaMicroscope } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityPathology() {
    const glob = import.meta.glob('/images/facilities/pathology/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob);

    return (
        <FacilityDetailLayout
            title="Pathology"
            subtitle="Disease & Tissue Analysis Lab"
            galleryImages={galleryImages}
            intro="PRADO's Pathology Laboratory delivers comprehensive evaluation of biological samples through expert histopathology, immunohistochemistry, and clinical pathology services — all interpreted by certified veterinary pathologists to support every toxicology and pharmacology study."
            image="/images/img-home-strength-2.png"
            icon={<FaMicroscope />}
            stats={[
                { value: 'GLP', label: 'Compliant' },
                { value: 'H&E', label: 'Routine Staining' },
                { value: 'IHC', label: 'Biomarker Detection' },
                { value: '48hr', label: 'Slide Turnaround' },
            ]}
            features={[
                {
                    title: 'Necropsy & Gross Pathology',
                    description: 'Systematic, thorough macroscopic examination of all organ systems following study completion, performed by trained pathology staff.',
                    bullets: [
                        'Organ weight measurements (all major organs)',
                        'Standardized gross lesion scoring and documentation',
                        'Digital photographic archiving of all gross findings',
                    ]
                },
                {
                    title: 'Histopathology',
                    description: 'Microscopic tissue analysis using a comprehensive suite of staining methods to detect and characterize cellular and structural pathology.',
                    bullets: [
                        'Routine Haematoxylin & Eosin (H&E)',
                        'Specialized stains: PAS, Masson\'s Trichrome, Alcian Blue, Sudan IV, Oil Red O',
                        'Digital slide scanning and image analysis',
                        'Peer review by qualified pathologists',
                    ]
                },
                {
                    title: 'Immunohistochemistry (IHC)',
                    description: 'Antibody-based detection of specific antigens in tissue sections for biomarker quantification and disease diagnosis.',
                    bullets: [
                        'Standard and custom antibody panels',
                        'Quantitative IHC scoring (H-score, Allred score)',
                        'Adjacent normal tissue controls',
                    ]
                },
                {
                    title: 'Clinical Pathology',
                    description: 'Comprehensive laboratory analysis of biological fluids using fully automated haematology and chemistry analysers.',
                    bullets: [
                        'Haematology (CBC, differential, reticulocyte count, coagulation)',
                        'Clinical chemistry (30+ serum biochemical markers)',
                        'ELISA and immunological assays',
                        'Urinalysis (dipstick, microscopy, volume, specific gravity)',
                    ]
                },
            ]}
        />
    );
}
