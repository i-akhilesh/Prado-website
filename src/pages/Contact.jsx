import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => { setIsSuccess(false); }, 5000);
        }, 1500);
    };

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
                        className="text-[14vw] md:text-[10vw] font-bold font-heading leading-[0.85] tracking-tighter mb-8 text-white"
                    >
                        Get in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Touch.</span>
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mt-12 border-t border-white/20 pt-8 max-w-4xl"
                    >
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Have a question, project, or collaboration in mind? Engage directly with our scientific and operational experts.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Asymmetric Split Layout */}
            <section className="py-32 lg:py-48 bg-white dark:bg-slate-900 transition-colors duration-500 relative">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        
                        {/* Left Info Column (Sticky) */}
                        <div className="lg:col-span-5 relative">
                            <div className="lg:sticky lg:top-40 space-y-16">
                                <div>
                                    <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-6">Dialogue</motion.h2>
                                    <motion.h3 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-5xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-none tracking-tight">
                                        Let's Build <br/> <span className="italic font-light">Together.</span>
                                    </motion.h3>
                                </div>
                                
                                <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10 border-t border-slate-200 dark:border-slate-800 pt-10">
                                    <div className="group">
                                        <h4 className="text-sm font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-2 group-hover:text-secondary transition-colors">Headquarters</h4>
                                        <div className="mb-4">
                                            <span className="text-2xl md:text-3xl font-bold font-heading text-primary dark:text-white bg-secondary/10 dark:bg-secondary/20 px-4 py-2 rounded-lg border-l-4 border-secondary inline-block">
                                                PRADO Pvt. Ltd.
                                            </span>
                                            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-2 ml-1">
                                                (Preclinical Research and Development Organization)
                                            </div>
                                        </div>
                                        <p className="text-xl md:text-2xl text-slate-900 dark:text-white font-light leading-snug">Survey No. 482, Talegaon-Urse Road,<br/> Urse, Taluka Maval, Pune 410506</p>
                                    </div>

                                    <div className="group">
                                        <h4 className="text-sm font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-2 group-hover:text-secondary transition-colors">Call Us</h4>
                                        <p className="text-xl md:text-2xl text-slate-900 dark:text-white font-light flex flex-col gap-2">
                                            <a href="tel:+917770040105" className="hover:text-secondary transition-colors">+91-7770040105</a>
                                            <a href="tel:+919987001604" className="hover:text-secondary transition-colors">+91-9987001604</a>
                                        </p>
                                    </div>

                                    <div className="group">
                                        <h4 className="text-sm font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-2 group-hover:text-secondary transition-colors">Email</h4>
                                        <p className="text-xl md:text-2xl text-slate-900 dark:text-white font-light flex flex-col gap-2 break-all">
                                            <a href="mailto:admin@pradopreclinical.com" className="hover:text-secondary transition-colors">admin@pradopreclinical.com</a>
                                            <a href="mailto:pralhad.wangikar@pradopreclinical.com" className="hover:text-secondary transition-colors">pralhad.wangikar@pradopreclinical.com</a>
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0">
                            <motion.div 
                                variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="bg-surface-muted dark:bg-slate-950 p-10 md:p-16 rounded-[3rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden"
                            >
                                <AnimatePresence>
                                    {isSuccess && (
                                        <motion.div 
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                            className="absolute inset-0 bg-surface-muted dark:bg-slate-950 z-20 flex flex-col items-center justify-center text-center p-8 backdrop-blur-md"
                                        >
                                            <FaCheckCircle className="text-6xl text-secondary mb-6" />
                                            <h3 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4 tracking-tight">Transmission Complete</h3>
                                            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-sm font-light">Your inquiry is in our secure network. Our scientific team will connect with you shortly.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <form className="space-y-12 relative z-10" onSubmit={handleSubmit}>
                                    <div className="space-y-4">
                                        <label htmlFor="name" className="text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Your Name</label>
                                        <input
                                            type="text" id="name" required
                                            value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:border-secondary dark:focus:border-secondary focus:ring-0 text-3xl font-light text-slate-900 dark:text-white py-4 px-0 placeholder:text-slate-300 dark:placeholder:text-slate-800 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label htmlFor="email" className="text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Email Protocol</label>
                                        <input
                                            type="email" id="email" required
                                            value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:border-secondary dark:focus:border-secondary focus:ring-0 text-3xl font-light text-slate-900 dark:text-white py-4 px-0 placeholder:text-slate-300 dark:placeholder:text-slate-800 transition-colors"
                                            placeholder="j.doe@example.com"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label htmlFor="subject" className="text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Subject</label>
                                        <input
                                            type="text" id="subject" required
                                            value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                            className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:border-secondary dark:focus:border-secondary focus:ring-0 text-3xl font-light text-slate-900 dark:text-white py-4 px-0 placeholder:text-slate-300 dark:placeholder:text-slate-800 transition-colors"
                                            placeholder="System Inquiry"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label htmlFor="message" className="text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Message Details</label>
                                        <textarea
                                            id="message" rows="4" required
                                            value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:border-secondary dark:focus:border-secondary focus:ring-0 text-2xl font-light text-slate-900 dark:text-white py-4 px-0 placeholder:text-slate-300 dark:placeholder:text-slate-800 transition-colors resize-none"
                                            placeholder="Describe your research requirements..."
                                        ></textarea>
                                    </div>

                                    <div className="pt-8">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`relative overflow-hidden group inline-flex items-center justify-center px-16 py-6 font-bold text-white transition-all duration-300 bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-secondary dark:hover:bg-secondary dark:hover:text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <span className="relative z-10 text-lg tracking-wider uppercase flex items-center gap-4">
                                                {isSubmitting ? 'Transmitting...' : <><FaPaperPlane /> Initiate Protocol</>}
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expansive Map Section */}
            <section className="h-[60vh] md:h-[80vh] w-full relative">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d717.6556785960811!2d73.64280982704052!3d18.705768106122722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2af3926a4da79%3A0x214bef5cd558df40!2sPRADO%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1780313028028!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) opacity(0.8)' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prado Pvt. Ltd. Location Map"
                ></iframe>
                <div className="absolute inset-0 bg-primary-900 mix-blend-multiply pointer-events-none opacity-20"></div>
            </section>
        </div>
    );
}
