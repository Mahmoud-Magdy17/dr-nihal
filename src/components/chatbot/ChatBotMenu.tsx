'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, ChevronRight } from 'lucide-react';
import { cn } from './utils';
import { MenuOption } from './useChatBot';

interface ChatBotMenuProps {
    menuOptions: MenuOption[];
    isRTL: boolean;
    welcomeText: string;
    selectTopicText: string;
    onSelectOption: (label: string) => void;
}

export const ChatBotMenu: React.FC<ChatBotMenuProps> = React.memo(({
    menuOptions,
    isRTL,
    welcomeText,
    selectTopicText,
    onSelectOption,
}) => {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4 py-4">
            <div className="text-center mb-6">
                <div className="inline-flex p-3 rounded-full bg-[#3d4a7b]/10 mb-3 border border-[#3d4a7b]/20">
                    <LayoutGrid className="h-6 w-6 text-[#3d4a7b]" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">{welcomeText}</h4>
                <p className="text-sm text-gray-500">{selectTopicText}</p>
            </div>

            <div className="grid gap-2">
                {menuOptions.map((option, idx) => (
                    <motion.button
                        key={option.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => onSelectOption(option.label)}
                        className="w-full text-start p-4 bg-white hover:bg-[#e8f5e9] border border-gray-100 hover:border-[#d4a843] rounded-xl shadow-sm hover:shadow-md transition-all group flex items-center justify-between"
                    >
                        <span className="font-medium text-gray-700 group-hover:text-[#3d4a7b] transition-colors">{option.label}</span>
                        <ChevronRight className={cn(
                            "h-4 w-4 text-gray-300 group-hover:text-[#3d4a7b] transition-transform",
                            isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                        )} />
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
});

ChatBotMenu.displayName = 'ChatBotMenu';
