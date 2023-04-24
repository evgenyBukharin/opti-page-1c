import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const mediaQuery768 = window.matchMedia("(max-width: 768px)");

// функция разделения текста на буквы и слова
function splitText(el) {
	el.innerHTML = el.innerText.replace(/(\S*)/g, (m) => {
		return (
			`<div style="display: inline-block" class="word">` +
			m.replace(/(#|@)?\S(#|@)?/g, "<div style='display: inline-block' class='letter'>$&</div>") +
			`</div>`
		);
	});
	const words = el.querySelectorAll(".word");
	words.forEach((word) => {
		if (word.innerHTML == "") {
			word.remove();
		}
		const letters = word.querySelectorAll(".letter");
		letters.forEach((letter) => {
			if (letter.innerHTML == "-" && word.offsetHeight > 50 && mediaQuery768.matches) {
				letter.insertAdjacentHTML("afterend", "<br>");
			}
		});
	});
	return el;
}

// таймлайн первой секции
if (document.querySelector(".hero") !== null) {
	const heroTl = gsap.timeline({});
	const heroContainer = document.querySelector(".hero__container");
	const heroTitle = document.querySelector(".hero__title");
	heroTitle.style.opacity = "1";
	heroContainer.style.opacity = "1";
	let heroCounter = 0;
	const heroSplitArray = Array.from(splitText(heroTitle).querySelectorAll(".letter"));
	heroSplitArray.forEach((el) => {
		if (el.innerHTML == "1" && heroCounter == 0) {
			el.closest(".word").insertAdjacentHTML("beforeBegin", "<br>");
			heroCounter++;
		}
		heroTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1 / heroSplitArray.length,
			}
		);
	});
	heroTl.fromTo(".hero__text", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5");
	heroTl.fromTo(".hero__button", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.3");
}

// таймлайн второй секции
if (document.querySelector(".why") !== null) {
	const whyTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".why",
			start: "-40% center",
			toggleActions: "play pause resume play",
		},
	});
	let whySplitArray = Array.from(splitText(document.querySelector(".why__title")).querySelectorAll(".letter"));
	whySplitArray.forEach((el) => {
		whyTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1 / whySplitArray.length,
			}
		);
	});

	// первый блок текста
	whyTl.fromTo(
		".why__item-1 .line-horizontal-top",
		{
			width: 0,
		},
		{ width: "100%", duration: 0.3 }
	);
	whyTl.fromTo(
		".why__item-1 .line-vertical-right",
		{
			height: 0,
		},
		{ height: "100%", duration: 0.3 },
		"-=0.3"
	);
	whySplitArray = Array.from(
		splitText(document.querySelector(".why__item-1 .why__subtitle")).querySelectorAll(".letter")
	);
	whySplitArray.forEach((el) => {
		whyTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.5 / whySplitArray.length,
			}
		);
	});
	whySplitArray = Array.from(
		splitText(document.querySelector(".why__item-1 .why__text")).querySelectorAll(".letter")
	);
	whySplitArray.forEach((el) => {
		whyTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.7 / whySplitArray.length,
			}
		);
	});

	// второй блок текста
	whyTl.fromTo(
		".why__item-2 .line-horizontal-top",
		{
			width: 0,
		},
		{ width: "100%", duration: 0.3 },
		"-=0.5"
	);
	whyTl.fromTo(
		".why__item-2 .line-vertical-right",
		{
			height: 0,
		},
		{ height: "100%", duration: 0.3 },
		"-=0.5"
	);
	whySplitArray = Array.from(
		splitText(document.querySelector(".why__item-2 .why__subtitle")).querySelectorAll(".letter")
	);
	let itemTitleTl = gsap.timeline({
		delay: -0.3,
	});
	whySplitArray.forEach((el) => {
		itemTitleTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.5 / whySplitArray.length,
			}
		);
	});
	whyTl.add(itemTitleTl);
	whySplitArray = Array.from(
		splitText(document.querySelector(".why__item-2 .why__text")).querySelectorAll(".letter")
	);
	itemTitleTl = gsap.timeline({
		delay: -0.3,
	});
	whySplitArray.forEach((el) => {
		itemTitleTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.7 / whySplitArray.length,
			}
		);
	});
	whyTl.add(itemTitleTl);

	// третий блок текста
	whyTl.fromTo(
		".why__item-3 .line-horizontal-top",
		{
			width: 0,
		},
		{ width: "100%", duration: 0.5 },
		"-=0.4"
	);
	whySplitArray = Array.from(
		splitText(document.querySelector(".why__item-3 .why__subtitle")).querySelectorAll(".letter")
	);
	itemTitleTl = gsap.timeline({
		delay: -0.3,
	});
	whySplitArray.forEach((el) => {
		itemTitleTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.5 / whySplitArray.length,
			}
		);
	});
	whyTl.add(itemTitleTl);
	whySplitArray = Array.from(
		splitText(document.querySelector(".why__item-3 .why__text")).querySelectorAll(".letter")
	);
	itemTitleTl = gsap.timeline({
		delay: -0.5,
	});
	whySplitArray.forEach((el) => {
		itemTitleTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1 / whySplitArray.length,
			}
		);
	});
	whyTl.add(itemTitleTl);
}

