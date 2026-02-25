import { CheckCircle2, Shield, Leaf, Flame, Building } from 'lucide-react';
import { useEffect, useRef } from 'react';

const certifications = [
    {
        icon: Building,
        title: 'Government Industrial Approvals',
        authority: 'State Industrial Development Corporation',
        description: 'Full industrial development approval from the state government for the entire park area under the Industrial Areas Act.',
        status: 'Approved',
    },
    {
        icon: Shield,
        title: 'Zoning Compliance Certificate',
        authority: 'Town & Country Planning Department',
        description: 'Industrial zoning classification confirmed for all plots within the park boundary under the Master Development Plan.',
        status: 'Certified',
    },
    {
        icon: Leaf,
        title: 'Environmental Clearance',
        authority: 'State Environment Impact Assessment Authority',
        description: 'Environmental clearance obtained for industrial development with green buffer zone compliance and ETP provisions.',
        status: 'Cleared',
    },
    {
        icon: Flame,
        title: 'Fire Safety Compliance',
        authority: 'State Fire & Emergency Services',
        description: 'Fire safety infrastructure plan approved including fire hydrant network, access roads, and emergency response provisions.',
        status: 'Compliant',
    },
    {
        icon: CheckCircle2,
        title: 'Industrial Usage Classification',
        authority: 'District Industries Centre',
        description: 'Formal industrial usage classification for manufacturing, warehousing, logistics, and ancillary industrial activities.',
        status: 'Classified',
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

export default function Compliance() {
    const headingRef = useScrollReveal();
    const gridRef = useScrollReveal(0.05);

    return (
        <section
            id="compliance"
            className="py-24 relative overflow-hidden bg-stripe-pattern"
            style={{ background: '#f8fafc' }}
        >
            {/* Subtle dot pattern overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(29,78,216,0.06) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14" ref={headingRef}>
                    <div className="label-tag mb-3">Compliance & Approvals</div>
                    <div className="section-divider" />
                    <h2 className="section-heading mb-4" style={{ color: '#0a1628' }}>
                        Fully Compliant.<br />
                        <span style={{ color: '#1d4ed8' }}>Zero Regulatory Risk.</span>
                    </h2>
                    <p className="section-subheading max-w-2xl">
                        All statutory approvals and compliance certifications are secured at the park level — investors acquire plots with complete regulatory clarity.
                    </p>
                </div>

                {/* Certification Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" ref={gridRef}>
                    {certifications.map((cert) => {
                        const Icon = cert.icon;
                        return (
                            <div
                                key={cert.title}
                                className="relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-ind-lg"
                                style={{
                                    background: '#eef4ff',
                                    border: '2px solid rgba(29,78,216,0.15)',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(29,78,216,0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(29,78,216,0.15)';
                                }}
                            >
                                {/* Status badge */}
                                <div className="absolute top-4 right-4">
                                    <span
                                        className="text-xs font-bold px-2.5 py-1 uppercase tracking-wide"
                                        style={{ background: '#1d4ed8', color: 'white' }}
                                    >
                                        {cert.status}
                                    </span>
                                </div>

                                {/* Icon — prominent circular badge */}
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                                    style={{
                                        background: 'white',
                                        border: '2px solid #1d4ed8',
                                        boxShadow: '0 0 0 4px rgba(29,78,216,0.1)',
                                    }}
                                >
                                    <Icon className="w-7 h-7" style={{ color: '#1d4ed8' }} />
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-sm mb-1.5 pr-16" style={{ color: '#0a1628' }}>{cert.title}</h3>
                                <p className="text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: '#2563eb' }}>{cert.authority}</p>
                                <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{cert.description}</p>

                                {/* Bottom accent */}
                                <div
                                    className="mt-5 pt-4 flex items-center gap-2"
                                    style={{ borderTop: '1px solid rgba(29,78,216,0.15)' }}
                                >
                                    <div
                                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ background: '#1d4ed8' }}
                                    >
                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-xs" style={{ color: '#64748b' }}>Verification available on request</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Disclaimer */}
                <div
                    className="mt-10 p-5"
                    style={{ background: 'white', border: '1px solid rgba(29,78,216,0.15)' }}
                >
                    <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
                        <span className="font-semibold" style={{ color: '#0a1628' }}>Compliance Note:</span>{' '}
                        All approvals and certifications listed are obtained at the park/project level. Individual plot buyers are responsible for obtaining unit-level approvals (factory license, pollution control consent, etc.) as applicable to their specific industry and operations. Copies of all park-level approvals are available for review during site visits.
                    </p>
                </div>
            </div>
        </section>
    );
}
