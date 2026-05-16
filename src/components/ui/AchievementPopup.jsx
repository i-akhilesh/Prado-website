import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AchievementPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('prado_15_years_popup');
        if (!hasSeenPopup) {
            // Add a small delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('prado_15_years_popup', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
                    >
                        {/* Decorative Header Background */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary to-secondary opacity-10"></div>
                        
                        <button 
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-full transition-colors"
                            aria-label="Close popup"
                        >
                            <FaTimes size={20} />
                        </button>
                        
                        <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                            <motion.div 
                                initial={{ rotate: -180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                                className="w-24 h-24 bg-gradient-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-accent/30"
                            >
                                <span className="text-4xl font-bold font-heading text-white">15</span>
                            </motion.div>
                            
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary dark:text-gray-100 mb-4">
                                Celebrating Excellence
                            </h2>
                            
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                                Prado proudly celebrates 15 successful years of excellence in preclinical research and commitment to healthcare innovation.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <Link 
                                    to="/about-us" 
                                    onClick={handleClose}
                                    className="flex-1 bg-primary text-white py-3 px-6 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-md"
                                >
                                    Explore More
                                </Link>
                                <button 
                                    onClick={handleClose}
                                    className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-full font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
