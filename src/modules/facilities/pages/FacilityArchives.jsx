import { FaArchive } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityArchives() {
    const glob = import.meta.glob('/public/images/facilities/archives/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
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
            features={[
                {
                    title: 'Climate-Controlled Environments',
                    description: 'State-of-the-art climate control systems maintaining constant temperature and relative humidity optimized for different media types.',
                    bullets: [
                        'Paper records and raw data archives (controlled temperature/humidity)',
                        'Histopathology blocks, slides, and specimen storage',
                        'Refrigerated and deep-frozen wet tissue storage capabilities',
                        'Continuous logging of environment parameters with alert integration',
                    ]
                },
                {
                    title: 'Multi-Tiered Safety & Security',
                    description: 'Built-in structural and physical safeguards to prevent access by unauthorized personnel and protect against environmental disasters.',
                    bullets: [
                        'Biometric access control systems and authorized-personnel logs',
                        'Clean-agent gas fire suppression system (non-damaging to documents)',
                        'Flood-resistant elevated archiving racks',
                        '24/7 internal and external CCTV monitoring',
                    ]
                },
                {
                    title: 'Systematic Indexing & Retrieval',
                    description: 'Meticulous cataloging systems enabling rapid, secure retrieval of archived studies during regulatory audits or sponsor queries.',
                    bullets: [
                        'Barcoded labeling for all folders, boxes, slides, and blocks',
                        'Restricted checkout protocols with electronic logging',
                        'Archivist-guided chain of custody tracking',
                    ]
                },
                {
                    title: 'Electronic Data Archiving',
                    description: 'Secure, digital long-term storage for instrument raw data, metadata, and electronic signatures, fully adhering to 21 CFR Part 11 requirements.',
                }
            ]}
        />
    );
}
