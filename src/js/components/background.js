const hero = document.querySelector(".hero");
if (hero !== null) {
	VANTA.GLOBE({
		el: hero,
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 445,
		minWidth: 750,
		scale: 1.0,
		scaleMobile: 1.0,
		color: 0xd88d9,
		color2: 0xc952e6,
		backgroundColor: 0xffffff,
		spacing: 15,
	});
}
