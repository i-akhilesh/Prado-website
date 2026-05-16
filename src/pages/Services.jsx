import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaVial, FaHeartbeat, FaFlask, FaMicroscope, FaShieldAlt,
    FaAtom, FaLeaf, FaFileAlt, FaChalkboardTeacher, FaPaw,
    FaArrowRight
} from 'react-icons/fa';

const services = [
    {
        number: '01',
        title: 'Toxicology',
        tag: 'Safety Assessment',
        description: 'Full range of GLP-compliant toxicology studies — acute, sub-acute, chronic, genotoxicity, reproductive — to build an irrefutable, submission-ready safety profile.',
        path: '/services/toxicology',
        icon: <FaVial />
    },
    {
        number: '02',
        title: 'Pharmacology & Efficacy',
        tag: 'Biology Studies',
        description: 'Rigorous in vivo and in vitro studies characterizing efficacy, mechanism of action, and pharmacodynamic profiles of new chemical and biological entities.',
        path: '/services/pharmacology',
        icon: <FaHeartbeat />
    },
    {
        number: '03',
        title: 'Pharmacokinetic',
        tag: 'ADME & Drug Disposition',
        description: 'Comprehensive ADME analysis — tissue distribution, PK parameter determination, BBB studies, and continuous infusion PK — for complete drug disposition understanding.',
        path: '/services/pharmacokinetic',
        icon: <FaFlask />
    },
    {
        number: '04',
        title: 'Pathology',
        tag: 'Disease & Tissue Analysis',
        description: 'Expert necropsy, histopathology, immunohistochemistry, and clinical pathology services underpinned by board-certified veterinary pathologists.',
        path: '/services/pathology',
        icon: <FaMicroscope />
    },
    {
        number: '05',
        title: 'Biocompatibility',
        tag: 'Medical Device Safety',
        description: 'ISO 10993-compliant biocompatibility testing from cytotoxicity and hemocompatibility to skin sensitization, supporting CE mark and FDA submissions.',
        path: '/services/biocompatibility',
        icon: <FaShieldAlt />
    },
    {
        number: '06',
        title: 'Analytical-Bioanalytical',
        tag: 'Method Development & Validation',
        description: 'End-to-end analytical and bioanalytical services for small and large molecules, from pre-formulation through product lifecycle support.',
        path: '/services/analytical-bioanalytical',
        icon: <FaAtom />
    },
    {
        number: '07',
        title: 'Ecotoxicological',
        tag: 'Environmental Safety',
        description: 'OECD guideline ecotoxicology testing across aquatic (algae, daphnia, fish) and terrestrial (earthworm, honeybee, avian) species for environmental risk assessment.',
        path: '/services/ecotoxicological',
        icon: <FaLeaf />
    },
    {
        number: '08',
        title: 'Risk Assessment',
        tag: 'Regulatory Services',
        description: 'Expert PDE, OEL, AI, and TRA report preparation meeting ICH, EMA, and FDA standards. We deliver defensible, submission-ready toxicological assessments.',
        path: '/services/risk-assessment',
        icon: <FaFileAlt />
    },
    {
        number: '09',
        title: 'Consultancy & Training',
        tag: 'GLP / AAALAC / Academia',
        description: 'GLP certification guidance, AAALAC accreditation support, and industry-academia bridge training programs that build lasting scientific excellence.',
        path: '/services/consultancy-training',
        icon: <FaChalkboardTeacher />
    },
    {
        number: '10',
        title: 'Animal Clinical',
        tag: 'Veterinary Product Evaluation',
        description: 'Dedicated veterinary product field trials across companion animals, livestock, and poultry, backed by a strong collaborative network of farms and clinics.',
        path: '/services/animal-clinical',
        icon: <FaPaw />
    },
    {
        number: '11',
        title: 'Physical - Chemical Testing',
        tag: 'Analytical Properties',
        description: 'Comprehensive physical and chemical testing services meeting international guidelines (CIPAC, OECD, EPA, ASTM) for robust product characterization.',
        path: '/services/physical-chemical',
        icon: <FaVial />
    }
];

export default function Services() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

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
                        Our <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Expertise.</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                        className="flex flex-col md:flex-row gap-8 items-start mt-12 border-t border-white/20 pt-8 max-w-4xl"
                    >
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            End-to-end preclinical science. GLP-certified, globally compliant, and driven by 14+ years of scientific excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Directory */}
            <section className="py-32 lg:py-48 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

                        {/* Sticky Left Title */}
                        <div className="lg:col-span-4 lg:sticky lg:top-40 mb-16 lg:mb-0 text-slate-900 dark:text-white">
                            <h2 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6 flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-secondary inline-block"></span>
                                Capabilities
                            </h2>
                            <h3 className="text-5xl md:text-6xl font-heading font-bold leading-none tracking-tight">
                                Integrated <br /> <span className="italic font-light text-slate-500">Solutions.</span>
                            </h3>
                            <p className="mt-8 text-xl text-slate-500 dark:text-slate-400 font-light max-w-sm">
                                10 core disciplines. One seamlessly integrated scientific partner.
                            </p>
                        </div>

                        {/* Scrolling Right Directory */}
                        <div className="lg:col-span-7 lg:col-start-6 flex flex-col group/list">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-50px' }}
                                    variants={fadeIn}
                                    transition={{ delay: index * 0.06 }}
                                >
                                    <Link
                                        to={service.path}
                                        className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-12 items-center py-10 border-b border-slate-200 dark:border-slate-800 hover:border-secondary transition-colors duration-500 cursor-pointer"
                                    >
                                        <div className="text-xl font-heading font-bold text-slate-300 dark:text-slate-700 group-hover:text-secondary transition-colors">
                                            {service.number}
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-3 text-slate-300 dark:text-slate-600 group-hover:text-secondary transition-colors text-2xl">
                                                {service.icon}
                                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-600 group-hover:text-secondary transition-colors">
                                                    {service.tag}
                                                </span>
                                            </div>
                                            <h4 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-secondary transition-colors">
                                                {service.title}
                                            </h4>
                                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light max-w-xl leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-slate-200 dark:border-slate-800 group-hover:bg-secondary group-hover:border-secondary group-hover:text-white text-slate-400 transition-all duration-300 transform group-hover:-rotate-45">
                                            <FaArrowRight size={20} />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Expansive CTA */}
            <section className="py-32 bg-primary-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/10 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center max-w-5xl">
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        className="text-5xl md:text-7xl font-heading font-bold leading-none tracking-tight mb-8"
                    >
                        Need a Custom <br /> Testing Plan?
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-16 max-w-3xl"
                    >
                        Our scientific architects are ready to design a tailored preclinical blueprint that navigates complex regulatory bottlenecks seamlessly.
                    </motion.p>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                        <Link to="/contact-us" className="inline-flex items-center gap-4 bg-white text-primary-900 px-12 py-5 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-colors duration-300">
                            Consult an Expert <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
