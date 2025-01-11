///Standard nav menu with dropdown.
// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#bcw-navigation');
const CShamburgerMenu = document.querySelector('#bcw-navigation .bcw-toggle');

CShamburgerMenu.addEventListener('click', function () {
    CShamburgerMenu.classList.toggle('bcw-active');
    CSnavbarMenu.classList.toggle('bcw-active');
    CSbody.classList.toggle('bcw-open');
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the bcw-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
    const csUL = document.querySelector('#bcw-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav dropdown code
const dropDowns = Array.from(document.querySelectorAll('#bcw-navigation .bcw-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('bcw-active');
    };
    item.addEventListener('click', onClick);
}

// Add click event listeners to links inside the navigation
// Close dropdown menu
const navLinks = Array.from(document.querySelectorAll('#bcw-navigation .bcw-li-link'));
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the 'bcw-active' class from the navigation menu
        CSnavbarMenu.classList.remove('bcw-active');
        CSbody.classList.remove('bcw-open');
        CShamburgerMenu.classList.remove('bcw-active');

    });
});
