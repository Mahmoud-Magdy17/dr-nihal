import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'أحداث وفعاليات | م. نهال المغربي',
    description: 'أحداث وفعاليات سابقة تعكس المشاركة الدائمة والفعّالة لـ م. نهال المغربي على مر السنين',
};

export default function EventsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
