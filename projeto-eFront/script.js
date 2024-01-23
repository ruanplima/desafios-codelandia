const body = document.querySelector('body')
const btn = document.querySelector('button.mode')
const icon = document.querySelector('button.mode i')

function darkMode(){
    body.classList.toggle('light')
    if(icon.classList.contains('fa-sun')){
        icon.classList.toggle('fa-moon')
    }
}

btn.addEventListener('click', darkMode)

