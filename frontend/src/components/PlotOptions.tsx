import { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const plots = [
    {
        size: '100 – 500 sq.m',
        category: 'Small Industrial Plot',
        layout: 'Standard / Customizable',
        suitable: 'MSME, Light Manufacturing, Fabrication Units',
        pricing: 'Pricing on Request',
        highlight: false,
    },
    {
        size: '500 – 1,000 sq.m',
        category: 'Medium Industrial Plot',
        layout: 'Customizable',
        suitable: 'Manufacturing, Assembly, Packaging Units',
        pricing: 'Pricing on Request',
        highlight: false,
    },
    {
        size: '1,000 – 2,500 sq.m',
        category: 'Large Industrial Plot',
        layout: 'Fully Customizable',
        suitable: 'FMCG, Pharma, Engineering, Processing Units',
        pricing: 'Pricing on Request',
        highlight: false,
    },
    {
        size: '2,500 sq.m and Above',
        category: 'Large-Scale Industrial Development',
        layout: 'Fully Customizable',
        suitable: 'Logistics, Warehousing, Large Manufacturing, Cold Storage',
        pricing: 'Pricing on Request',
        highlight: false,
    },
    {
        size: 'Custom Requirement',
        category: 'Built-to-Suit Development',
        layout: 'Designed to Operational Specification',
        suitable: 'Specialized Manufacturing, Cold Chain, Heavy Industry, Institutional Operators',
        pricing: 'Pricing on Request',
        highlight: true,
    },
];

export default function PlotOptions() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);
    const noteRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        (entry.target as HTMLElement).style.opacity = '1';
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = [headingRef.current, tableRef.current, noteRef.current, ctaRef.current];
        elements.forEach((el) => {
            if (el) {
                el.style.opacity = '0';
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="plots" ref={sectionRef} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div ref={headingRef} className="mb-12">
                    <div className="label-tag mb-3">Plot Options</div>
                    <div className="section-divider" />
                    <h2 className="section-heading text-near-black mb-5">
                        Flexible Plot Configurations<br className="hidden sm:block" /> Designed for Industrial Scalability
                    </h2>
                    <p className="section-subheading max-w-3xl">
                        RK Industrial Park offers structured industrial land parcels with scalable configurations — from MSME units to large-scale manufacturing and logistics infrastructure. Custom development options are available to meet specialized operational requirements.
                    </p>
                </div>

                {/* Table */}
                <div ref={tableRef} className="overflow-x-auto mb-8 border border-steel-200">
                    <table className="w-full border-collapse min-w-[700px]">
                        <thead>
                            <tr style={{ backgroundColor: '#1E3A5F' }}>
                                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap">
                                    Plot Size
                                </th>
                                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap">
                                    Category
                                </th>
                                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap hidden md:table-cell">
                                    Layout
                                </th>
                                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap hidden lg:table-cell">
                                    Suitable For
                                </th>
                                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap">
                                    Pricing
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {plots.map((plot, i) => (
                                plot.highlight ? (
                                    /* Built-to-Suit Premium Row */
                                    <tr
                                        key={plot.size}
                                        style={{ backgroundColor: '#1E3A5F' }}
                                        className="border-t-2 border-steel-300"
                                    >
                                        <td className="px-5 py-5">
                                            <div className="flex items-center gap-2">
                                                <Star className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#C9A84C' }} fill="#C9A84C" />
                                                <span className="font-bold text-sm text-white leading-tight">
                                                    {plot.size}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5">
                                            <div>
                                                <span className="font-semibold text-sm text-white block leading-tight">
                                                    {plot.category}
                                                </span>
                                                <span
                                                    className="text-xs font-semibold uppercase tracking-wider mt-1 inline-block px-2 py-0.5"
                                                    style={{ backgroundColor: '#C9A84C', color: '#1E3A5F' }}
                                                >
                                                    Premium Offering
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 hidden md:table-cell">
                                            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                                {plot.layout}
                                            </span>
                                        </td>
                                        <td className="px-5 py-5 hidden lg:table-cell">
                                            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                                {plot.suitable}
                                            </span>
                                        </td>
                                        <td className="px-5 py-5">
                                            <span
                                                className="text-xs font-semibold uppercase tracking-wide px-3 py-1 whitespace-nowrap"
                                                style={{ backgroundColor: 'rgba(201,168,76,0.18)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.4)' }}
                                            >
                                                {plot.pricing}
                                            </span>
                                        </td>
                                    </tr>
                                ) : (
                                    /* Standard Rows */
                                    <tr
                                        key={plot.size}
                                        className={`border-b border-steel-200 transition-colors duration-150 ${
                                            i % 2 === 0 ? 'bg-white' : 'bg-steel-50'
                                        } hover:bg-steel-100`}
                                    >
                                        <td className="px-5 py-4">
                                            <span className="font-bold text-sm text-near-black whitespace-nowrap">
                                                {plot.size}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="text-sm text-steel-700 font-medium">
                                                {plot.category}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 hidden md:table-cell">
                                            <span className="text-sm text-steel-500">
                                                {plot.layout}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 hidden lg:table-cell">
                                            <span className="text-sm text-steel-500">
                                                {plot.suitable}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="text-xs font-semibold text-steel-500 bg-steel-100 border border-steel-200 px-3 py-1 uppercase tracking-wide whitespace-nowrap">
                                                {plot.pricing}
                                            </span>
                                        </td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile: Built-to-Suit detail card (visible only on small screens where columns are hidden) */}
                <div
                    className="lg:hidden mb-8 p-5 border-l-4"
                    style={{ backgroundColor: '#F0F4FA', borderLeftColor: '#1E3A5F' }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <Star className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#C9A84C' }} fill="#C9A84C" />
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E3A5F' }}>
                            Built-to-Suit — Additional Detail
                        </span>
                    </div>
                    <p className="text-sm text-steel-600 mb-1">
                        <span className="font-semibold text-near-black">Layout:</span> Designed to Operational Specification
                    </p>
                    <p className="text-sm text-steel-600">
                        <span className="font-semibold text-near-black">Suitable For:</span> Specialized Manufacturing, Cold Chain, Heavy Industry, Institutional Operators
                    </p>
                </div>

                {/* Section Note */}
                <div
                    ref={noteRef}
                    className="mb-10 p-6 border border-steel-200 bg-steel-50"
                >
                    <h4 className="text-sm font-bold uppercase tracking-widest text-near-black mb-2">
                        Custom Demarcation &amp; Built-to-Suit Development
                    </h4>
                    <p className="text-sm text-steel-600 leading-relaxed">
                        Plots may be combined or subdivided based on operational requirements. Built-to-suit options include coordinated infrastructure planning, layout engineering, and structured execution aligned with industrial compliance norms.
                    </p>
                </div>

                {/* CTA */}
                <div ref={ctaRef} className="flex justify-center">
                    <button
                        onClick={scrollToContact}
                        className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm tracking-widest uppercase text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                        style={{ backgroundColor: '#1E3A5F' }}
                    >
                        Request Pricing
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
}
