import { SectionTitle, PartnerCard } from '@/components/ui';
import { PARTNERS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'الشراكات والتعاون | م. نهال المغربي',
    description: 'الشراكات المؤسسية والتعاون مع الجهات الوطنية والدولية - م. نهال المغربي',
};

export default function PartnershipsPage() {
    return (
        <>
            {/* Page Header */}
            {/* Page Header */}
            <section className="pt-header-safe pb-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]">
                <div className="container">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">الشراكات والتعاون</h1>
                        <p className="text-xl opacity-90">ثقة المؤسسات الوطنية والدولية الكبرى</p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-12 bg-[var(--accent)]">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg text-[var(--foreground)]">
                            على مدار أكثر من 20 عامًا، بنينا شراكات استراتيجية مع أهم المؤسسات على المستوى الوطني والدولي. هذه الشراكات هي رصيد حقيقي نضعه في خدمة المهندسين.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        title="شركاؤنا"
                        subtitle="مؤسسات وطنية ودولية نفخر بالتعاون معها"
                        centered
                    />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {PARTNERS.map((partner, index) => (
                            <PartnerCard
                                key={partner.name}
                                {...partner}
                                delay={index * 0.05}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Benefits */}
            <section className="section bg-[var(--accent)]">
                <div className="container">
                    <SectionTitle
                        title="كيف تخدم هذه الشراكات المهندسين؟"
                        centered
                    />

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)] text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">تدريب معتمد</h3>
                            <p className="text-[var(--muted)]">
                                شهادات دولية معتمدة من كبرى الشركات العالمية
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)] text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">فرص توظيف</h3>
                            <p className="text-[var(--muted)]">
                                ربط المهندسين بفرص العمل في الشركات الشريكة
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)] text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">دعم الابتكار</h3>
                            <p className="text-[var(--muted)]">
                                احتضان المشاريع الناشئة والأفكار المبتكرة
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
