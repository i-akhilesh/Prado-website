import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaClock, FaEnvelope, FaUser, FaFileUpload, FaCheckCircle, FaTimes } from 'react-icons/fa';

export default function Careers() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', experience: '', resume: null });

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const jobs = [
        {
            id: 1,
            title: "Study Director — Toxicology",
            department: "Toxicology",
            location: "Pune, India (On-site)",
            type: "Full-Time",
            experience: "3-6 Years",
            education: "M.V.Sc / Ph.D in Pharmacology or Toxicology",
            description: "We are seeking an experienced Study Director to lead regulatory toxicology studies (general, inhalation, or developmental) in compliance with GLP guidelines. The ideal candidate will design, oversee, and report preclinical safety studies for global regulatory submissions.",
            requirements: [
                "Proven experience as a Study Director in a GLP-certified preclinical CRO.",
                "Familiarity with OECD, ICH, and FDA regulatory guidelines.",
                "Excellent scientific writing and verbal communication skills.",
                "Strong analytical capability and veterinary/pharmacology background."
            ]
        },
        {
            id: 2,
            title: "Veterinary Pathologist",
            department: "Pathology",
            location: "Pune, India (On-site)",
            type: "Full-Time",
            experience: "2-5 Years",
            education: "M.V.Sc in Veterinary Pathology",
            description: "Responsible for performing macroscopic and microscopic evaluation of tissue samples from toxicity studies. Interprets histopathology slides, provides expert diagnosis, and author pathology reports for GLP studies.",
            requirements: [
                "Master's degree in Veterinary Pathology (M.V.Sc) is mandatory.",
                "Expertise in tissue processing, slide reading, and histopathological diagnosis.",
                "Knowledge of standard veterinary nomenclature and GLP documentation rules.",
                "Detail-oriented team player with strong report authoring skills."
            ]
        },
        {
            id: 3,
            title: "Study Director — Ecotoxicology",
            department: "Ecotoxicology",
            location: "Pune, India (On-site)",
            type: "Full-Time",
            experience: "3-5 Years",
            education: "M.Sc / Ph.D in Environmental Sciences, Zoology, or Ecotoxicology",
            description: "Lead ecotoxicological testing services including aquatic, soil, and terrestrial studies. Design study protocols, monitor test systems (algae, daphnia, fish, earthworms), and compile final regulatory dossiers.",
            requirements: [
                "Prior experience in conducting ecotoxicological studies under GLP environment.",
                "Hands-on expertise in culturing and handling test organisms.",
                "Detailed knowledge of OECD guidelines for ecotox testing.",
                "Capable of working with analytical chemistry teams for dosing verification."
            ]
        },
        {
            id: 4,
            title: "Quality Assurance Auditor",
            department: "Quality Assurance Unit (QAU)",
            location: "Pune, India (On-site)",
            type: "Full-Time",
            experience: "2-4 Years",
            education: "B.Sc / M.Sc / B.Pharm / M.Pharm",
            description: "Join our independent QA Unit to perform audits of study protocols, raw data, phase inspections, and final reports to verify complete compliance with GLP principles.",
            requirements: [
                "Strong working knowledge of OECD Principles of GLP.",
                "Prior auditing experience in a GLP CRO or regulated pharmaceutical QA setting.",
                "High vigilance and attention to detail.",
                "Ability to write formal audit reports and interact with study directors."
            ]
        },
        {
            id: 5,
            title: "Research Associate — Bioanalytical",
            department: "Analytical & Bioanalytical (AB)",
            location: "Pune, India (On-site)",
            type: "Full-Time",
            experience: "1-3 Years",
            education: "M.Sc in Chemistry / Analytical Chemistry or M.Pharm",
            description: "Responsible for sample preparation, method development, validation, and sample analysis using LC-MS/MS or HPLC instruments to support pharmacokinetic and biocompatibility studies.",
            requirements: [
                "Experience operating HPLC and LC-MS/MS instrumentation.",
                "Understanding of method development and validation parameters under bioanalytical guidelines.",
                "Meticulous notebook documentation habits.",
                "Freshers with relevant academic instrument training may also be considered."
            ]
        }
    ];

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setSelectedJob(null);
            setFormData({ name: '', email: '', phone: '', experience: '', resume: null });
        }, 2000);
    };

    return (
        <div className="flex flex-col w-full bg-surface-muted dark:bg-slate-950 transition-colors duration-700 selection:bg-secondary selection:text-white min-h-screen">
            
            {/* Cinematic Header */}
            <section className="relative w-full min-h-[60svh] flex items-end pb-24 bg-primary-900 text-white overflow-hidden pt-40">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none"></div>
                <div className="container relative z-10 mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Careers at PRADO</span>
                        <h1 className="text-[14vw] md:text-[10vw] font-bold font-heading leading-[0.85] tracking-tighter mb-8 text-white">
                            Shape the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Future of Science.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl border-l-4 border-secondary pl-6 mt-8">
                            Join an elite team of scientific researchers, pathologists, and toxicologists dedicated to accelerating life-saving innovations with integrity and precision.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col">
                            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">Scientific Integrity</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                Work in a globally audited, GLP-certified facility where data quality, compliance, and rigorous research methodologies set industry standards.
                            </p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.1 }} className="flex flex-col">
                            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">Diverse Projects</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                Support global clients across pharma, biopharma, crop protection, veterinary vaccines, and medical devices. Expand your capabilities continuously.
                            </p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }} className="flex flex-col">
                            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">Growth & Mentorship</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                Grow alongside industry-recognized scientific directors and veterinary experts in a supportive, collaborative culture that values professional growth.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Current Openings Section */}
            <section className="py-24 container mx-auto px-4 md:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">Current Openings</h2>
                    <p className="text-slate-500 max-w-2xl">Find your next career milestone. Review requirements below and apply directly.</p>
                </div>

                <div className="flex flex-col gap-6">
                    {jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeIn}
                            className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
                        >
                            <div className="flex-1">
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3 block">{job.department}</span>
                                <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-6 group-hover:text-secondary transition-colors duration-300">{job.title}</h3>
                                
                                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
                                    <span className="flex items-center gap-2"><FaMapMarkerAlt /> {job.location}</span>
                                    <span className="flex items-center gap-2"><FaClock /> {job.type}</span>
                                    <span className="flex items-center gap-2"><FaBriefcase /> Experience: {job.experience}</span>
                                    <span className="flex items-center gap-2"><FaGraduationCap /> {job.education}</span>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setSelectedJob(job)}
                                className="bg-primary text-white border border-primary dark:bg-slate-800 dark:border-slate-700 w-fit px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:border-secondary transition-all duration-300 flex-shrink-0"
                            >
                                View Details & Apply
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* General Inquiry CTA */}
            <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row gap-10 items-center justify-between">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4">Don't see a matching role?</h2>
                        <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            We are always looking for passionate scientists, researchers, and operational experts. Submit your CV for general consideration.
                        </p>
                    </div>
                    <a
                        href="mailto:admin@pradopreclinical.com?subject=General Career Inquiry - CV Submission"
                        className="inline-flex items-center gap-4 bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary-900 transition-colors duration-300 flex-shrink-0"
                    >
                        Send General Application
                    </a>
                </div>
            </section>

            {/* Job Details Modal */}
            <AnimatePresence>
                {selectedJob && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md overflow-y-auto" onClick={() => setSelectedJob(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 max-w-3xl w-full border border-slate-100 dark:border-slate-800 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors bg-slate-100 dark:bg-slate-800 p-3 rounded-full"
                                onClick={() => setSelectedJob(null)}
                            >
                                <FaTimes size={18} />
                            </button>

                            <div className="border-b border-slate-100 dark:border-slate-800 pb-6 mb-6">
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-2 block">{selectedJob.department}</span>
                                <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4 pr-10">{selectedJob.title}</h2>
                                
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                                    <span className="bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">{selectedJob.location}</span>
                                    <span className="bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">{selectedJob.type}</span>
                                    <span className="bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">Exp: {selectedJob.experience}</span>
                                </div>
                            </div>

                            <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                <div>
                                    <h4 className="text-slate-900 dark:text-white font-bold font-heading mb-2 text-lg">Role Description</h4>
                                    <p>{selectedJob.description}</p>
                                </div>

                                <div>
                                    <h4 className="text-slate-900 dark:text-white font-bold font-heading mb-2 text-lg">Requirements & Qualifications</h4>
                                    <ul className="space-y-3">
                                        {selectedJob.requirements.map((req, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Application Form */}
                            <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-8">
                                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-6">Apply for this Position</h3>
                                
                                {formSubmitted ? (
                                    <div className="flex flex-col items-center justify-center py-6 text-center text-emerald-500">
                                        <FaCheckCircle size={48} className="mb-4 animate-bounce" />
                                        <p className="font-semibold text-lg">Application Submitted Successfully!</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Thank you, we will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold uppercase text-slate-500">Full Name</label>
                                            <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:border-secondary transition-colors text-slate-950 dark:text-white text-sm" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold uppercase text-slate-500">Email Address</label>
                                            <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:border-secondary transition-colors text-slate-950 dark:text-white text-sm" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold uppercase text-slate-500">Phone Number</label>
                                            <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:border-secondary transition-colors text-slate-950 dark:text-white text-sm" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold uppercase text-slate-500">Resume/CV (PDF/Doc)</label>
                                            <div className="relative border border-dashed border-slate-300 dark:border-slate-600 rounded-xl px-4 py-3 bg-slate-50 dark:bg-slate-800 flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                <FaFileUpload className="text-slate-400" />
                                                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Choose File</span>
                                                <input required type="file" onChange={(e) => setFormData({...formData, resume: e.target.files[0]})} className="absolute inset-0 opacity-0 cursor-pointer" />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="md:col-span-2 bg-secondary text-white font-semibold py-4 rounded-xl hover:bg-primary transition-all duration-300 mt-4 shadow-md hover:shadow-lg"
                                        >
                                            Submit Application
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
