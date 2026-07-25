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
            title: "Document Control & Archives Executive",
            department: "Document Control & QA",
            location: "Pune, India (On-site)",
            type: "Full-Time",
            experience: "1-3 Years",
            education: "B.Sc / M.Sc / B.Pharm or equivalent",
            description: "We are seeking a detail-oriented and organized Document Control & Archives Executive to manage laboratory and quality-related documentation in a GLP-compliant environment. The candidate will be responsible for document control activities, archival management, record retention, retrieval of documents, and ensuring compliance with GLP requirements, internal procedures, and regulatory standards.",
            requirements: [
                "Maintain, issue, distribute, and control controlled documents including SOPs, specifications, protocols, reports, forms, logbooks, and manuals.",
                "Ensure proper document numbering, version control, review, approval, and issuance processes.",
                "Maintain master lists of controlled documents and records.",
                "Coordinate periodic review and revision of documents as per established procedures.",
                "Manage document change requests and document lifecycle activities.",
                "Ensure obsolete documents are appropriately withdrawn, archived, and controlled.",
                "Maintain issuance logs, document tracking records, and document retention schedules.",
                "Maintain physical and electronic archives of laboratory, quality assurance, and GLP records.",
                "Organize, index, label, and store records to ensure easy retrieval and traceability.",
                "Monitor record retention periods and support secure disposal of records as per retention policies.",
                "Retrieve archived records during audits, inspections, investigations, and internal reviews.",
                "Ensure archival areas comply with storage and security requirements.",
                "Verify completeness of study files, analytical records, calibration records, and training records before archival.",
                "Coordinate with laboratory, QA, and other departments for document collection and archival activities."
            ]
        },
        {
            id: 2,
            title: "Ecotoxicology Study Personnel",
            department: "Ecotoxicology",
            location: "Pune, India (On-site)",
            type: "Full-Time",
            experience: "1-2 Years",
            education: "Bachelor's/Master's degree in Zoology, Environmental Science, Life Sciences, Biotechnology, Toxicology, or related field",
            description: "We are seeking a motivated and detail-oriented Study Personnel to support the execution of ecotoxicology studies conducted under Good Laboratory Practice (GLP) principles. The candidate will be responsible for performing study-related activities, maintaining test systems, recording raw data, and ensuring compliance with study protocols, SOPs, and regulatory requirements.",
            requirements: [
                "Perform study activities as assigned by the Study Director or Principal Investigator in accordance with approved protocols and SOPs.",
                "Prepare test solutions, dosing formulations, and dilution series for study conduct.",
                "Conduct observations, measurements, sampling, and data collection during study periods.",
                "Assist in exposure, treatment, and monitoring of test organisms.",
                "Record study observations accurately and contemporaneously in raw data records.",
                "Maintain and monitor aquatic and terrestrial test organisms used in ecotoxicology studies (routine feeding, culturing, cleaning, health assessments).",
                "Monitor and record environmental conditions such as temperature, pH, dissolved oxygen, humidity, and photoperiod.",
                "Prepare study materials, glassware, reagents, and consumables required for study conduct.",
                "Operate laboratory equipment and instruments according to approved procedures.",
                "Assist in equipment cleaning, calibration checks, and routine maintenance.",
                "Ensure proper storage and handling of test substances, reference substances, and study samples.",
                "Maintain accurate, complete, and legible raw data records in compliance with GLP requirements.",
                "Follow approved SOPs, study protocols, and laboratory procedures.",
                "Document deviations, incidents, and unexpected observations promptly.",
                "Assist in compiling study data and supporting study report preparation.",
                "Support Quality Assurance inspections and regulatory audits by providing required study documentation.",
                "Basic understanding of ecotoxicology studies and OECD test guidelines.",
                "Preferred: Experience with aquatic and terrestrial ecotoxicology studies.",
                "Preferred: Familiarity with test organisms such as algae, daphnia, fish, earthworms, honeybees, and birds."
            ]
        },
        {
            id: 3,
            title: "Analytical Chemistry (Physical & Chemical Parameter Testing)",
            department: "Analytical & Bioanalytical (AB)",
            location: "Pune, India (On-site)",
            type: "Full-Time",
            experience: "1-2 Years",
            education: "Bachelor's or Master's degree in Chemistry, Analytical Chemistry, Industrial Chemistry, or related field",
            description: "We are seeking a motivated and detail-oriented Analyst with 1–2 years of experience in GLP-compliant analytical laboratories. The candidate will be responsible for performing physical and chemical parameter testing of agrochemical products, including technical grade materials, formulations, intermediates, and raw materials. The role requires adherence to Good Laboratory Practices (GLP), analytical method execution, data integrity, and documentation standards.",
            requirements: [
                "Conduct physical and chemical testing of agrochemical products as per approved specifications, test methods, and SOPs.",
                "Perform routine analyses of technical, formulations and finished products (AI content/Purity, pH, moisture, density, viscosity, specific gravity, suspendibility, wettability, emulsion stability, particle size, bulk density, explodivity, oxidizing properties, corrosivity, persistent foam, compatibility).",
                "Operate and maintain analytical instruments including HPLC, GC, UV-Visible Spectrophotometer, Karl Fischer Titrator, Analytical Balance, pH Meter, etc.",
                "Prepare reagents, standard solutions, and calibration standards as per procedures.",
                "Ensure compliance with GLP, laboratory safety requirements, and data integrity guidelines.",
                "Record, review, and maintain analytical data, logbooks, and test reports accurately.",
                "Participate in method validation, verification, and troubleshooting activities.",
                "Support laboratory investigations related to Out-of-Specification (OOS) and Out-of-Trend (OOT) results.",
                "Maintain laboratory housekeeping and ensure equipment calibration and preventive maintenance activities are completed on schedule.",
                "Coordinate with QAU and R&D teams for sample testing and technical support.",
                "Hands-on experience with HPLC, GC, UV-Vis, and routine wet chemistry analysis."
            ]
        }
    ];

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Prepare mailto link details
        const subject = encodeURIComponent(`Job Application: ${selectedJob.title} - ${formData.name}`);
        const body = encodeURIComponent(
            `Dear HR Team,\n\n` +
            `I would like to apply for the position of "${selectedJob.title}".\n\n` +
            `My Application Details:\n` +
            `- Full Name: ${formData.name}\n` +
            `- Email Address: ${formData.email}\n` +
            `- Phone Number: ${formData.phone}\n` +
            `- Experience: ${formData.experience || 'Not specified'}\n\n` +
            `Please find attached my resume (attached manually).\n\n` +
            `Best regards,\n` +
            `${formData.name}`
        );
        
        // Open default email client
        window.location.href = `mailto:hr@pradopreclinical.com?subject=${subject}&body=${body}`;

        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setSelectedJob(null);
            setFormData({ name: '', email: '', phone: '', experience: '', resume: null });
        }, 4000);
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
                        href="mailto:hr@pradopreclinical.com?subject=General Career Inquiry - CV Submission"
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
                                            <label className="text-xs font-bold uppercase text-slate-500">Experience (in years)</label>
                                            <input required type="text" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} placeholder="e.g. 2 years" className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:border-secondary transition-colors text-slate-950 dark:text-white text-sm" />
                                        </div>
                                        <div className="flex flex-col gap-2 md:col-span-2">
                                            <label className="text-xs font-bold uppercase text-slate-500">Resume/CV (PDF/Doc)</label>
                                            <div className="relative border border-dashed border-slate-300 dark:border-slate-600 rounded-xl px-4 py-3 bg-slate-50 dark:bg-slate-800 flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                <FaFileUpload className="text-slate-400" />
                                                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 truncate max-w-full">
                                                    {formData.resume ? formData.resume.name : "Choose File"}
                                                </span>
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
