'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative">
            {items.map((item, index) => (
                <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="timeline-item"
                >
                    <div className="mb-2">
                        <span className="inline-block px-4 py-1.5 bg-[var(--secondary)] text-white text-sm font-bold rounded-full">
                            {item.year}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--primary)] mb-2">{item.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed">{item.description}</p>
                </motion.div>
            ))}
        </div>
    );
}
