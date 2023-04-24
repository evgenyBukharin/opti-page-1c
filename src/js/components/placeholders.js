const nameInputs = document.querySelectorAll(".input-name");
const telInputs = document.querySelectorAll(".input-tel");
const linkInputs = document.querySelectorAll(".input-link");

const mediaQuery768 = window.matchMedia("(max-width: 768px)");

if (mediaQuery768.matches) {
	changePlaceholders(nameInputs, "Имя*");
	changePlaceholders(telInputs, "Номер телефона*");
	changePlaceholders(linkInputs, "Ссылка на ТЗ в figma");
}

function changePlaceholders(array, changeTo) {
	array.forEach((input) => {
		input.setAttribute("placeholder", changeTo);
	});
}
