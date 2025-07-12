"use client"

import Link from "next/link"
import { Wifi, Home, RefreshCw } from "lucide-react"

export default function OfflineClientPage() {
  return (
    <div className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="w-20 h-20 bg-[#2C3E50] rounded-full flex items-center justify-center mx-auto mb-6">
            <Wifi className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4">غير متصل بالإنترنت</h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            يبدو أنك غير متصل بالإنترنت حالياً. تحقق من اتصالك وحاول مرة أخرى.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-[#2C3E50] text-white hover:bg-[#1A1A1A] font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              إعادة المحاولة
            </button>

            <Link
              href="/"
              className="w-full border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              العودة للرئيسية
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">تطبيق اتجاه العقارية</p>
        </div>
      </div>
    </div>
  )
}
