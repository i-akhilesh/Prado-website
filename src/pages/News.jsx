import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaNewspaper, FaArrowRight } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const newsItems = [
    {
        id: "predictcan-collaboration",
        category: "Collaboration",
        badge: "Recent Event",
        date: "May 2024",
        title: "Official Collaboration between PredictCan Biotechnologies and PRADO",
        summary: "PredictCan Biotechnologies and PRADO collaborate to develop alternative solutions to animal testing, starting with models for idiosyncratic drug-induced liver injury (iDILI).",
        content: (
            <div className="space-y-6 text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                <p className="text-xl font-medium text-slate-800 dark:text-slate-200 leading-snug">
                    PredictCan Biotechnologies and PRADO collaborate to develop alternative solutions to animal testing.
                </p>
                <p>
                    Animal testing plays a critical role in gaining important knowledge needed to thoroughly evaluate products toward reducing health risks and sufferings to humans and animals. The current regulatory framework of various countries and the FDA permits, encourages, and supports the use of new alternative methods to animal testing that produce scientifically valid data and meet regulatory requirements.
                </p>
                <p>
                    PredictCan Biotechnologies and PRADO collaborate to develop models for idiosyncratic drug-induced liver injury (iDILI) as an initial step.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-inner">
                    <div>
                        <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">About PRADO</h4>
                        <p className="text-sm">
                            A Preclinical Research and Development Organization based in Pune, India. PRADO is an emerging, global, independent market leader supporting Pharmaceutical, Biopharma, and Biotech industries with high-quality preclinical services.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">About PredictCan</h4>
                        <p className="text-sm">
                            A French biotech based in Montpellier. PredictCan has long-lasting expertise in translational research and precision medicine, delivering innovative subject-centric models for iDILI detection.
                        </p>
                    </div>
                </div>
                <div className="relative p-6 md:p-8 bg-primary-900 text-white rounded-2xl border-none shadow-xl overflow-hidden not-prose space-y-6">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 space-y-6">
                        <div>
                            <p className="text-base md:text-lg font-heading font-medium leading-relaxed italic mb-2">
                                "We have developed a novel technology, which offers a unique, individual-centric model to analyze iDILI risk. This model will reduce the testing time and will be economical."
                            </p>
                            <p className="font-bold tracking-widest text-secondary uppercase text-xs">
                                — Hong Tuan DUONG, CEO of PredictCan
                            </p>
                        </div>
                        <div className="w-16 h-[1px] bg-white/20"></div>
                        <div>
                            <p className="text-base md:text-lg font-heading font-medium leading-relaxed italic mb-2">
                                "We are excited to use non-animal and human-relevant methods. Various models are being tested as an alternative, however, this model is innovative and will help predict human biology more accurately."
                            </p>
                            <p className="font-bold tracking-widest text-secondary uppercase text-xs">
                                — Dr. Pralhad Wangikar, CEO of PRADO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "ecotox-archives-expansion",
        category: "Facility Expansion",
        badge: "Expansion",
        date: "March 2024",
        title: "PRADO Expands Infrastructure with New Ecotoxicology and Archives Facilities",
        summary: "To support agrochemical and environmental safety studies, PRADO has commissioned a state-of-the-art Ecotoxicology laboratory and expanded its secure GLP-compliant Archives repository.",
        content: (
            <div className="space-y-6 text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                <p className="text-xl font-medium text-slate-800 dark:text-slate-200 leading-snug">
                    PRADO announces the inauguration of its state-of-the-art Ecotoxicology testing facility and highly secure GLP-compliant Archives room.
                </p>
                <p>
                    The newly expanded facilities in Pune are designed to cater to international agrochemical and chemical safety assessment regulations. The Ecotoxicology division provides comprehensive studies on aquatic and terrestrial organisms, ensuring environmental safety profiles meet global standards.
                </p>
                <p>
                    Additionally, the upgraded Archives facility offers double-redundant climate control, advanced fire suppression, and strict access controls to ensure the preservation and raw data integrity of long-term study records and samples for up to 30 years.
                </p>
            </div>
        )
    },
    {
        id: "future-innovations-2025",
        category: "Innovation",
        badge: "Future Roadmap",
        date: "January 2024",
        title: "PRADO Unveils Future Innovations Roadmap for 2025",
        summary: "Highlighting our commitment to technological excellence, PRADO outlines milestones including Animal CT scanning, novel formulations development, and bird species testing capabilities.",
        content: (
            <div className="space-y-6 text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                <p className="text-xl font-medium text-slate-800 dark:text-slate-200 leading-snug">
                    PRADO Pvt. Ltd. presents its strategic plan for 2025, deploying cutting-edge technologies to enhance preclinical study capabilities.
                </p>
                <p>
                    As part of the upcoming expansion, PRADO will deploy dedicated high-resolution Animal CT imaging systems, enabling non-invasive, longitudinal monitoring of internal structures and disease progression in vivo. This technology reduces the number of animals required for research while delivering highly precise data.
                </p>
                <p>
                    Furthermore, the facility will introduce a dedicated avian testing wing for agrochemical safety evaluations and invest in collaborative research for animal alternatives, establishing advanced cellular models and computational toxicology platforms.
                </p>
            </div>
        )
    }
];

export default function News() {
    const containerRef = useRef(null);
    const [selectedNews, setSelectedNews] = useState(null);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div ref={containerRef} className="flex flex-col w-full bg-surface-muted dark:bg-slate-950 transition-colors duration-700 selection:bg-secondary selection:text-white">
            
            {/* Cinematic Header */}
            <section className="relative w-full min-h-[70svh] flex items-end pb-24 lg:pb-32 bg-primary-900 text-white overflow-hidden pt-40">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none"></div>
                <div className="container relative z-10 mx-auto px-4 md:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[14vw] md:text-[10vw] font-bold font-heading leading-[0.85] tracking-tighter mb-8 text-white relative z-10"
                    >
                        Press & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Announcements.</span>
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                        className="flex flex-col md:flex-row gap-8 items-start mt-12 border-t border-white/20 pt-8 max-w-4xl"
                    >
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Stay updated with the latest breakthroughs, strategic collaborations, and global advancements at Prado.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Grid Layout of News */}
            <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeIn}
                                className="flex flex-col h-full bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 group justify-between"
                            >
                                <div>
                                    {/* Metadata */}
                                    <div className="flex items-center gap-4 text-xs font-bold tracking-[0.15em] uppercase text-slate-400 mb-6">
                                        <span className="text-secondary">{item.badge}</span>
                                        <span className="text-slate-300 dark:text-slate-600">|</span>
                                        <span>{item.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white leading-tight mb-4 group-hover:text-secondary transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    {/* Summary */}
                                    <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-light leading-relaxed mb-6">
                                        {item.summary}
                                    </p>
                                </div>

                                {/* Read More Link */}
                                <button
                                    onClick={() => setSelectedNews(item)}
                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-secondary transition-colors duration-300 mt-auto"
                                >
                                    <span>Read Article</span>
                                    <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Read Article Details Modal */}
            <AnimatePresence>
                {selectedNews && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        {/* Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedNews(null)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-y-auto p-8 md:p-12 lg:p-16 z-10 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedNews(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-all duration-300 z-20"
                                aria-label="Close details"
                            >
                                <HiX className="text-2xl" />
                            </button>

                            {/* Category Badge & Date */}
                            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-6">
                                <div className="flex items-center gap-2 text-secondary">
                                    <span className="w-6 h-[2px] bg-secondary inline-block"></span>
                                    <span>{selectedNews.badge}</span>
                                </div>
                                <span className="text-slate-300 dark:text-slate-600">|</span>
                                <div className="flex items-center gap-2">
                                    <FaNewspaper className="text-sm" />
                                    <span>{selectedNews.category}</span>
                                </div>
                            </div>

                            {/* Massive Title inside Modal */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-8">
                                {selectedNews.title}
                            </h2>

                            {/* Content body */}
                            <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-8">
                                {selectedNews.content}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
