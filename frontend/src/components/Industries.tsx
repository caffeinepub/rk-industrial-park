import { useEffect, useRef } from 'react';

const industries = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <rect x="2" y="7" width="20" height="14" rx="1" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                <path d="M12 12v4M10 14h4" strokeLinecap="round" />
            </svg>
        ),
        title: 'Manufacturing',
        desc: 'Heavy and light manufacturing units with high power load and logistics access.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <path d="M3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round" />
            </svg>
        ),
        title: 'FMCG',
        desc: 'Fast-moving consumer goods production and distribution with cold chain support.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" strokeLinecap="round" />
            </svg>
        ),
        title: 'Pharma',
        desc: 'GMP-compliant pharmaceutical manufacturing with controlled environment infrastructure.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <rect x="2" y="7" width="20" height="13" rx="1" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                <path d="M12 11v2M8 11v2M16 11v2" strokeLinecap="round" />
                <path d="M6 20v1M18 20v1" strokeLinecap="round" />
            </svg>
        ),
        title: 'Cold Storage',
        desc: 'Temperature-controlled storage facilities with dedicated power and insulation infrastructure.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <path d="M9 22V12h6v10" strokeLinecap="round" />
            </svg>
        ),
        title: 'Warehousing',
        desc: 'Large-format warehousing with high-clearance structures and truck dock access.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <rect x="2" y="3" width="20" height="14" rx="1" />
                <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                <path d="M7 8h10M7 11h6" strokeLinecap="round" />
            </svg>
        ),
        title: 'Packaging',
        desc: 'Packaging and labelling units with proximity to FMCG and manufacturing clusters.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Engineering',
        desc: 'Precision engineering and fabrication units with heavy power and crane infrastructure.',
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
        title: 'Logistics',
        desc: 'Multi-modal logistics hubs with direct highway access and freight corridor connectivity.',
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

export default function Industries() {
    const headingRef = useScrollReveal();
    const gridRef = useScrollReveal(0.05);

    return (
        <section id="industries" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14" ref={headingRef}>
                    <div className="label-tag mb-3">Industries We Serve</div>
                    <div className="section-divider" />
                    <h2 className="section-heading text-near-black mb-4">
                        Built for Every<br />Industrial Sector
                    </h2>
                    <p className="section-subheading max-w-2xl">
                        RK Industrial Park is designed to accommodate a diverse range of industries within a single, integrated ecosystem.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" ref={gridRef}>
                    {industries.map((industry) => (
                        <div
                            key={industry.title}
                            className="group relative bg-white border border-steel-200 p-6 cursor-default transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            style={{ borderTop: '3px solid transparent' }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.borderTopColor = '#1d4ed8';
                                el.style.boxShadow = '0 8px 32px rgba(29,78,216,0.15)';
                                el.style.background = 'linear-gradient(160deg, #ffffff 0%, #eff6ff 100%)';
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.borderTopColor = 'transparent';
                                el.style.boxShadow = 'none';
                                el.style.background = 'white';
                            }}
                        >
                            <div
                                className="mb-4 transition-transform duration-200 group-hover:scale-110"
                                style={{ color: '#1d4ed8' }}
                            >
                                {industry.icon}
                            </div>
                            <h3 className="text-near-black font-bold text-sm mb-2">{industry.title}</h3>
                            <p className="text-steel-500 text-xs leading-relaxed">{industry.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
