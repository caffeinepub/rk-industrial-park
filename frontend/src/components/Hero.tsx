import { ArrowDown, Download, MapPin, Map } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        el.style.opacity = '0';
        const t = setTimeout(() => {
            el.style.transition = 'opacity 0.8s ease';
            el.style.opacity = '1';
        }, 50);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{
                backgroundImage: `url('/assets/generated/hero-aerial-v2.dim_1920x1080.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Rich multi-layer gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(120deg, rgba(5,15,40,0.93) 0%, rgba(10,25,65,0.85) 40%, rgba(5,15,40,0.70) 70%, rgba(0,0,0,0.50) 100%)',
                }}
            />

            {/* Animated grid-line background layer */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60" />

            {/* Diagonal blue glow accent */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 50% at 20% 60%, rgba(37,99,235,0.18) 0%, transparent 70%)',
                }}
            />

            {/* Vivid blue accent bar at top */}
            <div className="absolute top-0 left-0 right-0 h-1.5 z-10"
                style={{ background: 'linear-gradient(90deg, #1d4ed8 0%, #3b82f6 50%, #1d4ed8 100%)' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
                <div className="max-w-5xl">
                    {/* Decorative top line */}
                    <div className="flex items-center gap-3 mb-5 animate-fade-in-up">
                        <div className="w-10 h-px bg-ind-blue-light" />
                        <span
                            className="text-ind-blue-light text-xs font-bold tracking-[0.3em] uppercase"
                            style={{ textShadow: '0 0 20px rgba(96,165,250,0.7)' }}
                        >
                            Welcome to
                        </span>
                        <div className="w-10 h-px bg-ind-blue-light" />
                    </div>

                    {/* Main brand name — fits on one line, fluid sizing */}
                    <div
                        className="font-extrabold uppercase leading-none tracking-tight text-white animate-fade-in-up animate-delay-100"
                        style={{
                            fontSize: 'clamp(2.2rem, 6.5vw, 5.2rem)',
                            letterSpacing: '-0.025em',
                            textShadow: '0 2px 40px rgba(0,0,0,0.7)',
                            fontFamily: 'Inter, sans-serif',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <span
                            style={{
                                color: '#60a5fa',
                                textShadow: '0 0 50px rgba(96,165,250,0.6), 0 2px 20px rgba(0,0,0,0.5)',
                            }}
                        >
                            RK
                        </span>{' '}
                        <span className="text-white">Industrial</span>{' '}
                        <span className="text-white">Park</span>
                    </div>

                    {/* Underline accent bars */}
                    <div className="flex items-center gap-2 mt-4 mb-6 animate-fade-in-up animate-delay-200">
                        <div className="h-1 w-24 rounded-full" style={{ background: '#1d4ed8' }} />
                        <div className="h-1 w-10 rounded-full opacity-60" style={{ background: '#60a5fa' }} />
                        <div className="h-1 w-5 rounded-full opacity-30" style={{ background: '#93c5fd' }} />
                    </div>

                    {/* Headline */}
                    <h1
                        className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-4 animate-fade-in-up animate-delay-200"
                        style={{
                            color: 'rgba(226,232,240,0.95)',
                            letterSpacing: '-0.01em',
                            fontFamily: 'Inter, sans-serif',
                        }}
                    >
                        Powering the Future of{' '}
                        <span className="text-white font-bold">Industrial Growth</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-light animate-fade-in-up animate-delay-300"
                        style={{ color: 'rgba(148,163,184,0.9)' }}
                    >
                        A strategically planned industrial ecosystem designed for scalable manufacturing, warehousing, and logistics operations.
                    </p>

                    {/* Stats strip — frosted glass cards */}
                    <div className="flex flex-wrap gap-4 mb-10 pb-10 border-b border-white/10 animate-fade-in-up animate-delay-300">
                        {[
                            { value: '25+', label: 'Acres' },
                            { value: '100+', label: 'Industrial Plots' },
                            { value: '9+', label: 'Industries Served' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="flex flex-col items-center justify-center px-7 py-4 border"
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    backdropFilter: 'blur(8px)',
                                    borderColor: 'rgba(96,165,250,0.25)',
                                    minWidth: '120px',
                                }}
                            >
                                <div
                                    className="text-3xl font-extrabold leading-none"
                                    style={{
                                        color: '#60a5fa',
                                        fontFamily: 'Inter, sans-serif',
                                        textShadow: '0 0 20px rgba(96,165,250,0.4)',
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-xs uppercase tracking-widest mt-1.5 font-medium"
                                    style={{ color: 'rgba(148,163,184,0.85)' }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
                        <button
                            onClick={() => scrollTo('#contact')}
                            className="inline-flex items-center gap-2 px-7 py-3.5 text-white text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                            style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }}
                        >
                            <Download className="w-4 h-4" />
                            Download Brochure
                        </button>
                        <button
                            onClick={() => scrollTo('#contact')}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white text-sm font-semibold tracking-wide uppercase border-2 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                            style={{ borderColor: 'rgba(255,255,255,0.5)' }}
                        >
                            <MapPin className="w-4 h-4" />
                            Book Site Visit
                        </button>
                        <button
                            onClick={() => scrollTo('#masterplan')}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white text-sm font-semibold tracking-wide uppercase border-2 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                            style={{ borderColor: 'rgba(255,255,255,0.5)' }}
                        >
                            <Map className="w-4 h-4" />
                            View Master Plan
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(148,163,184,0.7)' }}>Scroll</span>
                <ArrowDown className="w-4 h-4 animate-bounce" style={{ color: 'rgba(148,163,184,0.7)' }} />
            </div>
        </section>
    );
}
