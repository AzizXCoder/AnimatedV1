const nextButton = document.querySelector('.next-btn');
const video     = document.querySelector('.hero-video');

const movieList = ['videos/onepiece1.mp4', 'videos/edit1.mp4', 'videos/hero-2.mp4', 'videos/hero-4.mp4',];

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movieList[index];

    if(index === 3){
        index = -1;
    }
});

// UNTUK MUTED OTOMATIS SCROLL 
const video2 = document.getElementById('hero-video');
const heroSection = document.getElementById('hero-section');

function adjustVolumeOnScroll() {
  const rect = heroSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Cek apakah section masih terlihat sebagian/tidak
  if (rect.top >= windowHeight || rect.bottom <= 0) {
    // Di luar layar
    video2.volume = 0;
    video2.muted = true;
  } else {
    // Di dalam layar
    video2.muted = false;

    // Hitung proporsi tampilan
    const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
    const visibleRatio = visibleHeight / rect.height;

    // Atur volume antara 0 - 1
    video2.volume = Math.max(0, Math.min(1, visibleRatio));
  }
}

// Jalankan saat scroll dan saat halaman dimuat
window.addEventListener('scroll', adjustVolumeOnScroll);
window.addEventListener('load', adjustVolumeOnScroll);
