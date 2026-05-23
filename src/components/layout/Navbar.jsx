import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX, HiSun, HiMoon, HiChevronDown } from 'react-icons/hi';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Dropdown data ─────────────────────────────────── */
const facilitiesDropdown = [
    { name: 'Animal Research Facility (ARF)', path: '/facilities/arf' },
    { name: 'Pathology Lab (PATH)', path: '/facilities/pathology' },
    { name: 'Quality Assurance Unit (QAU)', path: '/facilities/qau' },
    { name: 'Test Item Control Office (TICO)', path: '/facilities/tico' },
    { name: 'Environment, Health & Safety (EHS)', path: '/facilities/ehs' },
    { name: 'In Vitro Facility (IVF)', path: '/facilities/in-vitro' },
    { name: 'Analytical & Bioanalytical (AB)', path: '/facilities/analytical' },
    { name: 'Information Technology (IT)', path: '/facilities/it' },
    { name: 'Document Control (DOC)', path: '/facilities/document-control' },
    { name: 'Ecotoxicology (ECOTOX)', path: '/facilities/ecotox' },
    { name: 'Archives (ARC)', path: '/facilities/archives' },
];

const servicesDropdown = [
    { name: 'Toxicology', path: '/services/toxicology' },
    { name: 'Pharmacology & Efficacy', path: '/services/pharmacology' },
    { name: 'Pharmacokinetic', path: '/services/pharmacokinetic' },
    { name: 'Pathology', path: '/services/pathology' },
    { name: 'Biocompatibility', path: '/services/biocompatibility' },
    { name: 'Analytical-Bioanalytical', path: '/services/analytical-bioanalytical' },
    { name: 'Ecotoxicological', path: '/services/ecotoxicological' },
    { name: 'Risk Assessment Services', path: '/services/risk-assessment' },
    { name: 'Consultancy & Training', path: '/services/consultancy-training' },
    { name: 'Animal Clinical', path: '/services/animal-clinical' },
];

const companyDropdown = [
    { name: 'Awards', path: '/awards' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'News', path: '/news' },
    { name: 'Careers', path: '/careers' },
];

