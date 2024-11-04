var typed = new Typed(".multiple-text", {
	strings: [
		"Photographer and Designer.",
		"Coder.",
		"Web Developer.",
		"Software Developer.",
	],
	typeSpeed: 10,
	backSpeed: 10,
	bachDelay: 10,
	loop: true,
});

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle("open");
};

window.onscroll = () => {
	menu.classList.remove("bx-x");
	navlist.classList.remove("open");
};
