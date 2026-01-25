'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    type: string;
}

interface EventCardProps {
    event: Event;
    delay?: number;
}

const typeColors: Record<string, string> = {
    meeting: 'bg-blue-100 text-blue-700',
    visit: 'bg-green-100 text-green-700',
    workshop: 'bg-purple-100 text-purple-700',
    default: 'bg-gray-100 text-gray-700',
};

const typeLabels: Record<string, string> = {
    meeting: 'لقاء',
    visit: 'زيارة',
    workshop: 'ورشة عمل',
    default: 'فعالية',
};

function formatDate(dateString: string): { day: string; month: string; year: string } {
    const date = new Date(dateString);
    const months = [
        'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
        'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];

    return {
        day: date.getDate().toString(),
        month: months[date.getMonth()],
        year: date.getFullYear().toString(),
    };
}

export default function EventCard({ event, delay = 0 }: EventCardProps) {
    const { day, month, year } = formatDate(event.date);
    const typeColor = typeColors[event.type] || typeColors.default;
    const typeLabel = typeLabels[event.type] || typeLabels.default;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="event-card"
        >
            {/* Date Box */}
            <div className="event-date">
                <span className="event-day">{day}</span>
                <span className="event-month">{month}</span>
                <span className="text-xs text-[var(--muted)]">{year}</span>
            </div>

            {/* Event Details */}
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColor}`}>
                        {typeLabel}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {event.title}
                </h3>

                <p className="text-[var(--muted)] text-sm mb-3">
                    {event.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
                    <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {event.location}
                    </span>
                </div>
            </div>

            {/* Register Button */}
            <div className="flex-shrink-0 self-center">
                <button className="btn btn-primary text-sm">
                    <Users size={16} />
                    سجل الآن
                </button>
            </div>
        </motion.div>
    );
}

// Events List Component
interface EventsListProps {
    events: Event[];
}

export function EventsList({ events }: EventsListProps) {
    return (
        <div className="space-y-6">
            {events.map((event, index) => (
                <EventCard key={event.id} event={event} delay={index * 0.1} />
            ))}
        </div>
    );
}
