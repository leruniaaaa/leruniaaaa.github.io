new WOW().init()
const faqBtn = document.querySelectorAll('.faqBtn')
const faqContent = document.querySelectorAll('.faqContent')
const faqItem = document.querySelectorAll('.faqItem')
faqBtn.forEach((el, i) => {
	el.addEventListener('click', () => {
		if(faqItem[i].classList.contains('_active')) {
			faqItem[i].classList.remove('_active')
			faqContent[i].removeAttribute('style')
		} else {
			faqItem[i].classList.add('_active')
			faqContent[i].style.height = `${faqContent[i].scrollHeight}px`
		}
	})
})
function faqResize () {
	faqItem.forEach((el, i) => {
		if(el.classList.contains('_active')) {
			faqContent[i].style.height = `${faqContent[i].scrollHeight}px`
		}
	})
}
window.addEventListener('resize', () => {
	faqResize ()
})
const menuOpenBtn = document.querySelector('.header__burger-btn')
const menuCloseBtn = document.querySelector('.header__close-btn')
const menu = document.querySelector('.header__menu')
menuOpenBtn.addEventListener('click', () => {
	menu.classList.add('_active')
	// document.body.style.overflow = 'hidden'
})
menuCloseBtn.addEventListener('click', () => {
	closeMenu ()
})
function closeMenu () {
	menu.classList.remove('_active')
	// document.body.removeAttribute('style')
}
const links = document.querySelectorAll('.header__menu-link')
links.forEach((el, i) => {
	el.addEventListener('click', (e) => {
		closeMenu ()
	})
})