import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { lang, setLang, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Handle SPA smooth scrolling from other routes
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const id = location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    const handleNavClick = (hash: string) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/' + hash);
        } else {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: t('ARCHITEKT', 'ARCHITECT'), hash: '#about' },
        { name: t('USŁUGI', 'SERVICES'), hash: '#pricing' },
        { name: t('APLIKACJA', 'APP'), hash: '#hyperplanner' },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl">
            <div className="backdrop-blur-md bg-hyper-gray/40 border border-hyper-indigo/20 shadow-[0_0_15px_rgba(67,56,202,0.1)] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 hover:border-hyper-indigo/50">

                {/* LOGO */}
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
                    <img src="/logo.png" alt="Hypertraining Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" />
                    <span className="font-heading font-bold text-lg tracking-widest uppercase text-hyper-light group-hover:text-white transition-colors">
                        Hyper<span className="text-hyper-indigo">training</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.hash}
                            onClick={() => handleNavClick(link.hash)}
                            className="text-xs font-mono font-medium tracking-widest text-hyper-light/70 hover:text-hyper-indigo transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className="w-px h-4 bg-hyper-light/20"></div>
                    <Link to="/faq" className="text-xs font-mono font-medium tracking-widest text-hyper-light/70 hover:text-white transition-colors">FAQ</Link>
                    <Link to="/contact" className="text-xs font-mono font-medium tracking-widest text-hyper-light/70 hover:text-white transition-colors">{t('KONTAKT', 'CONTACT')}</Link>
                </div>

                {/* Global Controls & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')} 
                        className="hidden sm:flex items-center gap-1 text-xs font-mono border border-hyper-light/20 rounded-md px-2 py-1 hover:border-hyper-indigo hover:text-hyper-indigo transition-all"
                    >
                        <span className={lang === 'pl' ? "text-white" : "text-hyper-light/40"}>PL</span>
                        <span className="text-hyper-light/30">/</span>
                        <span className={lang === 'en' ? "text-white" : "text-hyper-light/40"}>EN</span>
                    </button>

                    <button className="md:hidden text-hyper-light hover:text-hyper-indigo transition-colors" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-[120%] left-0 w-full backdrop-blur-xl bg-hyper-black/90 border border-hyper-indigo/20 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl">
                    {navLinks.map((link) => (
                        <button
                            key={link.hash}
                            onClick={() => handleNavClick(link.hash)}
                            className="text-sm font-mono tracking-widest text-left text-hyper-light hover:text-hyper-indigo transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                    <Link to="/faq" onClick={() => setIsOpen(false)} className="text-sm font-mono tracking-widest text-hyper-light hover:text-white transition-colors">FAQ</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm font-mono tracking-widest text-hyper-light hover:text-white transition-colors">{t('KONTAKT', 'CONTACT')}</Link>

                    <button 
                        onClick={() => { setLang(lang === 'pl' ? 'en' : 'pl'); setIsOpen(false); }} 
                        className="w-fit flex items-center gap-2 mt-4 text-xs font-mono border border-hyper-light/20 rounded-md px-3 py-2 hover:border-hyper-indigo hover:text-hyper-indigo transition-all"
                    >
                        <span className={lang === 'pl' ? "text-white font-bold" : "text-hyper-light/40"}>PL</span> | <span className={lang === 'en' ? "text-white font-bold" : "text-hyper-light/40"}>EN</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
