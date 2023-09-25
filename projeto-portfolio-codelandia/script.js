const btnMobile = document.getElementById('menu-mobile')

function toggleMenu(){
    const OpenCloseMenu = document.getElementById('nav')
    OpenCloseMenu.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)