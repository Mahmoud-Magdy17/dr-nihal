import { SectionTitle, StatsGrid, AchievementCard } from '@/components/ui';
import { ACHIEVEMENTS, KEY_ACHIEVEMENTS } from '@/lib/constants';
import { CheckCircle, TrendingUp, Users, Lightbulb, Building } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'الإنجازات والأثر المجتمعي | م. نهال المغربي',
    description: 'إنجازات وأثر م. نهال المغربي في التدريب والتطوير والمبادرات الوطنية',
};

const impactStories = [
    {
        title: 'نجاح الشركات الناشئة',
        description: 'دعم وإرشاد عشرات الشركات الناشئة للوصول للسوق والحصول على تمويل',
        icon: Lightbulb,
    },
    {
        title: 'تمكين الشباب من التوظيف',
        description: 'مساعدة آلاف الشباب على اكتساب المهارات المطلوبة في سوق العمل',
        icon: Users,
    },
    {
        title: 'شراكات جامعية-صناعية',
        description: 'بناء جسور بين الجامعات وقطاع الصناعة لتوظيف المخرجات',
        icon: Building,
    },
    {
        title: 'مبادرات وطنية',
        description: 'المشاركة في تصميم وتنفيذ أهم المبادرات الوطنية للتحول الرقمي',
        icon: TrendingUp,
    },
];

export default function AchievementsPage() {
    return (
        <>
            {/* Page Header */}
            {/* Page Header */}
            <section className="pt-header-safe pb-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]">
                <div className="container">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">الإنجازات والأثر المجتمعي</h1>
                        <p className="text-xl opacity-90">نتائج حقيقية وملموسة على مدار 20 عامًا</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section bg-[var(--accent)]">
                <div className="container">
                    <SectionTitle
                        title="أرقام الإنجاز"
                        subtitle="إحصائيات حقيقية تعكس حجم التأثير"
                        centered
                    />
                    <StatsGrid stats={ACHIEVEMENTS} />
                </div>
            </section>

            {/* Key Achievements */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        title="الإنجازات الرئيسية"
                        subtitle="محطات بارزة في المسيرة المهنية"
                    />

                    <div className="grid lg:grid-cols-2 gap-6">
                        {KEY_ACHIEVEMENTS.map((achievement, index) => (
                            <AchievementCard
                                key={index}
                                achievement={achievement}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stories */}
            <section className="section bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white">
                <div className="container">
                    <SectionTitle
                        title="قصص الأثر"
                        subtitle="كيف أحدثنا فرقًا حقيقيًا"
                        centered
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                        {impactStories.map((story, index) => {
                            const Icon = story.icon;
                            return (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">{story.title}</h3>
                                            <p className="opacity-90">{story.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Recognition */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        title="التقدير والاعتراف"
                        subtitle="شهادات وجوائز وثقت المسيرة"
                        centered
                    />

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="card text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-light)] flex items-center justify-center">
                                <span className="text-3xl">🏆</span>
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">Top 10</h3>
                            <p className="text-[var(--muted)]">جائزة التميز الحكومي على مستوى الجمهورية 2024</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center">
                                <span className="text-3xl">🥇</span>
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">المركز الأول</h3>
                            <p className="text-[var(--muted)]">جائزة التميز المؤسسي - جامعة سوهاج 2021</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-light)] flex items-center justify-center">
                                <span className="text-3xl">📋</span>
                            </div>
                            <h3 className="font-bold text-lg text-[var(--primary)] mb-2">عضوية</h3>
                            <p className="text-[var(--muted)]">لجنة المناهج الوطنية - المجلس الأعلى للجامعات 2022</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
