self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("tension-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "tension.html",
        "lista.html",
        "pagina1.html",
        "salidas.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
