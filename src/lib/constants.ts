// Campaign Website Constants - Eng. Nehal Maghrabi

export const CANDIDATE = {
    name: 'م. نهال المغربي',
    nameEn: 'Eng. Nehal Maghrabi',
    position: 'مرشحة لمقعد شعبة الكهرباء – نقابة المهندسين بسوهاج',
    positionEn: 'Candidate for Electricity Division Seat – Engineers Syndicate of Sohag',
    mainSlogan: 'التغيير مش كلام… نية صادقة وخبرة حقيقية وعمل جاد',
    secondarySlogan: 'من أجل نقابة أقرب للمهندس ومستقبل أفضل',
    heroImage: '/images/candidate/hero.jpg',
    profileImage: '/images/candidate/profile.jpg',
};

export const CONTACT = {
    whatsapp: '+201094727909',
    whatsappGroup: 'https://chat.whatsapp.com/DttXcp7KHFrE27YDkUGPPi',
    facebook: 'https://www.facebook.com/Nehalmaghrabi',
    email: 'Nehalmaghraby@hotmail.com',
};

export const NAV_LINKS = [
    { href: '/', label: 'الرئيسية' },
    { href: '/biography', label: 'السيرة الذاتية' },
    { href: '/partnerships', label: 'الشراكات' },
    { href: '/achievements', label: 'الإنجازات' },
    { href: '/vision', label: 'البرنامج الانتخابي' },

    { href: '/faq', label: 'أسئلة شائعة' },
    { href: '/contact', label: 'تواصل معنا' },
];

export const BIOGRAPHY = {
    summary: `م. نهال المغربي هي مدير وحدة التأهيل الوظيفي وخدمات الطلاب والمديرة التنفيذية لبرامج أكاديمية هواوي لتكنولوجيا المعلومات والاتصالات بجامعة سوهاج. استشارية ومدربة معتمدة في التحول الرقمي والتقنيات الناشئة وريادة الأعمال والابتكار وإدارة الشركات الناشئة، مع خبرة عملية تتجاوز 20 عامًا منذ 2004 في تصميم التدريب والمبادرات الوطنية وبرامج بناء القدرات. معتمدة من المجلس الأعلى للجامعات ووزارة الاتصالات وإنتل ومايكروسوفت وهواوي.`,
    timeline: [
        {
            year: '2004',
            title: 'بداية المسيرة المهنية',
            description: 'بدء العمل في مجال التدريب وبناء القدرات',
        },
        {
            year: '2014',
            title: 'التحول الرقمي',
            description: 'التخصص في التحول الرقمي والتقنيات الناشئة',
        },
        {
            year: '2019',
            title: 'أكاديمية هواوي',
            description: 'تأسيس وإدارة أكاديمية هواوي بجامعة سوهاج',
        },
        {
            year: '2021',
            title: 'جائزة التميز المؤسسي',
            description: 'المركز الأول في جائزة التميز المؤسسي بجامعة سوهاج',
        },
        {
            year: '2022',
            title: 'لجنة المناهج الوطنية',
            description: 'عضوية لجنة مناهج التحول الرقمي الوطنية - المجلس الأعلى للجامعات',
        },
        {
            year: '2024',
            title: 'جائزة التميز الحكومي',
            description: 'ترشح ضمن أفضل 10 على مستوى الجمهورية لجائزة التميز الحكومي',
        },
    ],
};

export const ACHIEVEMENTS = [
    {
        icon: 'users',
        value: 3000,
        suffix: '+',
        label: 'شباب تم تدريبهم',
    },
    {
        icon: 'rocket',
        value: 500,
        suffix: '+',
        label: 'مشروع وريادة أعمال تم دعمهم',
    },
    {
        icon: 'briefcase',
        value: 400,
        suffix: '+',
        label: 'فرصة تدريب احترافي وتقني',
    },
    {
        icon: 'calendar',
        value: 20,
        suffix: '+',
        label: 'سنة خبرة تنفيذية',
    },
];

export const KEY_ACHIEVEMENTS = [
    'ترشح ضمن أفضل 10 على مستوى الجمهورية لجائزة التميز الحكومي 2024',
    'عضوية لجنة مناهج التحول الرقمي الوطنية - المجلس الأعلى للجامعات 2022',
    'المركز الأول - جائزة التميز المؤسسي بجامعة سوهاج 2021',
    'تأسيس وإدارة أكاديمية هواوي بجامعة سوهاج (تدريب أكثر من 400 طالب)',
    'مدربة واستشارية لـ Creativa ووزارة الاتصالات وEdVentures وGIZ',
    'تدريب أكثر من 1000 طالب جامعي في ريادة الأعمال والابتكار',
    'مرشدة للشركات الناشئة والهاكاثونات وHult Prize وInnovEgypt',
];

