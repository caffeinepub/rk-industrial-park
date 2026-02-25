import { CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

const stats = [
    { value: '25+', label: 'Total Acres', sub: 'Planned Development Area' },
    { value: '100+', label: 'Industrial Plots', sub: 'Available for Allocation' },
    { value: '9+', label: 'Industries', sub: 'Ecosystem Coverage' },
    { value: '100%', label: 'Compliance', sub: 'Approvals Secured' },
];

const pillars = [
    {
        title: 'Vision & Mission',
        desc: 'RK Industrial Park is conceived as a self-sustaining industrial ecosystem — a planned environment where manufacturing, logistics, and ancillary industries operate in structured synergy.',
    },
    {
        title: 'Industrial Ecosystem Approach',
        desc: 'The park integrates manufacturing zones, warehousing corridors, cold chain facilities, and MSME clusters within a single master-planned boundary, enabling supply chain efficiency.',
    },
    {
        title: 'Structured Zoning & Master Planning',
        desc: 'Every plot, road, utility corridor, and green buffer is designed per industrial zoning norms, ensuring orderly growth without compromising infrastructure quality.',
    },
    {
        title: 'Compliance-Driven Development',
        desc: 'All approvals — government, environmental, fire safety, and industrial usage classification — are secured before plot allocation, ensuring zero compliance risk for investors.',
    },
    {
        title: 'Future-Ready Infrastructure',
        desc: 'Designed for the next 30 years of industrial demand, the park supports heavy power loads, high-volume water supply, and logistics-grade internal road networks.',
    },
];

function useScrollReveal(threshold = 0.15) {
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

export default function About() {
    const headingRef = useScrollReveal();
    const statsRef = useScrollReveal(0.1);
    const pillarsRef = useScrollReveal(0.1);

    return (
        <section id="about" className="py-24 bg-white bg-stripe-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16" ref={headingRef}>
                    <div className="label-tag mb-3">About the Project</div>
                    <div className="section-divider" />
                    <h2 className="section-heading text-near-black mb-4">
                        A Planned Industrial<br />Ecosystem at Scale
                    </h2>
                    <p className="section-subheading max-w-2xl">
                        RK Industrial Park is not a real estate development — it is a structured industrial infrastructure project built for long-term industrial growth.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Stats */}
                    <div ref={statsRef}>
                        <div className="grid grid-cols-2 gap-5 mb-10">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="relative p-6 bg-white border border-steel-200 overflow-hidden group hover:shadow-ind transition-all duration-300 hover:-translate-y-1"
                                    style={{ borderTop: '3px solid #1d4ed8' }}
                                >
                                    {/* Subtle background accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 opacity-5"
                                        style={{ background: 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)' }} />
                                    <div className="stat-number">{stat.value}</div>
                                    <div className="text-near-black font-semibold text-sm mt-1">{stat.label}</div>
                                    <div className="text-steel-500 text-xs mt-0.5">{stat.sub}</div>
                                </div>
                            ))}
                        </div>

                        {/* Accent block */}
                        <div
                            className="p-8 relative overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%)' }}
                        >
                            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                            <p className="relative text-white text-lg font-medium leading-relaxed">
                                "Designed for the industrial investor who demands infrastructure certainty, compliance clarity, and long-term value appreciation."
                            </p>
                            <div className="relative mt-4 flex items-center gap-2">
                                <div className="w-8 h-px bg-white/40" />
                                <span className="text-blue-200 text-xs uppercase tracking-widest">RK Industrial Park</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Pillars */}
                    <div className="space-y-5" ref={pillarsRef}>
                        {pillars.map((pillar) => (
                            <div
                                key={pillar.title}
                                className="flex gap-4 p-5 bg-white border border-steel-100 hover:border-ind-blue/30 hover:shadow-ind transition-all duration-300 group"
                            >
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center"
                                        style={{ background: 'rgba(29,78,216,0.1)' }}>
                                        <CheckCircle2 className="w-4 h-4 text-ind-blue" />
                                    </div>
                                </div>
                                <div>
                                    <h3
                                        className="text-near-black font-bold text-sm mb-1 pb-1"
                                        style={{ borderLeft: '3px solid #1d4ed8', paddingLeft: '10px' }}
                                    >
                                        {pillar.title}
                                    </h3>
                                    <p className="text-steel-600 text-sm leading-relaxed pl-3">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
