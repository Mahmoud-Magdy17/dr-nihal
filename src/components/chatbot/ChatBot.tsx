'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatBot } from './useChatBot';
import { ChatBotTrigger } from './ChatBotTrigger';
import { ChatBotHeader } from './ChatBotHeader';
import { ChatBotMessages } from './ChatBotMessages';
import { ChatBotMenu } from './ChatBotMenu';
import { ChatBotInput } from './ChatBotInput';
import { cn } from './utils';

export const ChatBot: React.FC = () => {
    const {
        isOpen, setIsOpen,
        messages, inputValue, setInputValue,
        isLoading, showHomeView, setShowHomeView,
        showFloatingMessage, setShowFloatingMessage,
        messagesEndRef, isRTL,
        menuOptions,
        handleSendMessage, resetChat, t,
        // Voice
        isRecording, isVoiceSupported, startVoiceRecording, stopVoiceRecording,
    } = useChatBot();

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (showFloatingMessage) setShowFloatingMessage(false);
    };

    const handleDismissFloating = () => {
        setShowFloatingMessage(false);
    };

    const handleSelectOption = (label: string) => {
        handleSendMessage(label);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(inputValue);
        }
    };

    return (
        <>
            <ChatBotTrigger
                isOpen={isOpen}
                isRTL={isRTL}
                showFloatingMessage={showFloatingMessage}
                floatingMessageText={t('chatbot.floatingMessage', 'مرحباً! هل لديك استفسار؟')}
                onOpen={toggleChat}
                onDismissFloating={handleDismissFloating}
            />

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "fixed bottom-24 z-[100] w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100",
                            isRTL ? "left-6" : "right-6"
                        )}
                    >
                        <ChatBotHeader
                            title="المساعد الذكي - م. نهال المغربي"
                            statusText="متصل الآن"
                            onClose={() => setIsOpen(false)}
                            onTitleClick={resetChat}
                        />

                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 scrollbar-thin scrollbar-thumb-gray-200">
                            {showHomeView ? (
                                <ChatBotMenu
                                    menuOptions={menuOptions}
                                    isRTL={isRTL}
                                    welcomeText="أهلاً بك في حملة م. نهال المغربي"
                                    selectTopicText="كيف يمكنني مساعدتك اليوم؟"
                                    onSelectOption={handleSelectOption}
                                />
                            ) : (
                                <ChatBotMessages
                                    messages={messages}
                                    isLoading={isLoading}
                                    isRTL={isRTL}
                                    emptyText="لا توجد رسائل بعد"
                                    thinkingText="جاري الكتابة..."
                                    messagesEndRef={messagesEndRef}
                                />
                            )}
                        </div>

                        <ChatBotInput
                            inputValue={inputValue}
                            isLoading={isLoading}
                            showHomeView={showHomeView}
                            placeholder="اكتب رسالتك هنا..."
                            backToMenuText="العودة للقائمة الرئيسية"
                            poweredByText="مدعوم بواسطة"
                            onInputChange={setInputValue}
                            onSend={() => handleSendMessage(inputValue)}
                            onKeyDown={handleKeyDown}
                            onBackToMenu={() => setShowHomeView(true)}
                            isRecording={isRecording}
                            isVoiceSupported={isVoiceSupported}
                            onStartRecording={startVoiceRecording}
                            onStopRecording={stopVoiceRecording}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
