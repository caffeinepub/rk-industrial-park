import { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle, MapPin, Clock, FileText, Tag } from 'lucide-react';
import { useSubmitEnquiry, IndustryType, InvestmentTimeline } from '../hooks/useQueries';
import type { PlotSize } from '../backend';

interface FormState {
    companyName: string;
    contactPerson: string;
    phone: string;
    email: string;
    industryType: string;
    plotSize: string;
    powerRequirement: string;
    investmentTimeline: string;
}

const initialForm: FormState = {
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    industryType: '',
    plotSize: '',
    powerRequirement: '',
    investmentTimeline: '',
};

function mapPlotSize(value: string): PlotSize {
    switch (value) {
        case 'sqm500': return { __kind__: 'sqm500', sqm500: null };
        case 'sqm1000': return { __kind__: 'sqm1000', sqm1000: null };
        case 'sqm2000': return { __kind__: 'sqm2000', sqm2000: null };
        case 'sqm5000': return { __kind__: 'sqm5000', sqm5000: null };
        default: return { __kind__: 'custom', custom: BigInt(0) };
    }
}

const trustIndicators = [
    { icon: MapPin, label: '100+ Plots', sub: 'Available for Allocation' },
    { icon: Tag, label: '25+ Acres', sub: 'Planned Development Area' },
    { icon: CheckCircle2, label: 'Compliance-Ready', sub: 'All Approvals Secured' },
    { icon: Clock, label: '24hr Response', sub: 'Dedicated Sales Team' },
];

const infoItems = [
    { label: 'Response Time', value: 'Within 24 Business Hours' },
    { label: 'Site Visit', value: 'Scheduled on Request' },
    { label: 'Documentation', value: 'Brochure & Layout Plan Provided' },
    { label: 'Pricing', value: 'Detailed Pricing on Enquiry' },
];

