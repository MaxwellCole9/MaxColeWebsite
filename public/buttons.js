function toggleDropdown(dropdownId) {
    var content = document.getElementById(dropdownId + '-content');
    var button = document.getElementById(dropdownId + '-btn');
    var symbol = document.getElementById(dropdownId + '-symbol');

    if (content.style.display === 'block') {
        content.style.display = 'none';
        button.setAttribute('aria-expanded', 'false');
        symbol.style.fill = 'white'; /* Change this line */
    } else {
        content.style.display = 'block';
        button.setAttribute('aria-expanded', 'true');
        symbol.style.fill = 'var(--secondary-color)'; /* Change this line */
    }
}

function toggleDropdown(dropdownId) {
    var content = document.getElementById(dropdownId + '-content');
    var button = document.getElementById(dropdownId + '-btn');
    var symbol = document.getElementById(dropdownId + '-symbol');

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        symbol.src = 'symbols/expand_more_FILL0_wght400_GRAD0_opsz24.svg';
        button.setAttribute('aria-expanded', 'false');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        symbol.src = 'symbols/expand_less_FILL0_wght400_GRAD0_opsz24.svg';
        button.setAttribute('aria-expanded', 'true');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var tabButton = document.getElementById('tab-button');
    var tabIcon = document.getElementById('tab-symbol');
    var socialMediaIcons = document.getElementById('social-media-icons');

    if (tabButton) {
        tabButton.addEventListener('click', function() {
            // Rotate the chevron icon
            tabIcon.style.transform = tabIcon.style.transform === 'rotate(-90deg)' ? 'rotate(0deg)' : 'rotate(-90deg)';

            // Toggle social media icons
            if (socialMediaIcons.classList.contains('shown')) {
                socialMediaIcons.classList.remove('shown');
            } else {
                socialMediaIcons.classList.add('shown');
            }
        });
    }
});