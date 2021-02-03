const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html'];
const self = this

// install a service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('openend cache')
      return cache.addAll(urlsToCache)
    })
  )
})

// listen for request
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('offline.html'))
    })
  )
})

// activate the service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = []
  cacheWhitelist.push(CACHE_NAME)
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) { return caches.delete(cacheName) }
        })
      )
    })
  )
})
