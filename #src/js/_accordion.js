let accordionBtns = document.querySelectorAll('.accordion__title');
let accordionBlocks = document.querySelectorAll('.accordion__body');
let accordionArrows = document.querySelectorAll('.accordion__arrow');


accordionBtns.forEach((btn, i) => btn.addEventListener("click", () => {
    accordionBtns[i].classList.toggle('active');
    accordionArrows[i].classList.toggle('active');

    if (accordionBlocks[i].style.maxHeight) {
        accordionBlocks[i].style.maxHeight = null;
    } else {
        accordionBlocks[i].style.maxHeight = accordionBlocks[i].scrollHeight + "px";
    }
}));












