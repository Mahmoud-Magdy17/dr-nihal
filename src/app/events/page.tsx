'use client';

import { useState } from 'react';
import { SectionTitle, EventAlbumCard, EventModal } from '@/components/ui';
import { EVENTS, ALL_ALBUMS_URL, EventAlbum } from '@/lib/events';
import { Camera, Facebook, ArrowLeft, FolderOpen } from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
    const [selectedEvent, setSelectedEvent] = useState<EventAlbum | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEventClick = (event: EventAlbum) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    return (
        <>
            {/* Page Header */}
            <section className="pt-header-safe pb-20 bg-gradient-to-br from-[#3d4a7b] via-[#4d5a8b] to-[#3d4a7b] relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a843]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

                <div className="container relative z-10">
                    <div className="text-center text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-5 py-2 rounded-full text-sm font-medium mb-6">
                            <Camera size={18} />
                            <span>مشاركة مستمرة على مر السنين</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            أحداث وفعاليات
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                            فعاليات سابقة تعكس المشاركة الدائمة والفعّالة في خدمة المجتمع
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-12 bg-[#f8faf9] border-b border-gray-100">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            على مدار سنوات طويلة، شاركت م. نهال المغربي في العديد من الفعاليات والأحداث
                            التي تخدم المهندسين والمجتمع. هذه صور حقيقية تعكس مشاركتها الدائمة والفعّالة
                            في مختلف المجالات والمناسبات.
                        </p>
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container">
                    <SectionTitle
                        title="ألبومات الصور"
                        subtitle="اضغط على أي ألبوم لمشاهدة التفاصيل والصور على فيسبوك"
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {EVENTS.map((event, index) => (
                            <EventAlbumCard
                                key={event.id}
                                {...event}
                                delay={index * 0.1}
                                onClick={() => handleEventClick(event)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* All Albums CTA */}
            <section className="py-16 bg-[#f8faf9] border-y border-gray-100">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#3d4a7b]/10 rounded-full mb-6">
                            <FolderOpen size={36} className="text-[#3d4a7b]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#3d4a7b] mb-4">
                            هل تريد المزيد؟
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            هذه مجموعة مختارة من أبرز الأحداث والفعاليات. للاطلاع على جميع الألبومات والصور، تفضل بزيارة صفحة الألبومات على فيسبوك.
                        </p>
                        <a
                            href={ALL_ALBUMS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#1877F2] to-[#0b5ed7] hover:from-[#166fe5] hover:to-[#0a53be] text-white text-lg font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <Facebook size={24} />
                            شاهد جميع الألبومات
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#3d4a7b] to-[#4d5a8b] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d4a843]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto text-white">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                            تابعنا على فيسبوك
                        </h2>
                        <p className="text-xl opacity-90 mb-10 leading-relaxed">
                            للمزيد من الصور والأخبار والتحديثات، تابع صفحتنا الرسمية على فيسبوك
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <a
                                href="https://www.facebook.com/Nehalmaghrabi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white text-lg font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <Facebook size={24} />
                                تابعنا على فيسبوك
                            </a>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white text-lg font-bold py-4 px-8 rounded-xl transition-all border border-white/20"
                            >
                                العودة للرئيسية
                                <ArrowLeft size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Modal */}
            <EventModal
                event={selectedEvent}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}
