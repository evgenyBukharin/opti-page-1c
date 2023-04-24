const accordionSteps = document.querySelectorAll(".steps__accordion");

let prevElem = null;
accordionSteps.forEach((el) => {
	el.addEventListener("click", (e) => {
		const self = e.currentTarget;
		const control = self.querySelector(".steps__control");
		const content = self.querySelector(".steps__content");

		if (prevElem !== null) {
			let prevControl = prevElem.querySelector(".steps__control");
			let prevcontent = prevElem.querySelector(".steps__content");
			prevElem.classList.remove("steps__accordion-open");
			prevControl.setAttribute("aria-expanded", false);
			prevControl.setAttribute("aria-hidden", true);
			prevcontent.style.maxHeight = null;
		}

		self.classList.toggle("steps__accordion-open");

		if (self.classList.contains("steps__accordion-open")) {
			control.setAttribute("aria-expanded", true);
			content.setAttribute("aria-hidden", false);
			content.style.maxHeight = content.scrollHeight + "px";
		} else {
			control.setAttribute("aria-expanded", false);
			content.setAttribute("aria-hidden", true);
			content.style.maxHeight = null;
		}

		prevElem = self;
	});
});
