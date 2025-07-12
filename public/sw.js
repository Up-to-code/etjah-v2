const CACHE_NAME = "etijah-realestate-pwa-v1"
const urlsToCache = [
  "/",
  "/offline",
  "/_next/static/css/globals.css", // Adjust based on your Next.js build output
  // Add other critical assets and pages to cache
  // For example:
  // "/_next/static/chunks/main-*.js",
  // "/_next/static/chunks/pages/index-*.js",
  // "/_next/static/chunks/pages/_app-*.js",
  // "/_next/static/media/*.woff2", // Example for fonts
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/favicon.ico",
  "/placeholder.svg", // Assuming this is a common placeholder image
]

// Install event: caches static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache).catch((error) => {
        console.error("Failed to cache some URLs:", error)
      })
    }),
  )
})

// Activate event: cleans up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log("Service Worker: Deleting old cache", cacheName)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Fetch event: serves cached content or fetches from network
self.addEventListener("fetch", (event) => {
  // Only cache GET requests
  if (event.request.method !== "GET") {
    return
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }

      // Clone the request because it's a stream and can only be consumed once
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest)
        .then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          // Clone the response because it's a stream and can only be consumed once
          const responseToCache = response.clone()

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          // If network request fails, serve offline page for navigation requests
          if (event.request.mode === "navigate") {
            return caches.match("/offline")
          }
          // For other requests, you might return a generic offline asset or just throw
          return new Response("Network error or offline", { status: 503, statusText: "Service Unavailable" })
        })
    }),
  )
})

// Background sync for form submissions (example, requires client-side implementation)
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form-submission") {
    console.log("Service Worker: Background sync for contact form")
    event.waitUntil(syncContactForm())
  }
  // Add other sync tags as needed for other forms (e.g., property submission)
  if (event.tag === "property-submission") {
    console.log("Service Worker: Background sync for property submission")
    event.waitUntil(syncPropertySubmission())
  }
})

async function syncContactForm() {
  // In a real application, you would retrieve the stored form data from IndexedDB
  // and attempt to send it to your API.
  // Example: const formData = await getFormDataFromIndexedDB('contact');
  // if (formData) {
  //   try {
  //     await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
  //     console.log('Contact form synced successfully!');
  //     await clearFormDataFromIndexedDB('contact');
  //   } catch (error) {
  //     console.error('Contact form sync failed:', error);
  //     // The browser will automatically retry this sync event later
  //   }
  // }
  console.log("Contact form sync logic would go here.")
  return Promise.resolve() // Placeholder
}

async function syncPropertySubmission() {
  // Similar to contact form, retrieve and send property data
  console.log("Property submission sync logic would go here.")
  return Promise.resolve() // Placeholder
}

// Handle push notifications (optional, if you plan to add this feature)
self.addEventListener("push", (event) => {
  const data = event.data.json()
  const title = data.title || "اتجاه العقارية"
  const options = {
    body: data.body || "لديك تحديث جديد!",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/icon-72x72.png",
    data: {
      url: data.url || "/",
    },
  }
  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener("notificationclick", (event) => {
  event.notification.close()
  event.waitUntil(clients.openWindow(event.notification.data.url))
})
