// Menangani pop-up 'Informasi'
const popupTrigger = document.getElementById('popup-trigger');
const infoPopup = document.getElementById('info-popup');
const closePopupButton = document.getElementById('info-popup-close');

popupTrigger.addEventListener('click', function() {
    infoPopup.style.display = 'block';  // Menampilkan pop-up informasi
});

closePopupButton.addEventListener('click', function() {
    infoPopup.style.display = 'none';  // Menyembunyikan pop-up informasi
});

window.addEventListener('click', function(event) {
    if (event.target === infoPopup) {
        infoPopup.style.display = 'none';  // Menutup pop-up jika klik di luar
    }
});

// Menangani pop-up untuk gambar kecil
const smallImages = document.querySelectorAll('.design-gallery-1x1 img');
const smallImageModal = document.getElementById('small-image-modal');
const smallImage = document.getElementById('small-image');
const smallImageClose = document.querySelector('.small-image-close');

smallImages.forEach(image => {
    image.addEventListener('click', function() {
        smallImage.src = this.src; 
        smallImageModal.style.display = 'flex';  // Tampilkan modal gambar kecil
    });
});

smallImageClose.addEventListener('click', function() {
    smallImageModal.style.display = 'none';  // Tutup modal gambar kecil
});

window.addEventListener('click', function(event) {
    if (event.target === smallImageModal) {
        smallImageModal.style.display = 'none';  // Tutup modal saat klik di luar
    }
});

// Menangani pop-up untuk model 3D
const galleryItems = document.querySelectorAll('.gallery-item img');
const modelImageModal = document.getElementById('model-image-modal');
const modelImage = document.getElementById('model-image');
const closeModelPopup = document.getElementById('close-model-popup');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        modelImage.src = this.src;  // Tampilkan gambar model di modal
        modelImageModal.style.display = 'flex';  // Tampilkan modal model 3D
    });
});

closeModelPopup.addEventListener('click', function() {
    modelImageModal.style.display = 'none';  // Tutup modal model 3D
});

window.addEventListener('click', function(event) {
    if (event.target === modelImageModal) {
        modelImageModal.style.display = 'none';  // Tutup modal model saat klik di luar
    }
});

// Menangani tombol 'Lihat Design Lainnya' dan modal galeri
const showMoreBtn = document.getElementById('show-more-btn');
const designModal = document.getElementById('design-modal');
const closeDesignModal = document.querySelector('.design-close');

showMoreBtn.addEventListener('click', function() {
    designModal.style.display = 'flex';  // Tampilkan modal desain lainnya
});

closeDesignModal.addEventListener('click', function() {
    designModal.style.display = 'none';  // Sembunyikan modal desain lainnya
});

window.addEventListener('click', function(event) {
    if (event.target === designModal) {
        designModal.style.display = 'none';  // Sembunyikan modal saat klik di luar
    }
});
