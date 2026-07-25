import { FaBoxOpen } from 'react-icons/fa';
import FacilityDetailLayout from '../components/FacilityDetailLayout';

export default function FacilityTICO() {
    const glob = import.meta.glob('/public/images/facilities/tico/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    const galleryImages = Object.values(glob).map(path => path.replace(/^\/public/, ''));

    return (
        <FacilityDetailLayout
            title="Test Item Control Office"
            subtitle="Receipt · Storage · Accountability"
            galleryImages={galleryImages}
            intro="PRADO's Test Item Control Office (TICO) provides meticulous management of all test and reference items from initial receipt through final disposition — ensuring regulatory traceability, sample integrity, and complete accountability at every step."
            image="/images/facilities/tico.png"
            icon={<FaBoxOpen />}
            // stats={[
            //     { value: '100%', label: 'Chain of Custody' },
            //     { value: 'GLP', label: 'Documentation' },
            //     { value: '-80°C', label: 'Cold Storage' },
            //     { value: '24/7', label: 'Secure Access' },
            // ]}
        >
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                <p>
                    PRADO is operating state-of-art TICO facility ensuring safe receipt of the test item, provide a unique code for each test item and for sponsor, maintains its mass balance and issues test item and hold the same in environmentally controlled storage throughout experiments, expiry and till disposal.
                </p>
                <p>
                    TICO facility is well designed and provide separate area to receive and store different type of test item such pharmaceutical, Agrochemicals and other chemical products to minimization of contamination.
                </p>
                <p>
                    In PRADO, there are dedicated person for handing pharmaceuticals, Agrochemicals product and other chemical or Test Item. They are also responsible for guiding the study director or study personal about hazards involved in handling a given test items. All the test item are stored under suitable environment and as per sponsor’s requirement.
                </p>
                <p>
                    PRADO has a well-designed and secure Test Item Control Office for safe receipt, handling, storage and dispensing of Test items, Reference Items and Control items.
                </p>
                <p>
                    PRADO's TICO facility is a state-of-the-art facility designed for ensuring safe receipt of the test item. It provides a unique code for each test item and for each sponsor. It maintains mass balance and issues accurate test items, all of which are held in an environmentally-controlled storage conditions as per sponsor requirements as well as industry-best practices, right through all stages of experiments until final disposal. A separate room for formulation preparation and storage with appropriately-designed space is also part of the infrastructure. The facility provides separate areas to receive and store different types of test items such pharmaceutical, Agrochemicals and other chemical products in order to minimize contamination.
                </p>
                <p>
                    All the records of receipt, utilization and discard of the test items are maintained as per GLP requirements and SOPs. Trained and qualified staff are specifically deputed to manage TICO operations.
                    PRADO has dedicated personnel for handing pharmaceuticals, Agrochemicals product and other chemicals and Test Item. They support the study director and the study teams with guidance on hazards involved in handling any given test item.
                </p>
            </div>
        </FacilityDetailLayout>
    );
}
