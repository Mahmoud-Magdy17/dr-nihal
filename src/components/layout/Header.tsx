'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Facebook, ChevronDown } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/lib/constants';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();

    // Group links: Show first 5 directly, others in dropdown
    const VISIBLE_LINKS_COUNT = 5;
    const primaryLinks = NAV_LINKS.slice(0, VISIBLE_LINKS_COUNT);
    const secondaryLinks = NAV_LINKS.slice(VISIBLE_LINKS_COUNT);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <a href="#main-content" className="skip-link">
                تخطي إلى المحتوى الرئيسي
            </a>

            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-lg py-4'
                    : 'bg-white/95 backdrop-blur-md py-6'
                    }`}
            >
                <div className="container px-4 md:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="block">
                                <p className="font-bold text-lg text-[#1a5d3a] leading-tight">
                                    م. نهال المغربي
                                </p>
                                <p className="text-xs text-gray-500 font-medium mt-1">
                                    انتخابات نقابة المهندسين 2026
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-3 xl:gap-4">
                            {/* Primary Links */}
                            {primaryLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${pathname === link.href
                                        ? 'text-[#1a5d3a] font-bold'
                                        : 'text-gray-600 hover:text-[#1a5d3a] hover:bg-gray-50'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* Dropdown for More */}
                            <div className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
                                <button
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${isDropdownOpen || secondaryLinks.some(l => l.href === pathname)
                                        ? 'text-[#1a5d3a] bg-[#e8f5e9] font-bold'
                                        : 'text-gray-600 hover:text-[#1a5d3a] hover:bg-gray-50'
                                        }`}
                                >
                                    المزيد
                                    <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 w-56 pt-3"
                                            onMouseEnter={() => setIsDropdownOpen(true)}
                                            onMouseLeave={() => setIsDropdownOpen(false)}
                                        >
                                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-3">
                                                {secondaryLinks.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        className={`block px-6 py-4 text-base font-medium transition-colors ${pathname === link.href
                                                            ? 'bg-[#e8f5e9] text-[#1a5d3a] font-bold'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-[#1a5d3a]'
                                                            }`}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </nav>

                        {/* Quick Contact + Mobile Menu */}
                        <div className="flex items-center gap-3">
                            {/* Quick Social Links */}
                            <div className="hidden md:flex items-center gap-3">
                                <a
                                    href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all"
                                    aria-label="تواصل عبر واتساب"
                                >
                                    <Phone size={20} />
                                </a>
                                <a
                                    href={CONTACT.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-all"
                                    aria-label="صفحة فيسبوك"
                                >
                                    <Facebook size={20} />
                                </a>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="lg:hidden w-12 h-12 rounded-xl bg-gray-100 text-[#1a5d3a] flex items-center justify-center hover:bg-[#1a5d3a] hover:text-white transition-colors"
                                aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm"
                            onClick={closeMobileMenu}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[1000] shadow-2xl flex flex-col"
                        >
                            {/* Mobile Menu Header */}
                            <div className="p-6 bg-gradient-to-br from-[#1a5d3a] to-[#2e7d32] text-white relative flex-shrink-0">
                                <button
                                    onClick={closeMobileMenu}
                                    className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                    aria-label="إغلاق القائمة"
                                >
                                    <X size={20} />
                                </button>
                                <div className="mt-2 text-center">
                                    <div className="w-16 h-16 mx-auto rounded-full border-4 border-white/20 bg-white/10 flex items-center justify-center text-2xl font-bold mb-3 shadow-inner">
                                        ن.م
                                    </div>
                                    <h2 className="font-bold text-xl">م. نهال المغربي</h2>
                                    <p className="text-sm opacity-90 mt-1">
                                        مرشحة شعبة الكهرباء
                                    </p>
                                </div>
                            </div>

                            {/* Mobile Menu Links */}
                            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                                {NAV_LINKS.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={closeMobileMenu}
                                            className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all ${pathname === link.href
                                                ? 'bg-[#e8f5e9] text-[#1a5d3a] font-bold shadow-sm'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <span className="w-2 h-2 rounded-full bg-[#1a5d3a] ml-3 opacity-0 transition-opacity" style={{ opacity: pathname === link.href ? 1 : 0 }} />
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Mobile Menu Footer */}
                            <div className="p-6 bg-gray-50 border-t flex-shrink-0">
                                <p className="text-sm text-gray-500 mb-4 text-center font-medium">تواصل معنا</p>
                                <div className="flex gap-4">
                                    <a
                                        href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 bg-[#25D366] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-sm"
                                    >
                                        <Phone size={18} />
                                        واتساب
                                    </a>
                                    <a
                                        href={CONTACT.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 bg-[#1877F2] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#166fe5] transition-colors shadow-sm"
                                    >
                                        <Facebook size={18} />
                                        فيسبوك
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
