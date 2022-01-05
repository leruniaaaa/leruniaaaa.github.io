const faqBtn = document.querySelectorAll('.faq__item-btn')
const faqContent = document.querySelectorAll('.faq__item-content')

faqBtn.forEach((item, index) => {
	item.addEventListener('click', () => {
		if (item.classList.contains('_active')) {
			item.classList.remove('_active')
			faqContent[index].style.height = `${faqContent[index].scrollHeight}px`
			setTimeout(() => {
			faqContent[index].removeAttribute('style')
			}, 0)
		} else {
			item.classList.add('_active')
			faqContent[index].style.height = `${faqContent[index].scrollHeight}px`
			setTimeout(() => {
				faqContent[index].style.height = `auto`
			}, 300)
		}
	})
})