document.addEventListener("DOMContentLoaded", () => {
    // Function to get the thumbnail image (handles both string and array cases)
    const getThumbnail = (imageSrc) => Array.isArray(imageSrc) ? imageSrc[0] : imageSrc;

    // Function to render projects in the specified container
    const renderProjects = (projects, container) => {
        container.innerHTML = projects.map(project => `
            <a href="/${project.url}" class="grid-link">
                <div class="grid-container">
                    <div class="grid-title">
                        <h3>${project.pageTitle}</h3>
                    </div>
                    <div class="grid-img-container">
                        <img 
                            src="${getThumbnail(project.imageSrc)}" 
                            alt="${project.pageTitle}" 
                            class="grid-img"
                        >
                        <div class="grid-container-inner">
                            <p class="project-description">${project.description}</p>
                            <h3 class="click-to-view">View Project Page</h3>
                        </div>
                    </div>
                </div>
            </a>
        `).join(''); // Convert project list to HTML and insert into container
    };

    // Process each projects-section
    document.querySelectorAll('.projects-section').forEach(section => {
        const dataProjects = section.getAttribute('data-projects'); // Attribute value
        const container = section.querySelector('.grid-container-format'); // Target container
        let filteredProjects = [];

        try {
            // Attempt to parse data-projects as JSON
            const projectNames = JSON.parse(dataProjects);
            if (Array.isArray(projectNames)) {
                // Filter projects by explicit list of names
                filteredProjects = allProjects.filter(project => projectNames.includes(project.url));
            }
        } catch (e) {
            // If parsing fails, assume it's a tag and filter by tag
            const tagFilter = dataProjects; // Use the string as a tag filter
            filteredProjects = allProjects.filter(project => project.tag === tagFilter);
        }

        // Render the filtered projects in the container
        renderProjects(filteredProjects, container);
    });
});