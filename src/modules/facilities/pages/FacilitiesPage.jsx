import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function FacilitiesPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    const departments = [
        {
            title: "Animal Research Facility (ARF)",
            subtitle: "CPCSEA Approved · SPF-Grade",
            description: "A meticulously controlled environment designed for ethical research. Equipped with fully automated Individually Ventilated Cages (IVC) systems.",
            image: "/images/facilities/arf.png",
            path: "/facilities/arf",
            number: "01"
        },
        {
            title: "Pathology (PATH)",
            subtitle: "Disease & Tissue Analysis Lab",
            description: "Comprehensive evaluation of biological samples through expert histopathology, immunohistochemistry, and clinical pathology services.",
            image: "/images/facilities/pathology.png",
            path: "/facilities/pathology",
            number: "02"
        },
        {
            title: "Quality Assurance Unit (QAU)",
            subtitle: "GLP Compliance & Audit",
            description: "An independent body ensuring every study rigorously conforms to Good Laboratory Practice (GLP) principles and international regulatory guidelines.",
            image: "/images/facilities/qau.png",
            path: "/facilities/qau",
            number: "03"
        },
        {
            title: "Test Item Control Office (TICO)",
            subtitle: "Receipt · Storage · Accountability",
            description: "Meticulous management of all test and reference items ensuring regulatory traceability, sample integrity, and complete accountability.",
            image: "/images/facilities/tico.png",
            path: "/facilities/tico",
            number: "04"
        },
        {
            title: "Environment, Health & Safety (EHS)",
            subtitle: "Safe · Sustainable · Compliant",
            description: "Ensuring every aspect of our operations is conducted safely, responsibly, and in full compliance with environmental and occupational safety regulations.",
            image: "/images/facilities/ehs.png",
            path: "/facilities/ehs",
            number: "05"
        },
        {
            title: "In Vitro Facility (IVF)",
            subtitle: "Cell-Based Research & Archives",
            description: "State-of-the-art cell biology laboratory supporting cytotoxicity, genotoxicity, and pharmacological studies.",
            image: "/images/facilities/in-vitro.png",
            path: "/facilities/in-vitro",
            number: "06"
        },
        {
            title: "Analytical & Bioanalytical (AB)",
            subtitle: "Method Development & Validation",
            description: "Cutting-edge instrumentation for the precise quantification of drugs and metabolites validated in full compliance with ICH and FDA guidelines.",
            image: "/images/facilities/analytical.png",
            path: "/facilities/analytical",
            number: "07"
        },
        {
            title: "Information Technology (IT)",
            subtitle: "Digital Infrastructure & Data Security",
            description: "Secure, validated digital infrastructure underpinning the integrity of preclinical research data in compliance with 21 CFR Part 11.",
            image: "/images/facilities/it.png",
            path: "/facilities/it",
            number: "08"
        },
        {
            title: "Document Control (DOC)",
            subtitle: "Records Management & Traceability",
            description: "The backbone of regulatory compliance ensuring all controlled documents are managed, versioned, and traceable with absolute rigor.",
            image: "/images/facilities/document-control.png",
            path: "/facilities/document-control",
            number: "09"
        },
        {
            title: "Ecotoxicology (ECOTOX)",
            subtitle: "Environmental Safety Testing",
            description: "Conducting comprehensive environmental risk assessments on chemicals and agrochemicals, evaluating toxicity to aquatic and terrestrial organisms.",
            image: "/images/facilities/qau.png",
            path: "/facilities/ecotox",
            number: "10"
        },
        {
            title: "Archives (ARC)",
            subtitle: "Secure Long-Term GLP Storage",
            description: "Secure, climate-controlled storage for raw study records, tissue blocks, slides, and final reports protecting study integrity for 15+ years.",
            image: "/images/facilities/document-control.png",
            path: "/facilities/archives",
            number: "11"
        }
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
                        className="text-[14vw] md:text-[10vw] font-bold font-heading leading-[0.85] tracking-tighter mb-8 text-white relative z-10"
                    >
                        Global <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Infrastructure.</span>
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                        className="flex flex-col md:flex-row gap-8 items-start mt-12 border-t border-white/20 pt-8 max-w-4xl"
                    >
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Engineered for precision. GLP-certified facilities delivering uncompromising data integrity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Expansive Facility Modules */}
            <section className="py-20 lg:py-32 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative z-20">
                <div className="container mx-auto px-4 md:px-8 space-y-32 md:space-y-48">
                    {departments.map((dept, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeIn}
                                id={dept.path.split('/').pop()}
                                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center relative group`}
                            >
                                {/* Massive Background Number */}
                                <div className="absolute top-0 md:-top-20 left-4 md:left-auto md:right-0 text-[18vw] font-heading font-black text-slate-50 dark:text-slate-800/20 leading-none select-none pointer-events-none z-0">
                                    {dept.number}
                                </div>

                                {/* Text Content */}
                                <div className="w-full lg:w-5/12 flex flex-col pt-16 md:pt-0 relative z-10">
                                    <h4 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6 flex items-center gap-4">
                                        <span className="w-12 h-[1px] bg-secondary inline-block"></span> 
                                        {dept.subtitle}
                                    </h4>
                                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white leading-none tracking-tight mb-8 group-hover:text-secondary transition-colors duration-500">
                                        {dept.title}
                                    </h2>
                                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-10">
                                        {dept.description}
                                    </p>
                                    <Link to={dept.path} className="inline-flex items-center gap-4 bg-primary text-white border border-primary dark:bg-slate-800 dark:border-slate-700 w-fit px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:border-secondary transition-all duration-300">
                                        Explore Facility <FaArrowRight />
                                    </Link>
                                </div>

                                {/* Parallax Image Container */}
                                <div className="w-full lg:w-7/12 relative z-10">
                                    <Link to={dept.path} className="block group/img relative w-full h-[50vh] md:h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                                        <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply" />
                                        <img
                                            src={dept.image}
                                            alt={dept.title}
                                            className="w-full h-full object-cover transform scale-105 group-hover/img:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                                        />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
