// Event listener untuk proses instalasi Service Worker
self.addEventListener("install", async event => {
    const cache = await caches.open("pwa-assets"); // Membuka cache dengan nama "pwa-assets"
    
    // Menyimpan semua resource saat pertama kali Service Worker diinstal
    // Tujuannya agar aplikasi bisa diakses secara offline dengan memuat file dari cache
    cache.addAll([
      "/",                 // Root halaman
      "index.html",        // Halaman utama
      "activity.html",     // Halaman aktivitas
      "activity1.jpg",     // Gambar aktivitas 1
      "activity2.jpg",     // Gambar aktivitas 2
      "activity3.jpg",     // Gambar aktivitas 3
      "activity4.jpg",     // Gambar aktivitas 4
      "Cynthia.jpg",       // Gambar personal (mungkin profil pengguna)
      "instagram.png",     // Ikon media sosial
      "linkedin.png",      // Ikon media sosial
      "whatsapp.png",      // Ikon media sosial
      "app.js",            // File JavaScript utama
      "style.css"          // File CSS utama
    ]);
  });
  
  // Event listener untuk intercept semua request jaringan
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        // Jika resource tersedia di cache, ambil dari cache
        // Jika tidak, ambil dari jaringan (fetch)
        return cachedResponse || fetch(event.request);
      })
    );
  });
  