import { FaPaw } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityARF() {
    const glob = import.meta.glob('/public/images/facilities/arf/*.{png,jpg,jpeg,webp,mp4}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob).map(path => path.replace(/^\/public/, ''));

    return (
        <FacilityDetailLayout
            title="Animal Research Facility"
            subtitle="CCSEA Approved · SPF-Grade"
            galleryImages={galleryImages}
            intro="PRADO's Animal Research Facility (ARF) is a CCSEA-approved, SPF-grade environment built to the highest global standards for ethical and scientifically rigorous animal studies. Our infrastructure ensures precise environmental control, superior animal welfare, and uncompromised data integrity."
            image="/images/facilities/arf/aa.JPG"
            icon={<FaPaw />}
            stats={[
                { value: 'CCSEA', label: 'Approved' },
                { value: 'SPF', label: 'Grade Animals' },
                { value: 'IVC', label: 'Cage Systems' },
                { value: '24/7', label: 'Monitoring' },
            ]}
        >
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                <p>
                    <strong className="font-semibold text-slate-900 dark:text-white">Spread over 4000 sq.ft.</strong>, PRADO’s animal research facility (ARF) has been designed to meet the global standards of breeding and conducting experiments on small laboratory animals. The ARF has approvals from <strong>CCSEA</strong>, Ministry of Environment and Forests, Government of India (Registration No 1723/ PO- RcBiBt / 13 / CCSEA).
                </p>
                <p>
                    All experiments are carried out at the ARF based on the monitoring and approval of the Institutional Animal Ethics Committee (IAEC). The Institutional Biosafety Committee (IBSC) is also in place for regulating the handling of genetically modified organisms and recombinant DNA (rDNA) material for research and production.
                </p>
                <p>
                    The ARF is equipped with several modern equipment such as high-quality animal enclosures, Innovative Exhaust Ventilated Cage System (Opti MICE and Opti Rat) and Inhalation cages. The utilities and control systems installed ensure the highest levels of accurate control of temperature, humidity, air pressure, air changes, light and sound intensities as per regulatory requirements and standards-of-care protocols.
                </p>
                <p>
                    Ample utility space and equipment for wash areas, autoclaving, storage of animal feed and bedding material and quarantine rooms are provided. Sufficient number of rooms or areas to assure isolation for individual projects have also been incorporated in the design of the ARF.
                </p>
                <p>
                    The ARF has the expertise to breed and supply quality rodents and rabbits for in-house as well as for trade purposes. Highly-qualified and well-trained staff are employed at PRADO which implements principles of <strong>'3Rs' – Replacement, Reduction, Refinement</strong> - for animal breeding, husbandry and care at all stages of experimentation.
                </p>
            </div>
        </FacilityDetailLayout>
    );
}
