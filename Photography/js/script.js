var typed = new Typed(".multiple-text", {
    strings: ["Candid Photographer.", "Street Photographer.", "Portrait Photographer.", "Landscape Photographer."],
    typeSpeed: 100,
    backSpeed: 100,
    bachDelay: 10000,
    loop: true
})

const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};