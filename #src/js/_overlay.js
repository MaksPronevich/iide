const overlay = document.querySelector('.overlay');
const overlayBtn = document.querySelector('.overlay__btn');

overlayBtn.addEventListener("click", () => {
    overlayBtn.classList.toggle('active');
    overlay.classList.toggle('open');

    if (overlay.classList.contains('open')) {
        bodyLock();
    } else {
        bodyUnLock();
    }
});




