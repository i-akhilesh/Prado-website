import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaEye, FaBullseye, FaHeart, FaMicroscope } from 'react-icons/fa';
import DirectorCard from '../modules/directors/components/DirectorCard';

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [0, 300]);

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    const team = [
        { name: "Dr. Vaibhav Madiwal", title: "Head of IVG", degrees: "M.V.Sc, Ph.D.", department: "IVG", image: "" },
        { name: "Mrs. Ankita Deshmukh", title: "Head of TICO", degrees: "M.V.Sc", department: "TICO", image: "" },
        { name: "Ms. Samruddhi Junnarkar", title: "Head of QAU", degrees: "M.Sc", department: "QAU", image: "" },
        // { name: "Dr. ", title: "Head of IT", degrees: "B.E", department: "IT", image: "" },
        { name: "Mr. Umesh Badhe", title: "Head of ABA", degrees: "M.V.Sc, Ph.D.", department: "ABA", image: "" },
        { name: "Dr. Pranav Panzade", title: "Head of Pathology", degrees: "M.V.Sc", department: "Pathology", image: "" },
        { name: "Miss. Sai Prasanna", title: "Head of ECOTOX", degrees: "M.Tech", department: "ECOTOX", image: "" },
        { name: "Dr. Pranav Panzade", title: "Head of ARF", degrees: "M.V.Sc", department: "ARF", image: "" },
        { name: "Ms. Pallavi", title: "Head of TOX", degrees: "M.V.Sc", department: "TOX", image: "" }
        // { name: "Dr. S. Kulkarni", title: "Head of Animal Facility", degrees: "M.V.Sc", department: "Animal Facility", image: "/images/img-home-gallery-2.png" }
    ];

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
                        className="text-[14vw] md:text-[10vw] font-bold font-heading leading-[0.85] tracking-tighter mb-8 text-white"
                    >
                        Our <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Legacy.</span>
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mt-12 border-t border-white/20 pt-8 max-w-4xl"
                    >
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Established in 2010, PRADO is Asia’s premier comprehensive preclinical partner.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Asymmetric Overview Setup */}
            <section className="py-24 lg:py-32 relative overflow-hidden bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6">Who We Are</motion.h2>
                            <motion.h3 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-5xl md:text-7xl font-heading font-bold text-slate-900 dark:text-white leading-none tracking-tight mb-8">
                                Precision <br/> <span className="italic font-light">Defined.</span>
                            </motion.h3>
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 h-[30vh] w-full rounded-[2rem] overflow-hidden relative">
                                <motion.img style={{ y: yImg }} src="/images/about/about-hero.png" className="absolute top-[-10%] left-0 w-full h-[100%] object-cover scale-110" alt="Prado Labs" />
                            </motion.div>
                        </div>
                        <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12 mt-8 lg:mt-0 text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                            <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                Headquartered in Pune, India, PRADO - Preclinical Research and Development Organization Pvt. Ltd. stands as one of the fastest-growing CROs. 
                            </motion.p>
                            <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                We deliver end-to-end preclinical services encompassing Toxicology, Pharmacology & Efficacy, Pharmacokinetic, Pathology, Biocompatibility, Analytical-Bioanalytical, Ecotoxicological, Risk Assessment Services, Consultancy & Training and Animal Clinical entirely under one roof. The Quality and GLP compliance guarantees our clients to confidently submit their preclinical data packages to regulatory authorities, accelerating approval timelines.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Massive Sticky Scroll Principles */}
            <section className="py-24 lg:py-32 bg-surface-muted dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 relative">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5 relative">
                            <div className="lg:sticky lg:top-40 text-slate-900 dark:text-white">
                                <h2 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6">Our DNA</h2>
                                <h3 className="text-6xl md:text-8xl font-heading font-semibold leading-[0.9] tracking-tight mb-8">
                                    Vision & <br/> Mission
                                </h3>
                            </div>
                        </div>

                        <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-20 mt-16 lg:mt-0">
                            {/* Vision Block */}
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative group pl-16 md:pl-24 border-l pointer-events-none border-slate-300 dark:border-slate-700">
                                <span className="absolute -left-[32px] top-0 text-[4rem] text-slate-300 dark:text-slate-800 font-heading font-bold leading-none select-none">V</span>
                                <h4 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Vision</h4>
                                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                    To establish Prado as the premier global destination for preclinical research, synonymous with scientific excellence, ethical practices, and regulatory mastery, thereby accelerating access to safe healthcare globally.
                                </p>
                            </motion.div>

                            {/* Mission Block */}
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative group pl-16 md:pl-24 border-l pointer-events-none border-slate-300 dark:border-slate-700">
                                <span className="absolute -left-[32px] top-0 text-[4rem] text-slate-300 dark:text-slate-800 font-heading font-bold leading-none select-none">M</span>
                                <h4 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Mission</h4>
                                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                    To place integrity in everything we do, delivering high quality integrated preclinical services, and fostering an environment of sponsor satisfaction alongside the achievement of economic healthcare product development.
                                </p>
                            </motion.div>

                            {/* Value Block */}
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative group pl-16 md:pl-24 border-l pointer-events-none border-slate-300 dark:border-slate-700">
                                <span className="absolute -left-[32px] top-0 text-[4rem] text-slate-300 dark:text-slate-800 font-heading font-bold leading-none select-none">V</span>
                                <h4 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Value</h4>
                                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                    We build our reputation in preclinical excellence and wider scope speciality services at PRADO, we combine high quality research services at affordable cost. This is the reason why our sponsor’s have been entrusting values with us for their product development and registration work with confidence.
                                </p>
                            </motion.div>

                            {/* Quality Policy Block */}
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative group pl-16 md:pl-24 border-l pointer-events-none border-slate-300 dark:border-slate-700">
                                <span className="absolute -left-[32px] top-0 text-[4rem] text-slate-300 dark:text-slate-800 font-heading font-bold leading-none select-none">Q</span>
                                <h4 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Quality Policy</h4>
                                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                    We are committed to quality as an internal part of our operations with the goal of achieving preclinical excellence and sponsor satisfaction with consideration of safety by consideration of safety by continuous improvement of our capabilities to identify, develop and provide services that adds value to our sponsor in GLP, preclinical services. </p>
                            </motion.div>

                            {/* Values Block
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative group pl-8 md:pl-16 border-l pointer-events-none border-secondary">
                                <span className="absolute -left-[32px] top-0 text-[4rem] text-secondary font-heading font-bold leading-none select-none">*</span>
                                <h4 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Core Values</h4>
                                <ul className="text-2xl text-slate-900 dark:text-white font-medium space-y-4">
                                    <li className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4"><span>Integrity</span></li>
                                    <li className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4"><span>Quality</span></li>
                                    <li className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4"><span>Innovation</span></li>
                                    <li className="flex items-center gap-4"><span>Commitment</span></li>
                                </ul>
                            </motion.div> */}

                        </div>
                    </div>
                </div>
            </section>

            {/* Department Heads Editorial Grid */}
            <section className="py-24 lg:py-32 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div>
                            <h2 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6">Operational Backbone of PRADO</h2>
                            <h3 className="text-5xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">Expertise <br/><span className="italic font-light">Personified.</span></h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group cursor-default"
                            >
                                <div className="h-[40vh] md:h-[50vh] overflow-hidden rounded-2xl mb-6 relative bg-slate-100 dark:bg-slate-800">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">{member.name}</h4>
                                    <p className="text-secondary font-bold text-sm tracking-widest uppercase mb-1">{member.department}</p>
                                    <p className="text-slate-500 dark:text-slate-400 font-light">{member.degrees}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
