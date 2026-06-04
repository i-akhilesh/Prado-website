import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

export default function IndustryDetailLayout({ title, subtitle, intro, image, cards = [], icon, children }) {
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
            <section className="relative w-full min-h-[70svh] flex flex-col justify-end pb-20 lg:pb-28 bg-primary-900 text-white overflow-hidden pt-40">
                {image && (
                    <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                        <img src={image} alt={title} className="w-full h-[120%] object-cover object-center opacity-25 mix-blend-luminosity grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent" />
                    </motion.div>
                )}
                {/* teal radial accent */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none" />

                <div className="container relative z-10 mx-auto px-4 md:px-8">
                    <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-12 text-sm font-bold tracking-[0.2em] uppercase gap-4 transition-colors group">
                        <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Home
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}>
                        {icon && <div className="text-secondary text-5xl mb-8 opacity-70">{icon}</div>}
                        <h1 className="text-[9vw] md:text-[6vw] font-bold font-heading leading-[0.88] tracking-tighter mb-6 text-white">
                            {title}.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white text-[5vw] md:text-[3.5vw]">{subtitle}</span>
                        </h1>
                        {intro && (
                            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl border-l-4 border-secondary pl-6 mt-8">
                                {intro}
                            </p>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ── Content Cards ── */}
            {cards && cards.length > 0 && (
                <section className="py-20 lg:py-28 container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {cards.map((ss, i) => (
                            <motion.div
                                key={i}
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeIn}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
                            >
                                <div>
                                    {/* number watermark */}
                                    <span className="absolute top-6 right-8 text-6xl font-bold text-slate-100/60 dark:text-slate-800/40 select-none group-hover:text-slate-200 dark:group-hover:text-slate-700 transition-colors">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    {/* top accent bar */}
                                    <div className="w-12 h-[3px] bg-secondary mb-6 group-hover:w-20 transition-all duration-500" />

                                    <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4 tracking-tight relative z-10">
                                        {ss.title}
                                    </h3>
                                    {ss.description && (
                                        <p className="text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6 relative z-10 whitespace-pre-line">
                                            {ss.description}
                                        </p>
                                    )}

                                    {ss.bullets && ss.bullets.length > 0 && (
                                        <ul className="space-y-2.5 relative z-10">
                                            {ss.bullets.map((b, bi) => (
                                                <li key={bi} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
                                                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0 text-xs" />
                                                    <span className="font-light leading-snug text-sm md:text-base">{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {children}
        </div>
    );
}
