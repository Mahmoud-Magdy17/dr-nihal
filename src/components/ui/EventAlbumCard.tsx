'use client';

import { motion } from 'framer-motion';
import { Calendar, Images, Facebook, ExternalLink } from 'lucide-react';
import { EventAlbum } from '@/lib/events';

interface EventAlbumCardProps extends EventAlbum {
    delay?: number;
    onClick?: () => void;
}

export default function EventAlbumCard({
    title,
    shortDescription,
    coverImage,
    facebookUrl,
    date,
    photosCount,
    delay = 0,
    onClick,
}: EventAlbumCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
        >
            {/* Cover Image - Clickable for details */}
            <div
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={onClick}
            >
                <img
                    src={coverImage}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Photos Count Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm text-[#3d4a7b] px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    <Images size={16} />
                    <span>{photosCount} صورة</span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#3d4a7b]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    <Calendar size={14} />
                    <span>{date}</span>
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#d4a843] transition-colors duration-300 line-clamp-2">
                        {title}
                    </h3>
                </div>

                {/* View Details Overlay - On image only */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-sm text-[#3d4a7b] px-5 py-2.5 rounded-xl font-bold shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                        عرض التفاصيل
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <p className="text-gray-600 leading-relaxed line-clamp-3 mb-5">
                    {shortDescription}
                </p>

                {/* Facebook Button */}
                <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#1877F2] to-[#0b5ed7] hover:from-[#166fe5] hover:to-[#0a53be] text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    <Facebook size={18} />
                    <span>افتح الألبوم على فيسبوك</span>
                    <ExternalLink size={14} className="opacity-75" />
                </a>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4a843]/0 via-[#d4a843]/10 to-[#3d4a7b]/0 rounded-3xl opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-500" />
        </motion.div>
    );
}
