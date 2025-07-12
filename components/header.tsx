"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "/services" },
    { name: "المدونة", href: "/blog" },
    { name: "اتصل بنا", href: "/contact" },
    { name: "اعرض عقارك", href: "/submit-property" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      {/* Top bar */}
      <div className="bg-[#1A1A1A] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <a href="tel:+966501234567" aria-label="اتصل بنا على الرقم ٠٥٠١٢٣٤٥٦٧">
                  +966 50 123 4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a
                  href="mailto:info@etijah-realestate.sa"
                  aria-label="أرسل بريدًا إلكترونيًا إلى info@etijah-realestate.sa"
                >
                  info@etijah-realestate.sa
                </a>
              </div>
            </div>
            <div className="text-sm">نخدمكم على مدار الساعة</div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#1A1A1A]" aria-label="الصفحة الرئيسية لاتجاه العقارية">
              اتجاه العقارية
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8" aria-label="قائمة التنقل الرئيسية">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#1A1A1A] hover:text-[#D4B896] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1A1A1A] hover:text-[#D4B896]"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "إغلاق قائمة التنقل" : "فتح قائمة التنقل"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4" id="mobile-menu">
            <nav className="flex flex-col space-y-4" aria-label="قائمة التنقل للجوال">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#1A1A1A] hover:text-[#D4B896] font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