export const PARTNERS = [
    { name: 'المجلس الأعلى للجامعات', nameEn: 'Supreme Council of Universities', logo: '/images/partners/المجلس الاعلي للجامعات.png' },
    { name: 'وزارة الاتصالات', nameEn: 'MCIT', logo: '/images/partners/وزارة الاتصالات وتكنولوجيا المعلومات.png' },
    { name: 'Creativa Hubs', nameEn: 'Creativa', logo: '/images/partners/Creativa Innovation hubs.png' },
    { name: 'Huawei Academy', nameEn: 'Huawei Academy', logo: '/images/partners/اكاديمية هواوي.png' },
    { name: 'EdVentures', nameEn: 'EdVentures', logo: '/images/partners/edventures.jpg' },
    { name: 'GIZ', nameEn: 'GIZ', logo: '/images/partners/giz5563.jpg' },
    { name: 'وزارة الشباب والرياضة', nameEn: 'Ministry of Youth and Sports', logo: '/images/partners/وزارة الشباب والرياضة.png' },
];

export const VISION_STATEMENT = 'نقابة حديثة، قريبة من المهندس، تدعمه مهنيًا، تفتح له فرص عمل حقيقية، تساعده على التطور المستمر، وتخدم أسرته وتواكب متغيرات العصر وسوق العمل.';

export const ELECTORAL_PROGRAM = [
    {
        id: 'development',
        icon: 'graduation-cap',
        title: 'تطوير المهندسين وبناء القدرات',
        items: [
            'برامج تدريب مهني معتمدة',
            'مهارات الذكاء الاصطناعي والتحول الرقمي وتقنيات المستقبل',
            'مسارات مهنية واضحة',
            'ثقافة السلامة والاستدامة',
            'نقل المعرفة من المهندسين الخبراء',
        ],
    },
    {
        id: 'employment',
        icon: 'briefcase',
        title: 'التوظيف وريادة الأعمال والابتكار',
        items: [
            'وحدة دعم التوظيف والعمل الحر داخل النقابة',
            'حاضنة للشركات الناشئة',
            'ربط مشاريع التخرج بالسوق',
            'أيام عرض للمستثمرين',
            'برامج إرشادية',
        ],
    },
    {
        id: 'communication',
        icon: 'message-circle',
        title: 'التواصل والتمثيل والتحول الرقمي',
        items: [
            'منصة نقابة رقمية',
            'قنوات تواصل فورية',
            'الدفاع القانوني والمهني',
            'رقمنة كاملة للخدمات',
        ],
    },
    {
        id: 'social',
        icon: 'heart',
        title: 'النادي الاجتماعي ودعم الأسرة',
        items: [
            'برامج تكريم المهندسين',
            'برامج تعليم وابتكار للأطفال',
            'تمكين المهندسات',
            'خدمات نقابية تركز على الأسرة',
        ],
    },
    {
        id: 'activities',
        icon: 'map',
        title: 'الأنشطة والرحلات',
        items: [
            'رحلات علمية',
            'زيارات صناعية',
            'فعاليات ترفيهية',
            'برامج تبادل بين المحافظات',
        ],
    },
    {
        id: 'services',
        icon: 'settings',
        title: 'تحسين الخدمات والموارد',
        items: [
            'تعزيز الرعاية الصحية',
            'تحسين المعاشات',
            'إقامات فندقية',
            'شراكات تدريب ومنح دراسية',
        ],
    },
];

export const FAQ_ITEMS = [
    {
        question: 'كيف ستطبقين رؤيتك عمليًا؟',
        answer: 'سأعتمد على خبرتي العملية في إدارة البرامج والمبادرات الوطنية، وسأبني شراكات استراتيجية مع المؤسسات الحكومية والخاصة، وسأضع خطط عمل واضحة وقابلة للقياس مع جداول زمنية محددة.',
    },
    {
        question: 'كيف ستوفرين فرص عمل حقيقية للمهندسين؟',
        answer: 'من خلال إنشاء وحدة توظيف داخل النقابة، وبناء قاعدة بيانات للمهندسين ومهاراتهم، وإقامة شراكات مع الشركات والمصانع، وتنظيم معارض توظيف دورية، ودعم ريادة الأعمال والعمل الحر.',
    },
    {
        question: 'ما علاقة خبرتك في التحول الرقمي بتطوير النقابة؟',
        answer: 'التحول الرقمي هو مفتاح تطوير أي مؤسسة. سأستفيد من خبرتي في رقمنة الخدمات وإنشاء منصات إلكترونية لتسهيل التواصل مع الأعضاء وتقديم الخدمات بشكل أسرع وأكثر كفاءة.',
    },
    {
        question: 'ما موقفك من الشباب والمهندسات؟',
        answer: 'الشباب والمهندسات هم محور اهتمامي الأول. سأعمل على تمكينهم من خلال برامج تدريب متخصصة، وتوفير فرص قيادية، ودعم التوازن بين العمل والحياة الأسرية.',
    },
    {
        question: 'كيف يمكنني المشاركة في الحملة؟',
        answer: 'يمكنك الانضمام لمجموعة الواتساب الخاصة بالحملة، أو التواصل معنا عبر صفحة الفيسبوك، أو ملء استمارة التطوع في صفحة التواصل. نرحب بكل أشكال الدعم والمشاركة.',
    },
];





export const SUPPORT_ROLES = [
    { value: 'volunteer', label: 'متطوع' },
    { value: 'organizer', label: 'منظم فعاليات' },
    { value: 'media', label: 'دعم إعلامي' },
    { value: 'events', label: 'تنظيم فعاليات' },
];
