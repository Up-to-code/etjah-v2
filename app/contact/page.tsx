"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5F3F0] to-[#E8E4E0] section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">تواصل معنا</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            نحن هنا لمساعدتك في جميع احتياجاتك العقارية. تواصل معنا اليوم واحصل على استشارة مجانية
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="card">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                      placeholder="05xxxxxxxx"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                    placeholder="example@email.com"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    موضوع الرسالة *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent"
                    aria-required="true"
                  >
                    <option value="">اختر موضوع الرسالة</option>
                    <option value="sell-property">بيع عقار</option>
                    <option value="rent-property">تأجير عقار</option>
                    <option value="marketing-services">خدمات التسويق</option>
                    <option value="consultation">استشارة عقارية</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent resize-none"
                    placeholder="اكتب رسالتك هنا..."
                    aria-required="true"
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" aria-hidden="true" />
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">معلومات التواصل</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4B896] p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-[#1A1A1A]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">الهاتف</h3>
                    <p className="text-gray-600">+966 50 123 4567</p>
                    <p className="text-gray-600">+966 11 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#D4B896] p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-[#1A1A1A]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@etijah-realestate.sa</p>
                    <p className="text-gray-600">sales@etijah-realestate.sa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#D4B896] p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#1A1A1A]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">العنوان</h3>
                    <p className="text-gray-600">
                      الرياض، المملكة العربية السعودية
                      <br />
                      حي الملك فهد، طريق الملك عبدالعزيز
                      <br />
                      مبنى اتجاه التجاري، الطابق الثالث
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#D4B896] p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-[#1A1A1A]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">ساعات العمل</h3>
                    <p className="text-gray-600">
                      السبت - الخميس: 9:00 ص - 6:00 م<br />
                      الجمعة: مغلق
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">موقعنا على الخريطة</h3>
              <div
                className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center"
                role="img"
                aria-label="خريطة موقعنا في الرياض، حي الملك فهد، طريق الملك عبدالعزيز"
              >
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" aria-hidden="true" />
                  <p>خريطة جوجل - الرياض، السعودية</p>
                  <p className="text-sm">حي الملك فهد، طريق الملك عبدالعزيز</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-[#F5F3F0] section-padding" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl font-bold text-[#1A1A1A] mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-xl text-gray-600">إجابات على أكثر الأسئلة شيوعاً</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "كم تستغرق عملية تسويق العقار؟",
                answer: "عادة ما تستغرق عملية التسويق من 2-8 أسابيع حسب نوع العقار وموقعه والسعر المطلوب.",
              },
              {
                question: "ما هي تكلفة خدمات التسويق؟",
                answer: "تختلف التكلفة حسب نوع الخدمة المطلوبة. نقدم باقات متنوعة تبدأ من 1500 ريال شهرياً.",
              },
              {
                question: "هل تقدمون ضمان على النتائج؟",
                answer: "نعم، نضمن تحقيق نتائج ملموسة خلال فترة زمنية محددة أو نعيد جزءاً من الرسوم.",
              },
              {
                question: "هل تغطون جميع مناطق المملكة؟",
                answer: "نعم، نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية مع التركيز على المدن الرئيسية.",
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
