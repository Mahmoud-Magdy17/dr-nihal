'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
    GraduationCap,
    Briefcase,
    MessageCircle,
    Heart,
    Map,
    Settings,
    Check
} from 'lucide-react';

interface CardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function Card({ children, className = '', delay = 0 }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 ${className}`}
        >
            {children}
        </motion.div>
    );
}

// Program Card for Electoral Program
interface ProgramCardProps {
    id: string;
    icon: string;
    title: string;
    items: string[];
    delay?: number;
}

const programIconMap: Record<string, React.ElementType> = {
    'graduation-cap': GraduationCap,
    'briefcase': Briefcase,
    'message-circle': MessageCircle,
    'heart': Heart,
    'map': Map,
    'settings': Settings,
};

export function ProgramCard({ icon, title, items, delay = 0 }: ProgramCardProps) {
    const Icon = programIconMap[icon] || GraduationCap;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group h-full flex flex-col"
        >
            <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1a5d3a]/10 text-[#1a5d3a] flex items-center justify-center group-hover:bg-[#1a5d3a] group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5d3a] leading-tight flex-1">{title}</h3>
            </div>
            <ul className="space-y-5 flex-1">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                        <Check size={18} className="text-[#c8a45c] flex-shrink-0 mt-1" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

// Partner Card
interface PartnerCardProps {
    name: string;
    logo: string;
    delay?: number;
}

export function PartnerCard({ name, logo, delay = 0 }: PartnerCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
            className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-gray-100 group h-full flex flex-col items-center justify-center min-h-[180px]"
        >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#f8faf9] text-[#1a5d3a] flex items-center justify-center font-bold text-2xl group-hover:scale-110 group-hover:bg-[#1a5d3a] group-hover:text-white transition-all duration-300 shadow-sm">
                {name.charAt(0)}
            </div>
            <p className="font-bold text-base text-gray-800 group-hover:text-[#1a5d3a] transition-colors">{name}</p>
        </motion.div>
    );
}

// Achievement Card
interface AchievementCardProps {
    achievement: string;
    index: number;
}

export function AchievementCard({ achievement, index }: AchievementCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-5 p-6 bg-[#f8faf9] hover:bg-white rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-md transition-all duration-300"
        >
            <div className="w-10 h-10 bg-[#1a5d3a] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-sm mt-1">
                {index + 1}
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{achievement}</p>
        </motion.div>
    );
}
