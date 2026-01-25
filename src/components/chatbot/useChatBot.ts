'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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

const WEBHOOK_URL = 'https://n8n.growhubeg.com/webhook/Nehal-website-chatbot';

// Generate unique IDs
const generateId = (prefix: string) =>
    `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

export const useChatBot = () => {
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
    const isRTL = true; // Always Arabic for this site

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
        return [
            { id: "who-is", label: "من هي م. نهال المغربي؟", action: "who-is" },
            { id: "program", label: "ما هو البرنامج الانتخابي؟", action: "program" },
            { id: "achievements", label: "أهم الإنجازات السابقة", action: "achievements" },
            { id: "contact", label: "كيف يمكنني التواصل؟", action: "contact" },
            { id: "join", label: "كيف أنضم للحملة؟", action: "join" },
        ];
    }, []);

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
            text: botText || 'عذراً، لم أتمكن من فهم ذلك. يرجى المحاولة مرة أخرى.',
            isBot: true,
            timestamp: new Date(),
            type: 'text',
        }]);
    }, []);

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
                    language: 'ar',
                }),
            });

            await handleBotResponse(response);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                id: generateId('msg'),
                text: 'عذراً، هناك مشكلة في الاتصال. يرجى المحاولة لاحقاً.',
                isBot: true,
                timestamp: new Date(),
                type: 'text',
            }]);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, showHomeView, sessionId, chatId, handleBotResponse]);

    // Send voice message
    const handleSendVoice = useCallback(async (voiceData: VoiceRecordingResult) => {
        if (isLoading) return;
        if (showHomeView) setShowHomeView(false);

        const timestamp = new Date();
        const voiceUrl = URL.createObjectURL(voiceData.blob);

        const userMsg: Message = {
            id: generateId('msg'),
            text: 'رسالة صوتية',
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
            formData.append('language', 'ar');

            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                body: formData,
            });

            await handleBotResponse(response);
        } catch (error) {
            console.error('Voice send error:', error);
            setMessages(prev => [...prev, {
                id: generateId('msg'),
                text: 'عذراً، هناك مشكلة في الاتصال. يرجى المحاولة لاحقاً.',
                isBot: true,
                timestamp: new Date(),
                type: 'text',
            }]);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, showHomeView, sessionId, chatId, handleBotResponse]);

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

    // Placeholder t function to match component usage if I don't update all components perfectly yet
    const t = (key: string, defaultValue: string) => defaultValue;

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
