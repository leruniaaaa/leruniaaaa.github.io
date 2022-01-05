const body = document.body
const header = document.querySelector('.header')
const headerTop = document.querySelector('.header__wrapper')
const headerBottom = document.querySelector('.header__bottom-wrapper')
const headerPhone = document.querySelector('.header__info-link')
const headerSearch = document.querySelector('.header__search')
const headerUser = document.querySelector('.header__user-list')
const socialList = document.querySelector('.footer__social-list')
const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__menu-btn')
const submenu = document.querySelector('.header__submenu-list')
const submenuBtn = document.querySelector('.header__menu-arrow')
const submenuOverlay = document.querySelector('.header__submenu-overlay')

function SubmenuOpen () {
		submenuBtn.classList.add('_active')
		submenu.style.height = `${submenu.scrollHeight}px`
		submenuOverlay.classList.add('_active')
}
function SubmenuClose () {
		submenuBtn.classList.remove('_active')
		submenu.removeAttribute('style')
		submenuOverlay.classList.remove('_active')
}
function HeaderAdaptive () {
	if (window.innerWidth <= 992 && !header.classList.contains('_tablet')) {
		headerBottom.insertBefore(headerPhone, headerBottom.children[0])
		let headerSocialList = socialList.cloneNode(true)
		headerSocialList.classList.remove('footer__social-list')
		headerSocialList.classList.add('header__social-list')
		menu.append(headerSocialList)
		menu.insertBefore(headerSearch, menu.children[2])
		header.classList.add('_tablet')
	} else if (window.innerWidth > 992 && header.classList.contains('_tablet')) {
		headerTop.insertBefore(headerPhone, headerTop.children[1])
		let headerSocialList = document.querySelector('.header__social-list')
		if (headerSocialList) {
			headerSocialList.remove()
		}
		headerTop.insertBefore(headerSearch, headerTop.children[2])
		header.classList.remove('_tablet')
	}
	if (window.innerWidth <= 576 && !header.classList.contains('_mobile')) {
		menu.insertBefore(headerUser, menu.children[0])
		header.classList.add('_mobile')
	} else if (window.innerWidth > 576 && header.classList.contains('_mobile')) {
		headerTop.insertBefore(headerUser, headerTop.children[3])
		header.classList.remove('_mobile')
	}
}
function MenuToggle () {
	menuBtn.classList.toggle('_active')
	menu.classList.toggle('_active')
	body.classList.toggle('_lock')
}
function MenuClose () {
	if (window.innerWidth > 992 && menu.classList.contains('_active')) {
		menuBtn.classList.remove('_active')
		menu.classList.remove('_active')
		body.classList.remove('_lock')
	}
}
HeaderAdaptive ()
menuBtn.addEventListener('click', () => {
	MenuToggle ()
})
window.addEventListener('resize', () => {
	HeaderAdaptive ()
	MenuClose ()
	SubmenuClose ()
})
submenuBtn.addEventListener('click', () => {
	if (submenuBtn.classList.contains('_active')) {
		SubmenuClose ()
	} else {
		SubmenuOpen ()
	}
})
submenuOverlay.addEventListener('click', SubmenuClose)
const isMobile = {
	Android: function() {
	    return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function() {
	    return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function() {
	    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function() {
	    return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function() {
	    return navigator.userAgent.match(/IEMobile/i)
	},
	any: function() {
	    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
	}
}
if (isMobile.any()) {
	body.classList.add('_touch')
} else {
	body.classList.add('_pc')
}