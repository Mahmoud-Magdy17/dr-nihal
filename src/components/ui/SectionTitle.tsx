'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    children?: ReactNode;
}

export default function SectionTitle({ title, subtitle, centered = false, children }: SectionTitleProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-14 ${centered ? 'text-center' : ''}`}
        >
            <h2 className={`section-title ${centered ? 'mx-auto after:right-1/2 after:translate-x-1/2' : ''}`}>
                {title}
            </h2>
            {subtitle && (
                <p className="text-[var(--muted)] text-lg mt-4 max-w-2xl">
                    {subtitle}
                </p>
            )}
            {children}
        </motion.div>
    );
}
