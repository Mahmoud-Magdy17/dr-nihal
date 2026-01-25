'use client';

import React, { RefObject } from 'react';
import { Loader2, Mic } from 'lucide-react';
import { cn } from './utils';
import { Message } from './useChatBot';

interface ChatBotMessagesProps {
    messages: Message[];
    isLoading: boolean;
    isRTL: boolean;
    emptyText: string;
    thinkingText: string;
    messagesEndRef: RefObject<HTMLDivElement>;
}

// Voice message component
const VoiceMessageBubble: React.FC<{ voiceUrl: string; isBot: boolean }> = ({ voiceUrl, isBot }) => (
    <div className="flex items-center gap-2">
        <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
            isBot ? "bg-gray-100" : "bg-white/20"
        )}>
            <Mic className={cn("h-4 w-4", isBot ? "text-[#1a5d3a]" : "text-white")} />
        </div>
        <audio
            controls
            src={voiceUrl}
            className="h-8 max-w-[180px]"
            style={{
                filter: isBot ? 'none' : 'invert(1) brightness(2)',
            }}
        />
    </div>
);

export const ChatBotMessages: React.FC<ChatBotMessagesProps> = React.memo(({
    messages,
    isLoading,
    // isRTL is included in props for future RTL-specific styling
    isRTL: _isRTL,
    emptyText,
    thinkingText,
    messagesEndRef,
}) => {
    return (
        <div className="space-y-4 flex flex-col justify-end min-h-full">
            {messages.length === 0 && !isLoading && (
                <div className="text-center text-gray-400 py-10">
                    <p>{emptyText}</p>
                </div>
            )}

            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={cn(
                        "max-w-[85%] p-3.5 rounded-2xl text-sm relative group animate-in slide-in-from-bottom-2 duration-300 shadow-sm",
                        msg.isBot
                            ? "bg-white text-gray-800 rounded-tl-none border border-gray-100 ml-0 mr-auto rtl:mr-0 rtl:ml-auto"
                            : "bg-gradient-to-br from-[#1a5d3a] to-[#2e7d32] text-white rounded-br-none ml-auto mr-0 rtl:ml-0 rtl:mr-auto"
                    )}
                >
                    {msg.type === 'voice' && msg.voiceUrl ? (
                        <VoiceMessageBubble voiceUrl={msg.voiceUrl} isBot={msg.isBot} />
                    ) : (
                        <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    )}
                    <span className={cn(
                        "text-[10px] absolute bottom-1 opacity-0 group-hover:opacity-100 transition-opacity",
                        msg.isBot ? "text-gray-400 right-2 rtl:left-2" : "text-white/70 left-2 rtl:right-2"
                    )}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            ))}

            {isLoading && (
                <div className="flex items-center gap-2 text-gray-400 text-xs p-2 animate-pulse">
                    <div className="h-8 w-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                        <Loader2 className="h-4 w-4 animate-spin text-[#1a5d3a]" />
                    </div>
                    <span>{thinkingText}</span>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
});

ChatBotMessages.displayName = 'ChatBotMessages';
