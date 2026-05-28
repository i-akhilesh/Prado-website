import { Link } from 'react-router-dom';
import {
    FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
    FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaArrowRight
} from 'react-icons/fa';

const footerServices = [
    { name: 'Toxicology', path: '/services/toxicology' },
    { name: 'Pharmacology & Efficacy', path: '/services/pharmacology' },
    { name: 'Pharmacokinetic', path: '/services/pharmacokinetic' },
    { name: 'Pathology', path: '/services/pathology' },
    { name: 'Biocompatibility', path: '/services/biocompatibility' },
    { name: 'Risk Assessment', path: '/services/risk-assessment' },
];

const footerLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Awards & Accolades', path: '/awards' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Events', path: '/events' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact-us' },
];

const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/pradopreclinical', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/pradopreclinical', label: 'Twitter' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/pradopreclinical', label: 'Facebook' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/pradopreclinical', label: 'Instagram' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/@pradopreclinical', label: 'YouTube' },
];

export default function Footer() {
    return (
        <footer className="bg-[#0a1628] text-white relative overflow-hidden">

            {/* Top accent bar */}
            <div className="w-full h-[3px] bg-gradient-to-r from-secondary via-accent to-secondary" />

            {/* Top CTA strip */}
            <div className="border-b border-white/10">
                <div className="container mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-1">Ready to Begin?</p>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">Partner with PRADO for your next preclinical study.</h3>
                    </div>
                    <Link to="/contact-us" className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary-900 transition-all duration-300 flex-shrink-0">
                        Get in Touch <FaArrowRight />
                    </Link>
                </div>
            </div>

            {/* Main Grid */}
            <div className="container mx-auto px-4 md:px-8 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                    {/* Brand col — wide */}
                    <div className="lg:col-span-4 flex flex-col gap-7">
                        <Link to="/" className="inline-block bg-white px-4 py-2 rounded-xl w-fit">
                            <img
                                src="/images/logo/logo.png"
                                alt="Prado Preclinical"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-base max-w-sm">
                            PRADO is a GLP-certified Contract Research Organisation with 15+ years of excellence in preclinical research. Delivering uncompromising science for global biopharma innovation.
                        </p>

                        {/* Social */}
                        <div>
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-4">Follow Us</p>
                            <div className="flex items-center gap-3">
                                {socialLinks.map((s, i) => (
                                    <a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 text-base"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-3">Company</h4>
                        {footerLinks.map((l, i) => (
                            <Link key={i} to={l.path} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm font-medium flex items-center gap-2 group">
                                <span className="w-0 group-hover:w-3 h-[1px] bg-secondary transition-all duration-300 inline-block" />
                                {l.name}
                            </Link>
                        ))}
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-3">Our Services</h4>
                        {footerServices.map((s, i) => (
                            <Link key={i} to={s.path} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm font-medium flex items-center gap-2 group">
                                <span className="w-0 group-hover:w-3 h-[1px] bg-secondary transition-all duration-300 inline-block" />
                                {s.name}
                            </Link>
                        ))}
                        <Link to="/services" className="text-secondary hover:text-white text-sm font-bold transition-colors mt-2">
                            View All Services →
                        </Link>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3 flex flex-col gap-5">
                        <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-3">Contact</h4>

                        <div className="flex items-start gap-4 text-slate-400">
                            <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FaMapMarkerAlt className="text-secondary text-xs" />
                            </div>
                            <p className="text-sm leading-relaxed">
                                Survey No. 482, Talegaon-Urse Road,<br />
                                Urse, Taluka Maval, District Pune,<br />
                                Maharashtra — 410506
                            </p>
                        </div>

                        <div className="flex items-center gap-4 text-slate-400">
                            <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                                <FaEnvelope className="text-secondary text-xs" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <a href="mailto:admin@pradopreclinical.com" className="text-sm hover:text-white transition-colors">admin@pradopreclinical.com</a>
                                <a href="mailto:pralhad.wangikar@pradopreclinical.com" className="text-sm hover:text-white transition-colors">pralhad.wangikar@pradopreclinical.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-400">
                            <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                                <FaPhoneAlt className="text-secondary text-xs" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <a href="tel:+917770040105" className="text-sm hover:text-white transition-colors">+91-7770040105</a>
                                <a href="tel:+919987001604" className="text-sm hover:text-white transition-colors">+91-9987001604</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} <span className="text-white font-semibold">Prado Pre Clinical Research Ltd.</span> All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <span>GLP Certified</span>
                        <span className="text-white/20">|</span>
                        <span>CPCSEA Approved</span>
                        <span className="text-white/20">|</span>
                        <span>OECD Compliant</span>
                        <span className="text-white/20">|</span>
                        <span>DUNS Registered</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
