document.addEventListener('DOMContentLoaded', function() {
    var tabButton = document.getElementById('tab-button');
    var socialMediaIcons = document.getElementById('social-media-icons');
    var tabSymbol = document.getElementById('tab-symbol');

    tabButton.addEventListener('click', function() {
        socialMediaIcons.classList.toggle('shown');
        tabSymbol.style.transform = socialMediaIcons.classList.contains('shown') ? 'rotate(90deg)' : 'rotate(0deg)';
    });
});