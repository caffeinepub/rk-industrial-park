import { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' },
    { label: 'Infrastructure', href: '#infrastructure' },
    { label: 'Master Plan', href: '#masterplan' },
    { label: 'Plots', href: '#plots' },
    { label: 'Industries', href: '#industries' },
    { label: 'Invest', href: '#invest' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-near-black shadow-ind-lg'
                    : 'bg-near-black/95'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-18">

                    {/* Brand Lockup */}
                    <div className="flex items-center gap-3 flex-shrink-0 whitespace-nowrap">
                        {/* Icon badge */}
                        <div className="relative flex-shrink-0 w-9 h-9 bg-ind-blue flex items-center justify-center shadow-ind">
                            <Building2 className="w-5 h-5 text-white" />
                            {/* subtle bottom accent line */}
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ind-blue-vivid" />
                        </div>

                        {/* Wordmark */}
                        <div className="flex items-baseline gap-2">
                            {/* "RK" — vivid blue, heavy weight, condensed */}
                            <span className="font-condensed font-black text-xl tracking-wider text-ind-blue-vivid leading-none uppercase">
                                RK
                            </span>
                            {/* Divider */}
                            <span className="w-px h-4 bg-steel-600 self-center" />
                            {/* "INDUSTRIAL PARK" — white, medium weight, condensed */}
                            <span className="font-condensed font-semibold text-base tracking-[0.18em] text-white leading-none uppercase">
                                Industrial Park
                            </span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="text-steel-300 hover:text-white text-xs font-medium tracking-wide px-3 py-2 transition-colors duration-150 uppercase"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase bg-ind-blue text-white hover:bg-ind-blue-light transition-colors duration-200"
                        >
                            Book Site Visit
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="xl:hidden text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="xl:hidden bg-near-black border-t border-steel-800">
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="block w-full text-left text-steel-300 hover:text-white text-sm font-medium py-2.5 px-3 uppercase tracking-wide transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="pt-3 border-t border-steel-800">
                            <button
                                onClick={() => handleNavClick('#contact')}
                                className="w-full py-3 text-xs font-semibold tracking-widest uppercase bg-ind-blue text-white hover:bg-ind-blue-light transition-colors"
                            >
                                Book Site Visit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
