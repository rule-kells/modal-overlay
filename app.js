const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btn = document.querySelectorAll('.btn')
const closeModalBtn = document.querySelector('.btn__modal--close')

const openModal = (_) => {
  modal.classList.remove('modal--hidden')
  overlay.classList.remove('overlay--hidden')
}

const closeModal = (_) => {
  modal.classList.add('modal--hidden')
  overlay.classList.add('overlay--hidden')
}

for (let i = 0; i < btn.length; i++) btn[i].addEventListener('click', openModal)

closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => {
  console.log(e.key)
  if (e.key === 'Escape' && !modal.classList.add('modal-hidden')) closeModal()
})
