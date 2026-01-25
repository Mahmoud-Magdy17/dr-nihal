'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Phone, ArrowLeft, CalendarDays, MapPin } from 'lucide-react';
import { CANDIDATE, CONTACT, ELECTION } from '@/lib/constants';

export default function Hero() {
    return (
        <section className="min-h-screen bg-gradient-to-bl from-[#3d4a7b] via-[#4d5a8b] to-[#3d4a7b] relative overflow-hidden flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4a843] rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container relative z-10 pt-header-safe pb-32 px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

                    {/* Content Side - Right for RTL */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white order-2 lg:order-1 flex flex-col items-start"
                    >
                        {/* Syndicate Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                            <Image
                                src="/syndicate-logo-white.png"
                                alt="نقابة المهندسين المصرية"
                                width={160}
                                height={100}
                                className="object-contain drop-shadow-md opacity-90 hover:opacity-100 transition-opacity"
                                priority
                            />
                        </motion.div>

                        {/* Election Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-8 py-4 mb-4 border border-white/10"
                        >
                            <span className="w-2.5 h-2.5 bg-[#d4a843] rounded-full animate-pulse shadow-[0_0_10px_#d4a843]"></span>
                            <span className="text-base md:text-lg font-bold tracking-wide">انتخابات نقابة المهندسين 2026</span>
                        </motion.div>

                        {/* Election Date Card */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="bg-gradient-to-r from-[#d4a843] to-[#e4b853] backdrop-blur-md rounded-2xl px-6 py-4 mb-8 flex items-center gap-4 shadow-xl"
                        >
                            <CalendarDays className="w-10 h-10 text-white" />
                            <div>
                                <p className="text-white/90 font-medium text-sm">موعد الانتخابات</p>
                                <p className="text-white text-2xl font-extrabold">{ELECTION.date}</p>
                            </div>
                            <div className="mr-4 pr-4 border-r border-white/30">
                                <p className="text-white/90 font-medium text-sm">المقعد</p>
                                <p className="text-white text-lg font-bold">{ELECTION.seat}</p>
                            </div>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
                        >
                            م. نهال المغربي
                        </motion.h1>

                        {/* Position */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-10 max-w-2xl"
                        >
                            <p className="text-xl sm:text-2xl text-white/90 font-medium leading-relaxed">
                                مرشحة لمقعد شعبة الكهرباء – نقابة المهندسين بسوهاج
                            </p>
                        </motion.div>

                        {/* Main Slogan with accent bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm rounded-2xl p-10 md:p-12 mb-12 border-r-4 border-[#d4a843] max-w-3xl"
                        >
                            <p className="text-2xl sm:text-3xl font-bold leading-normal mb-2">
                                التغيير مش كلام…
                            </p>
                            <p className="text-2xl sm:text-3xl font-bold leading-normal text-[#d4a843]">
                                نية صادقة وخبرة حقيقية وعمل جاد
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                        >
                            <a
                                href={CONTACT.whatsappGroup}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#d4a843] hover:bg-[#e4b853] text-white text-lg font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                <MessageCircle size={24} />
                                انضم لحملة الدعم
                            </a>
                            <Link
                                href="/vision"
                                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#3d4a7b] text-lg font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                <FileText size={24} />
                                البرنامج الانتخابي
                            </Link>
                        </motion.div>

                        {/* Secondary Slogan - Less prominent */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-8 text-white/60 font-medium text-lg"
                        >
                            من أجل نقابة أقرب للمهندس ومستقبل أفضل
                        </motion.p>
                    </motion.div>

                    {/* Image Side - Left for RTL */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="order-1 lg:order-2 flex justify-center items-center relative"
                    >
                        <div className="relative z-10">
                            {/* Decorative Circles */}
                            <div className="absolute inset-0 bg-[#d4a843]/20 rounded-full blur-[60px] scale-110 animate-pulse"></div>

                            {/* Main Image Container */}
                            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full p-2 border border-white/20 bg-white/5 backdrop-blur-sm">
                                <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white/30 shadow-2xl relative">
                                    <Image
                                        src="/images/candidate/profile.jpg"
                                        alt="م. نهال المغربي"
                                        fill
                                        sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 480px"
                                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Stats Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: 30, y: 20 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute -left-6 top-[20%] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-5 hidden sm:block max-w-[180px]"
                            >
                                <p className="text-3xl font-extrabold text-[#3d4a7b] mb-1">+20</p>
                                <p className="text-base font-bold text-gray-800">سنة خبرة</p>
                                <p className="text-xs text-gray-500 mt-1">مسيرة مهنية حافلة</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30, y: -20 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                                className="absolute -right-6 bottom-[20%] bg-[#d4a843] text-white rounded-2xl shadow-[0_20px_40px_rgba(212,168,67,0.3)] p-5 hidden sm:block max-w-[200px]"
                            >
                                <p className="text-3xl font-extrabold mb-1">+3000</p>
                                <p className="text-base font-bold">شاب تم تدريبهم</p>
                                <p className="text-xs text-white/80 mt-1">بناء الكوادر والمستقبل</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
            >
                <span className="text-sm font-medium tracking-widest uppercase">اكتشف المزيد</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="p-2 border border-white/20 rounded-full"
                >
                    <ArrowLeft className="rotate-[-90deg]" size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
}
