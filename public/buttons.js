document.addEventListener('DOMContentLoaded', function() {
    var tabButton = document.getElementById('tab-button');
    var socialMediaIcons = document.getElementById('social-media-icons');
    var tabSymbol = document.getElementById('tab-symbol');

    tabButton.addEventListener('click', function() {
        socialMediaIcons.classList.toggle('shown');
        tabSymbol.style.transform = socialMediaIcons.classList.contains('shown') ? 'rotate(90deg)' : 'rotate(0deg)';
    });
});

let index = 0;

function cycleCards() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach((card, i) => {
        const video = card.querySelector('video');
        if (i === index) {
            card.classList.add('active');
            if (video) video.play();
        } else {
            card.classList.remove('active');
            if (video) video.pause();
        }
    });

    index = (index + 1) % cards.length;
}

// Call cycleCards once immediately when the page loads
cycleCards();

// Then start the interval
setInterval(cycleCards, 10000); // Cycle every 8 seconds