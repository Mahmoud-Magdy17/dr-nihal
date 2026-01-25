import React from 'react';
import { Send, Mic, Square } from 'lucide-react';
import { Button } from '../../../shared/ui/Button';
import { cn } from '../../../shared/ui/Container';

interface ChatBotInputProps {
    inputValue: string;
    isLoading: boolean;
    showHomeView: boolean;
    placeholder: string;
    backToMenuText: string;
    poweredByText: string;
    onInputChange: (value: string) => void;
    onSend: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onBackToMenu: () => void;
    // Voice recording props
    isRecording?: boolean;
    isVoiceSupported?: boolean;
    onStartRecording?: () => void;
    onStopRecording?: () => void;
}

export const ChatBotInput: React.FC<ChatBotInputProps> = React.memo(({
    inputValue,
    isLoading,
    showHomeView,
    placeholder,
    backToMenuText,
    poweredByText,
    onInputChange,
    onSend,
    onKeyDown,
    onBackToMenu,
    isRecording = false,
    isVoiceSupported = true,
    onStartRecording,
    onStopRecording,
}) => {
    const handleVoiceClick = () => {
        if (isRecording) {
            onStopRecording?.();
        } else {
            onStartRecording?.();
        }
    };

    return (
        <div className="p-4 bg-white border-t border-gray-100 shrink-0 relative z-20">
            {/* Recording indicator */}
            {isRecording && (
                <div className="flex items-center justify-center gap-2 mb-3 py-2 px-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-sm text-red-600 font-medium">Recording...</span>
                </div>
            )}

            <div className="flex items-end gap-2 bg-gray-50 p-2 rounded-xl border border-gray-200 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all shadow-inner">
                <textarea
                    value={inputValue}
                    onChange={(e) => onInputChange(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder={isRecording ? 'Recording...' : placeholder}
                    className="flex-1 bg-transparent border-none focus:ring-0 resize-none max-h-32 min-h-[44px] py-3 px-2 text-sm text-gray-800 placeholder:text-gray-400 scrollbar-none"
                    rows={1}
                    disabled={isRecording}
                />

                {/* Voice recording button */}
                {isVoiceSupported && (
                    <Button
                        size="icon"
                        onClick={handleVoiceClick}
                        disabled={isLoading || (!!inputValue.trim() && !isRecording)}
                        className={cn(
                            "h-10 w-10 rounded-lg shrink-0 transition-all",
                            isRecording
                                ? "bg-red-500 hover:bg-red-600 shadow-md animate-pulse"
                                : isLoading || inputValue.trim()
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-200 hover:shadow-none"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                        )}
                        title={isRecording ? 'Stop recording' : 'Start voice recording'}
                    >
                        {isRecording ? (
                            <Square className="h-4 w-4 fill-current" />
                        ) : (
                            <Mic className="h-4 w-4" />
                        )}
                    </Button>
                )}

                {/* Send button */}
                <Button
                    size="icon"
                    onClick={onSend}
                    disabled={!inputValue.trim() || isLoading || isRecording}
                    className={cn(
                        "h-10 w-10 rounded-lg shrink-0 transition-all",
                        !inputValue.trim() || isRecording
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-200 hover:shadow-none"
                            : "bg-primary hover:bg-primary-dark shadow-md"
                    )}
                >
                    <Send className="h-4 w-4" />
                </Button>
            </div>

            {!showHomeView && (
                <button onClick={onBackToMenu} className="text-[10px] text-gray-400 hover:text-primary transition-colors mx-auto block mt-2">
                    {backToMenuText}
                </button>
            )}

            <div className="text-center mt-1">
                <p className="text-[10px] text-gray-400">
                    {poweredByText} <a href="https://mrailabs.com" target="_blank" rel="noopener noreferrer" className="font-bold text-accent-600 hover:underline">Mr. AI</a>
                </p>
            </div>
        </div>
    );
});

ChatBotInput.displayName = 'ChatBotInput';

