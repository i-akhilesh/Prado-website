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
            <section className="relative w-full min-h-[100svh] flex items-center bg-primary-900 text-white overflow-hidden py-24 lg:py-0">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950/80 z-0"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent pointer-events-none z-0"></div>
                
                <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        
                        {/* Left Column: Text Content */}
                        <div className="lg:col-span-7 flex flex-col items-start justify-center text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-300">Asia's Fastest Growing GLP Certified Preclinical CRO</span>
                                </span>
                                
                                <h1 className="text-[8.5vw] md:text-[6vw] lg:text-[4vw] font-bold font-heading leading-[1.1] tracking-tighter mb-8 text-white">
                                    PRADO Pvt. Ltd. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_auto] animate-gradient">
                                        Beyond Expectations <br className="hidden lg:block"/> in Preclinical Research
                                    </span>
                                </h1>

                                <p className="text-base md:text-xl text-slate-300 max-w-xl font-light leading-relaxed border-l-2 border-secondary pl-6 mb-8">
                                    Supporting pharmaceuticals, Biopharma, Biotech, Medical Devices, Agrochemicals, Herbal, Food, Veterinary, and Vaccine industries globally with unmatched compliance and scientific expertise.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                    <Link to="/contact-us" className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-secondary rounded-full hover:bg-white hover:text-primary-900 group">
                                        <span className="relative text-sm tracking-wider uppercase">Partner With Us</span>
                                    </Link>
                                    <Link to="/services" className="group flex items-center gap-4 text-white hover:text-secondary transition-colors duration-300 py-3">
                                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Explore Capabilities</span>
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-secondary transition-all duration-300 relative overflow-hidden">
                                            <FaArrowRight className="relative z-10 transform -translate-x-0.5 group-hover:translate-x-0 transition-transform duration-300" />
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: 3D DNA Helix */}
                        <div className="lg:col-span-5 relative h-[50vh] lg:h-[75vh] w-full flex items-center justify-center">
                            <Hero3D />
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. Editorial About Section (Asymmetric) */}
            <section className="py-24 lg:py-32 relative overflow-hidden bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
                        <div className="lg:col-span-5 relative">
                            <motion.h2
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                                className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6"
                            >
                                What Is PRADO
                            </motion.h2>
                            <motion.h2
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                                className="text-2xl md:text-3xl lg:text-3xl font-heading font-semibold text-slate-900 dark:text-white mb-8 leading-snug tracking-tight"
                            >
                                PRADO, Preclinical Research and Development Organization Pvt. Ltd. is a <span className="italic font-light text-slate-600 dark:text-slate-400">global, GLP certified preclinical contract research partner</span> helping healthcare industries reach the market faster.
                            </motion.h2>
                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-12 space-y-4"
                            >
                                <p>Based in Pune, India, PRADO serves pharmaceutical, biotech, biopharma, medical device, agrochemical, food, vaccine, and animal health industries — providing cost-effective, high-quality, and timely results.</p>
                                <p>From Analytical, pharmacokinetics, animal model development, pathology services, toxicology, Biocompatibility, Ecotoxicology, risk assessment and animal clinical trials we deliver data that meets international regulatory standards with good acceptance rate.</p>
                                <p>With proven expertise and a client-first approach, PRADO is not just a service provider but a strategic partner in preclinical excellence.</p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-6 lg:col-start-7 relative h-[60vh] md:h-[80vh] w-full">
                            <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden">
                                <img src="/images/home/about.png" alt="Laboratory Operations" className="w-full h-[120%] object-cover object-center absolute top-[-10%]" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5 Corporate Overview Section */}
            <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative z-10 transition-colors duration-700">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-full lg:max-w-[70vw] mx-auto text-center mb-16 lg:mb-24">
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
                            Incorporated in 2010 by an experienced team of scientific professionals, PRADO is one of Asia’s fastest growing GLP certified preclinical CROs with an integrated platform to support a diversified customer base.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 max-w-7xl mx-auto">
                        {[
                            { icon: FaChartLine, title: "Growing Company", desc: "Fastest Growing Indian Company Excellence Award 2017 by International Achievers Conference. Top 10 CRO 2022, Industry Outlook 2022 Award." },
                            { icon: FaUsers, title: "Diversified Customer Base", desc: "Mix of Pharmaceutical, Biotech, Medical Device, Pesticide, Herbal and Vaccine producing customers from across the globe." },
                            { icon: FaCogs, title: "Integrated Services", desc: "Offers a range of Preclinical Toxicology, Pharmacokinetics, Biology, Pathology, Biocompatibility Testing, Analytical, Ecotoxicology, Risk Assessment and Animal Clinical field Trials." },
                            { icon: FaStar, title: "Best-in-Class Talent", desc: "Experienced scientific and management team having worked with global pharmaceutical, biotech and other companies." },
                            { icon: FaBuilding, title: "Certificates", desc: " GLP Certified (GLP/C-235A/2026) • CCSEA Approved Facility (1723/PO/RcBiBt/13/CCSEA) • DSIR certified and Recognized." },
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
            <section className="py-24 lg:py-32 bg-white dark:bg-slate-900 relative border-y border-slate-200 dark:border-slate-800">
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
                                    We combine 15+ years of Preclinical services with unmatched cost-effectiveness and GLP compliance.
                                </p>
                            </div>
                        </div>

                        {/* Scrolling Right Column (Cards) */}
                        <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8 md:gap-16 mt-8 lg:mt-0">
                            {[
                                { num: "01", title: "GLP-Certified", desc: "Ensuring compliance with OECD Good Laboratory Practices (GLP) and other international regulatory guidelines.", img: "/images/home/strength-1.png" },
                                { num: "02", title: "Uncompromising Data", desc: "High fidelity analytical precision delivering data with exceptional regulatory acceptance rates worldwide. Accurate and reliable data generation.", img: "/images/home/strength-2.png" },
                                { num: "03", title: "15+ Years of Expertise", desc: "Proven track record in delivering scientifically, reliable preclinical solutions globally.", img: "/images/home/strength-1.png" },

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

            {/* 3.5 Accreditations & Certifications Section */}
            <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-700 relative z-10">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-full lg:max-w-[70vw] mx-auto text-center mb-16">
                        <motion.h2
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                            className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6"
                        >
                            Accreditations & Compliance
                        </motion.h2>
                        <motion.h3
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                            className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-8 tracking-tight"
                        >
                            Global Quality Standards
                        </motion.h3>
                        <motion.p
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            PRADO operations adhere to international regulatory frameworks, ensuring verified business identity and strict compliance with preclinical testing standards.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {/* GLP Certification */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                                <FaBuilding className="text-3xl text-secondary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3">GLP Certified</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-light mb-6">
                                    OECD Good Laboratory Practice compliance certified for preclinical regulatory safety studies (GLP/C-235A/2026).
                                </p>
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-100 dark:border-emerald-900/55">
                                Certified
                            </span>
                        </motion.div>

                        {/* CCSEA Approved */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                                <FaBuilding className="text-3xl text-secondary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3">CCSEA Approved</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-light mb-6">
                                    Approved Animal Breeding and Trading facility under CCSEA India guidelines (1723/PO/RcBiBt/13/CCSEA).
                                </p>
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-100 dark:border-emerald-900/55">
                                Approved
                            </span>
                        </motion.div>

                        {/* DSIR Recognized */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                                <FaBuilding className="text-3xl text-secondary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3">DSIR Recognized</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-light mb-6">
                                    Officially certified and recognized by the Department of Scientific and Industrial Research, Govt of India.
                                </p>
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-100 dark:border-emerald-900/55">
                                Recognized
                            </span>
                        </motion.div>

                        {/* D-U-N-S Registered */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                                <FaStar className="text-3xl text-secondary" />
                            </div>
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-4">D-U-N-S® Registered</h4>
                                
                                <iframe id='Iframe1' src='https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1' width='114px' height='97px' frameBorder='0' scrolling='no' allowTransparency='true' ></iframe>
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-900/55">
                                Verified
                            </span>
                        </motion.div>
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
                        <img src="/images/home/gallery-1.png" className="w-1/3 h-[40vh] md:h-[50vh] object-cover rounded-[2rem] shadow-2xl" alt="Facility 1" />
                        <img src="/images/home/gallery-2.png" className="w-1/3 h-[40vh] md:h-[50vh] object-cover rounded-[2rem] shadow-2xl" alt="Facility 2" />
                        <img src="/images/home/gallery-3.png" className="w-1/3 h-[40vh] md:h-[50vh] object-cover rounded-[2rem] shadow-2xl" alt="Facility 3" />
                    </motion.div>
                </div>
            </section> */}



            {/* Leadership Section */}
            <section className="py-24 lg:py-32 bg-surface-muted dark:bg-slate-950 transition-colors duration-500">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6">Our Leadership</h2>
                            <h3 className="text-5xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">Visionary <br /> Guidance</h3>
                        </div>
                        <Link to="/directors/dr-wangikar" className="inline-flex items-center gap-4 group mb-4 md:mb-0">
                            <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-secondary transition-colors">Meet the Team</span>
                            <div className="w-10 h-[2px] bg-slate-300 dark:bg-slate-700 group-hover:bg-secondary group-hover:w-16 transition-all duration-500"></div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        <DirectorCard
                            name="Dr. Pralhad Wangikar"
                            designation="TFM & CEO"
                            image="/images/directors/dr-wangikar.png"
                            profileLink="/directors/dr-wangikar"
                            delay={0.1}
                        />
                        <DirectorCard
                            name="Mrs. Ila Wangikar"
                            designation="Managing Director"
                            image="/images/directors/ila-wangikar.png"
                            profileLink="/directors/mrs-wangikar"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Quick CTA */}
            <section className="py-24 lg:py-32 bg-primary-900 text-white relative overflow-hidden flex items-center justify-center">
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
