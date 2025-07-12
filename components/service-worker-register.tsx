"use client"

import { useEffect } from "react"

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", async () => {
        try {
          const registration = await navigator.serviceWorker.register("/sw.js")
          console.log("Service Worker registered with scope:", registration.scope)

          // Check for updates
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                  // New content is available, show update notification
                  showUpdateNotification()
                }
              })
            }
          })
        } catch (error) {
          console.error("Service Worker registration failed:", error)
        }
      })
    }
  }, [])

  const showUpdateNotification = () => {
    if (confirm("يتوفر تحديث جديد للتطبيق. هل تريد إعادة التحميل؟")) {
      window.location.reload()
    }
  }

  return null
}
