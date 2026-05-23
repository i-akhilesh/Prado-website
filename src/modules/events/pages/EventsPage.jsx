import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';

export default function EventsPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    const events = [
        {
            title: "Annual Preclinical Symposium 2024",
            date: "October 15-16, 2024",
            location: "Prado Convention Center, Pune",
            description: "Join leading experts in toxicology and preclinical research as we discuss the latest regulatory updates and alternative in-vitro methodologies. Featuring keynote speakers from global pharma giants.",
            status: "Upcoming",
            image: "/images/img-home-about.png" // Realistic placeholder
        },
        {
            title: "GLP Audit Readiness Workshop",
            date: "November 5, 2024",
            location: "Virtual Webinar",
            description: "A comprehensive half-day workshop focused on preparing QAU and technical staff for international regulatory audits. Learn directly from former FDA and OECD compliance officers.",
            status: "Upcoming",
            image: "/images/img-facility-tox-1.png"
        },
        {
            title: "Global CRO Partnership Summit",
            date: "Currently Ongoing",
            location: "Dubai World Trade Centre",
            description: "Prado is exhibiting at Booth A45. Meeting with global partners to discuss expanding our service portfolio and establishing strategic alliances in the MENA region.",
            status: "Ongoing",
            image: "/images/img-facility-animal-1.png"
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
                        Global <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Engagements.</span>
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                        className="flex flex-col md:flex-row gap-8 items-start mt-12 border-t border-white/20 pt-8 max-w-4xl"
                    >
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Stay updated with our latest conferences, global workshops, and speaking engagements across the scientific community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Asymmetric Events List */}
            <section className="py-20 lg:py-32 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative z-20">
                <div className="container mx-auto px-4 md:px-8 space-y-32 md:space-y-48">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center relative group`}
                        >
                            {/* Text Content */}
                            <div className="w-full lg:w-5/12 flex flex-col pt-16 md:pt-0 relative z-10">
                                <h4 className="flex items-center gap-4 mb-6">
                                    <span className="w-12 h-[1px] bg-secondary inline-block"></span> 
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-sm ${
                                        event.status === 'Upcoming' ? 'bg-secondary text-white' : 'bg-primary-900 text-white'
                                    }`}>
                                        {event.status}
                                    </span>
                                </h4>
                                <h2 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
                                    {event.title}
                                </h2>
                                
                                <div className="flex flex-col gap-4 text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-8 border-l border-slate-200 dark:border-slate-800 pl-6">
                                    <div className="flex items-center gap-4">
                                        <FaCalendarAlt className="text-secondary text-lg" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <FaMapMarkerAlt className="text-secondary text-lg" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-10">
                                    {event.description}
                                </p>

                                <div>
                                    <button className="flex items-center gap-4 text-primary-900 dark:text-white font-bold tracking-widest uppercase text-sm group-hover:text-secondary transition-colors duration-300">
                                        <FaTicketAlt /> Register Interest <span className="w-8 h-[1px] bg-current inline-block transform group-hover:translate-x-2 transition-transform"></span>
                                    </button>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="w-full lg:w-7/12 relative z-10">
                                <div className="group/img relative w-full h-[50vh] md:h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                                    <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply" />
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform scale-105 group-hover/img:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
