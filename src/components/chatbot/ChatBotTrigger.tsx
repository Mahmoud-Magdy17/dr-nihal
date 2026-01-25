'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { cn } from './utils';

interface ChatBotTriggerProps {
    isOpen: boolean;
    isRTL: boolean;
    showFloatingMessage: boolean;
    floatingMessageText: string;
    onOpen: () => void;
    onDismissFloating: () => void;
}

export const ChatBotTrigger: React.FC<ChatBotTriggerProps> = React.memo(({
    isOpen,
    isRTL,
    showFloatingMessage,
    floatingMessageText,
    onOpen,
    onDismissFloating,
}) => {
    return (
        <div className={cn("fixed bottom-6 z-50 flex items-center gap-4", isRTL ? "left-6" : "right-6")}>
            <AnimatePresence>
                {showFloatingMessage && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -20 : 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className={cn(
                            "bg-white shadow-lg rounded-2xl p-4 max-w-[200px] border border-[#c8a45c]/20 hidden md:block relative",
                            isRTL ? "order-last ml-2" : "mr-2"
                        )}
                    >
                        <div className={cn(
                            "absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-[#c8a45c]/20 rotate-45",
                            isRTL ? "-left-1.5 border-t-0 border-r-0 border-b border-l" : "-right-1.5"
                        )} />
                        <p className="text-sm text-gray-700 font-medium relative z-10">{floatingMessageText}</p>
                        <button onClick={onDismissFloating} className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-0.5 hover:bg-gray-200">
                            <X className="w-3 h-3 text-gray-500" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onOpen}
                className={cn(
                    "p-4 rounded-full shadow-2xl text-white bg-gradient-to-r from-[#1a5d3a] to-[#2e7d32] border-2 border-[#c8a45c]/50 backdrop-blur-sm relative group",
                    isOpen ? "hidden" : "flex"
                )}
            >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity rounded-full" />
                <MessageSquare className="h-8 w-8 relative z-10" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a45c] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c8a45c]" />
                </span>
            </motion.button>
        </div>
    );
});

ChatBotTrigger.displayName = 'ChatBotTrigger';
