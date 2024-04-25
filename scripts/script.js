const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuButton2 = document.querySelector('.menu-button2');
const navsec = document.querySelector('#navsect');

function controlMenu(button, menu) {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        if (menu.style.display == "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }

        console.log('clicked')

    });
}

controlMenu(menuButton, menu);
controlMenu(menuButton2, navsec);

const body = document.getElementsByTagName('body')[0];

body.addEventListener('resize', (event) => {
    event.preventDefault();
    
    if (window.innerWidth >= 865) {
        navsec.style = 'display: flex; flex-direction: row; justify-content: space-between;';
    } else {
        navsec.style.display = 'none';
    }

});
