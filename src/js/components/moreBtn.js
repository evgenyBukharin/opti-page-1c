const moreBtn = document.querySelector(".cases__button-more");
const hiddenItems = document.querySelectorAll(".cases__item-hidden");
if (moreBtn !== null) {
	moreBtn.addEventListener("click", () => {
		hiddenItems.forEach((item) => {
			item.classList.remove("cases__item-hidden");
		});
		moreBtn.style.display = "none";
	});
}
