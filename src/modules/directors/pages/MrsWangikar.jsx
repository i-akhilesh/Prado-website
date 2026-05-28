import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaQuoteLeft, FaGraduationCap, FaAward, FaBriefcase } from 'react-icons/fa';

export default function MrsWangikar() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div ref={containerRef} className="w-full bg-surface-muted dark:bg-slate-950 font-sans transition-colors duration-700 selection:bg-secondary selection:text-white">
            
            {/* Cinematic Hero */}
            <section className="relative w-full min-h-[70svh] flex flex-col justify-end pb-24 lg:pb-32 bg-primary-900 text-white overflow-hidden pt-40">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/directors/ila-wangikar-bg.png" // Realistic placeholder
                        alt="Mrs. Ila Wangikar" 
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent"></div>
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 md:px-8">
                    <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-12 text-sm font-bold tracking-[0.2em] uppercase gap-4 transition-colors group">
                        <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Home
                    </Link>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                        <h1 className="text-[12vw] md:text-[8vw] font-bold font-heading leading-[0.85] tracking-tighter mb-6 text-white">
                            Mrs. Ila <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Wangikar</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-secondary font-medium tracking-wide flex items-center gap-6">
                            <span className="w-16 h-[2px] bg-secondary inline-block"></span> Managing Director
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Editorial Content */}
            <div className="container mx-auto px-4 md:px-8 py-24 lg:py-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    {/* Main Content Column */}
                    <div className="lg:col-span-7 space-y-24">
                        {/* Leadership Message */}
                        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
                            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-8 flex items-center gap-4">
                                <FaQuoteLeft className="text-xl" /> Message from Managing Director
                            </h2>
                            <div className="prose prose-xl md:prose-2xl prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                                <p className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 mb-8 leading-snug">
                                    "Operational excellence is the backbone of any successful scientific endeavor. At Prado, we have cultivated an environment where precision meets efficiency."
                                </p>
                                <p className="mb-8">
                                    "Our commitment ensures that our scientific teams have the robust infrastructure and seamless processes they need to innovate without friction."
                                </p>
                                <p className="mb-8">
                                    "We believe that quality is not just a department, but a culture. By instilling strict adherence to global compliance standards across all operational nodes, we deliver reliability that our partners can trust, every single time."
                                </p>
                            </div>
                        </motion.section>

                        {/* Vision & Goals */}
                        <motion.section 
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} 
                            className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 font-heading tracking-tight relative z-10">Institutional Vision.</h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 font-light relative z-10">
                                To build and sustain a globally competitive research infrastructure that empowers scientific breakthroughs while maintaining the highest strata of operational integrity and human resource development.
                            </p>
                            
                            <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800 mb-12 relative z-10"></div>

                            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-slate-400 mb-8 relative z-10">Strategic Goals</h3>
                            <ul className="space-y-6 relative z-10">
                                {[
                                    "Implement lean management principles across all laboratory workflows to optimize turnaround times.",
                                    "Spearhead comprehensive employee welfare and continuous training programs.",
                                    "Drive sustainable and eco-friendly operational practices within our facilities.",
                                    "Ensure 100% audit readiness through digitized compliance monitoring."
                                ].map((goal, index) => (
                                    <li key={index} className="flex items-start gap-6 group/item">
                                        <div className="mt-2 text-secondary flex-shrink-0 group-hover/item:translate-x-2 transition-transform">
                                            <span className="w-8 h-[2px] bg-current inline-block"></span>
                                        </div>
                                        <span className="text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    </div>

                    {/* Sidebar / Timeline Column */}
                    <div className="lg:col-span-5">
                        <motion.div 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true, margin: "-100px" }} 
                            variants={fadeIn}
                            className="sticky top-40 space-y-16"
                        >
                            <div>
                                <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-slate-400 mb-12 border-b border-slate-200 dark:border-slate-800 pb-6 flex items-center gap-4">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span> Professional Journey
                                </h3>
                                
                                {/* Editorial Timeline */}
                                <div className="space-y-12">
                                    
                                    <div className="group pl-8 relative border-l border-slate-200 dark:border-slate-800">
                                        <div className="absolute top-0 left-0 w-[3px] h-0 bg-secondary group-hover:h-full transition-all duration-700 -translate-x-[2px]"></div>
                                        <div className="absolute top-1 left-0 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 -translate-x-1/2 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-secondary transition-colors duration-500"></div>
                                        </div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">2010 - Present</p>
                                        <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2 tracking-tight">Director of Operations</h4>
                                        <p className="text-lg text-slate-500 dark:text-slate-400 font-light">Prado Pvt. Ltd., Pune</p>
                                    </div>

                                    <div className="group pl-8 relative border-l border-slate-200 dark:border-slate-800">
                                        <div className="absolute top-0 left-0 w-[3px] h-0 bg-secondary group-hover:h-full transition-all duration-700 -translate-x-[2px]"></div>
                                        <div className="absolute top-1 left-0 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 -translate-x-1/2 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-secondary transition-colors duration-500"></div>
                                        </div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">Pre-2010</p>
                                        <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2 tracking-tight">Operations Management</h4>
                                        <p className="text-lg text-slate-500 dark:text-slate-400 font-light">Pioneering core operational workflows</p>
                                    </div>

                                    <div className="group pl-8 relative border-l border-slate-200 dark:border-slate-800">
                                        <div className="absolute top-0 left-0 w-[3px] h-0 bg-secondary group-hover:h-full transition-all duration-700 -translate-x-[2px]"></div>
                                        <div className="absolute top-1 left-0 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 -translate-x-1/2 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-secondary transition-colors duration-500"></div>
                                        </div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">Education</p>
                                        <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2 tracking-tight">Advanced Administration</h4>
                                        <p className="text-lg text-slate-500 dark:text-slate-400 font-light">Focus on organizational behavior</p>
                                    </div>

                                </div>
                            </div>
                            
                            {/* Achievements Box */}
                            <div className="bg-primary-900 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-10 right-10 text-white/10">
                                    <FaAward className="text-8xl" />
                                </div>
                                <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-8 border-b border-white/20 pb-4 relative z-10">
                                    Key Contributions
                                </h4>
                                <ul className="text-slate-300 space-y-4 font-light relative z-10">
                                    <li className="flex gap-4"><span className="text-secondary opacity-50">•</span> Architected workflows yielding zero-downtime over 5 years.</li>
                                    <li className="flex gap-4"><span className="text-secondary opacity-50">•</span> Championed women-in-STEM initiatives organization-wide.</li>
                                    <li className="flex gap-4"><span className="text-secondary opacity-50">•</span> Integrated comprehensive digital management systems.</li>
                                </ul>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
