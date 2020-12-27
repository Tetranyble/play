

/**============ Navigation menu toggle ============== */
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')
//show navigation menu
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})
//hide navigation menu
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})
document.querySelector('body')
.addEventListener('click', () => {
    if(navMenu.classList){}
})