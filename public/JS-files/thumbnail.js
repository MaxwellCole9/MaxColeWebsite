document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const thumbnailImg = document.getElementById('thumbnail-img');

    // Show the first entry by default
    if (projectItems.length > 0) {
        const firstThumbnailSrc = projectItems[0].getAttribute('data-thumbnail');
        thumbnailImg.src = firstThumbnailSrc;
    }

    projectItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const thumbnailSrc = item.getAttribute('data-thumbnail');
            thumbnailImg.src = thumbnailSrc;
        });
    });
});