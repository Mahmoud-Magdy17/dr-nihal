import Image from 'next/image';
import Link from 'next/link';
import { Timeline, SectionTitle, AchievementCard } from '@/components/ui';
import { CANDIDATE, BIOGRAPHY, KEY_ACHIEVEMENTS } from '@/lib/constants';
import { Download, ArrowLeft, Award, BookOpen, Globe, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'السيرة الذاتية | م. نهال المغربي',
    description: 'تعرف على المسيرة المهنية والخبرات والإنجازات لـ م. نهال المغربي - مرشحة شعبة الكهرباء بنقابة المهندسين سوهاج',
};

export default function BiographyPage() {
    return (
        <>
            {/* Page Header */}
            {/* Page Header */}
            <section className="pt-header-safe pb-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]">
                <div className="container">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">السيرة الذاتية</h1>
                        <p className="text-xl opacity-90">أكثر من 20 عامًا من الخبرة والعطاء</p>
                    </div>
                </div>
            </section>

            {/* Profile Section */}
            <section className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Profile Image & Quick Info */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                    <div className="relative h-80">
                                        <Image
                                            src={CANDIDATE.profileImage}
                                            alt={CANDIDATE.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-[var(--primary)] mb-2">
                                            {CANDIDATE.name}
                                        </h2>
                                        <p className="text-[var(--muted)] mb-6">
                                            {CANDIDATE.position}
                                        </p>

                                        {/* Quick Stats */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="text-center p-3 bg-[var(--accent)] rounded-lg">
                                                <p className="text-2xl font-bold text-[var(--primary)]">+20</p>
                                                <p className="text-sm text-[var(--muted)]">سنة خبرة</p>
                                            </div>
                                            <div className="text-center p-3 bg-[var(--accent)] rounded-lg">
                                                <p className="text-2xl font-bold text-[var(--primary)]">+3000</p>
                                                <p className="text-sm text-[var(--muted)]">متدرب</p>
                                            </div>
                                        </div>

                                        {/* Download CV Button */}
                                        <button className="btn btn-primary w-full">
                                            <Download size={18} />
                                            تحميل السيرة الذاتية
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Biography Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Summary */}
                            <div>
                                <SectionTitle title="نبذة تعريفية" />
                                <p className="text-lg text-[var(--foreground)] leading-relaxed">
                                    {BIOGRAPHY.summary}
                                </p>
                            </div>

                            {/* Current Positions */}
                            <div>
                                <SectionTitle title="المناصب الحالية" />
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="card">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-[var(--accent)] flex items-center justify-center text-[var(--primary)]">
                                                <BookOpen size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[var(--primary)]">مديرة وحدة الجاهزية المهنية</h3>
                                                <p className="text-sm text-[var(--muted)]">وخدمات الطلاب - جامعة سوهاج</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-[var(--accent)] flex items-center justify-center text-[var(--primary)]">
                                                <Globe size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[var(--primary)]">المديرة التنفيذية</h3>
                                                <p className="text-sm text-[var(--muted)]">أكاديمية هواوي ICT - جامعة سوهاج</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Career Timeline */}
                            <div>
                                <SectionTitle title="المسيرة المهنية" />
                                <Timeline items={BIOGRAPHY.timeline} />
                            </div>

                            {/* Accreditations */}
                            <div>
                                <SectionTitle title="الاعتمادات والشهادات" />
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        'المجلس الأعلى للجامعات',
                                        'وزارة الاتصالات',
                                        'Intel',
                                        'Microsoft',
                                        'Huawei',
                                        'Creativa',
                                        'EdVentures',
                                        'GIZ',
                                    ].map((cert) => (
                                        <span
                                            key={cert}
                                            className="px-4 py-2 bg-[var(--accent)] rounded-full text-[var(--primary)] font-medium"
                                        >
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Key Achievements */}
                            <div>
                                <SectionTitle title="الإنجازات الرئيسية" />
                                <div className="space-y-4">
                                    {KEY_ACHIEVEMENTS.map((achievement, index) => (
                                        <AchievementCard key={index} achievement={achievement} index={index} />
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-[var(--accent)] rounded-2xl p-8 text-center">
                                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">
                                    تعرف على البرنامج الانتخابي
                                </h3>
                                <p className="text-[var(--muted)] mb-6">
                                    اطلع على رؤيتنا ومحاور العمل لتطوير نقابة المهندسين
                                </p>
                                <Link href="/vision" className="btn btn-primary">
                                    البرنامج الانتخابي
                                    <ArrowLeft size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
