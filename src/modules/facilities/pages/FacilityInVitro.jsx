import { FaFlask } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityInVitro() {
    const glob = import.meta.glob('/src/assets/images/facilities/in-vitro/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob);

    return (
        <FacilityDetailLayout
            title="In Vitro Facility"
            subtitle="Cell-Based Research & Archives"
            galleryImages={galleryImages}
            intro="PRADO's In Vitro Facility houses a state-of-the-art cell biology laboratory supporting a broad portfolio of in vitro assays for cytotoxicity, genotoxicity, efficacy, and pharmacological studies — alongside a GLP-compliant archives system for long-term data and sample retention."
            image="/src/assets/images/img-home-gallery-3.png"
            icon={<FaFlask />}
            stats={[
                { value: 'BSL-2', label: 'Biosafety Level' },
                { value: 'GLP', label: 'Compliant' },
                { value: 'CO₂', label: 'Incubators' },
                { value: '25yr', label: 'Archive Retention' },
            ]}
            features={[
                {
                    title: 'Cell Culture Laboratory',
                    description: 'Fully equipped BSL-2 cell biology laboratory for primary cell and cell line maintenance, passaging, and experimental work.',
                    bullets: [
                        'Class II Type A2 biosafety cabinets',
                        'CO₂ incubators with precise humidity and temperature control',
                        'Liquid nitrogen cryogenic storage for cell banking',
                        'Sterile media preparation and quality testing',
                    ]
                },
                {
                    title: 'In Vitro Cytotoxicity Assays',
                    description: 'Validated cell viability and proliferation assays used across toxicology, pharmacology, and biocompatibility testing programs.',
                    bullets: [
                        'MTT, WST-1, and ATP luminescence assays',
                        'Trypan Blue exclusion and haemocytometry',
                        'LDH release cytotoxicity assays',
                    ]
                },
                {
                    title: 'Genotoxicity In Vitro Assays',
                    description: 'Regulatory-compliant in vitro genotoxicity studies providing key data for early hazard identification.',
                    bullets: [
                        'Micronucleus test in human lymphocytes',
                        'In vitro Chromosomal Aberration Assay',
                        'Mammalian Gene Mutation Assay (L5178Y cells)',
                        'Comet assay (single cell gel electrophoresis)',
                    ]
                },
                {
                    title: 'GLP-Compliant Archives',
                    description: 'Temperature- and humidity-controlled secure archive for the long-term retention of raw data, final reports, study plans, audit certificates, and biological samples.',
                    bullets: [
                        'Study documentation for 15–25 years retention',
                        'Biological sample (wet archive) storage',
                        'Indexed retrieval system for rapid document access',
                        'Restricted access with electronic audit trail',
                    ]
                },
            ]}
        />
    );
}
