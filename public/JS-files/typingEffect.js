document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        "Creative Technologist",
        "Cognitive Architect",
        "Full-stack Web Designer",
        "Graphic Artist",
        "AI Researcher and Philosopher"
    ]; // Replace with your messages
    const textElement = document.getElementById('text');
    const cursorElement = document.getElementById('cursor');
    let i = 0;
    let messageIndex = 0;
    let typingDelay = 75; // Adjust for typing speed
    let startDelay = 1000; // Delay before start typing
    let untypingDelay = 75; // Adjust for untyping speed
    let endDelay = 2000; // Delay before starting the next message

    function typeCharacter() {
        if (i < messages[messageIndex].length) {
            textElement.textContent += messages[messageIndex].charAt(i);
            i++;
            let randomTypingDelay = typingDelay + Math.floor(Math.random() * 200) - 50; // Adjust the range as needed
            setTimeout(typeCharacter, randomTypingDelay);
        } else {
            setTimeout(untypeCharacter, endDelay);
        }
    }

    function untypeCharacter() {
        if (i > 0) {
            textElement.textContent = textElement.textContent.substring(0, textElement.textContent.length - 1);
            i--;
            setTimeout(untypeCharacter, untypingDelay);
        } else {
            cursorElement.style.animation = '';
            cursorElement.style.background = '';
            messageIndex = (messageIndex + 1) % messages.length; // Move to the next message
            setTimeout(typeCharacter, startDelay);
        }
    }

    setTimeout(typeCharacter, startDelay);
});