import { FaChalkboardTeacher } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServiceConsultancy() {
    return (
        <ServiceDetailLayout
            title="Consultancy"
            subtitle="Training & Regulatory Guidance"
            intro="PRADO's consultancy and training division bridges the gap between scientific expertise and regulatory compliance. From GLP certification pathways to academic training programs, we equip organizations and professionals for lasting excellence."
            image="/src/assets/images/img-home-about.png"
            icon={<FaChalkboardTeacher />}
            subServices={[
                {
                    title: "GLP Consultancy",
                    description: "Expert guidance for laboratories seeking Good Laboratory Practice (GLP) certification from regulatory bodies including the CDSCO and OECD.",
                    bullets: [
                        "GLP gap analysis and readiness assessments",
                        "SOP development and quality system review",
                        "Mock regulatory inspections and audit support",
                        "Facility design guidance for GLP compliance"
                    ]
                },
                {
                    title: "AAALAC Accreditation Support",
                    description: "Strategic consultancy guiding institutions through the AAALAC International accreditation process.",
                    bullets: [
                        "Program description document preparation",
                        "Animal care and use program review",
                        "Institutional Animal Care and Use Committee (IACUC) support"
                    ]
                },
                {
                    title: "Training Programs",
                    description: "Developing and executing customized training modules for industry professionals across all levels of scientific and technical staff.",
                    bullets: [
                        "GLP principles and documentation",
                        "Animal handling and welfare",
                        "Analytical method training",
                        "Regulatory affairs and submission strategy"
                    ]
                },
                {
                    title: "Industry-Academia Bridge Programs",
                    description: "Facilitating specialized training and internship programs for students from pharmaceutical and biotechnology backgrounds, preparing the next generation of preclinical scientists."
                }
            ]}
        />
    );
}
