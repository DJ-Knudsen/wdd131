let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

const lightLogo = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
const darkLogo = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.classList.add('dark-mode');
        logo.setAttribute("src", darkLogo);
    } else {
        // code for changes to colors and logo
        document.body.classList.remove('dark-mode');
        logo.setAttribute("src", lightLogo);
    }
}