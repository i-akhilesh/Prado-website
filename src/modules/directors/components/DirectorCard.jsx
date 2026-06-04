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
            {/* Image area — aspect-3/4 portrait */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800">
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
            </div>

            {/* Details area below the image */}
            <div className="p-6 md:p-8 flex flex-col flex-grow bg-white dark:bg-slate-900 transition-colors duration-500">
                <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-2">{designation}</p>
                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-5 leading-tight">{name}</h3>
                <div className="mt-auto">
                    <Link
                        to={profileLink}
                        className="inline-flex items-center gap-3 bg-primary/10 dark:bg-slate-800 border border-primary/20 dark:border-slate-700 text-primary dark:text-slate-300 px-6 py-3 rounded-full font-semibold hover:bg-secondary dark:hover:bg-secondary hover:text-white dark:hover:text-white hover:border-secondary dark:hover:border-secondary transition-all duration-300 text-sm"
                    >
                        View Profile <FaArrowRight />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
