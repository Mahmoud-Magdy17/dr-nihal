import { SectionTitle, ContactForm } from '@/components/ui';
import { CONTACT } from '@/lib/constants';
import { Phone, Facebook, MessageCircle, Mail, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'تواصل معنا | م. نهال المغربي',
    description: 'تواصل مع حملة م. نهال المغربي - انضم لفريق الدعم أو شاركنا أفكارك ومقترحاتك',
};

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            {/* Page Header */}
            <section className="pt-header-safe pb-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]">
                <div className="container">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
                        <p className="text-xl opacity-90">نرحب بمشاركتك ودعمك</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <SectionTitle title="معلومات التواصل" />

                            <div className="space-y-6">
                                {/* WhatsApp */}
                                <a
                                    href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[var(--foreground)]">واتساب</p>
                                        <p className="text-[var(--muted)]" dir="ltr">{CONTACT.whatsapp}</p>
                                    </div>
                                </a>

                                {/* WhatsApp Group */}
                                <a
                                    href={CONTACT.whatsappGroup}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[var(--foreground)]">مجموعة الحملة</p>
                                        <p className="text-[var(--muted)]">انضم لمجموعة الواتساب</p>
                                    </div>
                                </a>

                                {/* Facebook */}
                                <a
                                    href={CONTACT.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Facebook size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[var(--foreground)]">فيسبوك</p>
                                        <p className="text-[var(--muted)]">صفحة الحملة الرسمية</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--primary)]">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[var(--foreground)]">البريد الإلكتروني</p>
                                        <p className="text-[var(--muted)]" dir="ltr">{CONTACT.email}</p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md">
                                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--primary)]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[var(--foreground)]">الموقع</p>
                                        <p className="text-[var(--muted)]">نقابة المهندسين الفرعية - سوهاج</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <SectionTitle
                                title="راسلنا"
                                subtitle="شاركنا أفكارك أو سجل اهتمامك بالمشاركة في الحملة"
                            />

                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="section bg-[var(--accent)]">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
                            انضم لفريق الحملة
                        </h2>
                        <p className="text-[var(--muted)] mb-6">
                            نبحث عن متطوعين ومنظمين وداعمين إعلاميين. كن جزءًا من التغيير!
                        </p>
                        <a
                            href={CONTACT.whatsappGroup}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <MessageCircle size={20} />
                            انضم للمجموعة الآن
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
