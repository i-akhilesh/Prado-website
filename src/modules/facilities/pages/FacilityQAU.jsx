import { FaClipboardCheck } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityQAU() {
    const glob = import.meta.glob('/public/images/facilities/qau/*.{png,jpg,jpeg,webp,mp4}', { eager: true, query: '?url', import: 'default' });
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
        >
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                    Quality Assurance Unit (QAU) at PRADO
                </h3>
                <p>
                    All studies and experiments that are conducted at PRADO’s test facility are governed by a Quality Assurance Program. The Quality Assurance Unit (QAU) is a separate department with its systems and personnel who are experienced, qualified and trained to assure the test facility management on compliance with GLP principles. The unit functions in accordance with the requirements of OECD principles of GLP.
                </p>
                <p>
                    It is responsible for ensuring that the quality assurance program is independently monitored for effectiveness and compliance. It conducts, study-based, facility-based and process-based inspections, as per the standard operating procedures (SOPs).
                </p>
                <p>
                    QAU periodically reviews all SOPs, study plans, reports, master schedules for adequacy and effectiveness. It also conducts vendor qualification on a periodic basis and follows up for actions on any non-compliances observed.
                </p>
            </div>
        </FacilityDetailLayout>
    );
}
