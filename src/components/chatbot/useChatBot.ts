import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useVoiceRecorder, VoiceRecordingResult } from './useVoiceRecorder';

export interface Message {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
    type: 'text' | 'voice';
    voiceUrl?: string;
}

export interface MenuOption {
    id: string;
    label: string;
    action: string;
}
/// this is edit
const WEBHOOK_URL = 'https://n8n.growhubeg.com/webhook/innovision-chatbot';

// Generate unique IDs
const generateId = (prefix: string) =>
    `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

export const useChatBot = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showHomeView, setShowHomeView] = useState(true);
    const [showFloatingMessage, setShowFloatingMessage] = useState(false);

    // Session and Chat IDs - persistent for the session
    const [sessionId] = useState(() => generateId('session'));
    const [chatId] = useState(() => generateId('chat'));

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const isRTL = i18n.language === 'ar';

    // Voice recorder hook
    const voiceRecorder = useVoiceRecorder();

    useEffect(() => {
        const timer = setTimeout(() => setShowFloatingMessage(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen, showHomeView]);

    const getMenuOptions = useCallback((): MenuOption[] => {
        const isArabic = i18n.language === 'ar';
        return [
            { id: "what-is-innovision", label: isArabic ? "ما هي فكرة مؤتمر InnoVision Sohag؟" : "What is InnoVision Sohag?", action: "what-is-innovision" },
            { id: "when-event", label: isArabic ? "متى يقام المؤتمر والمعرض؟" : "When does the conference take place?", action: "when-event" },
            { id: "where-event", label: isArabic ? "أين يقام الحدث؟" : "Where is the event held?", action: "where-event" },
            { id: "competition-tracks", label: isArabic ? "ما هي مجالات المسابقة؟" : "What are the competition tracks?", action: "competition-tracks" },
            { id: "how-register", label: isArabic ? "كيف يمكنني التسجيل؟" : "How can I register?", action: "how-register" },
            { id: "event-partners", label: isArabic ? "من هم شركاء المؤتمر؟" : "Who are the event partners?", action: "event-partners" },
        ];
    }, [i18n.language]);

    // Handle bot response
    const handleBotResponse = useCallback(async (response: Response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        let botText = '';
        if (typeof data === 'string') botText = data;
        else if (typeof data === 'object') {
            botText = data.output || data.text || data.response || data.message || JSON.stringify(data);
            if (botText.startsWith('{') && botText.endsWith('}')) {
                try {
                    const parsed = JSON.parse(botText);
                    botText = parsed.output || parsed.text || parsed.response || parsed.message || botText;
                } catch { }
            }
        }

        setMessages(prev => [...prev, {
            id: generateId('msg'),
            text: botText || t('chatbot.defaultResponse', 'I understood that, but have no specific reply.'),
            isBot: true,
            timestamp: new Date(),
            type: 'text',
        }]);
    }, [t]);

    // Send text message
    const handleSendMessage = useCallback(async (text: string) => {
        if (!text.trim() || isLoading) return;
        if (showHomeView) setShowHomeView(false);

        const timestamp = new Date();
        const userMsg: Message = {
            id: generateId('msg'),
            text: text.trim(),
            isBot: false,
            timestamp,
            type: 'text',
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMsg.text,
                    timestamp: timestamp.toISOString(),
                    session_id: sessionId,
                    chat_id: chatId,
                    type: 'text',
                    language: i18n.language,
                }),
            });

            await handleBotResponse(response);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                id: generateId('msg'),
                text: t('chatbot.error', 'Sorry, I am having trouble connecting to the spirits. Please try again.'),
                isBot: true,
                timestamp: new Date(),
                type: 'text',
            }]);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, showHomeView, sessionId, chatId, i18n.language, t, handleBotResponse]);

    // Send voice message
    const handleSendVoice = useCallback(async (voiceData: VoiceRecordingResult) => {
        if (isLoading) return;
        if (showHomeView) setShowHomeView(false);

        const timestamp = new Date();
        const voiceUrl = URL.createObjectURL(voiceData.blob);

        const userMsg: Message = {
            id: generateId('msg'),
            text: t('chatbot.voiceMessage', 'Voice message'),
            isBot: false,
            timestamp,
            type: 'voice',
            voiceUrl,
        };

        setMessages(prev => [...prev, userMsg]);
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append('file', voiceData.blob, voiceData.fileName);
            formData.append('message', 'Voice message');
            formData.append('timestamp', timestamp.toISOString());
            formData.append('session_id', sessionId);
            formData.append('chat_id', chatId);
            formData.append('type', 'voice');
            formData.append('file_name', voiceData.fileName);
            formData.append('file_size', voiceData.fileSize.toString());
            formData.append('language', i18n.language);

            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                body: formData,
            });

            await handleBotResponse(response);
        } catch (error) {
            console.error('Voice send error:', error);
            setMessages(prev => [...prev, {
                id: generateId('msg'),
                text: t('chatbot.error', 'Sorry, I am having trouble connecting to the spirits. Please try again.'),
                isBot: true,
                timestamp: new Date(),
                type: 'text',
            }]);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, showHomeView, sessionId, chatId, i18n.language, t, handleBotResponse]);

    // Start voice recording
    const startVoiceRecording = useCallback(async () => {
        return await voiceRecorder.startRecording();
    }, [voiceRecorder]);

    // Stop voice recording and send
    const stopVoiceRecording = useCallback(async () => {
        const result = await voiceRecorder.stopRecording();
        if (result) {
            await handleSendVoice(result);
        }
    }, [voiceRecorder, handleSendVoice]);

    // Cancel voice recording
    const cancelVoiceRecording = useCallback(() => {
        voiceRecorder.cancelRecording();
    }, [voiceRecorder]);

    const resetChat = useCallback(() => {
        setMessages([]);
        setShowHomeView(true);
    }, []);

    return {
        isOpen, setIsOpen,
        messages, inputValue, setInputValue,
        isLoading, showHomeView, setShowHomeView,
        showFloatingMessage, setShowFloatingMessage,
        messagesEndRef, isRTL,
        menuOptions: getMenuOptions(),
        handleSendMessage, resetChat, t,
        // Voice recording
        isRecording: voiceRecorder.isRecording,
        isVoiceSupported: voiceRecorder.isSupported,
        voiceError: voiceRecorder.error,
        startVoiceRecording,
        stopVoiceRecording,
        cancelVoiceRecording,
        // IDs for reference
        sessionId,
        chatId,
    };
};
