'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Facebook, Calendar, Images, ExternalLink } from 'lucide-react';
import { EventAlbum } from '@/lib/events';

interface EventModalProps {
    event: EventAlbum | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
    if (!event) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000]"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="fixed inset-4 md:inset-10 lg:inset-16 bg-white rounded-3xl z-[1001] overflow-hidden flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 left-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all"
                            aria-label="إغلاق"
                        >
                            <X size={20} className="text-gray-700" />
                        </button>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto">
                            {/* Cover Image */}
                            <div className="relative h-64 md:h-80 lg:h-96">
                                <img
                                    src={event.coverImage}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Badges */}
                                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                                    <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm text-[#3d4a7b] px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                        <Images size={16} />
                                        <span>{event.photosCount} صورة</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#3d4a7b]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                                        <Calendar size={14} />
                                        <span>{event.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-6 md:p-10">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#3d4a7b] mb-6">
                                    {event.title}
                                </h2>

                                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                                    {event.fullDescription}
                                </div>
                            </div>
                        </div>

                        {/* Footer with CTA */}
                        <div className="flex-shrink-0 p-6 border-t border-gray-100 bg-gray-50">
                            <a
                                href={event.facebookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#1877F2] to-[#0b5ed7] hover:from-[#166fe5] hover:to-[#0a53be] text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <Facebook size={24} />
                                <span>شاهد الألبوم كاملاً على فيسبوك</span>
                                <ExternalLink size={18} className="opacity-75" />
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
