import { FaBoxOpen } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityTICO() {
    const glob = import.meta.glob('/src/assets/images/facilities/tico/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob);

    return (
        <FacilityDetailLayout
            title="Test Item Control Office"
            subtitle="Receipt · Storage · Accountability"
            galleryImages={galleryImages}
            intro="PRADO's Test Item Control Office (TICO) provides meticulous management of all test and reference items from initial receipt through final disposition — ensuring regulatory traceability, sample integrity, and complete accountability at every step."
            image="/src/assets/images/img-home-about.png"
            icon={<FaBoxOpen />}
            stats={[
                { value: '100%', label: 'Chain of Custody' },
                { value: 'GLP', label: 'Documentation' },
                { value: '-80°C', label: 'Cold Storage' },
                { value: '24/7', label: 'Secure Access' },
            ]}
            features={[
                {
                    title: 'Receipt & Intake Verification',
                    description: 'Comprehensive verification of all incoming test articles including identity, quantity, condition, and compliance with sponsor shipping requirements.',
                    bullets: [
                        'Visual inspection and condition documentation',
                        'Certificate of Analysis (CoA) review',
                        'Batch number and expiry date logging',
                        'Sponsor notification on receipt',
                    ]
                },
                {
                    title: 'Controlled Storage',
                    description: 'Purpose-dedicated storage facilities maintain the stability and integrity of test items under specified conditions throughout the study period.',
                    bullets: [
                        'Ambient, refrigerated (+2 to +8°C), and frozen (-20°C / -80°C) storage',
                        'Continuous temperature monitoring with automated alerts',
                        'Segregated storage per study to prevent mix-ups',
                        'Flammable/hazardous material storage compliance',
                    ]
                },
                {
                    title: 'Dispensing & Aliquoting',
                    description: 'Accurate dispensing of test items for dosing preparations with full documentation of quantities removed, weights, and personnel responsible.',
                },
                {
                    title: 'Accountability Records',
                    description: 'Complete test-item accountability ledgers tracking every movement — from receipt to use to final disposition — as required by GLP regulations.',
                    bullets: [
                        'Item-level accountability log for every study',
                        'Sponsor-signed chain-of-custody documentation',
                        'Retained sample management',
                    ]
                },
                {
                    title: 'Stability Monitoring',
                    description: 'Routine formulation and concentration verification analyses to confirm test item stability throughout the study duration.',
                },
                {
                    title: 'Final Disposition',
                    description: 'Systematic and documented disposal or return of unused test articles in accordance with regulation, sponsor instructions, and environmental safety standards.',
                }
            ]}
        />
    );
}
