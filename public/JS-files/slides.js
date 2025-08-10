document.addEventListener("DOMContentLoaded", () => {
    const getThumbnail = (imageSrc) => Array.isArray(imageSrc) ? imageSrc[0] : imageSrc;

    const renderProjects = (projects, container) => {
        container.innerHTML = projects.map(project => `
            <a href="/${project.url}" class="project-thumbnail background-dark-gray">
                <div class="project-thumbnail-inner">
                    <h3 class="project-title">${project.pageTitle}</h3>
                        <div class=project-thumbnail-text-wrapper>
                            <h3 class="project-subtitle">${project.subtitle}</h3>
                            <div class="project-thumbnail-text">
                                <p class="project-description text-pretty">${project.description}</p>
                                <p class="click-view">Click to view project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-img">
                    <img src="${getThumbnail(project.imageSrc)}" alt="${project.pageTitle}">
                </div>
            </a>
        `).join('');
    };

    document.querySelectorAll('.projects-section').forEach(section => {
        const dataProjects = section.getAttribute('data-projects');
        let filteredProjects = [];

        try {
            const projectNames = JSON.parse(dataProjects);
            if (Array.isArray(projectNames)) {
                filteredProjects = allProjects.filter(project => projectNames.includes(project.url));
            }
        } catch {
            filteredProjects = allProjects.filter(project => project.tag === dataProjects);
        }

        renderProjects(filteredProjects, section);
    });
});