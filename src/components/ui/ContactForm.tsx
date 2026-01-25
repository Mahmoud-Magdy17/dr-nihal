'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { SUPPORT_ROLES } from '@/lib/constants';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', message: '', role: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
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
