const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 500;


const bodyLock = () => {
    const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
};


const bodyUnLock = () => {
    setTimeout(() => {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
};;

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




;

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

;

const flipCards = document.querySelectorAll('.flip-card');
const flipCardsInner = document.querySelectorAll('.flip-card-inner');


flipCards.forEach((card, i) => card.addEventListener("click", () => {
    flipCardsInner[i].classList.toggle('flip-card-rotate');
}));;

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












;

const popupLinks = document.querySelectorAll('.popup-link');

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener("click", (e) => {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let i = 0; i < popupCloseIcon.length; i++) {
		const el = popupCloseIcon[i];
		el.addEventListener('click', (e) => {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

const popupOpen = (curentPopup) => {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", (e) => {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
};

const popupClose = (popupActive, doUnlock = true) => {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
};





;

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('anim-active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('anim-active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}

	setTimeout(() => {
		animOnScroll();
	}, 100);
}
;

new Swiper('.reviews-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: (index, className) => {
            return `<span class="${className}">${(index + 1)}</span>`;
        },
    },
    touchRatio: 2,
    grabCursor: true,
    autoHeight: true,
    // slidesPerView: 2,
    // spaceBetween: 30,
    // centerSlides: true,
    loop: true,
});
;




