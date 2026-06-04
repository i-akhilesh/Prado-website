import { FaArchive } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityArchives() {
    const glob = import.meta.glob('/public/images/facilities/archives/*.{png,jpg,jpeg,webp,mp4}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob).map(path => path.replace(/^\/public/, ''));

    return (
        <FacilityDetailLayout
            title="Archives"
            subtitle="Secure Long-Term GLP Storage"
            galleryImages={galleryImages}
            intro="PRADO's GLP Archive Facility (ARC) provides secure, controlled, and long-term storage of all study materials, including raw data, study protocols, specimen slides, wet tissues, and final reports. Engineered to protect study integrity for 15+ years in full compliance with OECD GLP and FDA regulations."
            image="/images/facilities/archives.png"
            icon={<FaArchive />}
            stats={[
                { value: '15+ Yrs', label: 'Retainment' },
                { value: 'Dual', label: 'Backup Vaults' },
                { value: '21 CFR', label: 'Part 11 Compliant' },
                { value: '24/7', label: 'Biometric Security' },
            ]}
        >
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                <p>
                    PRADO has created separate and ample space for Wet and Dry Archives. These are suitably designed and constructed to accommodate archived records and material. The safe and secure storage of the facility and study related data are ensured through strict compliance with SOPs and OECD principles of GLP.
                </p>
                <p>
                    Archives are physically secured to prevent unauthorised entry. Storage conditions of archives are maintained to preserve the quality and integrity of retained records from untimely deterioration and risk of fire. The indexing system is followed for the proper storage and retrieval of materials. The movement of material in and out of the archives is properly controlled and well-documented.
                </p>
                <p>
                    All the soft data is stored securely in separate folder maintained on server with secure back-up protocols.
                </p>
            </div>
        </FacilityDetailLayout>
    );
}
