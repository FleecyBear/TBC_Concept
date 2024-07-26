document.addEventListener('DOMContentLoaded', function() {
    const arrows = document.querySelectorAll('.arrow-end');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            const menuContent = this.closest('.menu-header-end').nextElementSibling;
            menuContent.classList.toggle('show');

            // Rotate the arrow
            this.style.transform = menuContent.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
});
