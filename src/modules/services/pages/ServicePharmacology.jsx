import { FaHeartbeat } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

export default function ServicePharmacology() {
    return (
        <ServiceDetailLayout
            title="Pharmacology"
            subtitle="Efficacy & Biology Studies"
            intro="PRADO's Pharmacology & Efficacy Biology services provide rigorous in vivo and in vitro studies to characterize the efficacy, mechanism of action, and pharmacodynamic profile of new chemical and biological entities."
            image="/images/img-home-about.png"
            icon={<FaHeartbeat />}
            subServices={[
                {
                    title: "Inflammation and Pain Models",
                    bullets: [
                        "Arthritis induction using collagen",
                        "Colitis induction using DSS or acetic acid",
                        "Psoriasis-like skin disease",
                        "Excision wound healing model",
                        "Osteoarthritis induction",
                        "Carrageenan induced paw oedema",
                        "Mechanical, thermal, cold Hyperalgesia - CFA",
                        "Neuropathic pain using Paclitaxel",
                        "L-5 & L-6 spinal nerve ligation (SNL)",
                        "Partial Sciatic Nerve ligation (pSNL)"
                    ]
                },
                {
                    title: "Antipsychotic Activity Models",
                    bullets: [
                        "Novel object recognition test",
                        "Psychosis and social interaction deficit",
                        "Disruption of Conditioned Avoidance Response",
                        "Restoration of pre-pulse inhibition (PPI)",
                        "Neurobehavioral assays"
                    ]
                },
                {
                    title: "Metabolic Disorders Models",
                    bullets: [
                        "STZ induced Diabetes, Diabetic neuropathy",
                        "Hypothyroidism in rodents",
                        "Acute and Chronic kidney diseases"
                    ]
                },
                {
                    title: "Safety Pharmacology Models",
                    bullets: [
                        "Rota rod test and Grip strength test",
                        "Tail flick test, Hot plate test",
                        "Noninvasive (tail cuff) BP recording"
                    ]
                },
                {
                    title: "Osteoporosis Models",
                    bullets: [
                        "Ovariectomy induced osteoporosis",
                        "Thyroxine or Ethanol induced osteoporosis",
                        "Hypercalcemia using Retinoic acid"
                    ]
                },
                {
                    title: "Biological Reactivity Test (USP 87 & 88)",
                    bullets: [
                        "Acute systemic Toxicity test",
                        "Intracutaneous reactivity test",
                        "Implantation test"
                    ]
                },
                {
                    title: "Pharmacopoeal Testing",
                    bullets: [
                        "Pyrogen Test",
                        "Abnormal toxicity test"
                    ]
                }
            ]}
        />
    );
}
