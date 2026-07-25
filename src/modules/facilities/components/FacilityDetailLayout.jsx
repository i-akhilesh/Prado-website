import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaTimes, FaSearchPlus, FaPlay } from 'react-icons/fa';

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
 *  - galleryImages?: string[] - Array of image/video URLs
 *  - children: ReactNode - Custom rich content (replaces features)
 */
export default function FacilityDetailLayout({ title, subtitle, intro, image, icon, features = [], stats = [], galleryImages = [], children }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxIndex !== null) {
                if (e.key === 'ArrowRight') {
                    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
                } else if (e.key === 'ArrowLeft') {
                    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                } else if (e.key === 'Escape') {
                    setLightboxIndex(null);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, galleryImages]);

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
            {/* {stats.length > 0 && (
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
            )
            } */}

            {/* ── Content Section ── */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-16">
                    {children && (
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                            {children}
                        </motion.div>
                    )}
                    {features && features.length > 0 && (
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
                            {features.map((f, i) => (
                                <div key={i} className="pb-0 last:pb-0">
                                    <div className="flex flex-col md:flex-row md:gap-8 items-start">
                                        {/* <div className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4 md:mb-0 md:w-32 flex-shrink-0 pt-2">
                                            Feature {String(i + 1).padStart(2, '0')}
                                        </div> */}
                                        <div className="flex-grow space-y-4">
                                            <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                                                {f.title}
                                            </h3>
                                            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                                {f.description}
                                            </p>
                                            {/* {f.bullets && f.bullets.length > 0 && (
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                                                    {f.bullets.map((b, bi) => (
                                                        <li key={bi} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 font-light text-base">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                                                            <span>{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )} */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ── Auto-fetching Gallery ── */}
            {galleryImages && galleryImages.length > 0 && (
                <section className="py-24 bg-surface-muted dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4">Facility Gallery</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {galleryImages.map((imgUrl, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.05 }}
                                    className="relative aspect-video rounded-2xl overflow-hidden shadow-sm group bg-slate-200 dark:bg-slate-800 cursor-pointer"
                                    onClick={() => setLightboxIndex(i)}
                                >
                                    {imgUrl.match(/\.(mp4|webm)$/i) ? (
                                        <div className="relative w-full h-full">
                                            <video src={imgUrl} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" autoPlay loop muted playsInline />
                                            <div className="absolute top-3 right-3 bg-black/60 p-2 rounded-full backdrop-blur-md border border-white/10 text-white text-xs">
                                                <FaPlay size={10} />
                                            </div>
                                        </div>
                                    ) : (
                                        <img src={imgUrl} alt={`${title} Gallery ${i + 1}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    )}
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <FaSearchPlus className="text-white text-3xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Single Media Lightbox ── */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-xl"
                    >
                        <button
                            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/10 z-[105]"
                            onClick={() => setLightboxIndex(null)}
                        >
                            <FaTimes size={24} />
                        </button>

                        {/* Navigation Arrows */}
                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/10 z-[105]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                            }}
                        >
                            <FaArrowLeft size={24} />
                        </button>

                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/10 z-[105]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
                            }}
                        >
                            <FaArrowRight size={24} />
                        </button>

                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-6xl flex flex-col items-center justify-center h-full"
                            onClick={() => setLightboxIndex(null)}
                        >
                            {galleryImages[lightboxIndex].match(/\.(mp4|webm)$/i) ? (
                                <video
                                    src={galleryImages[lightboxIndex]}
                                    className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl rounded-lg"
                                    controls
                                    autoPlay
                                    onClick={(e) => e.stopPropagation()}
                                />
                            ) : (
                                <img
                                    src={galleryImages[lightboxIndex]}
                                    alt={`${title} Gallery ${lightboxIndex + 1}`}
                                    className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl rounded-lg"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            )}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-2 rounded-full backdrop-blur-md border border-white/10 text-white text-sm tracking-widest font-semibold">
                                {lightboxIndex + 1} / {galleryImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── CTA ── */}
            <section className="py-28 bg-primary-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between">
                    <div>
                        <p className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4">Schedule a Facility Visit</p>
                        <h2 className="text-4xl md:text-6xl italic font-light text-slate-100">Explore Our<br /><span className="italic font-light text-slate-400">World-Class Labs.</span></h2>
                    </div>
                    <Link to="/contact-us" className="inline-flex items-center gap-4 bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-300 flex-shrink-0">
                        Contact Us <FaArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    );
}
