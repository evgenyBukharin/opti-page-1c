const accordionfaq = document.querySelectorAll(".faq__accordion");
let prevElem = null;
accordionfaq.forEach((el) => {
	el.addEventListener("click", (e) => {
		const self = e.currentTarget;
		const control = self.querySelector(".faq__control");
		const content = self.querySelector(".faq__content");

		if (prevElem !== null) {
			let prevControl = prevElem.querySelector(".faq__control");
			let prevcontent = prevElem.querySelector(".faq__content");
			prevElem.classList.remove("faq__accordion-open");
			prevControl.setAttribute("aria-expanded", false);
			prevControl.setAttribute("aria-hidden", true);
			prevcontent.style.maxHeight = null;
		}

		self.classList.toggle("faq__accordion-open");

		if (self.classList.contains("faq__accordion-open")) {
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
