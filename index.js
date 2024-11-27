const burgerBtn = document.querySelector('.burger-menu-bars')
const burgerContent = document.querySelector('.burger-menu-content')

burgerBtn.addEventListener('click', () => {
  console.log('111')
  burgerContent.classList.toggle('active')
  burgerBtn.classList.toggle('active')
})