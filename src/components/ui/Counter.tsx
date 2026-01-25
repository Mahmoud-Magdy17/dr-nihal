'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Rocket, Briefcase, Calendar } from 'lucide-react';

interface CounterProps {
    value: number;
    suffix?: string;
    label: string;
    icon: string;
    delay?: number;
}

const iconMap: Record<string, React.ElementType> = {
    users: Users,
    rocket: Rocket,
    briefcase: Briefcase,
    calendar: Calendar,
};

function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Counter({ value, suffix = '', label, icon, delay = 0 }: CounterProps) {
    const Icon = iconMap[icon] || Users;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white rounded-3xl p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all border border-gray-100 h-full flex flex-col items-center justify-center group"
        >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#e8f5e9] flex items-center justify-center text-[#1a5d3a] group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Icon size={32} />
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-[#1a5d3a] mb-2 font-numeric">
                <AnimatedCounter value={value} suffix={suffix} />
            </div>
            <p className="text-gray-500 text-base font-medium">{label}</p>
        </motion.div>
    );
}

export function StatsGrid({ stats }: { stats: CounterProps[] }) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
                <Counter
                    key={stat.label}
                    {...stat}
                    delay={index * 0.1}
                />
            ))}
        </div>
    );
}
