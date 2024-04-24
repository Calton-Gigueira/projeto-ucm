const arrow = document.querySelector('#arrow');
const instrucstionSection = document.querySelector("#instructions-section");
const footer = document.getElementsByTagName('footer')[0];
const upArrow = document.querySelector("#arrow").textContent;
const downArrow = document.querySelector("#down-arrow").textContent;

arrow.addEventListener('click', () => {
    instrucstionSection.classList.toggle('hide-content');

    footer.classList.toggle('footer');

    if (arrow.textContent == upArrow) {
        arrow.textContent = downArrow;
    } else {
        arrow.textContent = upArrow;
    }
});
