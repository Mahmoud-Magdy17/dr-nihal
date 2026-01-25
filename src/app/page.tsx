import Link from 'next/link';
import { Hero, StatsGrid, SectionTitle, ProgramCard, AchievementCard } from '@/components/ui';
import { ACHIEVEMENTS, ELECTORAL_PROGRAM, KEY_ACHIEVEMENTS, PARTNERS, FAQ_ITEMS } from '@/lib/constants';
import { ArrowLeft, Users, Target, Award, Handshake, MessageCircle, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#c8a45c] font-bold text-sm tracking-wider uppercase mb-2 block">حقائق وأرقام</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a5d3a] mb-6">أرقام الإنجاز تتحدث</h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              أكثر من 20 عامًا من العمل الجاد والتأثير الحقيقي في حياة المهندسين والشباب، نترجمها اليوم إلى أرقام تروي قصة نجاح مستمرة.
            </p>
          </div>
          <StatsGrid stats={ACHIEVEMENTS} />
        </div>
      </section>

      {/* Electoral Program Section */}
      <section className="py-24 bg-[#f8faf9] border-y border-gray-100">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#c8a45c] font-bold text-sm tracking-wider uppercase mb-2 block">رؤية للمستقبل</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a5d3a] mb-6">البرنامج الانتخابي</h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              رؤية واضحة ومحاور عمل قابلة للتنفيذ، تلامس احتياجات المهندس الحقيقية
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-to-r from-[#1a5d3a] to-[#2e7d32] rounded-3xl p-10 md:p-12 mb-16 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c8a45c] opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <p className="text-2xl md:text-3xl leading-relaxed font-medium max-w-4xl mx-auto">
                "نقابة حديثة، قريبة من المهندس، تدعمه مهنيًا، تفتح له فرص عمل حقيقية، تساعده على التطور المستمر، وتخدم أسرته وتواكب متغيرات العصر"
              </p>
            </div>
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ELECTORAL_PROGRAM.map((program, index) => (
              <ProgramCard
                key={program.id}
                {...program}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/vision"
              className="inline-flex items-center gap-3 bg-[#1a5d3a] hover:bg-[#0f3d25] text-white text-lg font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              اطلع على البرنامج كاملاً
              <ArrowLeft size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#c8a45c] font-bold text-sm tracking-wider uppercase mb-2 block">مسيرة عطاء</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a5d3a] mb-6">إنجازات بارزة</h2>
              <p className="text-gray-600 text-xl mb-10 leading-relaxed">
                خبرة موثقة ونتائج ملموسة على المستوى الوطني، وجوائز تعكس التميز والجودة في الأداء.
              </p>

              <div className="space-y-6">
                {KEY_ACHIEVEMENTS.slice(0, 5).map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-[#f8faf9] rounded-2xl border border-gray-100 hover:border-[#c8a45c]/30 transition-colors">
                    <div className="w-10 h-10 bg-[#e8f5e9] text-[#1a5d3a] rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1.5">{achievement}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/achievements"
                  className="inline-flex items-center gap-2 text-[#1a5d3a] text-lg font-bold hover:text-[#c8a45c] transition-colors group"
                >
                  <span className="border-b-2 border-transparent group-hover:border-[#c8a45c] transition-all">عرض جميع الإنجازات</span>
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-5 md:gap-6">
              <div className="bg-gradient-to-br from-[#c8a45c] to-[#d4b87a] rounded-3xl p-8 text-white shadow-xl flex flex-col items-center text-center justify-center aspect-square">
                <Award className="w-12 h-12 mb-4 opacity-90" />
                <p className="text-4xl md:text-5xl font-extrabold mb-2">Top 10</p>
                <p className="text-base font-medium opacity-90">جائزة التميز الحكومي 2024</p>
              </div>
              <div className="bg-gradient-to-br from-[#1a5d3a] to-[#2e7d32] rounded-3xl p-8 text-white shadow-xl flex flex-col items-center text-center justify-center aspect-square">
                <Target className="w-12 h-12 mb-4 opacity-90" />
                <p className="text-4xl md:text-5xl font-extrabold mb-2">#1</p>
                <p className="text-base font-medium opacity-90">التميز المؤسسي 2021</p>
              </div>
              <div className="bg-[#f0fdf4] rounded-3xl p-8 text-[#1a5d3a] flex flex-col items-center text-center justify-center aspect-square border border-[#1a5d3a]/10">
                <Users className="w-12 h-12 mb-4 text-[#1a5d3a]" />
                <p className="text-4xl md:text-5xl font-extrabold mb-2">+400</p>
                <p className="text-base font-medium text-gray-600">طالب أكاديمية هواوي</p>
              </div>
              <div className="bg-[#fffbeb] rounded-3xl p-8 text-[#b45309] flex flex-col items-center text-center justify-center aspect-square border border-[#fcd34d]/20">
                <Handshake className="w-12 h-12 mb-4 text-[#d97706]" />
                <p className="text-4xl md:text-5xl font-extrabold mb-2">+1000</p>
                <p className="text-base font-medium text-gray-600">متدرب ريادة أعمال</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-[#f8faf9] border-y border-gray-100">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a5d3a] mb-6">شراكات وتعاون</h2>
            <p className="text-gray-600 text-xl">ثقة المؤسسات الوطنية والدولية الكبرى</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {PARTNERS.slice(0, 8).map((partner, index) => (
              <div
                key={partner.name}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#f0f9ff] text-[#0284c7] flex items-center justify-center font-bold text-2xl group-hover:scale-110 group-hover:bg-[#1a5d3a] group-hover:text-white transition-all">
                  {partner.name.charAt(0)}
                </div>
                <p className="font-bold text-base text-gray-800 group-hover:text-[#1a5d3a] transition-colors">{partner.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/partnerships"
              className="inline-flex items-center gap-2 text-[#1a5d3a] text-lg font-bold hover:text-[#c8a45c] transition-colors group"
            >
              <span className="border-b-2 border-transparent group-hover:border-[#c8a45c] transition-all">عرض جميع الشراكات</span>
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#c8a45c] font-bold text-sm tracking-wider uppercase mb-2 block">لأنك تسأل</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a5d3a] mb-6">أسئلة شائعة</h2>
              <p className="text-gray-600 text-xl">إجابات شفافة ومباشرة على استفساراتكم</p>
            </div>

            <div className="space-y-6">
              {FAQ_ITEMS.slice(0, 3).map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#c8a45c] transition-colors shadow-sm hover:shadow-md">
                  <h3 className="text-xl font-bold text-[#1a5d3a] mb-4 flex items-start gap-3">
                    <CheckCircle size={24} className="text-[#c8a45c] flex-shrink-0 mt-0.5" />
                    {item.question}
                  </h3>
                  <p className="text-gray-600 pr-9 text-lg leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-lg font-bold py-3 px-8 rounded-xl transition-all"
              >
                عرض جميع الأسئلة
                <ArrowLeft size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1a5d3a] to-[#2e7d32] relative overflow-hidden">
        {/* Modern Shapes */}
        <div className="absolute top-0 right-0 p-20 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 p-32 bg-[#c8a45c]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container relative z-10 px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
              انضم لحملة التغيير
            </h2>
            <p className="text-2xl opacity-90 mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
              كن جزءًا من مستقبل أفضل لنقابة المهندسين.
              <br className="hidden md:block" />
              صوتك أمانة، ومشاركتك قوة.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://chat.whatsapp.com/DttXcp7KHFrE27YDkUGPPi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#c8a45c] hover:bg-[#d4b87a] text-white text-xl font-bold py-5 px-12 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <MessageCircle size={26} />
                انضم لمجموعة الواتساب
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#1a5d3a] text-xl font-bold py-5 px-10 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
