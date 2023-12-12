document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.project-card');
    let currentCard = 0;

    function showNextCard() {
        // Hide the current card
        cards[currentCard].style.opacity = '0';

        // Increment currentCard index
        currentCard = (currentCard + 1) % cards.length;

        // Show the next card
        cards[currentCard].style.opacity = '1';
    }

    // Automatically change card every 3 seconds
    setInterval(showNextCard, 3000);
});