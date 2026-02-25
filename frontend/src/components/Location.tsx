import { MapPin, Train, Plane, Navigation, Warehouse } from 'lucide-react';

const distances = [
    {
        icon: Navigation,
        label: 'National Highway',
        distance: '5 km',
        detail: 'Direct NH Access',
    },
    {
        icon: Train,
        label: 'Railway Station',
        distance: '15 km',
        detail: 'Freight & Passenger Rail',
    },
    {
        icon: Plane,
        label: 'Airport',
        distance: '30 km',
        detail: 'International Cargo Hub',
    },
    {
        icon: MapPin,
        label: 'Major City',
        distance: '10 km',
        detail: 'Urban Market Access',
    },
    {
        icon: Warehouse,
        label: 'ICD / Logistics Hub',
        distance: '1 km',
        detail: 'Inland Container Depot',
    },
];

const highlights = [
    {
        title: 'National Highway Access',
        desc: 'Direct connectivity to the national highway enabling seamless freight movement across the national logistics network.',
    },
    {
        title: 'Rail Freight Corridor',
        desc: 'Proximity to dedicated freight railway corridor reduces logistics costs for bulk manufacturing operations.',
    },
    {
        title: 'ICD / Logistics Hub',
        desc: 'Just 1 km from an Inland Container Depot, offering unmatched last-mile logistics efficiency for importers and exporters.',
    },
    {
        title: 'Airport Proximity',
        desc: 'Within 30 km of the international airport, enabling time-sensitive air cargo and executive travel convenience.',
    },
    {
        title: 'Urban Market Access',
        desc: 'Located within 10 km of a major city, providing access to skilled workforce, consumer markets, and urban amenities.',
    },
    {
        title: 'Industrial Corridor',
        desc: 'Situated within a designated high-growth industrial corridor under the national industrial development policy.',
    },
];

const LAT = 28.4970110;
const LNG = 77.6536180;
const MAPS_URL = `https://www.google.com/maps?q=${LAT},${LNG}`;

export default function Location() {
    return (
        <section id="location" className="py-24 bg-steel-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <div className="label-tag mb-3">Location Advantage</div>
                    <div className="section-divider" />
                    <h2 className="section-heading text-near-black mb-4">
                        Strategically Connected.<br />Logistically Superior.
                    </h2>
                    <p className="section-subheading max-w-2xl">
                        Strategically positioned within a high-growth industrial corridor offering seamless multi-modal connectivity.
                    </p>
                    {/* Address */}
                    <div className="flex items-center gap-2 mt-4">
                        <MapPin className="w-4 h-4 text-ind-blue flex-shrink-0" />
                        <a
                            href={MAPS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-steel-600 text-sm font-medium hover:text-ind-blue transition-colors duration-200"
                        >
                            Gopalpur, Sikandrabad &nbsp;·&nbsp; {LAT.toFixed(7)}, {LNG.toFixed(7)}
                        </a>
                    </div>
                </div>

                {/* Distance Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                    {distances.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.label}
                                className="bg-white border border-steel-200 p-6 text-center hover:border-ind-blue/30 hover:shadow-ind transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-ind-blue/10 flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-6 h-6 text-ind-blue" />
                                </div>
                                <div
                                    className="text-3xl font-bold text-ind-blue font-condensed mb-1"
                                    style={{ fontFamily: 'Barlow Condensed, Inter, sans-serif' }}
                                >
                                    {item.distance}
                                </div>
                                <div className="text-near-black font-semibold text-sm">{item.label}</div>
                                <div className="text-steel-500 text-xs mt-1">{item.detail}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Map Image */}
                <div className="mb-12 border border-steel-200 overflow-hidden">
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" title="View on Google Maps">
                        <img
                            src="/assets/generated/location-map.dim_1200x600.png"
                            alt="RK Industrial Park Location Map — Gopalpur, Sikandrabad — showing connectivity to highways, railway, and industrial hubs"
                            className="w-full object-cover hover:opacity-95 transition-opacity duration-200"
                            style={{ maxHeight: '500px' }}
                        />
                    </a>
                </div>

                {/* Connectivity Highlights */}
                <div>
                    <h3 className="text-near-black font-bold text-xl mb-6">Connectivity Highlights</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="bg-white border border-steel-200 p-5 hover:border-ind-blue/30 hover:shadow-ind transition-all duration-300"
                            >
                                <div className="w-2 h-2 bg-ind-blue mb-3" />
                                <h4 className="text-near-black font-semibold text-sm mb-1.5">{item.title}</h4>
                                <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
