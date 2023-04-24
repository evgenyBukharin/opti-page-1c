const fileInputContainers = document.querySelectorAll(".file-input__container");
fileInputContainers.forEach((container) => {
	const sectionClass = container.closest("section").classList[0];
	dt = new DataTransfer();
	const fileInput = container.querySelector(`.${sectionClass}__input-file`);
	let filesList = container.querySelector(`.${sectionClass}__list-file`);
	fileInput.addEventListener("change", () => {
		// очистка списка файлов нужна/нет?
		// filesList.innerHTML = "";
		for (let i = 0; i < fileInput.files.length; i++) {
			let newFileBlock = `<div class="${sectionClass}__item-file">
									<div class="${sectionClass}__container-doc">
										<img
											loading="lazy"
											src="./img/doc.svg"
											class="image ${sectionClass}__icon-doc"
											width="44"
											height="44"
											alt="Иконка документ"
										/>
										<div class="${sectionClass}__container-text">
											<span class="title__h6 feedback__title-filename">${fileInput.files.item(i).name}</span>
											<span class="title__h6 title__h6-grey">${bytesToSize(fileInput.files.item(i).size)}</span>
										</div>
									</div>
									<span class="${sectionClass}__button-remove">
										<img
											loading="lazy"
											src="./img/close.svg"
											class="image ${sectionClass}__icon-close"
											width="24"
											height="24"
											alt="Иконка закрыть"
										/>
									</span>
								</div>`;
			filesList.insertAdjacentHTML("beforeend", newFileBlock);
			dt.items.add(fileInput.files.item(i));
		}
		let removeButtons = container.querySelectorAll(`.${sectionClass}__button-remove`);
		removeButtons.forEach((button) => {
			button.addEventListener("click", () => {
				removeFilesItem(button, fileInput, dt);
			});
		});
		fileInput.files = dt.files;
	});
});

function removeFilesItem(target, fileInput, dt) {
	let name = target.previousElementSibling.innerHTML;
	target.parentNode.remove();
	for (let i = 0; i < dt.items.length; i++) {
		if (name === dt.items[i].getAsFile().name) {
			dt.items.remove(i);
		}
	}
	fileInput.files = dt.files;
}

function bytesToSize(bytes) {
	const sizes = ["Байт", "Кбайт", "Мбайт", "Гбайт", "Тбайт"];
	if (bytes === 0) return "n/a";
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
	if (i === 0) return `${bytes} ${sizes[i]}`;
	return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}
