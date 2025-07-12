"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Upload, X, Home, MapPin, DollarSign, Camera, Send } from "lucide-react"

export default function SubmitPropertyPage() {
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    propertyType: "",
    propertySubType: "",
    city: "",
    district: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    priceType: "",
    description: "",
    features: [] as string[],
    marketingBudget: "",
    urgency: "",
  })

  const [images, setImages] = useState<File[]>([])

  const propertyTypes = {
    residential: {
      name: "سكني",
      subtypes: ["شقة", "فيلا", "دوبلكس", "استوديو", "بنتهاوس", "تاون هاوس"],
    },
    commercial: {
      name: "تجاري",
      subtypes: ["مكتب", "محل تجاري", "مستودع", "مبنى تجاري", "أرض تجارية"],
    },
    land: {
      name: "أراضي",
      subtypes: ["أرض سكنية", "أرض تجارية", "أرض زراعية", "أرض صناعية"],
    },
  }

  const cities = [
    "الرياض",
    "جدة",
    "الدمام",
    "مكة المكرمة",
    "المدينة المنورة",
    "الطائف",
    "تبوك",
    "بريدة",
    "خميس مشيط",
    "حائل",
    "الجبيل",
    "الخبر",
  ]

  const features = [
    "مسبح",
    "حديقة",
    "مصعد",
    "موقف سيارات",
    "أمن وحراسة",
    "صالة رياضية",
    "ملعب أطفال",
    "مولد كهرباء",
    "تكييف مركزي",
    "إطلالة بحرية",
    "قريب من المدارس",
    "قريب من المستشفيات",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Property submitted:", { formData, images })
    alert("تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFeatureToggle = (feature: string) => {
    setFormData({
      ...formData,
      features: formData.features.includes(feature)
        ? formData.features.filter((f) => f !== feature)
        : [...formData.features, feature],
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (images.length + files.length <= 5) {
      setImages([...images, ...files])
    } else {
      alert("يمكنك رفع 5 صور كحد أقصى")
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5F3F0] to-[#E8E4E0] section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">اعرض عقارك للتسويق</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة لبدء تسويق عقارك بأفضل الطرق
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Owner Information */}
          <div className="card">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
              <Home className="w-6 h-6 text-[#D4B896]" />
              معلومات المالك
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">الاسم الكامل *</label>
                <input
                  type="text"
                  name="ownerName"
                  required
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">رقم الهاتف *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                  placeholder="05xxxxxxxx"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">البريد الإلكتروني *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                  placeholder="example@email.com"
                />
              </div>
            </div>
          </div>

          {/* Property Information */}
          <div className="card">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#D4B896]" />
              معلومات العقار
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">نوع العقار *</label>
                <select
                  name="propertyType"
                  required
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                >
                  <option value="">اختر نوع العقار</option>
                  {Object.entries(propertyTypes).map(([key, type]) => (
                    <option key={key} value={key}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {formData.propertyType && (
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">التصنيف الفرعي *</label>
                  <select
                    name="propertySubType"
                    required
                    value={formData.propertySubType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                  >
                    <option value="">اختر التصنيف</option>
                    {propertyTypes[formData.propertyType as keyof typeof propertyTypes]?.subtypes.map((subtype) => (
                      <option key={subtype} value={subtype}>
                        {subtype}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">المدينة *</label>
                <select
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                >
                  <option value="">اختر المدينة</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">الحي *</label>
                <input
                  type="text"
                  name="district"
                  required
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                  placeholder="اسم الحي"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">المساحة (متر مربع) *</label>
                <input
                  type="number"
                  name="area"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                  placeholder="المساحة بالمتر المربع"
                />
              </div>

              {formData.propertyType === "residential" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">عدد غرف النوم</label>
                    <select
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                    >
                      <option value="">اختر العدد</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">عدد دورات المياه</label>
                    <select
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                    >
                      <option value="">اختر العدد</option>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Price Information */}
          <div className="card">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-[#D4B896]" />
              معلومات السعر
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">نوع العرض *</label>
                <select
                  name="priceType"
                  required
                  value={formData.priceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                >
                  <option value="">اختر نوع العرض</option>
                  <option value="sale">للبيع</option>
                  <option value="rent">للإيجار</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">السعر المطلوب (ريال سعودي) *</label>
                <input
                  type="number"
                  name="price"
                  required
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                  placeholder="السعر بالريال السعودي"
                />
              </div>
            </div>
          </div>

          {/* Property Features */}
          <div className="card">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">مميزات العقار</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {features.map((feature) => (
                <label key={feature} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.features.includes(feature)}
                    onChange={() => handleFeatureToggle(feature)}
                    className="w-4 h-4 text-[#D4B896] border-gray-300 rounded focus:ring-[#D4B896]"
                  />
                  <span className="text-sm text-[#1A1A1A]">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Property Description */}
          <div className="card">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">وصف العقار</h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896] resize-none"
              placeholder="اكتب وصفاً مفصلاً عن العقار، موقعه، ومميزاته الخاصة..."
            />
          </div>

          {/* Image Upload */}
          <div className="card">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
              <Camera className="w-6 h-6 text-[#D4B896]" />
              صور العقار (حتى 5 صور)
            </h2>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-[#1A1A1A] mb-2">اضغط لرفع الصور</p>
                <p className="text-gray-500">PNG, JPG, JPEG حتى 10MB لكل صورة</p>
              </label>
            </div>

            {images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image) || "/placeholder.svg"}
                      alt={`صورة ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Marketing Preferences */}
          <div className="card">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">تفضيلات التسويق</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">الميزانية التسويقية المفضلة</label>
                <select
                  name="marketingBudget"
                  value={formData.marketingBudget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                >
                  <option value="">اختر الميزانية</option>
                  <option value="basic">الباقة الأساسية (1,500 ريال شهرياً)</option>
                  <option value="advanced">الباقة المتقدمة (2,800 ريال شهرياً)</option>
                  <option value="premium">الباقة الشاملة (4,500 ريال شهرياً)</option>
                  <option value="custom">ميزانية مخصصة</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">مدى الاستعجال</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                >
                  <option value="">اختر مدى الاستعجال</option>
                  <option value="low">غير مستعجل (3-6 أشهر)</option>
                  <option value="medium">متوسط (1-3 أشهر)</option>
                  <option value="high">مستعجل (أقل من شهر)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn-primary text-lg px-12 py-4 flex items-center gap-3 mx-auto">
              <Send className="w-6 h-6" />
              إرسال طلب التسويق
            </button>
            <p className="text-gray-500 mt-4">سنتواصل معك خلال 24 ساعة لمناقشة تفاصيل تسويق عقارك</p>
          </div>
        </form>
      </div>

      <Footer />
    </>
  )
}
