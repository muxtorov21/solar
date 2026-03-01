const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const menuIcon = document.getElementById('menu-icon')
const closeIcon = document.getElementById('close-icon')

// Mobil menu
menuBtn.addEventListener('click', () => {
	const isOpen = mobileMenu.classList.contains('hidden')
	if (isOpen) {
		mobileMenu.classList.remove('hidden')
		menuIcon.classList.add('hidden')
		closeIcon.classList.remove('hidden')
	} else {
		mobileMenu.classList.add('hidden')
		menuIcon.classList.remove('hidden')
		closeIcon.classList.add('hidden')
	}
})

// Scroll selections
function scrollToSection(id) {
	const element = document.getElementById(id)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' })
		// Menu
		mobileMenu.classList.add('hidden')
		menuIcon.classList.remove('hidden')
		closeIcon.classList.add('hidden')
	}
}

// Forma
function scrollToForm() {
	const form = document.getElementById('lead-form')
	if (form) {
		form.scrollIntoView({ behavior: 'smooth' })
		mobileMenu.classList.add('hidden')
		menuIcon.classList.remove('hidden')
		closeIcon.classList.add('hidden')
	}
}

// Second galarey
let currentImages = []
let currentIdx = 0

function openGallery(title, capacity, location, images) {
	currentImages = images
	currentIdx = 0

	document.getElementById('modalTitle').textContent = title
	// document.getElementById('modalCapacity').textContent = capacity
	// document.getElementById('modalLocation').textContent = location
	document.getElementById('totalIdxDisplay').textContent = images.length

	updateModalView()

	const modal = document.getElementById('portfolioModal')
	modal.classList.remove('hidden')
	modal.classList.add('flex')
	document.body.style.overflow = 'hidden'
}

function closeGallery() {
	const modal = document.getElementById('portfolioModal')
	modal.classList.add('hidden')
	modal.classList.remove('flex')
	document.body.style.overflow = ''
}

function changeImage(dir) {
	currentIdx = (currentIdx + dir + currentImages.length) % currentImages.length
	updateModalView()
}

function updateModalView() {
	const mainImg = document.getElementById('mainImage')
	mainImg.style.opacity = '0'
	setTimeout(() => {
		mainImg.src = currentImages[currentIdx]
		mainImg.style.opacity = '1'
	}, 150)

	document.getElementById('currentIdxDisplay').textContent = currentIdx + 1
	const thumbContainer = document.getElementById('thumbnailContainer')
	thumbContainer.innerHTML = ''
	currentImages.forEach((img, idx) => {
		const thumb = document.createElement('div')
		thumb.className = `flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
			idx === currentIdx
				? 'border-blue-600 scale-105'
				: 'border-transparent opacity-60'
		}`
		thumb.innerHTML = `<img src="${img}" class="w-full h-full object-cover" onclick="currentIdx=${idx}; updateModalView();">`
		thumbContainer.appendChild(thumb)
	})

	const dotsContainer = document.getElementById('modalDots')
	dotsContainer.innerHTML = ''
	currentImages.forEach((_, idx) => {
		const dot = document.createElement('div')
		dot.className = `h-1.5 rounded-full transition-all ${
			idx === currentIdx ? 'w-8 bg-white' : 'w-2 bg-white/40'
		}`
		dotsContainer.appendChild(dot)
	})
}

document.getElementById('portfolioModal').addEventListener('click', e => {
	if (e.target.id === 'portfolioModal') closeGallery()
})

function handleFormSubmit(e) {
	e.preventDefault()

	const btn = document.getElementById('submit-btn')
	const btnText = document.getElementById('btn-text')
	const btnLoader = document.getElementById('btn-loader')
	const btnIcon = document.getElementById('btn-icon')
	const form = document.getElementById('main-form')
	const header = document.getElementById('form-header')
	const successMsg = document.getElementById('success-message')

	btn.disabled = true
	btnText.innerText = 'Отправка...'
	btnLoader.classList.remove('hidden')
	btnIcon.classList.add('hidden')

	setTimeout(() => {
		form.classList.add('hidden')
		header.classList.add('hidden')
		successMsg.classList.remove('hidden')

		form.reset()

		btn.disabled = false
		btnText.innerText = 'Отправить заявку'
		btnLoader.classList.add('hidden')
		btnIcon.classList.remove('hidden')
	}, 1500)
}

function resetForm() {
	document.getElementById('main-form').classList.remove('hidden')
	document.getElementById('form-header').classList.remove('hidden')
	document.getElementById('success-message').classList.add('hidden')
}

// Year

document.getElementById('year').textContent = new Date().getFullYear()
