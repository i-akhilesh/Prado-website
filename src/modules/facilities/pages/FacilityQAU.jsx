import { FaClipboardCheck } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityQAU() {
    const glob = import.meta.glob('/public/images/facilities/qau/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob).map(path => path.replace(/^\/public/, ''));

    return (
        <FacilityDetailLayout
            title="Quality Assurance Unit"
            subtitle="GLP Compliance & Audit"
            galleryImages={galleryImages}
            intro="PRADO's Quality Assurance Unit (QAU) is an independent body that ensures every study conducted at our facility rigorously conforms to Good Laboratory Practice (GLP) principles and international regulatory requirements. Absolute data integrity starts here."
            image="/images/facilities/qau.png"
            icon={<FaClipboardCheck />}
            stats={[
                { value: 'GLP', label: 'Certified' },
                { value: '100%', label: 'Study Coverage' },
                { value: 'FDA', label: 'Acceptable' },
                { value: 'OECD', label: 'Guidelines' },
            ]}
            features={[
                {
                    title: 'Study & Facility Audits',
                    description: 'The QAU conducts scheduled and unscheduled audits of all ongoing studies and facility operations to ensure continuous GLP compliance.',
                    bullets: [
                        'Protocol and amendment review before study start',
                        'Experimental phase audits (critical phase inspections)',
                        'Final report review and data verification',
                        'Raw data traceability audits',
                    ]
                },
                {
                    title: 'SOP Management',
                    description: 'Comprehensive Standard Operating Procedure (SOP) library management ensuring all procedures are documented, version-controlled, and staff-trained.',
                    bullets: [
                        'SOP writing, review, and periodic revision',
                        'Version control and access management',
                        'Training record management per SOP',
                    ]
                },
                {
                    title: 'Deviation & CAPA Management',
                    description: 'Systematic tracking and resolution of GLP deviations through a structured Corrective and Preventive Action (CAPA) process.',
                },
                {
                    title: 'Regulatory Inspection Support',
                    description: 'The QAU prepares all documentation and coordinates facility operations during regulatory agency inspections (CDSCO, OECD, sponsor audits).',
                    bullets: [
                        'Pre-inspection gap assessments',
                        'Inspection coordination and documentation management',
                        'Post-inspection response preparation',
                    ]
                },
                {
                    title: 'Sponsor Audit Facilitation',
                    description: 'Full facilitation of sponsor-conducted facility audits, including scheduling, documentation provision, tour arrangements, and response to audit findings.',
                },
                {
                    title: 'Training & Certification',
                    description: 'The QAU oversees all GLP training programs, ensuring that every staff member is certified, current in their training, and operating within their qualified scope.',
                }
            ]}
        />
    );
}
