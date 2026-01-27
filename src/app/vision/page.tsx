import { SectionTitle, ProgramCard } from '@/components/ui';
import { ELECTORAL_PROGRAM, VISION_STATEMENT } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'البرنامج الانتخابي | م. نهال المغربي',
    description: 'البرنامج الانتخابي لـ م. نهال المغربي - 6 محاور لتطوير نقابة المهندسين بسوهاج',
};

export default function VisionPage() {
    return (
        <>
            {/* Page Header */}
            {/* Page Header */}
            <section className="pt-header-safe pb-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]">
                <div className="container px-4 md:px-6 lg:px-8">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">البرنامج الانتخابي</h1>
                        <p className="text-xl opacity-90 leading-relaxed">
                            {VISION_STATEMENT}
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Statement Highlight */}
            <section className="py-12 bg-[var(--secondary)]">
                <div className="container px-4 md:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-xl md:text-2xl font-bold text-[var(--primary-dark)]">
                            "التغيير مش كلام… التغيير نية صادقة وخبرة حقيقية وعمل جاد"
                        </p>
                    </div>
                </div>
            </section>

            {/* Electoral Program Pillars */}
            <section className="section">
                <div className="container px-4 md:px-6 lg:px-8">
                    <SectionTitle
                        title="محاور البرنامج الانتخابي"
                        subtitle="6 محاور عمل واضحة وقابلة للتنفيذ لتحقيق رؤيتنا"
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {ELECTORAL_PROGRAM.map((program, index) => (
                            <ProgramCard
                                key={program.id}
                                {...program}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Approach */}
            <section className="section bg-[var(--accent)]">
                <div className="container px-4 md:px-6 lg:px-8">
                    <SectionTitle
                        title="منهجية التنفيذ"
                        subtitle="كيف سنحول الرؤية إلى واقع"
                        centered
                    />

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-2xl font-bold">
                                1
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">بناء الشراكات</h3>
                            <p className="text-[var(--muted)]">
                                توظيف العلاقات مع المؤسسات الوطنية والدولية لخدمة المهندسين
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-2xl font-bold">
                                2
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">خطط قابلة للقياس</h3>
                            <p className="text-[var(--muted)]">
                                وضع مؤشرات أداء واضحة وجداول زمنية محددة لكل محور
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-2xl font-bold">
                                3
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">تقييم مستمر</h3>
                            <p className="text-[var(--muted)]">
                                متابعة دورية وشفافية كاملة في عرض النتائج
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white">
                <div className="container px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            شاركنا رؤيتك
                        </h2>
                        <p className="text-xl opacity-90 mb-8">
                            نرحب بأفكارك ومقترحاتك لتطوير البرنامج الانتخابي
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://chat.whatsapp.com/DttXcp7KHFrE27YDkUGPPi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-white text-[var(--primary)] hover:bg-[var(--accent)]"
                            >
                                انضم لمجموعة الحوار
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
