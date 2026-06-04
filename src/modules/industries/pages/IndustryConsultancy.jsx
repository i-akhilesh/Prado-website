import { FaComments } from 'react-icons/fa';
import IndustryDetailLayout from '../components/IndustryDetailLayout';

export default function IndustryConsultancy() {
    const cards = [
        {
            title: "Regulatory Strategy",
            bullets: [
                "Tailored regulatory pathways for global submissions (FDA, EMA, PMDA, CDSCO).",
                "Preclinical gap analysis and study design optimization.",
                "Preparation and representation for regulatory agency meetings."
            ]
        },
        {
            title: "Study Design & Monitoring",
            bullets: [
                "Scientific protocol development tailored to product characteristics.",
                "Independent study monitoring, auditing, and GLP quality assurance.",
                "Troubleshooting scientific and experimental deviations."
            ]
        },
        {
            title: "Dossier Preparation",
            bullets: [
                "CTD Module 4 (Non-clinical) writing and compilation.",
                "Investigator's Brochure (IB) and Investigational New Drug (IND) non-clinical summaries.",
                "Independent peer-review of preclinical data packages."
            ]
        }
    ];

    return (
        <IndustryDetailLayout
            title="Consultancy"
            subtitle="Strategic Preclinical & Regulatory Consulting"
            intro="Navigating preclinical development requires expert strategic planning. PRADO provides comprehensive consultancy services to guide your product design, protocol development, and dossier submissions, accelerating your time-to-market."
            image="/images/facilities/document-control.png"
            icon={<FaComments />}
            cards={cards}
        />
    );
}