// секция cool
if (document.querySelector(".cool") !== null) {
	const coolTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".cool",
			start: "top 80%",
			toggleActions: "play pause resume play",
		},
	});
	coolTl.fromTo(
		".cool__container-left .line-horizontal-top",
		{
			width: 0,
		},
		{ width: "100%", duration: 0.5 }
	);
	coolTl.fromTo(
		".cool__container-left-overlay",
		{
			height: "100%",
		},
		{ height: 0, duration: 0.5 }
	);
	coolTl.fromTo(
		".cool__container-left .line-horizontal-bottom",
		{
			width: 0,
		},
		{ width: "100%", duration: 0.5 }
	);
	coolTl.fromTo(
		".cool__container-left .line-vertical-right",
		{
			height: 0,
		},
		{ height: "100%", duration: 0.5 }
	);
	coolTl.fromTo(
		".cool__container-right .line-horizontal-top",
		{
			width: 0,
		},
		{ width: "100%", duration: 0.5 },
		"-=0.5"
	);
	coolTl.fromTo(
		".cool__container-right .line-horizontal-bottom",
		{
			width: 0,
		},
		{ width: "100%", duration: 0.5 },
		"-=0.5"
	);
	let coolSplitArray = Array.from(splitText(document.querySelector(".cool__title")).querySelectorAll(".letter"));
	coolSplitArray.forEach((el) => {
		coolTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1 / coolSplitArray.length,
			}
		);
	});
	coolTl.fromTo(
		".cool__list",
		{
			opacity: 0,
		},
		{
			opacity: 1,
			duration: 1,
		}
	);
	const coolItems = document.querySelectorAll(".cool__item");
	coolItems.forEach((item, idx) => {
		let tempTl = gsap.timeline({
			delay: -1,
		});
		coolSplitArray = Array.from(splitText(item).querySelectorAll(".letter"));
		coolSplitArray.forEach((el) => {
			tempTl.fromTo(
				el,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 1 / coolSplitArray.length,
				}
			);
		});
		coolTl.add(tempTl);
	});
	coolTl.fromTo(".cool__button", { opacity: 0 }, { opacity: 1, duration: 0.5 });
}

