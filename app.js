// Memanggil fungsi registerSW saat halaman dimuat
registerSW();

// Fungsi untuk mendaftarkan Service Worker
async function registerSW() {
  // Mengecek apakah browser mendukung API Service Worker
  if ('serviceWorker' in navigator) {
    try {
      // Mendaftarkan file sw.js sebagai service worker
      // Jika file sw.js tidak ada atau error, akan masuk ke blok catch
      const registration = await navigator.serviceWorker.register("sw.js");
    } catch (error) {
      // Menampilkan pesan kesalahan jika gagal registrasi service worker
      showResult("Error while registering: " + error.message);
    }
  } else {
    // Menampilkan pesan jika browser tidak mendukung service worker
    showResult("Service workers API not available");
  }
};

// Fungsi untuk menampilkan hasil (sukses/gagal) ke elemen <output>
function showResult(text) {
  document.querySelector("output").innerHTML = text;
}
