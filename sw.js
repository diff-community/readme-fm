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

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  if(e.request.url === encodeURI('https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css')) {
    e.respondWith(
      caches.open('assets').then(cache => {
        return cache.match(e.request.url);
      })
    )
  } else {
    e.respondWith(
      fetch(e.request).catch(() => {
        return caches.open('assets').then(cache => {
          return cache.match(e.request);
        });
      })
    )
  }
});