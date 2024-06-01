const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll  = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '30px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text',{delay:280, origin:'bottom'})

sr.reveal('.featured,.cta,.new,.brand,.contact,.about,.review,.javascript',{delay:200, origin:'bottom'})

document.getElementById('whatsapp-link').addEventListener('click', function() {
    // Ganti nomor telepon dan pesan teks sesuai kebutuhan
    const phoneNumber = '6285385022626';
    const message = 'Hallo, saya habis mengunjungi website anda';

    // Buat URL WhatsApp dengan nomor telepon dan pesan
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Buka link WhatsApp pada jendela baru atau tab baru
    window.open(whatsappURL, '_blank');
});

//Modal "Saya menyatakan...."

document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("fumodal");
    const modalImage = document.getElementById("modalImage");
   
  
    const images = [
      "keterangan.png",
      // Add more image URLs as needed
    ];
  
    let currentImageIndex = 0;
  
    openModalBtn.addEventListener("click", function () {
      modal.style.display = "block";
      showImage();
    });
  
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

  
    function showImage() {
      modalImage.src = images[currentImageIndex];
    }
  
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
