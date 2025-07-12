import Header from "@/components/header"
import Footer from "@/components/footer"
import { Camera, Megaphone, BarChart3, Users, Globe, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "خدماتنا - اتجاه العقارية",
  description:
    "اكتشف خدماتنا المتميزة في التسويق العقاري: التصوير الاحترافي، الحملات الرقمية، إدارة وسائل التواصل، والاستشارات العقارية.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "التصوير الاحترافي",
      description: "نقدم خدمات تصوير عقاري احترافية باستخدام أحدث المعدات والتقنيات",
      features: [
        "تصوير داخلي وخارجي عالي الجودة",
        "تصوير جوي بالطائرات المسيرة",
        "جولات افتراضية ثلاثية الأبعاد",
        "تحرير وتعديل الصور بشكل احترافي",
      ],
      price: "ابتداءً من 500 ريال",
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "الحملات الإعلانية الرقمية",
      description: "حملات تسويقية مدروسة ومستهدفة عبر منصات التواصل الاجتماعي",
      features: [
        "إعلانات فيسبوك وإنستغرام",
        "حملات جوجل الإعلانية",
        "تسويق عبر سناب شات وتيك توك",
        "استهداف دقيق للجمهور المناسب",
      ],
      price: "ابتداءً من 1000 ريال شهرياً",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "إدارة وسائل التواصل الاجتماعي",
      description: "إدارة شاملة لحساباتك على منصات التواصل الاجتماعي",
      features: [
        "إنشاء محتوى جذاب ومتميز",
        "جدولة المنشورات والتفاعل",
        "تصميم جرافيك احترافي",
        "تقارير أداء شهرية مفصلة",
      ],
      price: "ابتداءً من 800 ريال شهرياً",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "التحليل والإحصائيات",
      description: "تقارير مفصلة وتحليلات دقيقة لأداء حملاتك التسويقية",
      features: [
        "تتبع أداء الحملات الإعلانية",
        "تحليل سلوك الزوار والعملاء",
        "تقارير ROI مفصلة",
        "توصيات لتحسين الأداء",
      ],
      price: "مشمول مع الخدمات الأخرى",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "تطوير المواقع العقارية",
      description: "تصميم وتطوير مواقع إلكترونية متخصصة في العقارات",
      features: [
        "تصميم متجاوب مع جميع الأجهزة",
        "نظام إدارة العقارات",
        "تحسين محركات البحث SEO",
        "تكامل مع منصات التواصل",
      ],
      price: "ابتداءً من 3000 ريال",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "الاستشارات العقارية",
      description: "استشارات متخصصة في السوق العقاري والاستثمار",
      features: ["تقييم العقارات والأسعار", "دراسة السوق والمنافسين", "استراتيجيات الاستثمار", "نصائح قانونية ومالية"],
      price: "ابتداءً من 300 ريال للجلسة",
    },
  ]

  const packages = [
    {
      name: "الباقة الأساسية",
      price: "1,500 ريال شهرياً",
      features: ["تصوير احترافي للعقار", "إعلانات على منصتين اجتماعيتين", "تقرير أداء شهري", "دعم فني أساسي"],
      popular: false,
    },
    {
      name: "الباقة المتقدمة",
      price: "2,800 ريال شهرياً",
      features: [
        "تصوير احترافي + جولة افتراضية",
        "حملات على 4 منصات",
        "إدارة وسائل التواصل",
        "تقارير مفصلة أسبوعية",
        "استشارة عقارية مجانية",
      ],
      popular: true,
    },
    {
      name: "الباقة الشاملة",
      price: "4,500 ريال شهرياً",
      features: [
        "جميع خدمات التصوير",
        "حملات شاملة على جميع المنصات",
        "موقع إلكتروني مخصص",
        "إدارة كاملة للتسويق",
        "استشارات غير محدودة",
        "مدير حساب مخصص",
      ],
      popular: false,
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5F3F0] to-[#E8E4E0] section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">خدماتنا المتميزة في التسويق العقاري</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لتلبية احتياجاتك العقارية وضمان نجاح استثماراتك
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="text-[#D4B896] group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#D4B896] flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-lg font-semibold text-[#D4B896]">{service.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding bg-[#F5F3F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">باقاتنا المتنوعة</h2>
            <p className="text-xl text-gray-600">اختر الباقة التي تناسب احتياجاتك وميزانيتك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`card relative ${pkg.popular ? "ring-2 ring-[#D4B896] scale-105" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#D4B896] text-[#1A1A1A] px-4 py-1 rounded-full text-sm font-semibold">
                      الأكثر شعبية
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-[#D4B896]">{pkg.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D4B896] flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary w-full text-center block">
                  اطلب هذه الباقة
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">كيف نعمل معك؟</h2>
            <p className="text-xl text-gray-600">عملية بسيطة ومدروسة لضمان أفضل النتائج</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "التواصل الأولي", desc: "نتواصل معك لفهم احتياجاتك ومتطلباتك" },
              { step: "02", title: "وضع الاستراتيجية", desc: "نضع خطة تسويقية مخصصة لعقارك" },
              { step: "03", title: "التنفيذ", desc: "نبدأ في تنفيذ الحملة التسويقية" },
              { step: "04", title: "المتابعة والتقييم", desc: "نتابع النتائج ونحسن الأداء باستمرار" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#D4B896] text-[#1A1A1A] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">مستعد لبدء رحلتك التسويقية؟</h2>
          <p className="text-xl text-gray-300 mb-8">
            تواصل معنا اليوم واحصل على استشارة مجانية لتحديد أفضل استراتيجية لعقارك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              احصل على استشارة مجانية
            </Link>
            <Link href="/submit-property" className="btn-secondary">
              اعرض عقارك الآن
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
