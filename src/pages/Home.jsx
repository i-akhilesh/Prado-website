import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChartLine, FaUsers, FaCogs, FaStar, FaBuilding, FaTrophy } from 'react-icons/fa';
import Hero3D from '../components/home/Hero3D';
import DirectorCard from '../modules/directors/components/DirectorCard';

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax transformations
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div ref={containerRef} className="flex flex-col w-full bg-surface-muted dark:bg-slate-950 transition-colors duration-700 selection:bg-secondary selection:text-white">

            {/* 1. Cinematic Hero Section */}
            <section className="relative w-full h-[100svh] flex items-end pb-24 lg:pb-32 bg-primary-900 text-white overflow-hidden">
                <Hero3D />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent z-0 pointer-events-none"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-start w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[90vw] lg:max-w-[70vw]"
                    >
                        <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-bold font-heading leading-[0.9] tracking-tighter mb-8 text-white">
                            Pioneering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent bg-[length:200%_auto] animate-gradient">Precision</span>
                        </h1>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                            <p className="text-lg md:text-2xl text-slate-300 max-w-xl font-light leading-relaxed border-l-2 border-secondary pl-6">
                                Uncompromising data integrity and ethical scientific excellence for global biopharma innovation.
                            </p>
                            <Link to="/services" className="group flex items-center gap-4 text-white hover:text-secondary transition-colors duration-300 mt-4 md:mt-0">
                                <span className="text-sm font-bold uppercase tracking-[0.2em]">Explore Capabilities</span>
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-secondary transition-all duration-300 relative overflow-hidden">
                                    <FaArrowRight className="relative z-10 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Editorial About Section (Asymmetric) */}
            <section className="py-32 lg:py-48 relative overflow-hidden bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
                        <div className="lg:col-span-5 relative">
                            <motion.h2
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                                className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6"
                            >
                                The PRADO Standard
                            </motion.h2>
                            <motion.h3
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight"
                            >
                                Science that <br /><span className="italic font-light text-slate-600 dark:text-slate-400">shapes tomorrow.</span>
                            </motion.h3>
                            <motion.p
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-12"
                            >
                                Founded in 2010, PRADO is an elite preclinical Contract Research Organization. From toxicology to biocompatibility, we deliver data that seamlessly clears international regulatory standards.
                            </motion.p>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                                <Link to="/about-us" className="inline-flex items-center gap-4 group">
                                    <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-secondary transition-colors">Our Legacy</span>
                                    <div className="w-10 h-[2px] bg-slate-300 dark:bg-slate-700 group-hover:bg-secondary group-hover:w-16 transition-all duration-500"></div>
                                </Link>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-6 lg:col-start-7 relative h-[60vh] md:h-[80vh] w-full">
                            <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden">
                                <img src="/src/assets/images/img-home-about.png" alt="Laboratory Operations" className="w-full h-[120%] object-cover object-center absolute top-[-10%]" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 Corporate Overview Section */}
            <section className="py-32 lg:py-48 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative z-10 transition-colors duration-700">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-full lg:max-w-[70vw] mx-auto text-center mb-20 lg:mb-32">
                        <motion.h2
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                            className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6"
                        >
                            Who We Are
                        </motion.h2>
                        <motion.h3
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white mb-8 tracking-tight"
                        >
                            Corporate <br /><span className="italic font-light text-secondary">Overview.</span>
                        </motion.h3>
                        <motion.p
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-12 max-w-4xl mx-auto"
                        >
                            Incorporated in 2010 by an experienced team of scientific professionals, PRADO is one of Asia’s fastest growing preclinical CROs with an integrated platform to support a diversified customer base.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 max-w-7xl mx-auto">
                        {[
                            { icon: FaChartLine, title: "Growing Company", desc: "Fastest Growing Indian Company Excellence Award 2017 by International Achievers Conference. Top 10 CRO 2022, Industry Outlook 2022 Award." },
                            { icon: FaUsers, title: "Diversified Customer Base", desc: "Mix of Pharmaceutical, Biotech, Medical Device, Pesticide, Herbal and Vaccine producing customers from across the globe." },
                            { icon: FaCogs, title: "Integrated Services", desc: "Offers a range of Preclinical Toxicology, Pharmacokinetics, Biology, Pathology, Biocompatibility Testing for Regulatory submission, Risk Assessment and Animal Clinical field Trials." },
                            { icon: FaStar, title: "Best-in-Class Talent", desc: "Experienced scientific and management team having worked with global pharmaceutical, biotech and other companies." },
                            { icon: FaBuilding, title: "Delivery Infrastructure", desc: "CPCSEA Approved Facility (1723/PO/RcBiBt/13/CPCSEA) • GLP Certified (GLP/C-235/2024) • DSIR certified and Recognized." },
                            { icon: FaTrophy, title: "Awards", desc: "‘Preclinical Research Excellence Award’ organized by DocRoSh Global Solutions, 2019 • ‘Indian Leadership Award for Industrial Development’ to Our CEO and Director, 2017." }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group bg-white dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:border-secondary/30 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-150"></div>
                                <feature.icon className="text-4xl text-secondary mb-6 relative z-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500" />
                                <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4 relative z-10 tracking-tight">{feature.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light relative z-10">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Sticky Scroll Strengths Section */}
            <section className="py-32 lg:py-48 bg-white dark:bg-slate-900 relative border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Sticky Left Column */}
                        <div className="lg:col-span-5 relative">
                            <div className="lg:sticky lg:top-40">
                                <h2 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6">Our Core Advantages</h2>
                                <h3 className="text-5xl md:text-7xl font-heading font-semibold text-slate-900 dark:text-white leading-none tracking-tight mb-8">
                                    Why <br /> PRADO?
                                </h3>
                                <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-md">
                                    We combine 15+ years of clinical rigorousness with unmatched cost-effectiveness and strict GLP compliance.
                                </p>
                            </div>
                        </div>

                        {/* Scrolling Right Column (Cards) */}
                        <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8 md:gap-16 mt-8 lg:mt-0">
                            {[
                                { num: "01", title: "15+ Years of Expertise", desc: "Proven track record in delivering scientifically rigorous, reliable preclinical solutions globally.", img: "/src/assets/images/img-home-strength-3.png" },
                                { num: "02", title: "Uncompromising Data", desc: "High fidelity analytical precision delivering data with exceptional regulatory acceptance rates worldwide.", img: "/src/assets/images/img-home-strength-2.png" },
                                { num: "03", title: "GLP-Certified", desc: "World-class, audited infrastructure strictly compliant with international regulatory guidelines.", img: "/src/assets/images/img-home-strength-1.png" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="bg-surface-muted dark:bg-slate-950 rounded-[2rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 relative group overflow-hidden"
                                >
                                    <div className="absolute top-8 right-10 text-[6rem] leading-none font-heading font-bold text-slate-100 dark:text-slate-900 select-none group-hover:text-slate-200 dark:group-hover:text-slate-800 transition-colors duration-500">{item.num}</div>
                                    <img src={item.img} alt={item.title} className="w-24 md:w-32 h-auto mb-12 relative z-10 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700" />
                                    <h4 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6 relative z-10 tracking-tight">{item.title}</h4>
                                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed relative z-10 max-w-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Elegant Full-Width Gallery Teaser
            <section className="py-40 bg-slate-900 dark:bg-black text-white overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-8 mb-20 text-center relative z-10">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">
                        State-of-the-Art <br /><span className="italic font-light text-slate-400">Infrastructure</span>
                    </motion.h2>
                </div>

                <div className="flex w-[200vw] md:w-[150vw] gap-8 px-4 md:px-8 relative z-10 -ml-[10vw]">
                    <motion.div style={{ x: y2 }} className="flex gap-8 w-full">
                        <img src="/src/assets/images/img-home-gallery-1.png" className="w-1/3 h-[40vh] md:h-[50vh] object-cover rounded-[2rem] shadow-2xl" alt="Facility 1" />
                        <img src="/src/assets/images/img-home-gallery-2.png" className="w-1/3 h-[40vh] md:h-[50vh] object-cover rounded-[2rem] shadow-2xl" alt="Facility 2" />
                        <img src="/src/assets/images/img-home-gallery-3.png" className="w-1/3 h-[40vh] md:h-[50vh] object-cover rounded-[2rem] shadow-2xl" alt="Facility 3" />
                    </motion.div>
                </div>
            </section> */}



            {/* Leadership Section */}
            <section className="py-32 lg:py-48 bg-surface-muted dark:bg-slate-950 transition-colors duration-500">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h2 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6">Our Leadership</h2>
                            <h3 className="text-5xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">Visionary <br /> Guidance</h3>
                        </div>
                        <Link to="/directors/dr-wangikar" className="inline-flex items-center gap-4 group mb-4 md:mb-0">
                            <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-secondary transition-colors">Meet the Team</span>
                            <div className="w-10 h-[2px] bg-slate-300 dark:bg-slate-700 group-hover:bg-secondary group-hover:w-16 transition-all duration-500"></div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <DirectorCard
                            name="Dr. Pralhad Wangikar"
                            designation="TFM"
                            image="/src/assets/images/img-director-dr.png"
                            profileLink="/directors/dr-wangikar"
                            delay={0.1}
                        />
                        <DirectorCard
                            name="Mrs. Ila Wangikar"
                            designation="Managing Director"
                            image="/src/assets/images/img-director-mrs.png"
                            profileLink="/directors/mrs-wangikar"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Quick CTA */}
            <section className="py-32 lg:py-48 bg-primary-900 text-white relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none"></div>

                <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        className="text-6xl md:text-[8vw] lg:text-[6vw] font-heading font-bold mb-10 tracking-tight leading-[0.9] text-white"
                    >
                        Accelerate Your <br /> <span className="italic font-light text-slate-300">Innovation</span> Pipeline
                    </motion.h2>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                        <Link to="/contact-us" className="relative inline-flex items-center justify-center px-12 md:px-16 py-6 font-bold text-white transition-all duration-300 bg-secondary rounded-full hover:bg-white hover:text-primary-900 group">
                            <span className="absolute inset-0 w-full h-full rounded-full ring-2 ring-white/50 group-hover:ring-transparent transition-all duration-300 pointer-events-none"></span>
                            <span className="relative text-lg tracking-wider uppercase">Partner With Us</span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
