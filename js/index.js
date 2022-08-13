let hamburgerButton = document.getElementById('hamburger-button');
let closeNavbar = document.getElementById('close-navbar');
let navbarMobile = document.getElementsByClassName('nav-item-mobile');
let navbarMobileItem = document.querySelectorAll('.nav-item-mobile ul li a');

hamburgerButton.addEventListener('click', (e) => {
	console.log('show navbar mobile');
	showNavbarMobile();
});

closeNavbar.addEventListener('click', (e) => {
	hideNavbarMobile();
});

const hideNavbarMobile = () => {
	navbarMobile[0].classList.add('hide');
};

const showNavbarMobile = () => {
	navbarMobile[0].classList.remove('hide');
};

navbarMobileItem.forEach((item) => {
	item.addEventListener('click', (e) => {
		hideNavbarMobile();
	});
});
