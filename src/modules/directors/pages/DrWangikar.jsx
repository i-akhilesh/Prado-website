import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaQuoteLeft, FaGraduationCap, FaAward, FaBriefcase, FaUserAlt } from 'react-icons/fa';

export default function DrWangikar() {
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
                        src="/images/directors/dr-wangikar-bg.png" // Realistic placeholder
                        alt="Dr. Pralhad Wangikar" 
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
                            Dr. Pralhad <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Wangikar</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-secondary font-medium tracking-wide flex items-center gap-6">
                            <span className="w-16 h-[2px] bg-secondary inline-block"></span> Founder-Director & CEO
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Editorial Content */}
            <div className="container mx-auto px-4 md:px-8 py-24 lg:py-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    {/* Main Content Column */}
                    <div className="lg:col-span-7 space-y-24">
                        {/* Biography Section */}
                        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
                            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-8 flex items-center gap-4">
                                <FaUserAlt className="text-lg" /> Profile & Biography
                            </h2>
                            <div className="prose prose-xl prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 font-light leading-relaxed space-y-6">
                                <p className="text-xl font-normal text-slate-800 dark:text-slate-200">
                                    Dr. Pralhad Wangikar is a Veterinary Pathologist and a Diplomate of the American Board of Toxicology (DABT). He has over 24 years of scientific research and project managerial experience with some of the top Indian pharmaceutical companies and CROs.
                                </p>
                                <p>
                                    His key research expertise spans the critical areas of toxicologic pathology, including systemic, reproductive, and genetic toxicity studies. He is highly specialized in conducting toxicological risk assessments such as PDE (Permitted Daily Exposure), OEL (Occupational Exposure Limit), and AI (Acceptable Intake), alongside the development of animal models and comprehensive clinical and histopathological evaluations.
                                </p>
                                <p>
                                    In addition to his research endeavors, Dr. Pralhad Wangikar possesses extensive expertise in industry forecasting and consulting, particularly for designing state-of-the-art animal research facilities and guiding various organizations toward achieving GLP Certification.
                                </p>
                                <p>
                                    As a thought leader and regular speaker at industry events, academic gatherings, and student interactions, Dr. Wangikar has co-authored and published several books and scholarly articles on toxicology, business risk, and quality management matters.
                                </p>
                                <p>
                                    At PRADO, Dr. Pralhad Wangikar serves as the Founder-Director and CEO. In addition to driving business development and providing oversight for all study-related operations, he is the designated Test Facility Manager for the GLP-certified Urse facility.
                                </p>
                            </div>
                        </motion.section>

                        {/* Leadership Message */}
                        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
                            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-8 flex items-center gap-4">
                                <FaQuoteLeft className="text-xl" /> Message from CEO
                            </h2>
                            <div className="prose prose-xl md:prose-2xl prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                                <p className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 mb-8 leading-snug">
                                    "Our journey over the past 15 years has been driven by a singular commitment: advancing healthcare through uncompromising quality in preclinical research."
                                </p>
                                <p className="mb-8">
                                    "From our inception, PRADO was envisioned not just as a service provider, but as a critical partner in the drug development pipeline. Navigating the complex regulatory landscape requires more than just infrastructure; it demands deep scientific acumen and integrity."
                                </p>
                                <p className="mb-8">
                                    "We consistently focus on scientific integration and current regulatory requirements towards collaborative, long-term partnerships with our esteemed sponsors. Our continuous efforts towards providing cost effective, quality services with compressed timelines, and supporting of our sponsors towards accelerating novel therapies for Mankind."
                                </p>
                                <p className="mb-8">
                                    "Proud to partner in the advancement of modern drug development! Together, we are successfully building predictive, human-relevant programs that integrate advanced New Approach Methodologies (NAMs). By aligning with the FDA Modernization Act 2.0, we are ensuring a seamless clinical trial transition and paving the way toward a future with reduced animal testing."
                                </p>
                                <p className="mb-8">
                                    "We work closely with our clients to understand their preclinical needs and develop tailored 
                                    programs to meet their goals in a timely manner."
                                </p>
                                <p>
                                    "As we look to the future, our focus remains steadfast on expanding our capabilities while adhering to the core values of transparency, accuracy, and timeliness that have defined our legacy."
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
                                To establish PRADO as the premier global destination for preclinical research, synonymous with scientific excellence, ethical practices, and regulatory mastery, thereby accelerating global access to safe and effective healthcare solutions.
                            </p>
                            
                            <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800 mb-12 relative z-10"></div>

                            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-slate-400 mb-8 relative z-10">Strategic Goals</h3>
                            <ul className="space-y-6 relative z-10">
                                {[
                                    "Achieve and maintain global regulatory accreditations uniformly across all facilities.",
                                    "Pioneer the integration of alternative in-vitro testing models.",
                                    "Foster a culture of continuous learning and scientific innovation among our researchers.",
                                    "Expand our geographic footprint to serve a wider array of pharmaceutical and biotech innovators."
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
                                        <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2 tracking-tight">Founder-Director & CEO</h4>
                                        <p className="text-lg text-slate-500 dark:text-slate-400 font-light">PRADO Preclinical Research, Urse</p>
                                    </div>

                                    <div className="group pl-8 relative border-l border-slate-200 dark:border-slate-800">
                                        <div className="absolute top-0 left-0 w-[3px] h-0 bg-secondary group-hover:h-full transition-all duration-700 -translate-x-[2px]"></div>
                                        <div className="absolute top-1 left-0 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 -translate-x-1/2 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-secondary transition-colors duration-500"></div>
                                        </div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">Over 24 Years Experience</p>
                                        <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2 tracking-tight">Scientific & Project Leadership</h4>
                                        <p className="text-lg text-slate-500 dark:text-slate-400 font-light">Top Indian Pharmaceutical Companies & CROs</p>
                                    </div>

                                    <div className="group pl-8 relative border-l border-slate-200 dark:border-slate-800">
                                        <div className="absolute top-0 left-0 w-[3px] h-0 bg-secondary group-hover:h-full transition-all duration-700 -translate-x-[2px]"></div>
                                        <div className="absolute top-1 left-0 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 -translate-x-1/2 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-secondary transition-colors duration-500"></div>
                                        </div>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">Credentials</p>
                                        <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2 tracking-tight">Veterinary Pathologist & DABT</h4>
                                        <p className="text-lg text-slate-500 dark:text-slate-400 font-light">Diplomate of the American Board of Toxicology</p>
                                    </div>

                                </div>
                            </div>
                            
                            {/* Achievements Box */}
                            <div className="bg-primary-900 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-10 right-10 text-white/10">
                                    <FaAward className="text-8xl" />
                                </div>
                                <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-8 border-b border-white/20 pb-4 relative z-10">
                                    Key Achievements
                                </h4>
                                <ul className="text-slate-300 space-y-4 font-light relative z-10">
                                    <li className="flex gap-4"><span className="text-secondary opacity-50">•</span> Diplomate of the American Board of Toxicology (DABT) certification.</li>
                                    <li className="flex gap-4"><span className="text-secondary opacity-50">•</span> Designated Test Facility Manager for GLP-certified Urse facility.</li>
                                    <li className="flex gap-4"><span className="text-secondary opacity-50">•</span> Expert consulting for state-of-the-art animal research facility design.</li>
                                    <li className="flex gap-4"><span className="text-secondary opacity-50">•</span> Authored multiple books & scholarly publications on toxicology & quality management.</li>
                                </ul>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
