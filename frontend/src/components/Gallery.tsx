import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
    {
        src: '/assets/generated/gallery-1.dim_800x600.png',
        caption: 'Aerial Site View',
        category: 'Site Overview',
    },
    {
        src: '/assets/generated/gallery-2.dim_800x600.png',
        caption: 'Development Progress',
        category: 'Construction',
    },
    {
        src: '/assets/generated/gallery-3.dim_800x600.png',
        caption: 'Infrastructure Works',
        category: 'Infrastructure',
    },
    {
        src: '/assets/generated/gallery-4.dim_800x600.png',
        caption: '3D Render — Phase 1',
        category: '3D Render',
    },
    {
        src: '/assets/generated/gallery-5.dim_800x600.png',
        caption: 'Road Network',
        category: 'Infrastructure',
    },
    {
        src: '/assets/generated/gallery-6.dim_800x600.png',
        caption: 'Boundary & Greenery',
        category: 'Site Overview',
    },
];

export default function Gallery() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null));
    const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % galleryItems.length : null));

    return (
        <section id="gallery" className="py-24 bg-steel-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14">
                    <div className="label-tag mb-3">Gallery</div>
                    <div className="section-divider" />
                    <h2 className="section-heading text-near-black mb-4">
                        Site Progress &<br />Development Visuals
                    </h2>
                    <p className="section-subheading max-w-2xl">
                        Real site photography, infrastructure documentation, and 3D renders of the planned development.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.src}
                            className="break-inside-avoid cursor-pointer group relative overflow-hidden border border-steel-200"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={item.src}
                                alt={item.caption}
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/50 transition-all duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-xs text-ind-blue-light font-semibold uppercase tracking-widest block mb-1">
                                    {item.category}
                                </span>
                                <span className="text-white font-semibold text-sm">{item.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-near-black/97 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close */}
                    <button
                        className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 transition-colors z-10"
                        onClick={closeLightbox}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Prev */}
                    <button
                        className="absolute left-4 text-white bg-white/10 hover:bg-white/20 p-3 transition-colors z-10"
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Image */}
                    <div className="max-w-5xl max-h-full p-8" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={galleryItems[lightboxIndex].src}
                            alt={galleryItems[lightboxIndex].caption}
                            className="max-w-full max-h-[80vh] object-contain mx-auto"
                        />
                        <div className="text-center mt-4">
                            <span className="text-ind-blue-light text-xs font-semibold uppercase tracking-widest block mb-1">
                                {galleryItems[lightboxIndex].category}
                            </span>
                            <span className="text-white font-semibold">{galleryItems[lightboxIndex].caption}</span>
                            <span className="text-steel-500 text-sm ml-3">
                                {lightboxIndex + 1} / {galleryItems.length}
                            </span>
                        </div>
                    </div>

                    {/* Next */}
                    <button
                        className="absolute right-4 text-white bg-white/10 hover:bg-white/20 p-3 transition-colors z-10"
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            )}
        </section>
    );
}
