import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';

export default function GalleryPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const [searchParams] = useSearchParams();

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    const categories = ["All", "Events", "Facility Activities", "Conferences"];
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    // Sync active filter from URL param (e.g. ?filter=Events)
    useEffect(() => {
        const filterParam = searchParams.get('filter');
        if (filterParam && categories.includes(filterParam)) {
            setActiveCategory(filterParam);
        } else {
            setActiveCategory("All");
        }
    }, [searchParams]);

    const images = [
        { id: 1, src: "/src/assets/images/img-home-about.png", category: "Facility Activities", alt: "Toxicology Lab" },
        { id: 2, src: "/src/assets/images/img-facility-tox-1.png", category: "Facility Activities", alt: "Animal Facility Setup" },
        { id: 3, src: "/src/assets/images/img-facility-animal-1.png", category: "Facility Activities", alt: "Analytical Instruments" },
        { id: 4, src: "/src/assets/images/img-facility-analytical-1.png", category: "Events", alt: "Annual Conference" },
        { id: 5, src: "/src/assets/images/img-home-strength-1.png", category: "Conferences", alt: "Global Summit 2023" },
        { id: 6, src: "/src/assets/images/img-home-strength-2.png", category: "Conferences", alt: "Panel Discussion" },
    ];

    const filteredImages = activeCategory === "All" 
        ? images 
        : images.filter(img => img.category === activeCategory);

    return (
        <div ref={containerRef} className="flex flex-col w-full bg-surface-muted dark:bg-slate-950 transition-colors duration-700 selection:bg-secondary selection:text-white min-h-screen">
            
            {/* Cinematic Header */}
            <section className="relative w-full min-h-[60svh] flex items-end pb-24 bg-primary-900 text-white overflow-hidden pt-40">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none"></div>
                <div className="container relative z-10 mx-auto px-4 md:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[14vw] md:text-[10vw] font-bold font-heading leading-[0.85] tracking-tighter mb-8 text-white relative z-10"
                    >
                        Visual <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Perspectives.</span>
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                        className="flex flex-col gap-8 items-start mt-12 border-t border-white/20 pt-8 max-w-4xl"
                    >
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            A curated exhibition of Prado's state-of-the-art facilities and global participations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 lg:py-32 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-8">
                    
                    {/* Minimal Filters */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-16 md:mb-24 pb-8 border-b border-slate-200 dark:border-slate-800">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(category)}
                                className={`text-sm md:text-base font-bold tracking-[0.2em] uppercase transition-all duration-300 relative ${
                                    activeCategory === category 
                                        ? 'text-secondary' 
                                        : 'text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                                }`}
                            >
                                {category}
                                {activeCategory === category && (
                                    <motion.span layoutId="activeFilter" className="absolute -bottom-9 md:-bottom-9 left-0 right-0 h-[2px] bg-secondary" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid (Expansive layout) */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        <AnimatePresence>
                            {filteredImages.map((img, index) => (
                                <motion.div
                                    key={img.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className={`group relative overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800 ${index % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square md:aspect-[4/5]'} rounded-[2rem] shadow-sm hover:shadow-2xl transition-shadow duration-700`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]" />
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                                        <h3 className="text-white font-heading font-bold text-2xl md:text-3xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">{img.alt}</h3>
                                        <p className="text-secondary font-bold tracking-[0.2em] uppercase text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">{img.category}</p>
                                    </div>
                                    <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                        <FaSearchPlus className="text-white text-lg" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-32 text-slate-500 font-light text-2xl">
                            No visual records found in this category.
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 md:p-8 backdrop-blur-xl" onClick={() => setSelectedImage(null)}>
                        <button 
                            className="absolute top-8 right-8 md:top-12 md:right-12 text-slate-400 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <FaTimes size={24} />
                        </button>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative max-w-6xl w-full flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto max-h-[75vh] object-contain drop-shadow-2xl" />
                            <div className="mt-8 text-center bg-black/50 px-8 py-4 rounded-full backdrop-blur-md border border-white/5">
                                <h3 className="text-white font-heading font-bold text-2xl">{selectedImage.alt}</h3>
                                <p className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mt-2">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
