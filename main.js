// main.js

document.addEventListener('DOMContentLoaded', function() {
        // Hapus kelas "container" dari body
        document.body.classList.remove("container");
    
        // Buat elemen audio
        const audio = new Audio('asset/audio1.mp3');
        audio.autoplay = true;
        audio.loop = true;
        audio.volume = 0.5; // Sesuaikan volume sesuai kebutuhan
    
        // Tambahkan elemen audio ke body
    document.body.appendChild(audio);

    // Pemulihan posisi audio setelah halaman dimuat ulang
    document.addEventListener('DOMContentLoaded', function() {
        const savedPosition = sessionStorage.getItem('audioPosition');
        if (savedPosition) {
            audio.currentTime = parseFloat(savedPosition);
        }
    });

    // Simpan posisi audio saat navigasi
    window.addEventListener('beforeunload', function() {
        sessionStorage.setItem('audioPosition', audio.currentTime);
    });

    // Fungsi untuk slideshow otomatis (jika diperlukan)
    let slideIndex = 0;
    carousel();

    function carousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(carousel, 2000); // mengatur kecepatan slideshow (dalam milidetik)
    }
});