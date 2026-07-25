import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { FaTimes, FaSearchPlus, FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const toTitleCase = (str) => str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const categoriesMetadata = [
    {
        id: "facilities",
        title: "Facilities Infrastructure",
        description: "Explore our specialized departments and world-class laboratory facilities through our autofetched media collections."
    },
    {
        id: "facility-activities",
        title: "Internal Facility Activities",
        description: "Go behind the scenes at our state-of-the-art laboratories and research facilities, where our scientists maintain GLP standards and precision workflows."
    },
    {
        id: "conferences",
        title: "Scientific Conferences & Forums",
        description: "Prado's active participation in global preclinical forums, toxicology conferences, and scientific summits, presenting research and collaborating with global partners."
    },
    {
        id: "events",
        title: "Events & Achievements",
        description: "Key milestones, annual celebrations, team-building activities, and award ceremonies recognizing Prado's excellence in preclinical research."
    }
];

const facilityTitles = {
    'arf': 'ARF (Animal Research Facility)',
    'pathology': 'Pathology Lab',
    'qau': 'Quality Assurance Unit (QAU)',
    'tico': 'Toxicology & In Vitro Facility',
    'ehs': 'EHS Department',
    'in-vitro': 'In Vitro Lab',
    'analytical': 'Analytical & Bioanalytical Lab',
    'it': 'IT Infrastructure',
    'document-control': 'Document Control',
    'ecotox': 'Ecotoxicology Lab',
    'archives': 'Archives'
};

export default function GalleryPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    
    // Parse directories
    const modules = import.meta.glob('/src/assets/images/gallery/**/*.{png,jpg,jpeg,webp}', { eager: true });
    const facilityModules = import.meta.glob('/public/images/facilities/*/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
    
    const parsedData = {};
    
    // Process gallery images
    Object.keys(modules).forEach((path) => {
        const parts = path.split('/');
        if (parts.length < 4) return;
        
        const categoryId = parts[parts.length - 3];
        const albumId = parts[parts.length - 2];
        const fileName = parts[parts.length - 1];
        const imgUrl = modules[path].default || modules[path];

        if (!parsedData[categoryId]) parsedData[categoryId] = {};
        if (!parsedData[categoryId][albumId]) parsedData[categoryId][albumId] = [];
        
        if (fileName.toLowerCase().includes('cover')) {
            parsedData[categoryId][albumId].unshift(imgUrl);
        } else {
            parsedData[categoryId][albumId].push(imgUrl);
        }
    });

    // Process facility images/videos
    Object.keys(facilityModules).forEach((path) => {
        const parts = path.split('/');
        if (parts.length < 4) return;
        
        const categoryId = 'facilities';
        const albumId = parts[parts.length - 2];
        const fileName = parts[parts.length - 1];
        let imgUrl = facilityModules[path].default || facilityModules[path];
        // Clean public prefix if present
        imgUrl = imgUrl.replace(/^\/public/, '');

        if (!parsedData[categoryId]) parsedData[categoryId] = {};
        if (!parsedData[categoryId][albumId]) parsedData[categoryId][albumId] = [];

        // Put videos at the end so images are preferred as covers
        const isVideo = fileName.match(/\.(mp4|webm)$/i);
        if (isVideo) {
            parsedData[categoryId][albumId].push(imgUrl);
        } else {
            parsedData[categoryId][albumId].unshift(imgUrl);
        }
    });

    // Manually add facility videos since they are excluded from Vite's bundling to prevent duplication in dist/assets
    const facilityVideos = {
        arf: [
            '/images/facilities/arf/Animal House.mp4',
            '/images/facilities/arf/Animal House Clip 2.mp4',
            '/images/facilities/arf/ARF clip 2.mp4',
            '/images/facilities/arf/VID_20210730_163630.mp4',
            '/images/facilities/arf/Animal House 5 Clip 1.mp4',
            '/images/facilities/arf/VID_20210730_163449.mp4'
        ],
        archives: [
            '/images/facilities/archives/VID_20210730_132035.mp4',
            '/images/facilities/archives/ARC Clip 3.mp4',
            '/images/facilities/archives/VID_20210730_132535.mp4'
        ],
        pathology: [
            '/images/facilities/pathology/Histo Clip 3_1.mp4',
            '/images/facilities/pathology/histo clip3.mp4',
            '/images/facilities/pathology/Histo clip 1.mp4',
            '/images/facilities/pathology/Urine Analysis.mp4',
            '/images/facilities/pathology/Histo Clip 2.mp4',
            '/images/facilities/pathology/CC Clip 5.mp4',
            '/images/facilities/pathology/Histto Clip 4.mp4',
            '/images/facilities/pathology/Hemats.mp4'
        ]
    };

    Object.keys(facilityVideos).forEach(albumId => {
        const categoryId = 'facilities';
        if (!parsedData[categoryId]) parsedData[categoryId] = {};
        if (!parsedData[categoryId][albumId]) parsedData[categoryId][albumId] = [];
        // Put videos at the end
        parsedData[categoryId][albumId].push(...facilityVideos[albumId]);
    });

    const galleryData = categoriesMetadata.map(cat => {
        const albumsDict = parsedData[cat.id] || {};
        const albums = Object.keys(albumsDict).map(albumId => {
            let title = toTitleCase(albumId);
            if (cat.id === 'facilities') {
                title = facilityTitles[albumId.toLowerCase()] || albumId.toUpperCase();
            }
            return {
                id: albumId,
                title,
                images: albumsDict[albumId],
                cover: albumsDict[albumId][0]
            };
        });
        return { ...cat, albums };
    });

    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
    const location = useLocation();

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    useEffect(() => {
        if (location.hash && !selectedAlbum) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location.hash, selectedAlbum]);

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxImageIndex !== null && selectedAlbum) {
                if (e.key === 'ArrowRight') {
                    setLightboxImageIndex((prev) => (prev + 1) % selectedAlbum.images.length);
                } else if (e.key === 'ArrowLeft') {
                    setLightboxImageIndex((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
                } else if (e.key === 'Escape') {
                    setLightboxImageIndex(null);
                }
            } else if (selectedAlbum && e.key === 'Escape') {
                setSelectedAlbum(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxImageIndex, selectedAlbum]);

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
                        className="flex flex-col md:flex-row gap-8 items-start mt-12 border-t border-white/20 pt-8 max-w-4xl"
                    >
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            A curated exhibition of Prado's state-of-the-art facilities, conferences, and achievements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Gallery View: Categories and their Albums */}
            <section className="py-24 lg:py-32 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-8 space-y-32">
                    {galleryData.map((category) => (
                        <div key={category.id} id={category.id} className="scroll-mt-32">
                            {/* Category Header */}
                            <div className="border-b border-slate-100 dark:border-slate-800 pb-6 mb-12">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                                    {category.title}
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 font-light text-base md:text-lg max-w-3xl">
                                    {category.description}
                                </p>
                            </div>

                            {/* Albums Grid */}
                            {category.albums.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {category.albums.map((album) => (
                                        <motion.div
                                            key={album.id}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeIn}
                                            className="group relative overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800 aspect-[4/3] rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500"
                                            onClick={() => setSelectedAlbum({ ...album, categoryName: category.title })}
                                        >
                                            {album.cover.match(/\.(mp4|webm)$/i) ? (
                                                <video 
                                                    src={album.cover} 
                                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]" 
                                                    autoPlay loop muted playsInline
                                                />
                                            ) : (
                                                <img 
                                                    src={album.cover} 
                                                    alt={album.title} 
                                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]" 
                                                />
                                            )}
                                            
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                            
                                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                                                <h3 className="text-white font-heading font-bold text-2xl mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{album.title}</h3>
                                                <div className="flex items-center gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                                    <span className="text-secondary font-bold tracking-widest uppercase text-xs">{category.title}</span>
                                                    <span className="text-slate-300 text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">{album.images.length} Items</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-12 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2rem]">
                                    <p className="text-slate-500 dark:text-slate-400">Items coming soon for this category. (Add them to their respective directories)</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Album Modal Overlay */}
            <AnimatePresence>
                {selectedAlbum && lightboxImageIndex === null && (
                    <motion.div 
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[90] bg-white dark:bg-slate-950 overflow-y-auto"
                    >
                        <div className="sticky top-0 z-[95] w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 p-4 md:px-8 flex justify-between items-center shadow-sm">
                            <div>
                                <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">{selectedAlbum.title}</h2>
                                <p className="text-sm text-secondary uppercase tracking-widest font-semibold mt-1">{selectedAlbum.categoryName} • {selectedAlbum.images.length} Items</p>
                            </div>
                            <button 
                                className="text-slate-500 hover:text-primary dark:hover:text-white transition-colors bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
                                onClick={() => setSelectedAlbum(null)}
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>
                        
                        <div className="container mx-auto px-4 md:px-8 py-12">
                            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                                {selectedAlbum.images.map((imgUrl, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                                        className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid bg-slate-100 dark:bg-slate-800"
                                        onClick={() => setLightboxImageIndex(idx)}
                                    >
                                        {imgUrl.match(/\.(mp4|webm)$/i) ? (
                                            <div className="relative w-full h-auto overflow-hidden rounded-2xl">
                                                <video src={imgUrl} className="w-full h-auto object-cover rounded-2xl" autoPlay loop muted playsInline />
                                                <div className="absolute top-3 right-3 bg-black/60 p-2 rounded-full backdrop-blur-md border border-white/10 text-white text-xs">
                                                    <FaPlay size={10} />
                                                </div>
                                            </div>
                                        ) : (
                                            <img src={imgUrl} alt={`${selectedAlbum.title} ${idx + 1}`} className="w-full h-auto object-cover rounded-2xl" loading="lazy" />
                                        )}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] rounded-2xl">
                                            <FaSearchPlus className="text-white text-3xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Single Image/Video Lightbox */}
            <AnimatePresence>
                {lightboxImageIndex !== null && selectedAlbum && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-xl"
                    >
                        <button 
                            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/10 z-[105]"
                            onClick={() => setLightboxImageIndex(null)}
                        >
                            <FaTimes size={24} />
                        </button>

                        {/* Navigation Arrows */}
                        <button 
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/10 z-[105]"
                            onClick={(e) => { e.stopPropagation(); setLightboxImageIndex((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length); }}
                        >
                            <FaArrowLeft size={24} />
                        </button>
                        
                        <button 
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/10 z-[105]"
                            onClick={(e) => { e.stopPropagation(); setLightboxImageIndex((prev) => (prev + 1) % selectedAlbum.images.length); }}
                        >
                            <FaArrowRight size={24} />
                        </button>

                        <motion.div 
                            key={lightboxImageIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-6xl flex flex-col items-center justify-center h-full"
                            onClick={() => setLightboxImageIndex(null)}
                        >
                            {selectedAlbum.images[lightboxImageIndex].match(/\.(mp4|webm)$/i) ? (
                                <video 
                                    src={selectedAlbum.images[lightboxImageIndex]} 
                                    className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl rounded-lg" 
                                    controls 
                                    autoPlay 
                                    onClick={(e) => e.stopPropagation()} 
                                />
                            ) : (
                                <img 
                                    src={selectedAlbum.images[lightboxImageIndex]} 
                                    alt={`${selectedAlbum.title} ${lightboxImageIndex + 1}`} 
                                    className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl rounded-lg" 
                                    onClick={(e) => e.stopPropagation()}
                                />
                            )}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-2 rounded-full backdrop-blur-md border border-white/10 text-white text-sm tracking-widest font-semibold">
                                {lightboxImageIndex + 1} / {selectedAlbum.images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
