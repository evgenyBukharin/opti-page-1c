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
