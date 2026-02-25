import { useEffect, useRef } from 'react';

const investPoints = [
    {
        number: '01',
        title: 'High-Growth Industrial Zone',
        desc: 'Located within a state-designated industrial growth corridor, the park benefits from government-backed infrastructure investment, policy incentives, and accelerated industrial licensing. Demand for industrial land in this zone has grown consistently over the past decade.',
        metric: '12%+ CAGR',
        metricLabel: 'Industrial Land Appreciation',
    },
    {
        number: '02',
        title: 'Infrastructure-Backed Appreciation',
        desc: 'Unlike raw land investments, RK Industrial Park plots carry fully developed infrastructure — roads, power, water, drainage, and security. This infrastructure investment is embedded in the plot value, providing a structural floor to appreciation.',
        metric: '₹250 Cr+',
        metricLabel: 'Infrastructure Investment',
    },
    {
        number: '03',
        title: 'Long-Term Industrial Demand',
        desc: "India's manufacturing sector is undergoing structural expansion driven by PLI schemes, China+1 supply chain diversification, and domestic consumption growth. Industrial land in planned parks remains in sustained demand across all economic cycles.",
        metric: '500+',
        metricLabel: 'Plots Available',
    },
    {
        number: '04',
        title: 'Compliance-Ready Development',
        desc: 'All government approvals, environmental clearances, zoning certifications, and fire safety compliances are secured at the park level. Investors acquire plots with zero compliance risk — no individual approval burden.',
        metric: '100%',
        metricLabel: 'Compliance Secured',
    },
    {
        number: '05',
        title: 'Scalable Expansion Opportunity',
        desc: 'Phase 2 expansion is planned and land-banked, ensuring that investors in Phase 1 benefit from the appreciation driven by Phase 2 development. The park architecture supports future expansion without disrupting existing operations.',
        metric: 'Phase 2',
        metricLabel: 'Expansion Ready',
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

export default function Invest() {
    const headingRef = useScrollReveal();
    const listRef = useScrollReveal(0.05);

    return (
        <section
            id="invest"
            className="py-24 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #0a1628 0%, #1e3a5f 60%, #0a1628 100%)' }}
        >
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid-pattern" />
            {/* Blue glow accent */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16" ref={headingRef}>
                    <div className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
                        Investment Case
                    </div>
                    <div className="w-14 h-1 mb-6" style={{ background: '#2563eb' }} />
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                        style={{ letterSpacing: '-0.03em' }}
                    >
                        Why Invest in<br />RK Industrial Park
                    </h2>
                    <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#94a3b8' }}>
                        A structured investment case built on infrastructure fundamentals, policy tailwinds, and long-term industrial demand.
                    </p>
                </div>

                {/* Investment Points */}
                <div className="space-y-0" ref={listRef}>
                    {investPoints.map((point, i) => (
                        <div
                            key={point.number}
                            className={`relative grid lg:grid-cols-12 gap-0 py-10 ${
                                i === investPoints.length - 1 ? 'border-b border-white/10' : ''
                            }`}
                            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                        >
                            {/* Large decorative numeral */}
                            <div
                                className="absolute right-0 top-1/2 -translate-y-1/2 font-extrabold select-none pointer-events-none hidden lg:block"
                                style={{
                                    fontSize: '9rem',
                                    lineHeight: 1,
                                    color: 'rgba(255,255,255,0.03)',
                                    fontFamily: 'Inter, sans-serif',
                                    letterSpacing: '-0.05em',
                                }}
                            >
                                {point.number}
                            </div>

                            {/* Number */}
                            <div className="lg:col-span-1 mb-4 lg:mb-0 flex items-start">
                                <span
                                    className="text-4xl font-extrabold"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        color: 'rgba(96,165,250,0.35)',
                                        letterSpacing: '-0.04em',
                                    }}
                                >
                                    {point.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-7 lg:pr-12">
                                <h3
                                    className="text-white font-bold text-xl mb-3 pb-2"
                                    style={{ borderBottom: '2px solid rgba(37,99,235,0.5)' }}
                                >
                                    {point.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{point.desc}</p>
                            </div>

                            {/* Metric */}
                            <div className="lg:col-span-4 flex lg:justify-end items-start mt-4 lg:mt-0">
                                <div
                                    className="px-6 py-4 text-right"
                                    style={{
                                        border: '1px solid rgba(96,165,250,0.2)',
                                        background: 'rgba(37,99,235,0.08)',
                                    }}
                                >
                                    <div
                                        className="text-3xl font-extrabold"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            color: '#60a5fa',
                                            letterSpacing: '-0.03em',
                                        }}
                                    >
                                        {point.metric}
                                    </div>
                                    <div className="text-xs uppercase tracking-widest mt-1" style={{ color: '#64748b' }}>
                                        {point.metricLabel}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
