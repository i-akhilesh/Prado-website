import { FaPaw } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityARF() {
    const glob = import.meta.glob('/images/facilities/arf/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob);

    return (
        <FacilityDetailLayout
            title="Animal Research Facility"
            subtitle="CPCSEA Approved · SPF-Grade"
            galleryImages={galleryImages}
            intro="PRADO's Animal Research Facility (ARF) is a CPCSEA-approved, SPF-grade environment built to the highest global standards for ethical and scientifically rigorous animal studies. Our infrastructure ensures precise environmental control, superior animal welfare, and uncompromised data integrity."
            image="/images/img-home-gallery-1.png"
            icon={<FaPaw />}
            stats={[
                { value: 'CPCSEA', label: 'Approved' },
                { value: 'SPF', label: 'Grade Animals' },
                { value: 'IVC', label: 'Cage Systems' },
                { value: '24/7', label: 'Monitoring' },
            ]}
            features={[
                {
                    title: 'Individually Ventilated Cages (IVC)',
                    description: 'Our facility is fully equipped with automated IVC systems that maintain microisolator environments for each cage, minimising inter-animal cross-contamination and maximising data reliability.',
                    bullets: [
                        'Continuous HEPA-filtered positive/negative pressure caging',
                        'Real-time cage-level temperature and humidity monitoring',
                        'Automated lighting schedules with programmable light-dark cycles',
                    ]
                },
                {
                    title: 'Species Capabilities',
                    description: 'We house a wide range of rodent and non-rodent species to support diverse study designs across therapeutic areas.',
                    bullets: [
                        'Mice (BALB/c, C57BL/6, CD-1, Swiss Albino)',
                        'Rats (Sprague-Dawley, Wistar)',
                        'Guinea Pigs, Rabbits',
                        'Beagle Dogs (on request)',
                    ]
                },
                {
                    title: 'Barrier & Quarantine Zones',
                    description: 'Strict microbiological barrier systems and dedicated quarantine areas protect study integrity from the moment animals enter the facility through study completion.',
                },
                {
                    title: 'Animal Welfare & Ethics',
                    description: 'All procedures are reviewed and approved by our Institutional Animal Ethics Committee (IAEC). We strictly follow the 3Rs principle — Replacement, Reduction, and Refinement — in all study designs.',
                },
                {
                    title: 'Environmental Control',
                    description: 'Precision climate systems maintain temperature (22 ± 3°C), humidity (50 ± 20%), and 12:12 hr light-dark cycles across all housing zones, meeting CPCSEA and ICH guideline requirements.',
                },
                {
                    title: 'Health Monitoring Program',
                    description: 'Routine sentinel monitoring, serology, and microbiological testing programs ensure the continuous SPF health status of our animal colony.',
                }
            ]}
        />
    );
}
