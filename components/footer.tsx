import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4B896]">اتجاه العقارية</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              نحن وكالة رائدة في مجال التسويق العقاري بالمملكة العربية السعودية، نقدم خدمات متميزة لبيع وتأجير العقارات
              بأحدث الطرق والتقنيات.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#D4B896] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4B896] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4B896] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D4B896] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4B896]">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  المدونة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/submit-property" className="text-gray-300 hover:text-white transition-colors">
                  اعرض عقارك
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4B896]">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">تسويق العقارات</li>
              <li className="text-gray-300">التصوير الاحترافي</li>
              <li className="text-gray-300">الحملات الرقمية</li>
              <li className="text-gray-300">إدارة وسائل التواصل</li>
              <li className="text-gray-300">استشارات عقارية</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4B896]">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4B896]" />
                <span className="text-gray-300">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4B896]" />
                <span className="text-gray-300">info@etijah-realestate.sa</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4B896] mt-1" />
                <span className="text-gray-300">
                  الرياض، المملكة العربية السعودية
                  <br />
                  حي الملك فهد، طريق الملك عبدالعزيز
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">© 2024 اتجاه العقارية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