/* ─── Dropdown component ────────────────────────────── */
function NavDropdown({ label, items, basePath }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const location = useLocation();
    
    const isActive = basePath 
        ? location.pathname.startsWith(basePath) 
        : items.some(item => location.pathname === item.path.split('#')[0]);

    // Close on outside click
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Close on route change
    useEffect(() => { setOpen(false); }, [location.pathname]);

    return (
        <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                }}
                className={twMerge(clsx(
                    'flex items-center gap-1 text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative group',
                    isActive ? 'text-primary dark:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
                ))}
            >
                {label}
                <span className="p-1 -mr-1">
                    <HiChevronDown className={clsx('text-base transition-transform duration-300', open ? 'rotate-180' : '')} />
                </span>
                <span className={clsx('absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300', isActive ? 'w-full' : 'w-0 group-hover:w-full')} />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-3 min-w-[240px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-3 z-50 overflow-hidden"
                    >
                        {items.map((item, i) => (
                            <Link
                                key={i}
                                to={item.path}
                                className="block px-5 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ─── Main Navbar ───────────────────────────────────── */
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState(null);
    const location = useLocation();
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); setMobileExpanded(null); }, [location.pathname]);

    const toggleMobile = (section) => setMobileExpanded(prev => prev === section ? null : section);

    return (
        <header
            className={twMerge(clsx(
                'fixed top-0 left-0 w-full z-50 transition-all duration-500',
                isScrolled
                    ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3'
                    : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-b border-transparent py-5'
            ))}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 flex-shrink-0">
                    <img
                        src="/src/assets/images/WhatsApp_Image_2025-08-08_at_18.56.13_3374249e-removebg-preview.png"
                        alt="Prado Preclinical"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {/* Home */}
                    <Link
                        to="/"
                        className={twMerge(clsx(
                            'text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative group',
                            location.pathname === '/' ? 'text-primary dark:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
                        ))}
                    >
                        Home
                        <span className={clsx('absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300', location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full')} />
                    </Link>

                    {/* About */}
                    <Link
                        to="/about-us"
                        className={twMerge(clsx(
                            'text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative group',
                            location.pathname === '/about-us' ? 'text-primary dark:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
                        ))}
                    >
                        About
                        <span className={clsx('absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300', location.pathname === '/about-us' ? 'w-full' : 'w-0 group-hover:w-full')} />
                    </Link>

                    {/* Facilities Dropdown */}
                    <NavDropdown label="Facilities" items={facilitiesDropdown} basePath="/facilities" />

                    {/* Services Dropdown */}
                    <NavDropdown label="Services" items={servicesDropdown} basePath="/services" />

                    {/* Company Dropdown */}
                    <NavDropdown label="Company" items={companyDropdown} basePath={null} />

                    <button
                        onClick={toggleTheme}
                        className="text-2xl text-primary dark:text-gray-200 hover:text-secondary transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? <HiSun /> : <HiMoon />}
                    </button>
                    <a
                        href="mailto:admin@pradopreclinical.com"
                        className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                    >
                        Get in Touch
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    <button onClick={toggleTheme} className="text-2xl text-primary dark:text-gray-200 hover:text-secondary transition-colors" aria-label="Toggle Dark Mode">
                        {isDarkMode ? <HiSun /> : <HiMoon />}
                    </button>
                    <button className="text-primary dark:text-gray-200 text-3xl transition-colors hover:text-secondary" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden fixed inset-0 bg-white dark:bg-slate-950 z-40 flex flex-col pt-24 px-8 overflow-y-auto"
                    >
                        <button className="absolute top-6 right-5 text-3xl text-primary dark:text-gray-200 hover:text-secondary" onClick={() => setIsOpen(false)}>
                            <HiX />
                        </button>
                        <nav className="flex flex-col gap-2 mt-4">
                            {/* Simple links */}
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about-us' },
                            ].map(link => (
                                <Link key={link.name} to={link.path} className="text-lg font-bold uppercase py-3 border-b border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-secondary transition-colors">
                                    {link.name}
                                </Link>
                            ))}

                            {/* Mobile Facilities */}
                            <div className="border-b border-slate-100 dark:border-slate-800">
                                <div className="flex w-full items-center justify-between py-3 text-lg font-bold uppercase text-slate-700 dark:text-slate-200">
                                    <Link to="/facilities" className="hover:text-secondary transition-colors flex-grow">Facilities</Link>
                                    <button onClick={() => toggleMobile('facilities')} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                        <HiChevronDown className={clsx('transition-transform', mobileExpanded === 'facilities' ? 'rotate-180' : '')} />
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {mobileExpanded === 'facilities' && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                            <div className="flex flex-col gap-1 pb-4 pl-4">
                                                {facilitiesDropdown.map((item, i) => (
                                                    <Link key={i} to={item.path} className="py-2 text-base text-slate-500 dark:text-slate-400 hover:text-secondary transition-colors">
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile Services */}
                            <div className="border-b border-slate-100 dark:border-slate-800">
                                <div className="flex w-full items-center justify-between py-3 text-lg font-bold uppercase text-slate-700 dark:text-slate-200">
                                    <Link to="/services" className="hover:text-secondary transition-colors flex-grow">Services</Link>
                                    <button onClick={() => toggleMobile('services')} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                        <HiChevronDown className={clsx('transition-transform', mobileExpanded === 'services' ? 'rotate-180' : '')} />
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {mobileExpanded === 'services' && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                            <div className="flex flex-col gap-1 pb-4 pl-4">
                                                <Link to="/services" className="py-2 text-base font-semibold text-secondary hover:text-primary transition-colors">All Services →</Link>
                                                {servicesDropdown.map((item, i) => (
                                                    <Link key={i} to={item.path} className="py-2 text-base text-slate-500 dark:text-slate-400 hover:text-secondary transition-colors">
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile Company */}
                            <div className="border-b border-slate-100 dark:border-slate-800">
                                <div className="flex w-full items-center justify-between py-3 text-lg font-bold uppercase text-slate-700 dark:text-slate-200">
                                    <span className="hover:text-secondary transition-colors flex-grow cursor-pointer" onClick={() => toggleMobile('company')}>Company</span>
                                    <button onClick={() => toggleMobile('company')} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                        <HiChevronDown className={clsx('transition-transform', mobileExpanded === 'company' ? 'rotate-180' : '')} />
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {mobileExpanded === 'company' && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                            <div className="flex flex-col gap-1 pb-4 pl-4">
                                                {companyDropdown.map((item, i) => (
                                                    <Link key={i} to={item.path} className="py-2 text-base text-slate-500 dark:text-slate-400 hover:text-secondary transition-colors">
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </nav>

                        <a href="mailto:admin@pradopreclinical.com" className="mt-8 inline-block bg-primary text-white text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-colors">
                            Get in Touch
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
