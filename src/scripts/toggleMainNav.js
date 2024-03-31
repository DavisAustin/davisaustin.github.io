const mainNavDropdown = document.querySelector('#main-nav-menu')
const navMenuItem = document.querySelectorAll('#main-nav-link')
const openNavButton = document.querySelector('#open-nav-button')
const closeNavButton = document.querySelector('#close-main-nav-button')
const scrim = document.querySelector('#scrim')

const openMenu = () => {
	// check to see if the menu is already open
	if (mainNavDropdown.classList.contains('hidden')) {
		mainNavDropdown.classList.remove('hidden')
		mainNavDropdown.classList.add('flex')
		scrim.classList.remove('hidden')
		scrim.classList.add('flex')
	}
}

const closeMenu = () => {
	// check to see if the menu is already closed
	if (mainNavDropdown.classList.contains('flex')) {
		mainNavDropdown.classList.remove('flex')
		mainNavDropdown.classList.add('hidden')
		scrim.classList.remove('flex')
		scrim.classList.add('hidden')
	}
}

// close menu if a nav link is clicked
openNavButton.addEventListener('click', openMenu)
closeNavButton.addEventListener('click', closeMenu)
navMenuItem.forEach((item) => {
	item.addEventListener('click', closeMenu)
})

// if user clicks outside of the menu, close the menu
window.addEventListener('click', (e) => {
	if (e.target === scrim) {
		closeMenu()
	}
})