const burger = document.querySelector(".burger");
if (burger !== null) {
	burger.addEventListener("click", () => {
		burger.classList.toggle("burger-active");
	});
}
