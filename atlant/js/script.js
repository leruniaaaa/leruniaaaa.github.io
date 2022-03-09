const locationBox = document.querySelector('.header__location')
const locationInput = document.querySelector('.header__location-input')
const locationList = document.querySelector('.header__location-list')
const locationOverlay = document.querySelector('.header__location-overlay')
const locationArray = document.querySelectorAll('.header__location-radio')

locationInput.addEventListener('click', () => {
	if (locationBox.classList.contains('_active')) {
		LocationClose()
	} else {	
		LocationOpen()
	}
})
locationOverlay.addEventListener('click', () => {
	LocationClose()
})
function LocationOpen () {
	locationBox.classList.add('_active')
}
function LocationClose () {
	locationBox.classList.remove('_active')
}

locationArray.forEach((el) => {
	el.addEventListener('change', () => {
		locationInput.value = `Ваш город ${el.value}`
		LocationClose()
	})
})

const submenuBtn = document.querySelectorAll('.header__menu-btn')
const submenu = document.querySelectorAll('.header__submenu')
const submenuInner = document.querySelectorAll('.header__submenu-inner')
const submenuOverlay = document.querySelectorAll('.header__submenu-overlay')
let submenuActive
submenuBtn.forEach((el, i) => {
	el.addEventListener('click', () => {
		if (el.classList.contains('_active')) {
			SubmenuClose(i)
		} else {
			if (submenuActive) {
				SubmenuClose(submenuActive)
			}
			setTimeout(() => {

				SubmenuOpen(i)
			}, 0)
		}
	})
})
submenuOverlay.forEach((el, i) => {
	el.addEventListener('click', () => {
		SubmenuClose(i)
	})
})

function SubmenuOpen (i) {
	submenuBtn[i].classList.add('_active')
	submenu[i].classList.add('_active')
	submenu[i].style.height = `${submenu[i].scrollHeight}px`
	submenuActive = [i]
	// submenuInner[i].addEventListener('mouseenter', () => SubmenuLeave(i))
}

function SubmenuClose (i) {
	submenuBtn[i].classList.remove('_active')
	submenu[i].classList.remove('_active')
	submenu[i].removeAttribute('style')
	submenuActive = 0
}

function SubmenuLeave (i) {
	submenuInner[i].addEventListener('mouseleave', () => {
		let leave = setTimeout(() => SubmenuClose(i), 3000)
		submenuInner[i].addEventListener('mouseenter', () => {
			clearTimeout(leave)
		})
	})
}

const dropmenuUnit = document.querySelectorAll('.header__submenu-unit')
const dropmenuBtn = document.querySelectorAll('.header__submenu-btn')
const dropmenu = document.querySelectorAll('.header__dropmenu-list')

dropmenuUnit.forEach((el, i) => {
	el.addEventListener('mouseenter', () => dropmenuHover(el, i))
})

function dropmenuHover (el, i) {
	dropmenu[i].classList.add('_active')
	el.addEventListener('mouseleave', () => {
		dropmenu[i].classList.remove('_active')
	})
	el.addEventListener('touchstart', () => {
		dropmenu[i].classList.toggle('_active')
	})
}

const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__burger-btn')
const menuClose = document.querySelector('.header__close-btn')
menuBtn.addEventListener('click', () => {
	menu.classList.add('_active')
})
menuClose.addEventListener('click', () => {
	menu.classList.remove('_active')
})

const hTop = document.querySelector('.header__top')
const hMain = document.querySelector('.header__main')
const mParent = document.querySelector('.header__menu-wrapper')
const infoList = document.querySelector('.header__info-list')
const actBtns = document.querySelector('.header__action')
function HeaderCastling () {
	if (window.innerWidth <= 992 && !mParent.classList.contains('_mobile')) {
		mParent.insertBefore(infoList, mParent.children[2])
		mParent.insertBefore(actBtns, mParent.children[3])
		mParent.classList.add('_mobile')
	} else if (window.innerWidth > 992 && mParent.classList.contains('_mobile')){
		hTop.insertBefore(infoList, hTop.children[1])
		hMain.insertBefore(actBtns, hMain.children[4])
		mParent.classList.remove('_mobile')
	}
}
HeaderCastling()
window.addEventListener('resize', () => {
	HeaderCastling()
})