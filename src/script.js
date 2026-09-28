const buttonIcons = document.querySelector(".button-menu")
const navWrapper = document.querySelector(".nav-wrapper")
const burgerIcon = document.querySelector(".burger-icon")
const closeIcon = document.querySelector(".close-icon")

buttonIcons.addEventListener('click', ()=>{
    navWrapper.classList.toggle("open")
    burgerIcon.classList.toggle("off")
    closeIcon.classList.toggle("off")
})