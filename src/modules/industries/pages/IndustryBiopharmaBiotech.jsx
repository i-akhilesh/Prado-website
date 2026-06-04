import { useState } from 'react';
import { FaDna, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import IndustryDetailLayout from '../components/IndustryDetailLayout';

export default function IndustryBiopharmaBiotech() {
    const [activeTab, setActiveTab] = useState('vaccines');

    const vaccineIntro = (
        <div className="space-y-4">
            <p>
                Biopharmaceuticals and Biotechnology are becoming increasingly important in the development of novel and less toxic therapeutics for human disease. Many of these products, including Therapeutic Proteins, Vaccines, cell-based and stem cell therapies, also need to generate preclinical information such as Efficacy and Safety assessment. The In vitro and in vivo bioassays help in the evaluation of the biological effects in human beings.
            </p>
            <p>
                The global healthcare industry has committed itself to investing in the expeditious development and use of safe vaccines to rid the planet of many new and chronic variants of zoonotic and other communicable diseases.
            </p>
            <p className="font-semibold text-secondary">
                PRADO’s expertise is not only well-suited to meet the preclinical testing and protocol requirements of vaccine development but is also specifically designed to cater to the evolving needs of the industry. Prado is glad to be a partner in your vaccine development journey with a range of special services offers.
            </p>
        </div>
    );

    const stemCellIntro = (
        <div className="space-y-4">
            <p>
                Biopharmaceuticals and Biotechnology are becoming increasingly important as novel and less toxic therapeutics for human disease. Many of these products, including Therapeutic Proteins, Vaccines, cell-based and stem cell therapies, also need to generate preclinical information such as Efficacy and Safety assessment. The in vitro and in vivo bioassays help in evaluating the biological effects in humans.
            </p>
            <p>
                Stem cells are gaining increased developmental focus in the treatment of neurological diseases – as a replacement for lost neurons and glia, as a means of trophic support, as a therapeutic vehicle, and, more recently, as a tool for in vitro modelling to understand disease and to screen and personalize the treatments. The preclinical research requirements of stem cell–based therapies have become critical.
            </p>
            <p className="font-semibold text-secondary">
                PRADO has developed expertise that can offer immense value-addition to organisations that are focused in the development of stem-cell applications for the treatment of various diseases. Prado is glad to be a partner in your developmental journey, with a range of special services offers.
            </p>
        </div>
    );

    const vaccineCards = [
        {
            title: "Toxicity Studies",
            bullets: [
                "Safe Dosage Testing.",
                "Initial Safe Dosage, Subsequent Safe Dosage, Dosage Escalations.",
                "Single & Repeat Dosage Evaluations.",
                "Evaluations for Potential Reversibility of Virulence.",
                "Reversibility Assessments of Toxoids.",
                "Inactivation Levels Assessments.",
                "Evaluations of Antigen Antibody Releases.",
                "Cross-reaction potential to human tissues."
            ]
        },
        {
            title: "Potency & Immunization",
            bullets: [
                "Challenge Model Assays.",
                "Viral Vaccines Attenuation Evaluations.",
                "Immunogenicity Tests."
            ]
        },
        {
            title: "General & Bioassays",
            bullets: [
                "Preclinical in vivo efficacy models/ Bioassays.",
                "Acute and repeat dose toxicity studies in rodents and non-rodents.",
                "Studies to predict immunotoxicity.",
                "Genetic toxicity studies.",
                "Pathological evaluations including Immunohistochemistry."
            ]
        }
    ];

    const stemCellCards = [
        {
            title: "Pre-Transplantation Safety",
            bullets: [
                "In-vitro studies using Disease Models."
            ]
        },
        {
            title: "Stability & Transfection",
            bullets: [
                "Stability and immunogenicity for susceptibility to transfection.",
                "In-vivo studies using Animal Models."
            ]
        },
        {
            title: "General & Bioassays",
            bullets: [
                "Preclinical in vivo efficacy models/ Bioassays.",
                "Acute and repeat dose toxicity studies in rodents and non-rodents.",
                "Studies to predict immunotoxicity.",
                "Genetic toxicity studies.",
                "Pathological evaluations including Immunohistochemistry."
            ]
        }
    ];

    const activeIntro = activeTab === 'vaccines' ? vaccineIntro : stemCellIntro;
    const activeCards = activeTab === 'vaccines' ? vaccineCards : stemCellCards;

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <IndustryDetailLayout
            title="Biopharma & Biotechnology"
            subtitle="Advancing Advanced Therapeutics"
            image="/images/facilities/in-vitro.png"
            icon={<FaDna />}
        >
            {/* Custom Tabbed Content */}
            <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
                {/* Tabs Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-inner">
                        <button
                            onClick={() => setActiveTab('vaccines')}
                            className={`px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 relative ${activeTab === 'vaccines' ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white'}`}
                        >
                            {activeTab === 'vaccines' && (
                                <motion.div
                                    layoutId="activeTabBackground"
                                    className="absolute inset-0 bg-secondary rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Vaccines</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('stem-cells')}
                            className={`px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 relative ${activeTab === 'stem-cells' ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white'}`}
                        >
                            {activeTab === 'stem-cells' && (
                                <motion.div
                                    layoutId="activeTabBackground"
                                    className="absolute inset-0 bg-secondary rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Stem Cells</span>
                        </button>
                    </div>
                </div>

                {/* Tab Intro Description */}
                <motion.div
                    key={activeTab + '-intro'}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-20"
                >
                    {activeIntro}
                </motion.div>

                {/* Tab Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            visible: { transition: { staggerChildren: 0.05 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                    >
                        {activeCards.map((ss, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
                            >
                                <div>
                                    <span className="absolute top-6 right-8 text-6xl font-bold text-slate-100/60 dark:text-slate-800/40 select-none group-hover:text-slate-200 dark:group-hover:text-slate-700 transition-colors">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    <div className="w-12 h-[3px] bg-secondary mb-6 group-hover:w-20 transition-all duration-500" />

                                    <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4 tracking-tight relative z-10">
                                        {ss.title}
                                    </h3>

                                    {ss.bullets && ss.bullets.length > 0 && (
                                        <ul className="space-y-2.5 relative z-10">
                                            {ss.bullets.map((b, bi) => (
                                                <li key={bi} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
                                                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0 text-xs" />
                                                    <span className="font-light leading-snug text-sm md:text-base">{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>
        </IndustryDetailLayout>
    );
}
