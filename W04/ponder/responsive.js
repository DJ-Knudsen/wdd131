// Grab the menu button HTML and save to a vairable
let menuButton = document.querySelector('.menu-btn');

// add event listener to button
// anonymous or nameless function
menuButton.addEventListener("click", function (e) {
    // grab a reference to the nav
    let nav = document.querySelector('nav');

    // toggle menu styles when clicked
    nav.style.display = nav.style.display === '' ? 'flex' : '';
    menuButton.classList.toggle('change');
});

