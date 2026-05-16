import { FaServer } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityIT() {
    const glob = import.meta.glob('/src/assets/images/facilities/it/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob);

    return (
        <FacilityDetailLayout
            title="Information Technology"
            subtitle="Digital Infrastructure & Data Security"
            galleryImages={galleryImages}
            intro="PRADO's Information Technology department provides a secure, validated, and reliable digital infrastructure that underpins the integrity of all preclinical research data across the organization — from laboratory instruments to regulatory submission systems."
            image="/src/assets/images/img-home-strength-2.png"
            icon={<FaServer />}
            stats={[
                { value: '99.9%', label: 'System Uptime' },
                { value: '21 CFR', label: 'Part 11 Compliant' },
                { value: 'RAID', label: 'Redundant Storage' },
                { value: 'AES-256', label: 'Encryption' },
            ]}
            features={[
                {
                    title: '21 CFR Part 11 Compliant Systems',
                    description: 'All electronic laboratory systems (LIMS, instrument data systems, document management) are validated and operated in compliance with FDA 21 CFR Part 11 and ICH Q10 requirements.',
                    bullets: [
                        'Audit trail integrity for all electronic records',
                        'Role-based access controls (RBAC)',
                        'Electronic signatures with unique user authentication',
                        'System validation qualification (IQ/OQ/PQ)',
                    ]
                },
                {
                    title: 'Laboratory Information Management System (LIMS)',
                    description: 'A centralized, GLP-compliant LIMS platform manages sample tracking, analytical data capture, and result reporting across all laboratory departments.',
                },
                {
                    title: 'Data Backup & Disaster Recovery',
                    description: 'Automated, encrypted data backup systems with offsite mirroring and a tested disaster recovery plan ensure business continuity and zero data loss.',
                    bullets: [
                        'Daily incremental and full weekly backups',
                        'Offsite encrypted cloud backup',
                        'RPO < 4 hours, RTO < 8 hours disaster recovery targets',
                    ]
                },
                {
                    title: 'Network & Cybersecurity',
                    description: 'Enterprise-grade network infrastructure with layered cybersecurity controls protecting all research and clinical data from unauthorized access.',
                    bullets: [
                        'Firewall, IDS/IPS, and endpoint protection',
                        'VPN for secure remote access',
                        'Annual penetration testing and security audits',
                    ]
                },
                {
                    title: 'Instrument Integration & Data Integrity',
                    description: 'Direct instrument-to-system data capture eliminates manual transcription errors, ensuring the highest standards of data integrity throughout the analytical workflow.',
                },
                {
                    title: 'IT Helpdesk & System Support',
                    description: 'Dedicated IT support ensures that all systems remain operational, validated, and responsive during critical study phases.',
                }
            ]}
        />
    );
}
