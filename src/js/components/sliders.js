import Swiper, { Navigation, Pagination, Autoplay, Mousewheel } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel]);
const contactsSection = document.querySelector(".contacts-1c");
const paginationEl = contactsSection.querySelector(".contacts-1c__pagination");
paginationEl.setAttribute("data-max-slides", contactsSection.querySelectorAll(".swiper-slide").length);
const swiper = new Swiper(".contacts-1c__slider", {
	slidesPerView: 1,
	speed: 400,
	navigation: {
		nextEl: ".contacts-1c__button-next",
		prevEl: ".contacts-1c__button-prev",
	},
	pagination: {
		el: paginationEl,
		type: "progressbar",
	},
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
	},
	loop: true,
});

const mainSwiper = new Swiper(".main-1c", {
	slidesPerView: 1,
	speed: 500,
	direction: "vertical",
	mousewheel: true,
	navigation: {
		nextEl: ".main-1c__button-next",
		prevEl: ".main-1c__button-prev",
		disabledClass: "main-1c__button-disabled",
	},
});
