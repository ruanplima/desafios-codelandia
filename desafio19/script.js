let button = document.getElementById('btn')
let nav = document.getElementById('navegation')

function toggleMenu(){
    let nav = document.getElementById('navegation')
    nav.classList.toggle('active')
}

addEventListener('click', toggleMenu())