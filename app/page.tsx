import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, Camera, Megaphone, BarChart3, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "التصوير الاحترافي",
      description: "تصوير عقاري احترافي بأحدث التقنيات والمعدات لإبراز جمال عقارك",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "الحملات الإعلانية",
      description: "حملات تسويقية مدروسة عبر منصات التواصل الاجتماعي لضمان وصول أوسع",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "التحليل والإحصائيات",
      description: "تقارير مفصلة وتحليلات دقيقة لأداء حملاتك التسويقية",
    },
  ]

  const testimonials = [
    {
      name: "أحمد المالكي",
      role: "مالك عقار",
      content: "خدمة ممتازة ومهنية عالية. تم بيع عقاري في وقت قياسي بفضل استراتيجيتهم التسويقية المتميزة.",
      rating: 5,
    },
    {
      name: "فاطمة السعيد",
      role: "مستثمرة عقارية",
      content: "فريق محترف ومتعاون. ساعدوني في تأجير عدة عقارات بأسعار ممتازة وبسرعة فائقة.",
      rating: 5,
    },
    {
      name: "محمد العتيبي",
      role: "مطور عقاري",
      content: "شراكة ناجحة مع فريق اتجاه. خبرتهم في السوق السعودي لا مثيل لها.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "500+", label: "عقار تم تسويقه" },
    { number: "95%", label: "معدل نجاح البيع" },
    { number: "300+", label: "عميل راضٍ" },
    { number: "5", label: "سنوات خبرة" },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5F3F0] to-[#E8E4E0] section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                تسويق عقاري
                <span className="text-[#D4B896]"> متميز </span>
                في المملكة
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                نحن وكالة رائدة في التسويق العقاري، نقدم خدمات شاملة لبيع وتأجير العقارات بأحدث الطرق والتقنيات المبتكرة
                في السوق السعودي.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/submit-property" className="btn-primary text-center">
                  اعرض عقارك الآن
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  تعرف على خدماتنا
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="عقارات فاخرة في السعودية"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-[#D4B896]">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">خدماتنا المتميزة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات العقارية المصممة خصيصاً لتلبية احتياجاتك وضمان نجاح استثماراتك العقارية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card text-center group hover:scale-105">
                <div className="text-[#D4B896] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              اكتشف جميع خدماتنا
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-[#F5F3F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6">لماذا تختار اتجاه العقارية؟</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#D4B896] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-2">خبرة محلية عميقة</h3>
                    <p className="text-gray-600">نفهم السوق السعودي جيداً ونعرف احتياجات العملاء المحليين</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#D4B896] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-2">تقنيات حديثة</h3>
                    <p className="text-gray-600">نستخدم أحدث التقنيات في التصوير والتسويق الرقمي</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#D4B896] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-2">فريق محترف</h3>
                    <p className="text-gray-600">فريق من الخبراء المتخصصين في التسويق العقاري</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#D4B896] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-2">نتائج مضمونة</h3>
                    <p className="text-gray-600">معدل نجاح عالي في بيع وتأجير العقارات</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="فريق اتجاه العقارية"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">آراء عملائنا</h2>
            <p className="text-xl text-gray-600">اكتشف تجارب عملائنا الناجحة معنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">هل أنت مستعد لبيع عقارك؟</h2>
          <p className="text-xl text-gray-300 mb-8">ابدأ رحلتك معنا اليوم واحصل على أفضل النتائج في أسرع وقت</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit-property" className="btn-primary">
              اعرض عقارك مجاناً
            </Link>
            <Link href="/contact" className="btn-secondary">
              تحدث مع خبير
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
