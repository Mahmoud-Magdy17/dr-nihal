import { SectionTitle } from '@/components/ui';
import { CONTACT } from '@/lib/constants';
import { Heart, Share2, ThumbsUp, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'أصوات الداعمين | م. نهال المغربي',
    description: 'شهادات ودعم من المهندسين والداعمين لحملة م. نهال المغربي',
};

// Placeholder testimonials
const testimonials = [
    {
        id: '1',
        name: 'م. أحمد محمود',
        role: 'مهندس كهرباء',
        message: 'م. نهال من أفضل المدربين اللي اتعاملت معاهم. خبرتها في التحول الرقمي والتطوير المهني هتفيد النقابة جدًا.',
        likes: 45,
    },
    {
        id: '2',
        name: 'م. سارة عبدالله',
        role: 'مهندسة اتصالات',
        message: 'تشرفت بحضور ورشة عمل مع م. نهال في أكاديمية هواوي. شخصية ملهمة وعندها رؤية حقيقية للتطوير.',
        likes: 38,
    },
    {
        id: '3',
        name: 'م. محمد حسن',
        role: 'مهندس مدني',
        message: 'النقابة محتاجة حد زي م. نهال يفهم احتياجات الشباب ويقدر يوصلهم بسوق العمل.',
        likes: 52,
    },
    {
        id: '4',
        name: 'م. فاطمة علي',
        role: 'مهندسة معمارية',
        message: 'دعم المرأة المهندسة وتمكينها مهم جدًا، وم. نهال من أكتر الناس اللي شفتها ملتزمة بده.',
        likes: 61,
    },
    {
        id: '5',
        name: 'م. عمرو سعيد',
        role: 'مهندس ميكانيكا',
        message: 'خبرة م. نهال في التدريب والتطوير المهني هي اللي النقابة محتاجاها دلوقتي.',
        likes: 34,
    },
    {
        id: '6',
        name: 'م. نور الدين',
        role: 'مهندس حاسبات',
        message: 'استفدت كتير من برامج أكاديمية هواوي اللي م. نهال مديراها. شغل حقيقي على الأرض.',
        likes: 47,
    },
];

export default function SupportersPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-header-safe pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]">
                <div className="container">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">أصوات الداعمين</h1>
                        <p className="text-xl opacity-90">شهادات من المهندسين والداعمين</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        title="ماذا يقول الداعمون"
                        subtitle="آراء وشهادات من المهندسين والمهندسات"
                        centered
                    />

                    {/* Masonry-style Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="break-inside-avoid bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white font-bold">
                                        {testimonial.name.split(' ')[1]?.charAt(0) || testimonial.name.charAt(2)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-[var(--foreground)]">{testimonial.name}</p>
                                        <p className="text-sm text-[var(--muted)]">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Message */}
                                <p className="text-[var(--foreground)] leading-relaxed mb-4">
                                    "{testimonial.message}"
                                </p>

                                {/* Engagement */}
                                <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                                    <span className="flex items-center gap-1 text-sm text-[var(--muted)]">
                                        <ThumbsUp size={16} className="text-[var(--primary)]" />
                                        {testimonial.likes}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm text-[var(--muted)]">
                                        <Heart size={16} className="text-red-500" />
                                    </span>
                                    <span className="flex items-center gap-1 text-sm text-[var(--muted)]">
                                        <Share2 size={16} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Share Your Support */}
            <section className="section bg-[var(--accent)]">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto">
                        <Heart className="w-16 h-16 mx-auto mb-6 text-red-500" />
                        <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
                            شارك دعمك
                        </h2>
                        <p className="text-[var(--muted)] mb-6">
                            انشر دعمك على صفحتك الشخصية وشاركنا رأيك في الحملة
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={CONTACT.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                شارك على فيسبوك
                            </a>
                            <a
                                href={CONTACT.whatsappGroup}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                <MessageCircle size={18} />
                                انضم للمجموعة
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
