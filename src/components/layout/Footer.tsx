import Link from 'next/link';
import { Phone, Facebook, MessageCircle, Mail, MapPin, Heart } from 'lucide-react';
import { NAV_LINKS, CANDIDATE, CONTACT } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] text-white relative z-10">
            {/* Main Footer Content */}
            <div className="container py-16 px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div>
                                <h3 className="font-bold text-lg">{CANDIDATE.name}</h3>
                                <p className="text-xs opacity-80">مرشحة شعبة الكهرباء</p>
                            </div>
                        </div>
                        <p className="text-sm opacity-90 leading-relaxed mb-4">
                            {CANDIDATE.secondarySlogan}
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="تواصل عبر واتساب"
                            >
                                <Phone size={18} />
                            </a>
                            <a
                                href={CONTACT.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="زيارة صفحة فيسبوك الرسمية"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href={CONTACT.whatsappGroup}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="انضم لمجموعة الواتساب"
                            >
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-8 flex items-center gap-4">
                            <span className="w-8 h-0.5 bg-[var(--secondary)]"></span>
                            روابط سريعة
                        </h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.slice(0, 5).map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm opacity-90 hover:opacity-100 hover:text-[var(--secondary)] transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>



                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-8 flex items-center gap-4">
                            <span className="w-8 h-0.5 bg-[var(--secondary)]"></span>
                            تواصل معنا
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm opacity-90 hover:opacity-100 hover:text-[var(--secondary)] transition-colors"
                                >
                                    <Phone size={16} />
                                    <span dir="ltr">{CONTACT.whatsapp}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={CONTACT.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm opacity-90 hover:opacity-100 hover:text-[var(--secondary)] transition-colors"
                                >
                                    <Facebook size={16} />
                                    صفحة الحملة على فيسبوك
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className="flex items-center gap-3 text-sm opacity-90 hover:opacity-100 hover:text-[var(--secondary)] transition-colors"
                                >
                                    <Mail size={16} />
                                    <span dir="ltr">{CONTACT.email}</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm opacity-90">
                                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                                نقابة المهندسين الفرعية - سوهاج
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-[var(--secondary)] py-5">
                <div className="container px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="font-semibold text-[var(--primary-dark)] text-lg">
                            انضم لحملة الدعم وكن جزءًا من التغيير
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={CONTACT.whatsappGroup}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
                                aria-label="انضم لمجموعة الواتساب"
                            >
                                <MessageCircle size={20} />
                                انضم للمجموعة
                            </a>
                            <Link href="/contact" className="btn bg-white text-[var(--primary)] hover:bg-[var(--accent)]" aria-label="تواصل معنا">
                                تواصل معنا
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[var(--primary-dark)]/50 py-5">
                <div className="container px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm opacity-80">
                        <p>
                            © {currentYear} حملة م. نهال المغربي - نقابة المهندسين بسوهاج
                        </p>
                        <p className="flex items-center gap-1">
                            صنع بـ <Heart size={14} className="text-[var(--secondary)]" /> لمستقبل أفضل للمهندسين
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