// секция cases
if (document.querySelector(".cases") !== null) {
	const casesTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".cases",
			start: "top 80%",
			toggleActions: "play pause resume play",
		},
	});

	let casesSplitArray = Array.from(splitText(document.querySelector(".cases__title")).querySelectorAll(".letter"));
	casesSplitArray.forEach((el) => {
		casesTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.6 / casesSplitArray.length,
			}
		);
	});

	const casesItems = Array.from(document.querySelectorAll(".cases__item"));
	const casesImages = Array.from(document.querySelectorAll(".cases__image"));
	const casesLinesHorizontalTop = Array.from(document.querySelectorAll(".cases__item .line-horizontal-top"));
	const casesLinesHorizontalBottom = Array.from(document.querySelectorAll(".cases__item .line-horizontal-bottom"));
	const casesTime = Array.from(document.querySelectorAll(".cases__time"));
	const casesTitleArticle = Array.from(document.querySelectorAll(".cases__item .cases__title-article"));
	const casesTitleArticleArray = [];
	const casesTags = Array.from(document.querySelectorAll(".cases__item .cases__tags"));
	const casesLinesVerticalRight = Array.from(document.querySelectorAll(".cases__item .line-vertical-right"));
	casesTitleArticle.forEach((elem) => {
		casesTitleArticleArray.push(Array.from(splitText(elem).querySelectorAll(".letter")));
	});

	casesItems.forEach((elem, idx) => {
		let caseTl = gsap.timeline();
		ScrollTrigger.create({
			trigger: elem,
			start: "top 80%",
			toggleActions: "play pause resume none",
			animation: caseTl
				.from(casesImages[idx], {
					y: 50,
					duration: 0.5,
					ease: "power2.in",
					opacity: 0,
				})
				.fromTo(
					casesLinesHorizontalTop[idx],
					{
						width: 0,
					},
					{
						width: "100%",
						duration: 0.3,
					}
				)
				.fromTo(
					casesLinesVerticalRight[idx],
					{
						height: 0,
					},
					{
						height: "100%",
						duration: 0.3,
					}
				)
				.fromTo(
					casesLinesHorizontalBottom[idx],
					{
						width: 0,
						duration: 0.3,
					},
					{
						width: "100%",
					}
				),
		});
		let casesSplitArray = casesTitleArticleArray[idx];
		casesSplitArray.forEach((el) => {
			caseTl.to(el, {
				opacity: 1,
				duration: 0.6 / casesSplitArray.length,
			});
		});
		caseTl
			.fromTo(
				casesTime[idx],
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.3,
				}
			)
			.fromTo(
				casesTags[idx],
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.3,
				}
			)
			.to(elem, { pointerEvents: "all" });
	});
}

// секция steps
if (document.querySelector(".steps") !== null) {
	const stepsTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".steps",
			start: "top 80%",
			toggleActions: "play pause resume play",
		},
	});

	let stepsSplitArray = Array.from(
		splitText(document.querySelector(".steps__title-main")).querySelectorAll(".letter")
	);
	stepsSplitArray.forEach((el) => {
		stepsTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1 / stepsSplitArray.length,
			}
		);
	});
	const stepsAccordions = Array.from(document.querySelectorAll(".steps__accordion"));
	const stepsTitle = Array.from(document.querySelectorAll(".steps__title-inner"));
	const stepsHorizontalLinesBottom = Array.from(
		document.querySelectorAll(".steps__accordion .line-horizontal-bottom")
	);
	const stepsTitleArrays = [];
	stepsTitle.forEach((elem) => {
		stepsTitleArrays.push(Array.from(splitText(elem).querySelectorAll(".letter")));
	});
	stepsAccordions.forEach((elem, idx) => {
		let accrodionTl = gsap.timeline();
		let stepsTitleArray = stepsTitleArrays[idx];
		let titleTl = gsap.timeline({
			onStart: () => {
				stepsTitle[idx].parentNode.classList.add("steps__title-after-visible");
			},
		});
		stepsTitleArray.forEach((el) => {
			titleTl.fromTo(
				el,
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 1 / stepsTitleArray.length,
				}
			);
		});
		accrodionTl.add(titleTl);
		ScrollTrigger.create({
			trigger: elem,
			start: "top 80%",
			toggleActions: "play pause resume none",
			animation: accrodionTl.fromTo(
				stepsHorizontalLinesBottom[idx],
				{
					width: 0,
				},
				{
					width: "100%",
					duration: 1,
				}
			),
		});
	});
}

