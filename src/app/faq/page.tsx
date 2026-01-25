import { SectionTitle, Accordion } from '@/components/ui';
import { FAQ_ITEMS, CONTACT } from '@/lib/constants';
import { MessageCircle, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'أسئلة شائعة | م. نهال المغربي',
    description: 'أسئلة وأجوبة حول حملة م. نهال المغربي والبرنامج الانتخابي',
};

export default function FAQPage() {
    return (
        <>
            {/* Page Header */}
            {/* Page Header */}
            <section className="pt-header-safe pb-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]">
                <div className="container">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">أسئلة شائعة</h1>
                        <p className="text-xl opacity-90">إجابات على الأسئلة الأكثر شيوعًا</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <SectionTitle
                            title="الأسئلة المتكررة"
                            subtitle="نجيب على أهم تساؤلاتكم حول الحملة والبرنامج الانتخابي"
                            centered
                        />

                        <Accordion items={FAQ_ITEMS} />
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="section bg-[var(--accent)]">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--primary)] text-white flex items-center justify-center">
                            <HelpCircle size={40} />
                        </div>
                        <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
                            لديك سؤال آخر؟
                        </h2>
                        <p className="text-[var(--muted)] mb-6">
                            لا تتردد في التواصل معنا مباشرة وسنرد عليك في أقرب وقت
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                <MessageCircle size={20} />
                                تواصل عبر واتساب
                            </a>
                            <a
                                href={CONTACT.whatsappGroup}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
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
