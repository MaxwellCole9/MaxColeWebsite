document.addEventListener("DOMContentLoaded", () => {
    // Function to get the thumbnail image (handles both string and array cases)
    const getThumbnail = (imageSrc) => {
        if (Array.isArray(imageSrc)) {
            return imageSrc[0]; // Use the first image in the array as the thumbnail
        }
        return imageSrc; // If it's a string, use it directly
    };

    // Function to render projects in a section
    const renderProjects = (projects, container) => {
        container.innerHTML = projects.map(project => `
            <a href="/${project.url}" class="grid-link">
                <div class="grid-container">
                    <img src="${getThumbnail(project.imageSrc)}" alt="${project.pageTitle}" class="grid-img">
                    <div class="grid-container-inner center-algin">
                        <h3 class="text-accent-dark">${project.pageTitle}</h3>
                        <p class="project-description">${project.description}</p>
                        <p class="click-to-view">View Project Page</p>
                    </div>
                </div>
            </a>
        `).join('');
    };

    // Process each projects-section
    const sections = document.querySelectorAll('.projects-section');
    sections.forEach(section => {
        const dataProjects = section.getAttribute('data-projects'); // Get the data-projects attribute
        const container = section.querySelector('.grid-container-format'); // Get container

        let filteredProjects = [];

        try {
            // Check if the attribute is a JSON array of project names
            const projectNames = JSON.parse(dataProjects);
            if (Array.isArray(projectNames)) {
                // Match projects by explicit list of names
                filteredProjects = allProjects.filter(project => projectNames.includes(project.url));
            }
        } catch (e) {
            // If parsing fails, assume it's a tag and filter by tag
            const tagFilter = dataProjects; // Use the string as the tag
            filteredProjects = allProjects.filter(project => project.tag === tagFilter);
        }

        // Render the projects in the container
        renderProjects(filteredProjects, container);
    });
});