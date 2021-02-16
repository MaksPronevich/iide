let tabBtns = document.querySelectorAll('.tab-btn');
let tabBlocks = document.querySelectorAll('.tab-block');


const deactivationTabs = () => {
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabBlocks.forEach(block => block.classList.remove('active'));
};


tabBtns.forEach((btn, i) => btn.addEventListener("click", (e) => {
    e.preventDefault();
    deactivationTabs();
    btn.classList.add('active');
    tabBlocks[i].classList.add('active');
}));

