"use client"

import { useState, useEffect } from "react"
import { X, Download, Smartphone, Share2 } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Mark as client-side

    const userAgent = navigator.userAgent
    const iOS = /iPad|iPhone|iPod/.test(userAgent)
    setIsIOS(iOS)

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone === true
    setIsStandalone(standalone)

    const dismissed = sessionStorage.getItem("pwa-prompt-dismissed")

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      if (!standalone && !dismissed) {
        setTimeout(() => setShowInstallPrompt(true), 3000) // Show after a delay
      }
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    // For iOS, show instructions if not in standalone mode and not dismissed
    if (iOS && !standalone && !dismissed) {
      setTimeout(() => setShowInstallPrompt(true), 5000)
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === "accepted") {
        setDeferredPrompt(null)
        setShowInstallPrompt(false)
      }
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    sessionStorage.setItem("pwa-prompt-dismissed", "true")
  }

  if (!isClient || isStandalone || !showInstallPrompt) {
    return null
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-4">
        {/* Install Prompt */}
        <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-md p-6 shadow-2xl animate-slide-up">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2C3E50] rounded-2xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-lg">اتجاه العقارية</h3>
                <p className="text-sm text-gray-600">وكالة تسويق عقاري فاخرة</p>
              </div>
            </div>
            <button onClick={handleDismiss} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">📲 هل ترغب في تثبيت تطبيق اتجاه العقارية؟</h2>
            <p className="text-gray-600 leading-relaxed">
              احصل على تجربة أفضل وأسرع مع تطبيق اتجاه العقارية. يمكنك الوصول إليه مباشرة من الشاشة الرئيسية لجهازك.
            </p>
          </div>

          {/* iOS Instructions */}
          {isIOS && (
            <div className="mb-6 p-4 bg-[#F5F3F0] rounded-2xl">
              <h4 className="font-semibold text-[#2C3E50] mb-2">لتثبيت التطبيق على iOS:</h4>
              <ol className="text-sm text-gray-700 space-y-1">
                <li>
                  1. اضغط على زر المشاركة{" "}
                  <span className="font-bold">
                    (<Share2 className="inline-block w-4 h-4" />)
                  </span>{" "}
                  في متصفح Safari.
                </li>
                <li>
                  2. اختر "إضافة إلى الشاشة الرئيسية" <span className="font-bold">(Add to Home Screen)</span>.
                </li>
                <li>
                  3. اضغط "إضافة" <span className="font-bold">(Add)</span> لتأكيد التثبيت.
                </li>
              </ol>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleDismiss}
              className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-3 rounded-xl transition-all duration-300"
            >
              ليس الآن
            </button>
            {!isIOS && deferredPrompt && (
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-[#2C3E50] text-white hover:bg-[#1A1A1A] font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                تثبيت
              </button>
            )}
            {isIOS && (
              <button
                onClick={handleDismiss}
                className="flex-1 bg-[#2C3E50] text-white hover:bg-[#1A1A1A] font-medium px-6 py-3 rounded-xl transition-all duration-300"
              >
                فهمت
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
