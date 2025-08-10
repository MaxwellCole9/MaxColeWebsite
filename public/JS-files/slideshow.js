document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.slideshow-container');

    slideshows.forEach(slideshow => {
        let images = slideshow.querySelectorAll('.project-image');
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        images[currentIndex].classList.add('active');
        setInterval(showNextImage, 4500); // Change image every 6 seconds
    });
});