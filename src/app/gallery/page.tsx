'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '@/components/ui';
import { GALLERY_CATEGORIES, GALLERY_IMAGES, CANDIDATE } from '@/lib/constants';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredImages = selectedCategory === 'all'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

    return (
        <>
            {/* Page Header */}
            {/* Page Header */}
            <section className="pt-header-safe pb-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]">
                <div className="container">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">معرض الصور</h1>
                        <p className="text-xl opacity-90">لحظات من التدريب والتطوير والإنجاز</p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="section">
                <div className="container">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {GALLERY_CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category.id
                                    ? 'bg-[var(--primary)] text-white'
                                    : 'bg-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid - Using Candidate Images as Placeholder */}
                    <motion.div
                        layout
                        className="gallery-grid"
                    >
                        {/* Show actual candidate images */}
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="gallery-item"
                            onClick={() => setSelectedImage(CANDIDATE.heroImage)}
                        >
                            <Image
                                src={CANDIDATE.heroImage}
                                alt="صورة الحملة الانتخابية"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <div className="text-white">
                                    <ZoomIn size={24} className="mb-2" />
                                    <p className="font-medium">صورة الحملة الانتخابية</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="gallery-item"
                            onClick={() => setSelectedImage(CANDIDATE.profileImage)}
                        >
                            <Image
                                src={CANDIDATE.profileImage}
                                alt="صورة شخصية"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="gallery-overlay">
                                <div className="text-white">
                                    <ZoomIn size={24} className="mb-2" />
                                    <p className="font-medium">صورة شخصية</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Placeholder Gallery Items */}
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div
                                key={item}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="gallery-item bg-gradient-to-br from-[var(--accent)] to-[var(--primary)]/20"
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-[var(--primary)]">
                                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/80 flex items-center justify-center">
                                            <ZoomIn size={24} />
                                        </div>
                                        <p className="font-medium">صورة قادمة</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Coming Soon Note */}
                    <div className="text-center mt-10 p-6 bg-[var(--accent)] rounded-xl">
                        <p className="text-[var(--muted)]">
                            🖼️ سيتم إضافة المزيد من الصور قريبًا - تابعونا!
                        </p>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-4xl max-h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="صورة مكبرة"
                                width={800}
                                height={600}
                                className="object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
