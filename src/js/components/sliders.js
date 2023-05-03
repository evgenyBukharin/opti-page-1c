import { gsap } from "gsap";

// функция разделения текста на буквы и слова
function splitText(el) {
	el.innerHTML = el.innerText.replace(/(\S*)/g, (m) => {
		return (
			`<div style="display: inline-block" class="word">` +
			m.replace(/(#|@)?\S(#|@)?/g, "<div style='display: inline-block' class='letter'>$&</div>") +
			`</div>`
		);
	});
	return el;
}

import Swiper, { Navigation, Pagination, Autoplay, Mousewheel } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel]);

const mediaQuery840 = window.matchMedia("(max-width: 840px)");

const clientSection = document.querySelector(".client-1c");
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
	loop: true,
});

let contactsPlayCounter = 0;
let clientPlayCounter = 0;

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
	breakpoints: {
		841: {
			enabled: true,
		},
		0: {
			mousewheel: false,
			enabled: false,
		},
	},
	on: {
		activeIndexChange: () => {
			if (!mediaQuery840.matches) {
				if (mainSwiper.activeIndex == 1) {
					if (clientPlayCounter == 0) {
						if (clientSection !== null) {
							clientPlayCounter++;
							const clientTl = gsap.timeline();
							const clientTitle = clientSection.querySelector(".client-1c__title");
							let clientSplitArray = Array.from(splitText(clientTitle).querySelectorAll(".letter"));
							clientSplitArray.forEach((letter) => {
								clientTl.fromTo(
									letter,
									{
										opacity: 0,
									},
									{
										opacity: 1,
										duration: 1 / clientSplitArray.length,
									}
								);
							});

							const clientSubTitle = clientSection.querySelector(".client-1c__subtitle");
							clientSplitArray = Array.from(splitText(clientSubTitle).querySelectorAll(".letter"));
							clientSplitArray.forEach((letter) => {
								clientTl.fromTo(
									letter,
									{
										opacity: 0,
									},
									{
										opacity: 1,
										duration: 1 / clientSplitArray.length,
									}
								);
							});

							const client1cItems = clientSection.querySelectorAll(".client-1c__item");
							client1cItems.forEach((item, idx) => {
								clientTl.fromTo(
									item.querySelector(".line-horizontal-top"),
									{
										width: 0,
									},
									{ width: "100%", duration: 0.3 },
									`-=${idx * 0.6}`
								);
								let verticalRightLine = item.querySelector(".line-vertical-right");
								if (verticalRightLine !== null) {
									clientTl.fromTo(
										verticalRightLine,
										{
											height: 0,
										},
										{ height: "100%", duration: 0.3 }
									);
								}
								clientTl.fromTo(
									item.querySelector(".client-1c__container-image"),
									{
										opacity: 0,
										y: 5,
										x: 5,
									},
									{ opacity: 1, y: 0, x: 0, duration: 0.3 },
									`-=${idx * 0.4}`
								);
								clientSplitArray = Array.from(
									splitText(item.querySelector(".client-1c__text")).querySelectorAll(".letter")
								);
								clientSplitArray.forEach((el) => {
									clientTl.fromTo(
										el,
										{
											opacity: 0,
										},
										{
											opacity: 1,
											duration: 0.3 / clientSplitArray.length,
										}
									);
								});
							});
						}
					}
				} else if (mainSwiper.activeIndex == 2) {
					if (contactsPlayCounter == 0) {
						contactsPlayCounter++;
						if (contactsSection) {
							const contactsTl = gsap.timeline();
							const address = contactsSection.querySelector(
								".swiper-slide-active .contacts-1c__address-first"
							);
							let contactsSplitArray = Array.from(splitText(address).querySelectorAll(".letter"));
							contactsSplitArray.forEach((letter) => {
								contactsTl.fromTo(
									letter,
									{
										opacity: 0,
									},
									{
										opacity: 1,
										duration: 0.9 / contactsSplitArray.length,
									}
								);
							});
							contactsTl.fromTo(
								".swiper-slide-active .contacts-1c__name",
								{
									opacity: 0,
									y: 5,
									x: 5,
								},
								{ opacity: 1, y: 0, x: 0, duration: 0.5 },
								`-=0.2`
							);
							contactsTl.fromTo(
								".swiper-slide-active .contacts-1c__job",
								{
									opacity: 0,
									y: 5,
									x: -5,
								},
								{ opacity: 1, y: 0, x: 0, duration: 0.3 },
								`-=0.1`
							);
							contactsTl.fromTo(
								".swiper-slide-active .contacts-1c__tel",
								{
									opacity: 0,
									y: 5,
									x: 5,
								},
								{ opacity: 1, y: 0, x: 0, duration: 0.3 },
								`-=0.1`
							);
							contactsTl.fromTo(
								".swiper-slide-active .contacts-1c__descr",
								{
									opacity: 0,
								},
								{ opacity: 1, y: 0, x: 0, duration: 0.5 }
							);
							const addressSecond = contactsSection.querySelector(
								".swiper-slide-active .contacts-1c__address-second"
							);
							contactsSplitArray = Array.from(splitText(addressSecond).querySelectorAll(".letter"));
							contactsSplitArray.forEach((letter) => {
								contactsTl.fromTo(
									letter,
									{
										opacity: 0,
									},
									{
										opacity: 1,
										duration: 0.4 / contactsSplitArray.length,
									}
								);
							});
							contactsTl.fromTo(
								".contacts-1c__navigation",
								{
									opacity: 0,
								},
								{ opacity: 1, duration: 0.5 }
							);
							contactsTl.fromTo(
								".contacts-1c__container-pagination",
								{
									opacity: 0,
								},
								{ opacity: 1, duration: 0.5 }
							);
							contactsTl.fromTo(
								".contacts-1c__button-faq",
								{
									opacity: 0,
									x: 40,
								},
								{ opacity: 1, x: 0, duration: 0.5 }
							);
						}
					}
				}
			}
		},
	},
});

if (mediaQuery840.matches) {
	mainSwiper.destroy(true, true);
}
