const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuButton2 = document.querySelector('.menu-button2');
const navsec = document.querySelector('#navsect');

function controlMenu(button, menu) {
    button.addEventListener('click', () => {

        if (menu.style.display == "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });
}

controlMenu(menuButton, menu);
controlMenu(menuButton2, navsec);

const body = document.getElementsByTagName('body')[0];

body.addEventListener('resize', () => {
    if (window.innerWidth >= 865) {
        navsec.style = 'display: flex; flex-direction: row; justify-content: space-between;';
    } else {
        navsec.style.display = 'none';
    }
});
