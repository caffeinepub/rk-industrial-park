import { Download } from 'lucide-react';
import { useEffect, useRef } from 'react';

const infraItems = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <path d="M3 17h18M3 12h18M5 7h14M7 7V5a1 1 0 011-1h8a1 1 0 011 1v2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Wide Internal RCC Roads',
        desc: '12m to 18m wide reinforced concrete roads designed for heavy truck movement and industrial logistics.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Power Load Availability',
        desc: 'High-tension power supply with dedicated substations supporting industrial-grade power requirements.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M12 6v6l4 2" strokeLinecap="round" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Water Supply System',
        desc: 'Dedicated water supply infrastructure with overhead tanks and underground pipeline network.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                <path d="M7 6v12M17 6v12" strokeLinecap="round" />
            </svg>
        ),
        title: 'Underground Drainage',
        desc: 'Engineered underground stormwater and effluent drainage system compliant with industrial norms.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
            </svg>
        ),
        title: 'Street Lighting',
        desc: 'LED street lighting across all internal roads and common areas for 24/7 operational safety.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: '24/7 Security',
        desc: 'Perimeter security with CCTV surveillance, manned entry gates, and access control systems.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <rect x="2" y="3" width="20" height="18" rx="1" />
                <path d="M2 9h20M9 21V9" strokeLinecap="round" />
            </svg>
        ),
        title: 'Boundary Wall',
        desc: 'Reinforced compound boundary wall enclosing the entire park perimeter with controlled access points.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <path d="M12 22V12M12 12C12 7 7 4 7 4s0 5 5 8zM12 12c0-5 5-8 5-8s0 5-5 8z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 20h14" strokeLinecap="round" />
            </svg>
        ),
        title: 'Green Buffer Zones',
        desc: 'Designated green buffer zones along park boundaries for environmental compliance and aesthetics.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <rect x="1" y="10" width="22" height="8" rx="1" />
                <path d="M5 10V7M19 10V7M8 18v2M16 18v2" strokeLinecap="round" />
                <circle cx="7" cy="18" r="1" fill="currentColor" />
                <circle cx="17" cy="18" r="1" fill="currentColor" />
            </svg>
        ),
        title: 'Truck Movement Planning',
        desc: 'Dedicated truck entry/exit lanes, turning radii, and loading bay access designed for heavy vehicles.',
    },
];

function useScrollReveal(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);
    return ref;
}

export default function Infrastructure() {
    const headingRef = useScrollReveal();
    const gridRef = useScrollReveal(0.05);

    return (
        <section id="infrastructure" className="py-24" style={{ background: '#f1f5f9' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14" ref={headingRef}>
                    <div className="label-tag mb-3">Infrastructure Highlights</div>
                    <div className="section-divider" />
                    <h2 className="section-heading text-near-black mb-4">
                        Industrial-Grade<br />Infrastructure
                    </h2>
                    <p className="section-subheading max-w-2xl">
                        Every infrastructure element is engineered to industrial standards — built for heavy operations, long-term durability, and regulatory compliance.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10" ref={gridRef}>
                    {infraItems.map((item) => (
                        <div
                            key={item.title}
                            className="group p-6 cursor-default transition-all duration-300 hover:-translate-y-2"
                            style={{
                                background: '#1e3a5f',
                                boxShadow: '0 2px 12px rgba(10,20,50,0.15)',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(10,20,50,0.35)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(10,20,50,0.15)';
                            }}
                        >
                            <div className="mb-4 transition-transform duration-200 group-hover:scale-110" style={{ color: '#60a5fa' }}>
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-sm mb-2 leading-tight" style={{ color: '#f1f5f9' }}>{item.title}</h3>
                            <p className="text-xs leading-relaxed" style={{ color: '#94a3b8' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Download CTA */}
                <div className="flex justify-center">
                    <button
                        className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                            border: '2px solid #1d4ed8',
                            color: '#1d4ed8',
                            background: 'white',
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.background = '#1d4ed8';
                            el.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.background = 'white';
                            el.style.color = '#1d4ed8';
                        }}
                    >
                        <Download className="w-4 h-4" />
                        Download Technical Specifications
                    </button>
                </div>
            </div>
        </section>
    );
}
