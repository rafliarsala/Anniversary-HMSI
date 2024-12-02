const imgPreview = (src) => { 
    document.getElementById('preview-img').src = src;
}

// Open lightbox
document.getElementById('preview-img').addEventListener('click', function() {
    openLightbox(this.src);
});

const openLightbox = (src) => {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = "block";
    lightboxImg.src = src;
}

const closeLightbox = () => {
    document.getElementById('lightbox-modal').style.display = "none";
}
