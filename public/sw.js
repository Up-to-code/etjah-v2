const CACHE_NAME = "etijah-real-estate-v1"
const urlsToCache = [
  "/",
  "/services",
  "/blog",
  "/contact",
  "/submit-property",
  "/offline", // The offline page
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  // Add other critical static assets like CSS, JS bundles if known
  // For Next.js, the build output will handle JS/CSS caching automatically
]

// Install event: caches static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching app shell")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Activate event: cleans up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
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
  // Only handle GET requests for navigation and assets
  if (event.request.method === "GET") {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Cache hit - return response
        if (response) {
          return response
        }

        // No cache hit - fetch from network
        return fetch(event.request)
          .then((networkResponse) => {
            // Cache new responses for future use
            if (networkResponse.ok && event.request.url.startsWith(self.location.origin)) {
              const responseToCache = networkResponse.clone()
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache)
              })
            }
            return networkResponse
          })
          .catch(() => {
            // Network request failed, serve offline page for navigation requests
            if (event.request.mode === "navigate" || event.request.destination === "document") {
              return caches.match("/offline") // Serve the /offline page
            }
            // For other failed requests (e.g., images, scripts), return a generic fallback or error
            return new Response(null, { status: 503, statusText: "Service Unavailable" })
          })
      }),
    )
  }
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
