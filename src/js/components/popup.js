import { gsap } from "gsap";
const popupSection = document.querySelector(".popup-1c");
const popupButton = document.getElementById("popupButton");

const popupTl = gsap.timeline();
popupTl.pause();
popupTl.to(".popup-1c", { opacity: 1, visibility: "visible", duration: 0.2 }).fromTo(
	".popup-1c__form",
	{
		opacity: 0,
		y: -50,
		visibility: "hidden",
	},
	{
		opacity: 1,
		y: 0,
		visibility: "visible",
		duration: 0.4,
	}
);

popupButton.addEventListener("click", () => {
	popupTl.play();
});

popupSection.addEventListener("click", () => {
	popupTl.reverse();
});
