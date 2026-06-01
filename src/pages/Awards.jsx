import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FaCertificate, FaRocket, FaFlask, FaGlobe, FaTrophy, FaLeaf, FaSun, FaBuilding } from 'react-icons/fa';

export default function Awards() {
    const heroRef = useRef(null);
    const timelineRef = useRef(null);
    
    // Parallax on hero
    const { scrollYProgress: heroOpacityScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroOpacity = useTransform(heroOpacityScroll, [0, 1], [1, 0]);
    const heroY = useTransform(heroOpacityScroll, [0, 1], [0, 200]);

    // Timeline scroll progress for the continuous glowing line
    const { scrollYProgress } = useScroll({ 
        target: timelineRef, 
        offset: ["start center", "end center"] 
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const journey = [
        { year: "2010", title: "Company Incorporation", icon: FaBuilding, highlight: "from-blue-500 to-cyan-400", description: "Company incorporated with modest and personal investment, laying the foundations for an era of scientific excellence." },
        { year: "2013", title: "Facility Establishment", icon: FaBuilding, highlight: "from-indigo-500 to-purple-500", description: "First state-of-the-art facility establishment alongside pivotal CCSEA Approval of Animal Facility." },
        { year: "2015", title: "Standardization", icon: FaFlask, highlight: "from-emerald-500 to-teal-400", description: "Standardization of rigorous Toxicity studies and foundational implementation of GLP systems." },
        { year: "2016", title: "Animal Breeding", icon: FaLeaf, highlight: "from-orange-500 to-amber-400", description: "Officially secured Animal Breeding and Trading permission, expanding operational autonomy." },
        { year: "2017", title: "Sustainable Energy", icon: FaSun, highlight: "from-yellow-400 to-orange-500", description: "Committing to a greener future with the massive installation of a dedicated Solar plant." },
        { year: "2018", title: "GLP Certification", icon: FaCertificate, highlight: "from-blue-600 to-indigo-600", description: "Officially awarded GLP Certificate, ensuring globally compliant operational rigorousness." },
        { year: "2019", title: "Excellence Award", icon: FaTrophy, highlight: "from-yellow-500 to-yellow-300", description: "Honored with the highly prestigious Preclinical Research Excellence Award globally." },
        { year: "2020", title: "Facility Relocation", icon: FaGlobe, highlight: "from-cyan-500 to-blue-500", description: "Strategic relocation of facility to accommodate multi-dimensional operational scaling." },
        { year: "2021", title: "Inhalation Facility", icon: FaFlask, highlight: "from-purple-500 to-pink-500", description: "Further GLP Certification matched with the establishment of an advanced inhalation facility." },
        { year: "2022", title: "Top 10 CRO Award", icon: FaTrophy, highlight: "from-yellow-400 to-orange-400", description: "Ranked as Top 10 CRO globally and recognized as an elite BIRAC GLP consultant." },
        { year: "2023", title: "Advanced Assays", icon: FaFlask, highlight: "from-rose-500 to-red-500", description: "Spearheading EOGRT, Vaccine Immunogenicity studies, and complex Pig-a assay Nitrosamine." },
        { year: "2024", title: "ABA & ECOTOX", icon: FaGlobe, highlight: "from-emerald-400 to-emerald-600", description: "Pioneering Analytical & Bioanalytical (ABA) and Ecotoxicology (ECOTOX) framework establishments." },
        { year: "2025", title: "Future Innovations", icon: FaRocket, highlight: "from-fuchsia-500 to-purple-600", description: "Deploying Animal CT, novel Formulations, addition of Bird species and Collaboration for Animal Alternatives." }
    ];

    return (
        <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0a0a0c] transition-colors duration-700 selection:bg-secondary selection:text-white min-h-screen">
            
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-secondary/10 dark:bg-secondary/5 blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] mix-blend-screen" />
                {/* Clean Subtle Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_1px_1px_at_center,var(--tw-colors-slate-400)_1px,transparent_0)] bg-[size:40px_40px] opacity-10 dark:opacity-5 pointer-events-none"></div>
            </div>

            {/* Premium Cinematic Header */}
            <motion.section 
                ref={heroRef}
                style={{ opacity: heroOpacity, y: heroY }}
                className="relative w-full min-h-[85svh] flex items-center justify-center pt-24 pb-12 z-10"
            >
                <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md mb-8 shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">15+ Years of Legacy</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black font-heading leading-none tracking-tighter mb-8 text-slate-900 dark:text-white"
                    >
                        A legacy of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-purple-500 to-indigo-600 tracking-tight">innovation.</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-3xl leading-relaxed"
                    >
                        Scroll to explore the monumental milestones that defined our growth and our unrelenting commitment to scientific perfection.
                    </motion.p>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Discover</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-slate-300 dark:from-slate-700 to-transparent"></div>
                </motion.div>
            </motion.section>

            {/* Interactive Journey Timeline */}
            <section className="py-16 md:py-32 relative z-10">
                <div className="container mx-auto px-4 sm:px-8 max-w-5xl relative" ref={timelineRef}>
                    
                    {/* The Active Glowing Line */}
                    <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-[1px] md:w-[2px] bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2 origin-top">
                        <motion.div 
                            style={{ scaleY }} 
                            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-secondary via-purple-500 to-indigo-500 origin-top shadow-[0_0_20px_rgba(var(--secondary),0.5)]"
                        />
                    </div>
                    
                    <div className="space-y-20 md:space-y-32 pb-32">
                        {journey.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <TimelineNode key={item.year} item={item} isEven={isEven} index={index} />
                            );
                        })}
                    </div>

                </div>
            </section>
        </div>
    );
}

