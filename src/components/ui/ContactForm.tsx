'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SUPPORT_ROLES } from '@/lib/constants';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        role: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null); // Clear error when user starts typing
    };

    const getRoleLabel = (roleValue: string) => {
        const role = SUPPORT_ROLES.find(r => r.value === roleValue);
        return role ? role.label : roleValue;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Check if EmailJS is configured
        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            console.error('EmailJS not configured properly');
            setError('عفواً، خدمة الإرسال غير مُفعّلة حالياً. برجاء التواصل عبر الواتساب.');
            setIsSubmitting(false);
            return;
        }

        const submittedAt = new Date().toLocaleString('ar-EG', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email || 'لم يُحدد',
                    from_phone: formData.phone,
                    support_type: getRoleLabel(formData.role),
                    time: submittedAt,
                    message: `
📬 رسالة جديدة من موقع حملة م. نهال المغربي

👤 الاسم: ${formData.name}
📱 الهاتف: ${formData.phone}
📧 البريد: ${formData.email || 'لم يُحدد'}
🎯 نوع الدعم: ${getRoleLabel(formData.role)}
🕒 التاريخ: ${submittedAt}

📝 الرسالة:
${formData.message}

---
تم الإرسال من موقع الحملة الانتخابية
                    `.trim(),
                },
                EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully!');
            setIsSuccess(true);
            setFormData({ name: '', phone: '', email: '', message: '', role: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (err) {
            console.error('Email send error:', err);
            setError('حدث خطأ أثناء الإرسال. برجاء المحاولة مرة أخرى أو التواصل عبر الواتساب.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        الاسم الكامل <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="أدخل اسمك الكامل"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="01xxxxxxxxx"
                        dir="ltr"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        البريد الإلكتروني
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="example@email.com"
                        dir="ltr"
                    />
                </div>

                {/* Role */}
                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        نوع الدعم <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="form-input"
                    >
                        <option value="">اختر نوع الدعم</option>
                        {SUPPORT_ROLES.map((role) => (
                            <option key={role.value} value={role.value}>
                                {role.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    رسالتك <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="اكتب رسالتك هنا..."
                />
            </div>

            {/* Error Message */}
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                >
                    <AlertCircle size={20} className="flex-shrink-0" />
                    <p>{error}</p>
                </motion.div>
            )}

            {/* Submit Button */}
            <div className="flex items-center gap-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary min-w-[180px]"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            جاري الإرسال...
                        </>
                    ) : (
                        <>
                            <Send size={20} />
                            إرسال الرسالة
                        </>
                    )}
                </button>

                {isSuccess && (
                    <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-green-600"
                    >
                        <CheckCircle size={20} />
                        تم إرسال رسالتك بنجاح!
                    </motion.p>
                )}
            </div>
        </motion.form>
    );
}
