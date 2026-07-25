/* Grace Fire Ministry — Service Worker
   Caches core pages/assets so the site loads even with a weak connection. */

const CACHE_NAME = 'grace-fire-cache-v1';
const PRECACHE_URLS = [
  './',
  './index.html',
  './about.html',
  './events.html',
  './sermons.html',
  './gallery.html',
  './contact.html',
  './partnership.html',
  './css/style.css',
  './js/main.js',
  './js/countdown.js',
  './assets/img/logo.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
