document.addEventListener('DOMContentLoaded', function () {
    const messages = [
        "Creative Technologist",
        "AI Engineer and Developer",
        "Full-stack Web Designer",
        "Human-Centered Software Designer",
        "AI Research and Development Specialist",
        "Graphic Artist"
    ]; // Replace with your messages

    const container = document.getElementById('typing-container'); // Parent container for stacked lines
    let currentLineIndex = 0;
    let typingDelay = 75; // Typing speed per character
    let startDelay = 1000; // Initial delay before typing starts
    let untypingDelay = 50; // Speed for removing each character
    let endDelay = 2000; // Delay before untyping starts
    let lineTypingDelay = 500; // Delay between typing new lines

    // Global cursor element
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');

    function typeLine() {
        if (currentLineIndex < messages.length) {
            const newLine = document.createElement('h3'); // Create new line as h3
            newLine.textContent = ""; // Start with empty content
            newLine.classList.add('typing-line'); // Add a class for custom styling
            newLine.appendChild(cursor); // Append cursor to the new line

            container.appendChild(newLine); // Append to container

            let charIndex = 0;

            function typeCharacter() {
                if (charIndex < messages[currentLineIndex].length) {
                    cursor.before(messages[currentLineIndex].charAt(charIndex));
                    charIndex++;
                    setTimeout(typeCharacter, typingDelay);
                } else {
                    currentLineIndex++;
                    if (currentLineIndex < messages.length) {
                        setTimeout(typeLine, lineTypingDelay); // Start typing the next line
                    } else {
                        // All lines typed, prepare to untype
                        cursor.style.animation = "none"; // Make cursor solid
                        setTimeout(() => untypeAllLines(), endDelay);
                    }
                }
            }

            typeCharacter();
        }
    }

    function untypeAllLines() {
        const lines = Array.from(container.children); // Get all lines
        let lineIndex = lines.length - 1;

        function untypeLine() {
            if (lineIndex >= 0) {
                const line = lines[lineIndex];
                let charIndex = line.textContent.length;

                function removeCharacter() {
                    if (charIndex > 0) {
                        line.textContent = line.textContent.substring(0, charIndex - 1);
                        charIndex--;
                        line.appendChild(cursor); // Ensure cursor stays on the current line
                        setTimeout(removeCharacter, untypingDelay);
                    } else {
                        container.removeChild(line); // Remove line completely
                        lineIndex--;
                        untypeLine(); // Move to the next line to untype
                    }
                }

                removeCharacter();
            } else {
                // Reset and restart the process
                currentLineIndex = 0;
                cursor.style.animation = "blink 0.7s steps(1) infinite"; // Restart blinking
                setTimeout(typeLine, startDelay);
            }
        }

        untypeLine();
    }

    setTimeout(typeLine, startDelay);
});