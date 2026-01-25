import { useState, useRef, useCallback } from 'react';

export interface VoiceRecorderState {
    isRecording: boolean;
    isSupported: boolean;
    error: string | null;
}

export interface VoiceRecordingResult {
    blob: Blob;
    fileName: string;
    fileSize: number;
    duration: number;
}

export const useVoiceRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const startTimeRef = useRef<number>(0);

    const isSupported = typeof navigator !== 'undefined' &&
        navigator.mediaDevices &&
        typeof navigator.mediaDevices.getUserMedia === 'function';

    const startRecording = useCallback(async (): Promise<boolean> => {
        if (!isSupported) {
            setError('Voice recording is not supported in this browser');
            return false;
        }

        try {
            setError(null);
            chunksRef.current = [];

            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    sampleRate: 44100,
                }
            });

            // Try to use webm/opus, fallback to whatever is available
            const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
                ? 'audio/webm;codecs=opus'
                : MediaRecorder.isTypeSupported('audio/webm')
                    ? 'audio/webm'
                    : 'audio/mp4';

            mediaRecorderRef.current = new MediaRecorder(stream, { mimeType });

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data);
                }
            };

            mediaRecorderRef.current.start(100); // Collect data every 100ms
            startTimeRef.current = Date.now();
            setIsRecording(true);

            return true;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to start recording';
            setError(errorMessage);
            console.error('Recording error:', err);
            return false;
        }
    }, [isSupported]);

    const stopRecording = useCallback((): Promise<VoiceRecordingResult | null> => {
        return new Promise((resolve) => {
            if (!mediaRecorderRef.current || mediaRecorderRef.current.state === 'inactive') {
                setIsRecording(false);
                resolve(null);
                return;
            }

            mediaRecorderRef.current.onstop = () => {
                const duration = (Date.now() - startTimeRef.current) / 1000;
                const mimeType = mediaRecorderRef.current?.mimeType || 'audio/webm';
                const blob = new Blob(chunksRef.current, { type: mimeType });

                // Determine file extension based on mime type
                const extension = mimeType.includes('webm') ? 'webm' :
                    mimeType.includes('mp4') ? 'm4a' : 'webm';
                const fileName = `voice_${Date.now()}.${extension}`;

                // Stop all tracks
                mediaRecorderRef.current?.stream.getTracks().forEach(track => track.stop());

                setIsRecording(false);
                chunksRef.current = [];

                resolve({
                    blob,
                    fileName,
                    fileSize: blob.size,
                    duration,
                });
            };

            mediaRecorderRef.current.stop();
        });
    }, []);

    const cancelRecording = useCallback(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            mediaRecorderRef.current.stop();
        }
        chunksRef.current = [];
        setIsRecording(false);
        setError(null);
    }, []);

    return {
        isRecording,
        isSupported,
        error,
        startRecording,
        stopRecording,
        cancelRecording,
    };
};
