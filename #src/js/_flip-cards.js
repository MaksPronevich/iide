const flipCards = document.querySelectorAll('.flip-card');
const flipCardsInner = document.querySelectorAll('.flip-card-inner');


flipCards.forEach((card, i) => card.addEventListener("click", () => {
    flipCardsInner[i].classList.toggle('flip-card-rotate');
}));