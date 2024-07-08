document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.mobile-menu img');
    const navigation = document.querySelector('.navigation');

    menuIcon.addEventListener('click', function() {
        navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            const content = this.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});