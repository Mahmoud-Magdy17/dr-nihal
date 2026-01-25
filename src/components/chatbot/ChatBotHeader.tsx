import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { HieroglyfPattern } from '../../../shared/ui/Hieroglyphics';

interface ChatBotHeaderProps {
    title: string;
    statusText: string;
    onClose: () => void;
    onTitleClick: () => void;
}

export const ChatBotHeader: React.FC<ChatBotHeaderProps> = React.memo(({
    title,
    statusText,
    onClose,
    onTitleClick,
}) => {
    return (
        <div className="bg-gradient-to-r from-accent-900 to-accent-800 p-4 flex items-center justify-between text-white relative overflow-hidden shrink-0">
            <HieroglyfPattern className="opacity-10 absolute inset-0 text-white" />
            <div className="flex items-center gap-3 relative z-10">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-orange-300 flex items-center justify-center border-2 border-white/20 shadow-inner">
                    <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold text-lg text-primary leading-none cursor-pointer hover:text-orange-200 transition-colors" onClick={onTitleClick}>
                        {title}
                    </h3>
                    <p className="text-xs text-primary/70 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        {statusText}
                    </p>
                </div>
            </div>
            <button onClick={onClose} className="text-primary p-2 hover:bg-white/10 rounded-full transition-colors relative z-10">
                <X className="h-5 w-5" />
            </button>
        </div>
    );
});

ChatBotHeader.displayName = 'ChatBotHeader';
