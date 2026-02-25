import { Building2, Phone, Mail, MapPin, Download, Heart } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'rk-industrial-park');

    return (
        <footer className="bg-near-black text-white">
            {/* Top accent */}
            <div className="h-1 bg-ind-blue" />

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 bg-ind-blue flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <span className="text-white font-bold text-base tracking-tight leading-none block">
                                    RK INDUSTRIAL
                                </span>
                                <span className="text-steel-500 text-xs tracking-widest uppercase leading-none">
                                    PARK
                                </span>
                            </div>
                        </div>
                        <p className="text-steel-400 text-xs leading-relaxed mb-6">
                            A strategically planned industrial ecosystem designed for scalable manufacturing and logistics infrastructure.
                        </p>
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-ind-blue text-ind-blue-light text-xs font-semibold uppercase tracking-wide hover:bg-ind-blue hover:text-white transition-all duration-200">
                            <Download className="w-3.5 h-3.5" />
                            Download Brochure
                        </button>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-ind-blue mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-steel-300 text-xs leading-relaxed">
                                        RK Industrial Park,<br />
                                        NH-48 Industrial Corridor,<br />
                                        Industrial Zone, State — 000000
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-ind-blue flex-shrink-0" />
                                <div>
                                    <a href="tel:+919876543210" className="text-steel-300 text-xs hover:text-white transition-colors block">
                                        +91 98765 43210
                                    </a>
                                    <a href="tel:+919876543211" className="text-steel-300 text-xs hover:text-white transition-colors block">
                                        +91 98765 43211
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-ind-blue flex-shrink-0" />
                                <a href="mailto:info@rkindustrialpark.com" className="text-steel-300 text-xs hover:text-white transition-colors">
                                    info@rkindustrialpark.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'About the Project', href: '#about' },
                                { label: 'Location Advantage', href: '#location' },
                                { label: 'Infrastructure', href: '#infrastructure' },
                                { label: 'Master Plan', href: '#masterplan' },
                                { label: 'Plot Options', href: '#plots' },
                                { label: 'Compliance & Approvals', href: '#compliance' },
                                { label: 'Investor Enquiry', href: '#contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                                        className="text-steel-400 text-xs hover:text-white transition-colors uppercase tracking-wide"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Map Placeholder */}
                    <div>
                        <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Location</h4>
                        <div className="border border-steel-700 overflow-hidden">
                            <div
                                className="w-full h-40 flex flex-col items-center justify-center gap-3 relative"
                                style={{ background: 'linear-gradient(135deg, oklch(0.18 0.015 260) 0%, oklch(0.22 0.02 260) 100%)' }}
                            >
                                {/* Stylized map grid */}
                                <div className="absolute inset-0 opacity-20">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="oklch(0.55 0.10 240)" strokeWidth="0.5"/>
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="oklch(0.55 0.10 240)" strokeWidth="1.5" />
                                        <line x1="30%" y1="0" x2="30%" y2="100%" stroke="oklch(0.55 0.10 240)" strokeWidth="1" />
                                        <line x1="70%" y1="0" x2="70%" y2="100%" stroke="oklch(0.55 0.10 240)" strokeWidth="1" />
                                    </svg>
                                </div>
                                <MapPin className="w-8 h-8 text-ind-blue relative z-10" />
                                <span className="text-steel-300 text-xs font-medium relative z-10">RK Industrial Park</span>
                                <span className="text-steel-500 text-xs relative z-10">NH-48 Corridor</span>
                            </div>
                            <div className="bg-steel-900 px-3 py-2 text-center">
                                <span className="text-steel-400 text-xs">View on Google Maps →</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-steel-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-steel-500 text-xs">
                                © {year} RK Industrial Park. All rights reserved.
                            </p>
                            <p className="text-steel-600 text-xs mt-1 max-w-2xl">
                                <span className="font-semibold text-steel-500">Legal Disclaimer:</span>{' '}
                                All information on this website is for informational purposes only. Plot sizes, pricing, and availability are subject to change. This website does not constitute a legal offer or binding agreement. Interested parties should conduct independent due diligence before making investment decisions.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <a
                                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-steel-500 text-xs hover:text-steel-300 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                            >
                                Built with <Heart className="w-3 h-3 text-ind-blue fill-ind-blue" /> using caffeine.ai
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