// Extracted Component for smooth individual intersect observations
function TimelineNode({ item, isEven, index }) {
    const nodeRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: nodeRef,
        offset: ["start 90%", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    const Icon = item.icon;

    return (
        <motion.div 
            ref={nodeRef}
            style={{ opacity, y }}
            className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Ghost Text Background */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0 md:-right-24' : 'left-0 md:-left-24'} pointer-events-none select-none z-0 overflow-hidden`}>
                <span className="text-[12rem] md:text-[22rem] font-black tracking-tighter text-slate-100 dark:text-slate-800/20 leading-none">
                    {item.year}
                </span>
            </div>

            {/* Empty Half Buffer */}
            <div className="hidden md:block md:w-1/2"></div>

            {/* Glowing Center Node */}
            <div className="absolute left-[2rem] md:left-1/2 w-12 h-12 md:w-16 md:h-16 transform -translate-x-1/2 rounded-full bg-white dark:bg-[#0a0a0c] border-2 md:border-4 border-slate-200 dark:border-slate-800 flex items-center justify-center z-20 group outline outline-4 outline-slate-50 dark:outline-[#0a0a0c]">
                <motion.div style={{ scale }} className={`absolute inset-0 rounded-full bg-gradient-to-tr ${item.highlight} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`} />
                <motion.div style={{ scale }} className={`absolute inset-0 rounded-full bg-gradient-to-tr ${item.highlight} opacity-20`} />
                <Icon className="text-secondary dark:text-slate-300 relative z-10 md:text-xl group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Glassmorphism Content Card */}
            <div className={`w-full md:w-1/2 pl-16 md:px-20 relative z-10 ${isEven ? 'md:pl-20 md:pr-0' : 'md:pr-20 md:pl-0'}`}>
                <div className="group relative p-[1px] rounded-[2rem] overflow-hidden">
                    {/* Animated Border Reveal */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.highlight} opacity-0 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay`} />
                    
                    <div className="relative h-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-widest text-white bg-gradient-to-r ${item.highlight} shadow-lg`}>
                                {item.year}
                            </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-6 tracking-tight">
                            {item.title}
                        </h3>
                        
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-500">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
