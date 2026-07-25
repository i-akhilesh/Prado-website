import { FaPaw } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityARF() {
    const glob = import.meta.glob('/public/images/facilities/arf/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = [
        ...Object.values(glob).map(path => path.replace(/^\/public/, '')),
        '/images/facilities/arf/Animal House.mp4',
        '/images/facilities/arf/Animal House Clip 2.mp4',
        '/images/facilities/arf/ARF clip 2.mp4',
        '/images/facilities/arf/VID_20210730_163630.mp4',
        '/images/facilities/arf/Animal House 5 Clip 1.mp4',
        '/images/facilities/arf/VID_20210730_163449.mp4'
    ];

    return (
        <FacilityDetailLayout
            title="Animal Research Facility"
            subtitle="CCSEA Approved"
            galleryImages={galleryImages}
            intro="PRADO's Animal Research Facility (ARF) is a CCSEA-approved, ARF environment built to the highest global standards for ethical and scientific animal studies. Our infrastructure ensures environmental control, superior animal welfare, and data integrity."
            image="/images/facilities/arf/aa.JPG"
            icon={<FaPaw />}
            // stats={[
            //     { value: 'CCSEA', label: 'Approved' },
            //     { value: 'IVC', label: 'Cage Systems' },
            //     { value: '24/7', label: 'Monitoring' },
            // ]}
        >
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                <p>
                    <strong className="font-semibold text-slate-900 dark:text-white">PRADO's Animal Research Facility (ARF)</strong> has been designed to meet the global standards of conducting experiments on small laboratory animals. The ARF has approvals from <strong>CCSEA</strong>, Ministry of Environment and Forests, Government of India (Registration No 1723/ PO- RcBiBt / 13 / CCSEA) for Rats, Rabbits, Mice, Hamsters, Guinea-pigs, Birds and Fishes.
                </p>
                <p>
                    All experiments are carried out with prior approval of the Institutional Animal Ethics Committee (IAEC). The Institutional Biosafety Committee (IBSC) is also in place.
                </p>
                <p>
                    The ARF is equipped with several modern equipment such as high-quality animal enclosures, Innovative Exhaust Ventilated Cage System and Inhalation cages. The utilities and control systems installed ensure the control of temperature, humidity, air pressure, air changes, light and sound intensities as per regulatory requirements and standards-of-care protocols.
                </p>
                <p>
                    Ample utility space and equipment for wash areas, autoclaving, storage of animal feed and quarantine rooms are provided. Sufficient number of rooms or areas to assure isolation for individual projects have also been incorporated in the design of the ARF.
                </p>
                <p>
                    Highly-qualified and well-trained staff are employed at PRADO which implements principles of <strong>'3Rs' – Replacement, Reduction, Refinement</strong> - for animal husbandry and care at all stages of experimentation.
                </p>
            </div>
        </FacilityDetailLayout>
    );
}
