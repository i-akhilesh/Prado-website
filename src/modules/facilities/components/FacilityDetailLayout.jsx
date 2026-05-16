import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

/**
 * FacilityDetailLayout – Reusable shell for every facility detail page.
 * Props:
 *  - title: string
 *  - subtitle: string
 *  - intro: string
 *  - image: string – hero background image path
 *  - icon: ReactNode
 *  - features: [{ title, description, bullets?: string[] }]
 *  - stats?: [{ value, label }]
 *  - galleryImages?: string[] - Array of image URLs to display in an auto-fetching gallery
 */
export default function FacilityDetailLayout({ title, subtitle, intro, image, icon, features = [], stats = [], galleryImages = [] }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div ref={containerRef} className="w-full bg-surface-muted dark:bg-slate-950 font-sans transition-colors duration-700 selection:bg-secondary selection:text-white">

            {/* ── Cinematic Hero ── */}
            <section className="relative w-full min-h-[80svh] flex flex-col justify-end pb-24 lg:pb-32 bg-primary-900 text-white overflow-hidden pt-40">
                {image && (
                    <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                        <img src={image} alt={title} className="w-full h-[120%] object-cover object-center opacity-30 mix-blend-luminosity grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/70 to-transparent" />
                    </motion.div>
                )}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none" />

                <div className="container relative z-10 mx-auto px-4 md:px-8">
                    <Link to="/facilities" className="inline-flex items-center text-slate-400 hover:text-white mb-12 text-sm font-bold tracking-[0.2em] uppercase gap-4 transition-colors group">
                        <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> All Facilities
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}>
                        {icon && <div className="text-secondary text-5xl mb-8 opacity-80">{icon}</div>}
                        <p className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4">{subtitle}</p>
                        <h1 className="text-[11vw] md:text-[7vw] font-bold font-heading leading-[0.88] tracking-tighter mb-8 text-white">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl border-l-4 border-secondary pl-6">
                            {intro}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Stats Bar ── */}
            {stats.length > 0 && (
                <section className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                    <div className="container mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 dark:divide-slate-800">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center px-4"
                            >
                                <span className="text-4xl md:text-5xl font-bold font-heading text-primary dark:text-white tracking-tight">{s.value}</span>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wider">{s.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* ── Feature Cards ── */}
            <section className="py-24 lg:py-36 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeIn}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-12 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                        >
                            <span className="absolute top-6 right-8 text-7xl font-bold text-slate-100 dark:text-slate-800 select-none group-hover:text-slate-200 dark:group-hover:text-slate-700 transition-colors">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <div className="w-12 h-[3px] bg-secondary mb-8 group-hover:w-20 transition-all duration-500" />
                            <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-5 tracking-tight relative z-10">
                                {f.title}
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6 relative z-10">
                                {f.description}
                            </p>
                            {f.bullets && f.bullets.length > 0 && (
                                <ul className="space-y-3 relative z-10">
                                    {f.bullets.map((b, bi) => (
                                        <li key={bi} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                            <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                                            <span className="font-light leading-snug">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Hero Image Showcase ── */}
            {image && (
                <section className="pb-24 container mx-auto px-4 md:px-8">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        className="w-full h-[50vh] md:h-[65vh] rounded-[3rem] overflow-hidden shadow-2xl relative group"
                    >
                        <img src={image} alt={title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                        <div className="absolute bottom-10 left-10">
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary">{subtitle}</span>
                            <h4 className="text-3xl font-bold text-white mt-2">{title}</h4>
                        </div>
                    </motion.div>
                </section>
            )}

            {/* ── Auto-fetching Gallery ── */}
            {galleryImages && galleryImages.length > 0 && (
                <section className="py-24 bg-surface-muted dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">Facility Gallery</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">Explore our dedicated infrastructure.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {galleryImages.map((imgUrl, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.05 }}
                                    className="relative aspect-video rounded-2xl overflow-hidden shadow-sm group bg-slate-200 dark:bg-slate-800"
                                >
                                    <img src={imgUrl} alt={`${title} Gallery ${i + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── CTA ── */}
            <section className="py-28 bg-primary-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between">
                    <div>
                        <p className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4">Schedule a Facility Visit</p>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">Explore Our<br /><span className="italic font-light text-slate-400">World-Class Labs.</span></h2>
                    </div>
                    <Link to="/contact-us" className="inline-flex items-center gap-4 bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-300 flex-shrink-0">
                        Contact Us <FaArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    );
}
