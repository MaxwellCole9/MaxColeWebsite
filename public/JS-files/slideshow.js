document.addEventListener("DOMContentLoaded", () => {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) {
        console.error('Slideshow container not found.');
        return;
    }

    const projects = slideshowContainer.querySelectorAll('.project');
    let currentProjectIndex = 0;

    // Function to show a specific project card
    const showProject = index => {
        projects.forEach((proj, idx) => {
            proj.style.opacity = idx === index ? '1' : '0';
        });
    };

    // Initially show the first project
    showProject(currentProjectIndex);

    // Function to rotate to the next project
    const rotateProjects = () => {
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        showProject(currentProjectIndex);
    };

    // Set interval for automatic rotation
    setInterval(rotateProjects, 5000); // Rotate every 5000 milliseconds (5 seconds)
});