import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

const clientSection = document.querySelector(".client-1c");
const contactsSection = document.querySelector(".contacts-1c");

// таймлайн первой секции
const hero1c = document.querySelector(".hero-1c");
hero1c.style.opacity = "1";
if (hero1c !== null) {
	const heroTl = gsap.timeline();

	const heroTitle = hero1c.querySelector(".hero-1c__title");
	const heroSubTitle = hero1c.querySelector(".hero-1c__subtitle");
	let heroSplitArray = Array.from(splitText(heroTitle).querySelectorAll(".letter"));
	heroSplitArray.forEach((el) => {
		heroTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.7 / heroSplitArray.length,
			}
		);
	});

	heroSplitArray = Array.from(splitText(heroSubTitle).querySelectorAll(".letter"));
	heroSplitArray.forEach((el) => {
		heroTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.7 / heroSplitArray.length,
			}
		);
	});
	const hero1cItems = hero1c.querySelectorAll(".hero-1c__item");
	hero1cItems.forEach((item, idx) => {
		heroTl.fromTo(
			item.querySelector(".line-horizontal-top"),
			{
				width: 0,
			},
			{ width: "100%", duration: 0.3 },
			`-=${idx * 0.6}`
		);
		let verticalRightLine = item.querySelector(".line-vertical-right");
		if (verticalRightLine !== null) {
			heroTl.fromTo(
				verticalRightLine,
				{
					height: 0,
				},
				{ height: "100%", duration: 0.3 }
			);
		}
		heroTl.fromTo(
			item.querySelector(".hero-1c__icon"),
			{
				opacity: 0,
				y: 5,
				x: 5,
			},
			{ opacity: 1, y: 0, x: 0, duration: 0.3 },
			`-=${idx * 0.4}`
		);
		heroSplitArray = Array.from(splitText(item.querySelector(".hero-1c__title-item")).querySelectorAll(".letter"));
		heroSplitArray.forEach((el) => {
			heroTl.fromTo(
				el,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.3 / heroSplitArray.length,
				}
			);
		});
		heroTl.fromTo(
			item.querySelector(".hero-1c__text"),
			{
				opacity: 0,
				y: 5,
				x: 5,
			},
			{ opacity: 1, y: 0, x: 0, duration: 0.3 }
		);
	});
	heroTl.fromTo(
		hero1c.querySelector(".hero-1c__form"),
		{
			opacity: 0,
			y: 10,
			x: 10,
		},
		{ opacity: 1, y: 0, x: 0, duration: 0.3 }
	);
}

const mediaQuery840 = window.matchMedia("(max-width: 840px)");

if (mediaQuery840.matches) {
	// client Tl
	const clientTl = gsap.timeline();
	ScrollTrigger.create({
		trigger: ".client-1c",
		start: "top 80%",
		toggleActions: "play pause resume none",
		animation: clientTl,
	});
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
				duration: 0.5 / clientSplitArray.length,
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
				duration: 0.4 / clientSplitArray.length,
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
		clientSplitArray = Array.from(splitText(item.querySelector(".client-1c__text")).querySelectorAll(".letter"));
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

	// contacts tl
	const contactsTl = gsap.timeline();
	ScrollTrigger.create({
		trigger: ".contacts-1c",
		start: "top 80%",
		toggleActions: "play pause resume none",
		animation: contactsTl,
	});
	const address = contactsSection.querySelector(".swiper-slide-active .contacts-1c__address-first");
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
	const addressSecond = contactsSection.querySelector(".swiper-slide-active .contacts-1c__address-second");
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
