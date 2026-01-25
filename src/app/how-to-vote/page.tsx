'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Calendar, MapPin, Vote, MessageCircle, ArrowLeft, Users, Clock } from 'lucide-react';
import { ELECTION, CONTACT } from '@/lib/constants';

const steps = [
    {
        number: 1,
        icon: Users,
        title: 'تأكد إنك مهندس مسجل',
        description: 'لازم تكون مهندس مسجل في نقابة المهندسين الفرعية بسوهاج. تأكد من تحديث بياناتك قبل موعد الانتخابات.',
        color: 'from-[#1a5d3a] to-[#2e7d32]',
    },
    {
        number: 2,
        icon: Calendar,
        title: 'روح النقابة يوم الانتخابات',
        description: `الانتخابات يوم ${ELECTION.date} في مقر نقابة المهندسين الفرعية بسوهاج. احرص على الحضور من بدري!`,
        color: 'from-[#c8a45c] to-[#d4b87a]',
    },
    {
        number: 3,
        icon: Vote,
        title: 'اختار م. نهال المغربي',
        description: `في ورقة الانتخاب، اختار م. نهال المغربي في ${ELECTION.seat} - لجنة فرعية. صوتك أمانة!`,
        color: 'from-[#1a5d3a] to-[#2e7d32]',
    },
];

export default function HowToVotePage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-header-safe pb-20 bg-gradient-to-br from-[#1a5d3a] to-[#2e7d32] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[80px] transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c8a45c] rounded-full blur-[80px] transform -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">إزاي أنتخب؟</h1>
                        <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                            3 خطوات بسيطة عشان تشارك في بناء مستقبل نقابتنا
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Election Info Banner */}
            <section className="py-8 bg-[#c8a45c]">
                <div className="container">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-8 h-8" />
                            <div>
                                <p className="text-sm opacity-80">تاريخ الانتخابات</p>
                                <p className="text-xl font-bold">{ELECTION.date}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-8 h-8" />
                            <div>
                                <p className="text-sm opacity-80">المكان</p>
                                <p className="text-xl font-bold">{ELECTION.branch}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Vote className="w-8 h-8" />
                            <div>
                                <p className="text-sm opacity-80">المقعد</p>
                                <p className="text-xl font-bold">{ELECTION.seat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-[#c8a45c] font-bold text-sm tracking-wider uppercase mb-2 block">خطوات بسيطة</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1a5d3a] mb-4">الخطوات الثلاثة</h2>
                            <p className="text-gray-600 text-xl">اتبع الخطوات دي عشان تشارك في الانتخابات</p>
                        </motion.div>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow"
                                >
                                    <div className="flex flex-col md:flex-row">
                                        {/* Step Number */}
                                        <div className={`bg-gradient-to-br ${step.color} p-8 md:p-12 flex items-center justify-center md:w-48`}>
                                            <div className="text-center">
                                                <span className="text-6xl md:text-7xl font-extrabold text-white/30">{step.number}</span>
                                            </div>
                                        </div>

                                        {/* Step Content */}
                                        <div className="p-8 md:p-10 flex-1">
                                            <div className="flex items-start gap-4">
                                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                                                    <step.icon className="w-7 h-7 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-[#1a5d3a] mb-3">{step.title}</h3>
                                                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Can Vote Section */}
            <section className="py-20 bg-[#f8faf9]">
                <div className="container px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1a5d3a] text-white flex items-center justify-center">
                                <Users size={40} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5d3a] mb-6">مين يقدر ينتخب؟</h2>
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    {ELECTION.whoCanVote}
                                </p>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-gray-500">
                                        لو مش متأكد من بياناتك، تواصل مع النقابة قبل موعد الانتخابات
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#1a5d3a] to-[#2e7d32] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 p-32 bg-[#c8a45c]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="container relative z-10 px-4 md:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto text-white"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">صوتك أمانة!</h2>
                        <p className="text-xl md:text-2xl opacity-90 mb-10 leading-relaxed">
                            شاركنا في بناء مستقبل أفضل لنقابة المهندسين بسوهاج.<br />
                            انضم لمجموعة الدعم على الواتساب لمتابعة آخر الأخبار.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <a
                                href={CONTACT.whatsappGroup}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#c8a45c] hover:bg-[#d4b87a] text-white text-xl font-bold py-5 px-12 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                <MessageCircle size={26} />
                                انضم لمجموعة الواتساب
                            </a>
                            <Link
                                href="/vision"
                                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#1a5d3a] text-xl font-bold py-5 px-10 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                اطلع على البرنامج الانتخابي
                                <ArrowLeft size={22} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
