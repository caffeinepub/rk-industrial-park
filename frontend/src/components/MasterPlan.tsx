import { useEffect, useRef } from 'react';
import { Download, MapPin } from 'lucide-react';

const projectSummary = [
  { label: 'Total Land Area', value: '20+ Acres' },
  { label: 'Total Industrial Plots', value: '100+' },
  { label: 'Plot Size Range', value: '200 sq.m – 5,000 sq.m' },
  { label: 'Zoning', value: 'Industrial Use' },
  { label: 'Status', value: 'Ready' },
];

const infrastructureHighlights = [
  'Industrial plots ranging from 200 sq.m – 5,000 sq.m',
  'Complete RCC internal road network (12m–18m width)',
  'Dedicated truck entry and exit planning',
  'Power substation with HT line',
  'Underground drainage & stormwater system',
  'Water supply infrastructure with overhead tanks',
  'Boundary wall & gated security',
  'Street lighting across all internal roads',
  'Green buffer zones along perimeter',
];

export default function MasterPlan() {
  const headerRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [
      headerRef.current,
      pdfRef.current,
      summaryRef.current,
      highlightsRef.current,
      ctaRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((el) => {
      if (el) {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToEnquiry = () => {
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="masterplan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div ref={headerRef} className="mb-14">
          <div className="label-tag mb-3">MASTER PLAN</div>
          <div className="section-divider" />
          <h2 className="section-heading text-near-black mb-5">
            Structured Planning.<br />Integrated Execution.
          </h2>
          <p className="section-subheading max-w-3xl text-steel-600">
            The master plan reflects a disciplined and infrastructure-first approach to industrial land development — every zone, road network, and utility corridor is pre-engineered to ensure operational efficiency, seamless logistics movement, and scalable industrial growth.
          </p>
        </div>

        {/* PDF Embed */}
        <div ref={pdfRef} className="mb-10">
          <div className="w-full border border-steel-200 bg-steel-50 overflow-hidden" style={{ height: '600px' }}>
            <object
              data="/assets/master.pdf"
              type="application/pdf"
              className="w-full h-full"
              aria-label="RK Industrial Park Master Layout Plan"
            >
              <div className="flex flex-col items-center justify-center h-full gap-4 text-steel-500">
                <MapPin className="w-10 h-10 text-ind-blue opacity-60" />
                <p className="text-sm text-center max-w-xs">
                  Your browser does not support inline PDF viewing.
                </p>
                <a
                  href="/assets/master.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-ind-blue text-white text-sm font-semibold tracking-wide uppercase hover:bg-ind-blue-light transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download Master Layout Plan
                </a>
              </div>
            </object>
          </div>
        </div>

        {/* Project Summary Strip */}
        <div ref={summaryRef} className="mb-14">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 overflow-hidden"
            style={{ backgroundColor: 'oklch(0.18 0.08 240)' }}
          >
            {projectSummary.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col items-center justify-center px-6 py-10 text-center ${
                  index < projectSummary.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-white/10'
                    : ''
                }`}
              >
                <span
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: 'oklch(0.65 0.02 240)' }}
                >
                  {item.label}
                </span>
                <span
                  className="font-bold leading-tight"
                  style={{
                    color: '#ffffff',
                    fontSize: item.label === 'Plot Size Range' ? '1.5rem' : '2rem',
                    lineHeight: 1.15,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Highlights */}
        <div ref={highlightsRef} className="mb-16 border border-steel-200 bg-steel-50 p-8 md:p-12">
          <div className="mb-8">
            <div className="label-tag mb-2">INFRASTRUCTURE HIGHLIGHTS</div>
            <h3 className="text-near-black text-xl font-bold tracking-tight">
              Pre-Engineered for Industrial Operations
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {infrastructureHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-steel-700 text-sm leading-relaxed">
                <div className="w-2 h-2 bg-ind-blue mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/assets/master.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-ind-blue text-white font-semibold text-sm tracking-widest uppercase hover:bg-ind-blue-light transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            Download Master Layout Plan
          </a>
          <button
            onClick={scrollToEnquiry}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-ind-blue text-ind-blue font-semibold text-sm tracking-widest uppercase hover:bg-ind-blue/5 transition-colors duration-200"
          >
            Book Site Visit
          </button>
        </div>

      </div>
    </section>
  );
}
