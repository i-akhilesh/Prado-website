import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function DirectorCard({ name, designation, image, profileLink, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 flex flex-col"
        >
            {/* Full image area — aspect-3/4 portrait */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/10 to-transparent z-10 transition-opacity duration-500" />
                {image ? (
                    <img
                        src={image}
                        alt={`${name} - ${designation}`}
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl text-slate-300 dark:text-slate-600 font-heading">No Image</span>
                    </div>
                )}

                {/* Name + CTA overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-2">{designation}</p>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-5 leading-tight">{name}</h3>
                    <Link
                        to={profileLink}
                        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:border-secondary transition-all duration-300 text-sm"
                    >
                        View Profile <FaArrowRight />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
