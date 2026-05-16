import { FaFolderOpen } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityDocumentControl() {
    const glob = import.meta.glob('/src/assets/images/facilities/document-control/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob);

    return (
        <FacilityDetailLayout
            title="Document Control"
            subtitle="Records Management & Traceability"
            galleryImages={galleryImages}
            intro="PRADO's Document Control department is the backbone of the organization's regulatory compliance infrastructure. It ensures that all controlled documents — from study plans and raw data to final reports and SOPs — are managed, versioned, and traceable with absolute rigor."
            image="/src/assets/images/img-home-strength-3.png"
            icon={<FaFolderOpen />}
            stats={[
                { value: 'GLP', label: 'Compliant' },
                { value: '25yr', label: 'Retention Period' },
                { value: '100%', label: 'Traceability' },
                { value: 'ISO', label: 'Document Standards' },
            ]}
            features={[
                {
                    title: 'Controlled Document Management',
                    description: 'All controlled documents (SOPs, study plans, protocols, amendments, and final reports) are managed through a structured lifecycle from draft to archival.',
                    bullets: [
                        'Unique document numbering and version control',
                        'Review and approval workflows with e-signature',
                        'Obsolete document retrieval and archival',
                        'Master document register maintained at all times',
                    ]
                },
                {
                    title: 'Study File Management',
                    description: 'Comprehensive management of all study-specific documentation from initiation through final archival, ensuring GLP traceability for every data point.',
                    bullets: [
                        'Study initiation documentation (study plan, sponsor contract)',
                        'Raw data collection and custody management',
                        'Amendment and deviation documentation',
                        'Final report compilation and sponsor delivery',
                    ]
                },
                {
                    title: 'SOP Library Administration',
                    description: 'Administration of the complete PRADO SOP library, including periodic review scheduling, staff training notifications, and training record maintenance.',
                },
                {
                    title: 'Regulatory Submissions Support',
                    description: 'Preparation and formatting of study documentation packages for regulatory submissions, sponsor audits, and CDSCO/OECD inspections.',
                    bullets: [
                        'Common Technical Document (CTD) module preparation',
                        'OECD GLP fact sheet and GLP compliance statements',
                        'Study summary and tabulation preparation',
                    ]
                },
                {
                    title: 'Electronic Records & Archiving',
                    description: 'Secure electronic document management system (EDMS) with role-based permissions, audit trails, and automated retention scheduling.',
                    bullets: [
                        'Scan-to-archive workflows for paper records',
                        'Automated access logging and retrieval records',
                        'Encrypted backup of all archived records',
                    ]
                },
                {
                    title: 'Document Retrieval & Confidentiality',
                    description: 'Fast, secure retrieval of any study document on request, with strict confidentiality agreements (CDA/NDA) ensuring sponsor data protection at all times.',
                }
            ]}
        />
    );
}
