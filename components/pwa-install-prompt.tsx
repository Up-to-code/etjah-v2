"use client"

import type React from "react"
import { useEffect, useState } from "react"

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      // Only show the prompt if it's not already installed and we have a prompt event
      if (window.matchMedia("(display-mode: standalone)").matches || navigator.standalone) {
        setIsVisible(false) // Already installed
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    // Check if already installed on load
    if (window.matchMedia("(display-mode: standalone)").matches || (navigator as any).standalone) {
      setIsVisible(false)
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      setIsVisible(false)
      // @ts-ignore
      deferredPrompt.prompt()
      // @ts-ignore
      const { outcome } = await deferredPrompt.userChoice
      console.log(`User response to the install prompt: ${outcome}`)
      setDeferredPrompt(null)
    }
  }

  const handleCloseClick = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white p-4 rounded-lg shadow-lg z-[100] flex items-center gap-4 max-w-sm w-full"
      role="dialog"
      aria-modal="true"
      aria-label="تثبيت تطبيق اتجاه العقارية"
    >
      <div className="flex-shrink-0">
        <img src="/icons/icon-192x192.png" alt="اتجاه العقارية" className="w-10 h-10 rounded-md" />
      </div>
      <div className="flex-grow">
        <p className="text-sm font-medium">📲 هل ترغب في تثبيت تطبيق اتجاه العقارية؟</p>
      </div>
      <div className="flex gap-2 flex-shrink-0">
        <button
          onClick={handleInstallClick}
          className="bg-[#D4B896] text-[#1A1A1A] px-3 py-1 rounded-md text-sm font-medium hover:bg-[#c4a886] transition-colors"
          aria-label="تثبيت التطبيق"
        >
          تثبيت
        </button>
        <button
          onClick={handleCloseClick}
          className="text-gray-400 hover:text-gray-200 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
