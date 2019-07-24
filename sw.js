const CACHE_ITEMS = [
  '/',
  '/index.html',
  '/public/logo.png',
  'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('assets').then((cache) => {
      return cache.addAll(CACHE_ITEMS);
    })
  )
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.open('assets').then(cache => {
        return cache.match(e.request);
      });
    })
  )
});