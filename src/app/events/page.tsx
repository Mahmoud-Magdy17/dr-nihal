import { SectionTitle, EventsList } from '@/components/ui';
import { EVENTS, CONTACT } from '@/lib/constants';
import { Calendar, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'الفعاليات والأنشطة | م. نهال المغربي',
    description: 'تعرف على الفعاليات واللقاءات والأنشطة القادمة لحملة م. نهال المغربي',
};

export default function EventsPage() {
    return (
        <>
            {/* Page Header */}
            {/* Page Header */}
            <section className="pt-header-safe pb-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]">
                <div className="container">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">الفعاليات والأنشطة</h1>
                        <p className="text-xl opacity-90">لقاءات ميدانية وورش عمل وزيارات</p>
                    </div>
                </div>
            </section>

            {/* Events List */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        title="الفعاليات القادمة"
                        subtitle="سجل حضورك وشاركنا اللقاء"
                    />

                    <EventsList events={EVENTS} />
                </div>
            </section>

            {/* Event Types */}
            <section className="section bg-[var(--accent)]">
                <div className="container">
                    <SectionTitle
                        title="أنواع الفعاليات"
                        centered
                    />

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">لقاءات مفتوحة</h3>
                            <p className="text-[var(--muted)]">
                                حوارات مباشرة مع المهندسين لمناقشة التحديات والتطلعات
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                                <MapPin className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">زيارات ميدانية</h3>
                            <p className="text-[var(--muted)]">
                                جولات في المصانع والشركات للتعرف على بيئة العمل
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">ورش عمل</h3>
                            <p className="text-[var(--muted)]">
                                تدريبات عملية على المهارات المطلوبة في سوق العمل
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="section bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto">
                        <Calendar className="w-16 h-16 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl font-bold mb-4">
                            لا تفوت أي فعالية
                        </h2>
                        <p className="text-xl opacity-90 mb-6">
                            انضم لمجموعة الواتساب للحصول على إشعارات بالفعاليات القادمة
                        </p>
                        <a
                            href={CONTACT.whatsappGroup}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-white text-[var(--primary)] hover:bg-[var(--accent)]"
                        >
                            انضم للمجموعة
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
