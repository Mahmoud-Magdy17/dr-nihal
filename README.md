# Campaign Website - Eng. Nehal Maghrabi

موقع الحملة الانتخابية لـ م. نهال المغربي - مرشحة مقعد شعبة الكهرباء بنقابة المهندسين بسوهاج 2026

## 🎯 Overview

A production-ready Arabic RTL campaign website built with Next.js 14, featuring modern UI/UX, smooth animations, and comprehensive SEO optimization.

### Campaign Slogan
> **"التغيير مش كلام… نية صادقة وخبرة حقيقية وعمل جاد"**

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
cd dr-nihal

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
dr-nihal/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with RTL & SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── biography/          # السيرة الذاتية
│   │   ├── vision/             # البرنامج الانتخابي
│   │   ├── partnerships/       # الشراكات
│   │   ├── achievements/       # الإنجازات
│   │   ├── contact/            # تواصل معنا
│   │   ├── events/             # الفعاليات
│   │   ├── faq/                # أسئلة شائعة
│   │   ├── gallery/            # معرض الصور
│   │   └── supporters/         # أصوات الداعمين
│   │
│   ├── components/
│   │   ├── layout/             # Header, Footer, Container
│   │   ├── ui/                 # Reusable UI components
│   │   └── sections/           # Page-specific sections
│   │
│   └── lib/
│       └── constants.ts        # All content & configuration
│
├── public/
│   └── images/
│       ├── candidate/          # Candidate photos
│       ├── partners/           # Partner logos
│       └── gallery/            # Media gallery
│
└── tailwind.config.ts          # Tailwind configuration
```

---

## 🎨 Design System

### Brand Colors

| Color | Value | Usage |
|-------|-------|-------|
| Primary | `#1a5d3a` | Main brand color |
| Primary Light | `#2e7d32` | Hover states |
| Secondary | `#c8a45c` | Accents, CTAs |
| Accent | `#e8f5e9` | Backgrounds |

### Typography

- **Arabic**: Cairo (Google Fonts)
- **Direction**: RTL (Right-to-Left)

---

## 📝 Content Updates

### Adding Events

Edit `src/lib/constants.ts`:

```typescript
export const EVENTS = [
  {
    id: '1',
    title: 'عنوان الفعالية',
    date: '2026-02-01',
    time: '6:00 PM',
    location: 'المكان',
    description: 'وصف الفعالية',
    type: 'meeting', // meeting | visit | workshop
  },
  // Add more events...
];
```

### Adding FAQ Items

Edit `src/lib/constants.ts`:

```typescript
export const FAQ_ITEMS = [
  {
    question: 'السؤال هنا؟',
    answer: 'الإجابة هنا...',
  },
  // Add more FAQs...
];
```

### Adding Gallery Images

1. Add images to `public/images/gallery/`
2. Update `src/lib/constants.ts`:

```typescript
export const GALLERY_IMAGES = [
  { 
    id: '1', 
    src: '/images/gallery/image-name.jpg', 
    category: 'training', 
    alt: 'وصف الصورة' 
  },
  // Add more images...
];
```

### Updating Partners

Edit `src/lib/constants.ts`:

```typescript
export const PARTNERS = [
  { 
    name: 'اسم الشريك', 
    nameEn: 'Partner Name', 
    logo: '/images/partners/logo.png' 
  },
  // Add more partners...
];
```

---

## 🔗 Social Links

Update contact information in `src/lib/constants.ts`:

```typescript
export const CONTACT = {
  whatsapp: '+201094727909',
  whatsappGroup: 'https://chat.whatsapp.com/...',
  facebook: 'https://www.facebook.com/...',
  email: 'email@example.com',
};
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (auto-detected as Next.js)

### Netlify

```bash
npm run build
# Upload .next folder
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## ✅ Features

- ✅ Arabic RTL layout
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with meta tags
- ✅ Structured data (Person schema)
- ✅ Smooth Framer Motion animations
- ✅ Fast page loads with Next.js
- ✅ Accessible navigation
- ✅ Contact form with validation
- ✅ Interactive FAQ accordion
- ✅ Events calendar
- ✅ Photo gallery with lightbox

---

## 📞 Support

For technical support, contact the development team.

---

Made with ❤️ for a better future of engineers
