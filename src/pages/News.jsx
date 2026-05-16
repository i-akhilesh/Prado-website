import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaCalendarAlt, FaNewspaper, FaArrowRight } from 'react-icons/fa';

export default function News() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
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

            {/* Editorial Article Layout */}
            <section className="py-20 lg:py-32 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-5xl mx-auto">
                        
                        <motion.article
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                            className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 lg:p-24 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            
                            {/* Metadata */}
                            <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-slate-400 mb-10">
                                <div className="flex items-center gap-3 text-secondary">
                                    <span className="w-8 h-[2px] bg-secondary inline-block"></span>
                                    <span>Recent Event</span>
                                </div>
                                <span className="text-slate-300 dark:text-slate-600">|</span>
                                <div className="flex items-center gap-2">
                                    <FaNewspaper className="text-lg" />
                                    <span>Collaboration</span>
                                </div>
                            </div>

                            {/* Massive Headline */}
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-16 relative z-10">
                                Official Collaboration between PredictCan Biotechnologies and PRADO
                            </h2>

                            {/* Editorial Body */}
                            <div className="prose prose-xl md:prose-2xl prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                                <p className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 mb-8 leading-snug">
                                    PredictCan Biotechnologies and PRADO collaborate to develop alternative solutions to animal testing.
                                </p>
                                
                                <p className="mb-8">
                                    Animal testing plays a critical role in gaining important knowledge needed to thoroughly evaluate products toward reducing health risks and sufferings to humans and animals. The current regulatory framework of various countries and the FDA permits, encourages, and supports the use of new alternative methods to animal testing that produce scientifically valid data and meet regulatory requirements.
                                </p>
                                
                                <p className="mb-12">
                                    PredictCan Biotechnologies and PRADO collaborate to develop models for idiosyncratic drug-induced liver injury (iDILI) as an initial step.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 p-10 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-inner">
                                    <div>
                                        <h4 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">About PRADO</h4>
                                        <p className="text-lg">
                                            A Preclinical Research and Development Organization based in Pune, India. PRADO is an emerging, global, independent market leader supporting Pharmaceutical, Biopharma, and Biotech industries with high-quality preclinical services.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">About PredictCan</h4>
                                        <p className="text-lg">
                                            A French biotech based in Montpellier. PredictCan has long-lasting expertise in translational research and precision medicine, delivering innovative subject-centric models for iDILI detection.
                                        </p>
                                    </div>
                                </div>

                                <blockquote className="relative my-16 p-10 md:p-16 bg-primary-900 text-white rounded-[2rem] border-none shadow-2xl overflow-hidden not-prose">
                                    <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="relative z-10 space-y-12">
                                        <div>
                                            <p className="text-2xl md:text-3xl font-heading font-medium leading-relaxed italic mb-6">
                                                "We have developed a novel technology, which offers a unique, individual-centric model to analyze iDILI risk. This model will reduce the testing time and will be economical."
                                            </p>
                                            <p className="font-bold tracking-widest text-secondary uppercase text-sm">
                                                — Hong Tuan DUONG, CEO of PredictCan
                                            </p>
                                        </div>
                                        <div className="w-16 h-[1px] bg-white/20"></div>
                                        <div>
                                            <p className="text-2xl md:text-3xl font-heading font-medium leading-relaxed italic mb-6">
                                                "We are excited to use non-animal and human-relevant methods. Various models are being tested as an alternative, however, this model is innovative and will help predict human biology more accurately."
                                            </p>
                                            <p className="font-bold tracking-widest text-secondary uppercase text-sm">
                                                — Dr. Pralhad Wangikar, CEO of PRADO
                                            </p>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </motion.article>

                    </div>
                </div>
            </section>
        </div>
    );
}
