import { FaFlask } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityInVitro() {
    const glob = import.meta.glob('/public/images/facilities/in-vitro/*.{png,jpg,jpeg,webp,mp4}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob).map(path => path.replace(/^\/public/, ''));

    return (
        <FacilityDetailLayout
            title="In Vitro Facility"
            subtitle="Cell-Based Research & Archives"
            galleryImages={galleryImages}
            intro="PRADO's In Vitro Facility houses a state-of-the-art cell biology laboratory supporting a broad portfolio of in vitro assays for cytotoxicity, genotoxicity, efficacy, and pharmacological studies — alongside a GLP-compliant archives system for long-term data and sample retention."
            image="/images/facilities/in-vitro.png"
            icon={<FaFlask />}
            stats={[
                { value: 'BSL-2', label: 'Biosafety Level' },
                { value: 'GLP', label: 'Compliant' },
                { value: 'CO₂', label: 'Incubators' },
                { value: '25yr', label: 'Archive Retention' },
            ]}
        >
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                <p>
                    The in-vitro laboratories at PRADO are spread over 600 sqft and are designed for carrying out genotoxicity and biocompatibility studies, including cytotoxicity studies. 
                </p>
                <p>
                    Modern instruments such as biosafety cabinets, CO₂ incubators, inverted microscopes, and advanced plate readers are used.
                </p>
                <p>
                    The facility is GLP certified for genotoxicity studies. The process for getting ISO certification for biocompatibility studies is in progress.
                </p>
            </div>
        </FacilityDetailLayout>
    );
}