export default function EnquiryForm() {
    const [form, setForm] = useState<FormState>(initialForm);
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [submitted, setSubmitted] = useState(false);

    const { mutate: submitEnquiry, isPending, isError, error } = useSubmitEnquiry();

    const validate = (): boolean => {
        const newErrors: Partial<FormState> = {};
        if (!form.companyName.trim()) newErrors.companyName = 'Required';
        if (!form.contactPerson.trim()) newErrors.contactPerson = 'Required';
        if (!form.phone.trim()) newErrors.phone = 'Required';
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email required';
        if (!form.industryType) newErrors.industryType = 'Required';
        if (!form.plotSize) newErrors.plotSize = 'Required';
        if (!form.powerRequirement.trim()) newErrors.powerRequirement = 'Required';
        if (!form.investmentTimeline) newErrors.investmentTimeline = 'Required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        submitEnquiry(
            {
                companyName: form.companyName,
                contactPerson: form.contactPerson,
                phone: form.phone,
                email: form.email,
                industryType: form.industryType as IndustryType,
                plotSize: mapPlotSize(form.plotSize),
                powerRequirement: form.powerRequirement,
                investmentTimeline: form.investmentTimeline as InvestmentTimeline,
            },
            {
                onSuccess: () => {
                    setSubmitted(true);
                    setForm(initialForm);
                },
            }
        );
    };

    const inputClass = (field: keyof FormState) =>
        `w-full border px-4 py-3 text-sm focus:outline-none transition-colors ${
            errors[field]
                ? 'border-red-400 bg-red-50 text-red-900'
                : 'border-steel-300 bg-white text-near-black focus:border-ind-blue'
        }`;

    return (
        <section id="contact" className="py-0">
            {/* Split two-column layout */}
            <div className="flex flex-col lg:flex-row min-h-[600px]">
                {/* Left: Dark navy branded column */}
                <div
                    className="relative lg:w-5/12 flex flex-col justify-center px-8 py-16 lg:px-12 overflow-hidden"
                    style={{ background: 'linear-gradient(160deg, #0a1628 0%, #1e3a5f 100%)' }}
                >
                    {/* Grid overlay */}
                    <div className="absolute inset-0 bg-grid-pattern" />
                    {/* Glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 70%, rgba(37,99,235,0.18) 0%, transparent 70%)' }}
                    />

                    <div className="relative z-10">
                        <div className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
                            Investor Enquiry
                        </div>
                        <div className="w-12 h-1 mb-6" style={{ background: '#2563eb' }} />
                        <h2
                            className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
                            style={{ letterSpacing: '-0.03em' }}
                        >
                            Book a Site Visit<br />
                            <span style={{ color: '#60a5fa' }}>or Submit Enquiry</span>
                        </h2>
                        <p className="text-sm leading-relaxed mb-10" style={{ color: '#94a3b8' }}>
                            Our team will respond within 24 business hours with detailed information, plot availability, and site visit scheduling.
                        </p>

                        {/* Trust indicators */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {trustIndicators.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-start gap-3 p-4"
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(96,165,250,0.15)',
                                        }}
                                    >
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                            style={{ background: 'rgba(37,99,235,0.25)' }}
                                        >
                                            <Icon className="w-4 h-4" style={{ color: '#60a5fa' }} />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm">{item.label}</div>
                                            <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{item.sub}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Info list */}
                        <div className="space-y-3">
                            {infoItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-3 pb-3"
                                    style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#2563eb' }} />
                                    <span className="text-xs uppercase tracking-widest" style={{ color: '#64748b' }}>{item.label}:</span>
                                    <span className="text-white text-xs font-semibold">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <div
                            className="mt-8 p-4 text-xs leading-relaxed"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b' }}
                        >
                            <span className="font-semibold text-white">Confidentiality:</span>{' '}
                            All enquiry information is treated with strict confidentiality and used solely for the purpose of responding to your industrial land enquiry.
                        </div>
                    </div>
                </div>

                {/* Right: Form on white card */}
                <div
                    className="lg:w-7/12 flex items-center justify-center px-6 py-16 lg:px-12"
                    style={{ background: '#f8fafc' }}
                >
                    <div
                        className="w-full max-w-xl bg-white p-8 lg:p-10"
                        style={{ boxShadow: '0 8px 48px rgba(10,20,50,0.12)', border: '1px solid rgba(29,78,216,0.08)' }}
                    >
                        {submitted ? (
                            <div className="text-center py-8">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                                    style={{ background: 'rgba(29,78,216,0.1)', border: '2px solid #1d4ed8' }}
                                >
                                    <CheckCircle2 className="w-8 h-8" style={{ color: '#1d4ed8' }} />
                                </div>
                                <h3 className="font-bold text-xl mb-2" style={{ color: '#0a1628' }}>Enquiry Submitted Successfully</h3>
                                <p className="text-sm mb-6" style={{ color: '#64748b' }}>
                                    Thank you for your interest in RK Industrial Park. Our team will contact you within 24 business hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-sm font-semibold underline underline-offset-4"
                                    style={{ color: '#1d4ed8' }}
                                >
                                    Submit Another Enquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="mb-6">
                                    <h3 className="font-bold text-lg" style={{ color: '#0a1628' }}>Investor Enquiry Form</h3>
                                    <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>All fields marked * are required</p>
                                </div>

                                {isError && (
                                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 p-4">
                                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                        <p className="text-red-600 text-sm">
                                            {error instanceof Error ? error.message : 'Submission failed. Please try again.'}
                                        </p>
                                    </div>
                                )}

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#0a1628' }}>
                                            Company Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={form.companyName}
                                            onChange={(e) => handleChange('companyName', e.target.value)}
                                            placeholder="Your Company Ltd."
                                            className={inputClass('companyName')}
                                        />
                                        {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#0a1628' }}>
                                            Contact Person <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={form.contactPerson}
                                            onChange={(e) => handleChange('contactPerson', e.target.value)}
                                            placeholder="Full Name"
                                            className={inputClass('contactPerson')}
                                        />
                                        {errors.contactPerson && <p className="text-red-500 text-xs mt-1">{errors.contactPerson}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#0a1628' }}>
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) => handleChange('phone', e.target.value)}
                                            placeholder="+91 98765 43210"
                                            className={inputClass('phone')}
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#0a1628' }}>
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            placeholder="contact@company.com"
                                            className={inputClass('email')}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#0a1628' }}>
                                        Industry Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={form.industryType}
                                        onChange={(e) => handleChange('industryType', e.target.value)}
                                        className={`${inputClass('industryType')} appearance-none`}
                                    >
                                        <option value="">Select Industry Type</option>
                                        <option value={IndustryType.manufacturing}>Manufacturing</option>
                                        <option value={IndustryType.fmcg}>FMCG</option>
                                        <option value={IndustryType.pharma}>Pharma</option>
                                        <option value={IndustryType.coldStorage}>Cold Storage</option>
                                        <option value={IndustryType.warehousing}>Warehousing</option>
                                        <option value={IndustryType.packaging}>Packaging</option>
                                        <option value={IndustryType.engineering}>Engineering</option>
                                        <option value={IndustryType.logistics}>Logistics</option>
                                        <option value={IndustryType.other}>Other</option>
                                    </select>
                                    {errors.industryType && <p className="text-red-500 text-xs mt-1">{errors.industryType}</p>}
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#0a1628' }}>
                                            Required Plot Size <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={form.plotSize}
                                            onChange={(e) => handleChange('plotSize', e.target.value)}
                                            className={`${inputClass('plotSize')} appearance-none`}
                                        >
                                            <option value="">Select Plot Size</option>
                                            <option value="sqm500">500 sq.m</option>
                                            <option value="sqm1000">1,000 sq.m</option>
                                            <option value="sqm2000">2,000 sq.m</option>
                                            <option value="sqm5000">5,000 sq.m</option>
                                            <option value="custom">Custom / 10,000 sq.m+</option>
                                        </select>
                                        {errors.plotSize && <p className="text-red-500 text-xs mt-1">{errors.plotSize}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#0a1628' }}>
                                            Investment Timeline <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={form.investmentTimeline}
                                            onChange={(e) => handleChange('investmentTimeline', e.target.value)}
                                            className={`${inputClass('investmentTimeline')} appearance-none`}
                                        >
                                            <option value="">Select Timeline</option>
                                            <option value={InvestmentTimeline.immediate}>Immediate</option>
                                            <option value={InvestmentTimeline.months3To6}>3–6 Months</option>
                                            <option value={InvestmentTimeline.months6To12}>6–12 Months</option>
                                            <option value={InvestmentTimeline.months12Plus}>12+ Months</option>
                                        </select>
                                        {errors.investmentTimeline && <p className="text-red-500 text-xs mt-1">{errors.investmentTimeline}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#0a1628' }}>
                                        Power Requirement (KVA) <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={form.powerRequirement}
                                        onChange={(e) => handleChange('powerRequirement', e.target.value)}
                                        placeholder="e.g. 100 KVA, 500 KVA"
                                        className={inputClass('powerRequirement')}
                                    />
                                    {errors.powerRequirement && <p className="text-red-500 text-xs mt-1">{errors.powerRequirement}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full flex items-center justify-center gap-2 py-4 text-white font-bold text-sm tracking-wide uppercase transition-all duration-200 disabled:opacity-60 hover:brightness-110 hover:-translate-y-0.5"
                                    style={{
                                        background: isPending ? '#1d4ed8' : 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                                        boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                                    }}
                                >
                                    {isPending ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <FileText className="w-4 h-4" />
                                            Submit Enquiry
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
