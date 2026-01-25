import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://nehal-maghrabi.com"),
  title: "م. نهال المغربي | مرشحة شعبة الكهرباء - نقابة المهندسين بسوهاج",
  description: "التغيير مش كلام… نية صادقة وخبرة حقيقية وعمل جاد. من أجل نقابة أقرب للمهندس ومستقبل أفضل. مرشحة لمقعد شعبة الكهرباء في انتخابات نقابة المهندسين الفرعية بسوهاج 2026",
  keywords: [
    "نهال المغربي",
    "نقابة المهندسين",
    "سوهاج",
    "انتخابات",
    "شعبة الكهرباء",
    "مهندسين",
  ],
  authors: [{ name: "م. نهال المغربي" }],
  openGraph: {
    title: "م. نهال المغربي | مرشحة شعبة الكهرباء - نقابة المهندسين بسوهاج",
    description: "التغيير مش كلام… نية صادقة وخبرة حقيقية وعمل جاد",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/candidate/hero.jpg",
        width: 1200,
        height: 630,
        alt: "م. نهال المغربي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "م. نهال المغربي | مرشحة شعبة الكهرباء",
    description: "التغيير مش كلام… نية صادقة وخبرة حقيقية وعمل جاد",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "نهال المغربي",
              jobTitle: "مرشحة شعبة الكهرباء - نقابة المهندسين بسوهاج",
              description: "مديرة وحدة الجاهزية المهنية وخدمات الطلاب والمديرة التنفيذية لبرامج أكاديمية هواوي لتكنولوجيا المعلومات والاتصالات بجامعة سوهاج",
              url: "https://nehal-maghrabi.com",
              sameAs: [
                "https://www.facebook.com/Nehalmaghrabi",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
