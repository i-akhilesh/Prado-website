import { FaMicroscope } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityPathology() {
    const glob = import.meta.glob('/public/images/facilities/pathology/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = [
        ...Object.values(glob).map(path => path.replace(/^\/public/, '')),
        '/images/facilities/pathology/Histo Clip 3_1.mp4',
        '/images/facilities/pathology/histo clip3.mp4',
        '/images/facilities/pathology/Histo clip 1.mp4',
        '/images/facilities/pathology/Urine Analysis.mp4',
        '/images/facilities/pathology/Histo Clip 2.mp4',
        '/images/facilities/pathology/CC Clip 5.mp4',
        '/images/facilities/pathology/Histto Clip 4.mp4',
        '/images/facilities/pathology/Hemats.mp4'
    ];

    return (
        <FacilityDetailLayout
            title="Pathology"
            subtitle="Tissue Analysis Lab"
            galleryImages={galleryImages}
            intro="PRADO's Pathology Laboratory delivers comprehensive evaluation of biological samples through expert histopathology, immunohistochemistry, and clinical pathology services — all interpreted by certified veterinary pathologists to support toxicology and pharmacology study."
            image="/images/facilities/pathology.png"
            icon={<FaMicroscope />}
            // stats={[
            //     { value: 'GLP', label: 'Compliant' },
            //     { value: 'H&E', label: 'Routine Staining' },
            //     { value: 'IHC', label: 'Biomarker Detection' },
            //     { value: 'Special', label: 'Staining' },
            // ]}
            features={[
                {
                    title: 'Clinical Pathology',
                    description: 'Comprehensive laboratory analysis of biological fluids using fully automated haematology and chemistry analysers.',
                    bullets: [
                    
                    ]
                },
                {
                    title: 'Necropsy & Gross Pathology',
                    description: 'Systematic, thorough macroscopic examination of all organ systems following study completion, performed by trained pathology staff.',
                    bullets: [
                    
                    ]
                },
                {
                    title: 'Histopathology',
                    description: 'Microscopic tissue analysis using a comprehensive suite of staining methods to detect and characterize cellular and structural pathology.',
                    bullets: [
                        
                    ]
                },
                {
                    title: 'Immunohistochemistry (IHC)',
                    description: 'Antibody-based detection of specific antigens in tissue sections for biomarker quantification and disease diagnosis.',
                    bullets: [
                        
                    ]
                },
            ]}
        >
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                <p>
                    PRADO's Pathology Laboratory provides comprehensive tissue and fluid analysis services. Our certified veterinary pathologists and trained technicians conduct detailed necropsies, macroscopic scoring, and microscopic evaluation of biological samples.
                </p>
                <p>
                    The facility is fully equipped to support safety and efficacy studies with routine histopathology, special staining, and immunohistochemistry. We maintain high standards of quality and rapid turnaround times to deliver reliable diagnostic data for all toxicology and pharmacology investigations.
                </p>
            </div>
        </FacilityDetailLayout>
    );
}
