document.addEventListener('DOMContentLoaded', function() {
    const text = "MAXWELL COLE"; // Replace with your text
    const textElement = document.getElementById('text');
    const cursorElement = document.getElementById('cursor');
    let i = 0;
    let typingDelay = 100; // Adjust for typing speed
    let startDelay = 1000; // Delay before start typing
    let untypingDelay = 100; // Adjust for untyping speed
    let endDelay = 5000; // Delay before restarting

    function typeCharacter() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeCharacter, typingDelay);
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
            setTimeout(typeCharacter, startDelay);
        }
    }

    setTimeout(typeCharacter, startDelay);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentTopPosition = 0;
    const lineHeight = 20; // Adjust this for more or less space between lines
    const maxLines = Math.ceil(window.innerHeight / lineHeight);
    const codeSnippets = [];
    
    function generateRandomCode() {
        const characters = '01';
        let result = '';
        const charactersLength = characters.length;
        const lineLength = Math.floor(Math.random() * (75 - 25  + 1)) + 25;
    
        for (let i = 0; i < lineLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function typeCodeSnippet(codeSnippet, code, callback) {
        let typed = '';
        let index = 0;
        const typingSpeed = 50  // Adjust typing speed (lower is faster)

        function typeCharacter() {
            if (index < code.length) {
                typed += code.charAt(index);
                codeSnippet.textContent = typed;
                index++;
                setTimeout(typeCharacter, typingSpeed);
            } else if (callback) {
                setTimeout(() => callback(codeSnippet), 2000); // Wait a bit before starting to untype
            }
        }

        typeCharacter();
    }

    function untypeCodeSnippet(codeSnippet) {
        let content = codeSnippet.textContent;
        const untypingSpeed = 100; // Adjust untyping speed (lower is faster)

        function untypeCharacter() {
            if (content.length > 0) {
                content = content.substring(0, content.length - 1);
                codeSnippet.textContent = content;
                setTimeout(untypeCharacter, untypingSpeed);
            }
        }

        untypeCharacter();
    }
    
    function addCodeSnippet() {
        let codeSnippet;
        if (codeSnippets.length < maxLines) {
            codeSnippet = document.createElement('div');
            document.getElementById('code-background').appendChild(codeSnippet);
            codeSnippets.push(codeSnippet);
        } else {
            codeSnippet = codeSnippets.shift();
            codeSnippets.push(codeSnippet);
        }
    
        codeSnippet.style.position = 'absolute';
        codeSnippet.style.left = '0px';
        codeSnippet.style.top = `${currentTopPosition}px`;
        codeSnippet.style.whiteSpace = 'nowrap';
    
        currentTopPosition += lineHeight;
        if (currentTopPosition >= window.innerHeight) {
            currentTopPosition = 0;
        }

        typeCodeSnippet(codeSnippet, generateRandomCode(), untypeCodeSnippet);
    }

    let currentTopPosition2 = 0;
    const codeSnippets2 = [];

    function addCodeSnippetFromRight() {
        let codeSnippet;
        if (codeSnippets2.length < maxLines) {
            codeSnippet = document.createElement('div');
            document.getElementById('code-background-2').appendChild(codeSnippet);
            codeSnippets2.push(codeSnippet);
        } else {
            codeSnippet = codeSnippets2.shift();
            codeSnippets2.push(codeSnippet);
        }

        codeSnippet.style.position = 'absolute';
        codeSnippet.style.right = '0px'; // Align to the right
        codeSnippet.style.top = `${currentTopPosition2}px`;
        codeSnippet.style.whiteSpace = 'nowrap';
        codeSnippet.style.textAlign = 'right'; // Align text to the right

        currentTopPosition2 += lineHeight;
        if (currentTopPosition2 >= window.innerHeight) {
            currentTopPosition2 = 0;
        }

        typeCodeSnippet(codeSnippet, generateRandomCode(), untypeCodeSnippet);
    }
    
    setInterval(addCodeSnippet, 350); // Adjust time as needed for new lines
    setInterval(addCodeSnippetFromRight, 350); // New typing effect from right
});