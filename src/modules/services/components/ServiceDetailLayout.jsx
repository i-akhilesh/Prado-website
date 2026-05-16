import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

/**
 * ServiceDetailLayout – Reusable shell for every service detail page.
 * Props:
 *  - title: string – big hero heading
 *  - subtitle: string – hero sub-tag line
 *  - intro: string – short intro paragraph
 *  - image: string – path to hero background image
 *  - subServices: [{ title, description, bullets? }]
 *  - icon: ReactNode – icon rendered next to title in hero
 */
export default function ServiceDetailLayout({ title, subtitle, intro, image, subServices = [], icon }) {
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
            <section className="relative w-full min-h-[75svh] flex flex-col justify-end pb-24 lg:pb-32 bg-primary-900 text-white overflow-hidden pt-40">
                {image && (
                    <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                        <img src={image} alt={title} className="w-full h-[120%] object-cover object-center opacity-25 mix-blend-luminosity grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent" />
                    </motion.div>
                )}
                {/* teal radial accent */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none" />

                <div className="container relative z-10 mx-auto px-4 md:px-8">
                    <Link to="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-12 text-sm font-bold tracking-[0.2em] uppercase gap-4 transition-colors group">
                        <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> All Services
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}>
                        {icon && <div className="text-secondary text-5xl mb-8 opacity-70">{icon}</div>}
                        <h1 className="text-[11vw] md:text-[7vw] font-bold font-heading leading-[0.88] tracking-tighter mb-6 text-white">
                            {title}.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white text-[6vw] md:text-[4vw]">{subtitle}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl border-l-4 border-secondary pl-6 mt-8">
                            {intro}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Sub-Service Cards ── */}
            <section className="py-24 lg:py-36 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {subServices.map((ss, i) => (
                        <motion.div
                            key={i}
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeIn}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-12 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* number watermark */}
                            <span className="absolute top-6 right-8 text-7xl font-bold text-slate-100 dark:text-slate-800 select-none group-hover:text-slate-200 dark:group-hover:text-slate-700 transition-colors">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* top accent bar */}
                            <div className="w-12 h-[3px] bg-secondary mb-8 group-hover:w-20 transition-all duration-500" />

                            <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-5 tracking-tight relative z-10">
                                {ss.title}
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6 relative z-10">
                                {ss.description}
                            </p>

                            {ss.bullets && ss.bullets.length > 0 && (
                                <ul className="space-y-3 relative z-10">
                                    {ss.bullets.map((b, bi) => (
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

            {/* ── CTA ── */}
            {/* <section className="py-28 bg-primary-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between">
                    <div>
                        <p className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4">Ready to Partner?</p>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">Discuss Your Study<br /><span className="italic font-light text-slate-400">Requirements.</span></h2>
                    </div>
                    <Link to="/contact-us" className="inline-flex items-center gap-4 bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-300 flex-shrink-0">
                        Contact Us <FaArrowRight />
                    </Link>
                </div>
            </section> */}
        </div>
    );
}