// секция FAQ
if (document.querySelector(".faq") !== null) {
	const faqTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".faq",
			start: "top 80%",
			toggleActions: "play pause resume play",
		},
	});

	let faqSplitArray = Array.from(splitText(document.querySelector(".faq__title-main")).querySelectorAll(".letter"));
	faqSplitArray.forEach((el) => {
		faqTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1 / faqSplitArray.length,
			}
		);
	});
	const faqAccordions = Array.from(document.querySelectorAll(".faq__accordion"));
	const faqTitle = Array.from(document.querySelectorAll(".faq__title-inner"));
	const faqNumber = Array.from(document.querySelectorAll(".faq__title-number"));
	const faqDot = Array.from(document.querySelectorAll(".faq__icon"));
	const faqHorizontalLinesBottom = Array.from(document.querySelectorAll(".faq__accordion .line-horizontal-bottom"));
	const faqTitleArrays = [];
	faqTitle.forEach((elem) => {
		faqTitleArrays.push(Array.from(splitText(elem).querySelectorAll(".letter")));
	});
	faqAccordions.forEach((elem, idx) => {
		let accrodionTl = gsap.timeline();
		accrodionTl.fromTo(
			faqNumber[idx],
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 0.5,
			}
		);
		accrodionTl.fromTo(
			faqDot[idx],
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 0.5,
			},
			"-=0.5"
		);
		let faqTitleArray = faqTitleArrays[idx];
		let titleTl = gsap.timeline({});
		faqTitleArray.forEach((el) => {
			titleTl.fromTo(
				el,
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 1 / faqTitleArray.length,
				}
			);
		});
		accrodionTl.add(titleTl);
		ScrollTrigger.create({
			trigger: elem,
			start: "top 90%",
			toggleActions: "play pause resume none",
			animation: accrodionTl.fromTo(
				faqHorizontalLinesBottom[idx],
				{
					width: 0,
				},
				{
					width: "100%",
					duration: 1,
				}
			),
		});
	});
}

// секция feedback
if (document.querySelector(".feedback") !== null) {
	const feedbackTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".feedback",
			start: "top 80%",
			toggleActions: "play pause resume play",
		},
	});
	const firstTopLine = document.querySelector(".feedback__side-left .line-horizontal-top");
	const secondTopLine = document.querySelector(".feedback__side-right .line-horizontal-top");
	const rightLine = document.querySelector(".feedback__side-left .line-vertical-right");
	const feedbackForm = document.querySelector(".feedback__form");
	feedbackTl.fromTo(
		firstTopLine,
		{
			width: 0,
		},
		{
			width: "100%",
			duration: 0.5,
		}
	);
	feedbackTl.fromTo(
		rightLine,
		{
			height: 0,
		},
		{
			height: "100%",
			duration: 0.5,
		},
		"-=0.5"
	);
	let feedbackSplitArray = Array.from(
		splitText(document.querySelector(".feedback__title")).querySelectorAll(".letter")
	);
	feedbackSplitArray.forEach((el) => {
		feedbackTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1 / feedbackSplitArray.length,
			}
		);
	});
	feedbackTl.fromTo(
		secondTopLine,
		{
			width: 0,
		},
		{
			width: "100%",
			duration: 0.5,
		},
		"-=0.5"
	);
	feedbackSplitArray = Array.from(
		splitText(document.querySelector(".feedback__subtitle")).querySelectorAll(".letter")
	);
	feedbackSplitArray.forEach((el) => {
		feedbackTl.fromTo(
			el,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1 / feedbackSplitArray.length,
			}
		);
	});
	feedbackTl.fromTo(
		feedbackForm,
		{
			opacity: 0,
		},
		{
			opacity: 1,
			duration: 1,
		},
		"-=1"
	);
}
