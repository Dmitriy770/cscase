const menu = document.querySelector('.akk')
const batMenu = document.querySelector('.bat')
const login = document.querySelector('.hrSteamLogin')
const FAQ = document.querySelector('.FAQalert')
const pLogin = document.querySelector('.login')
const pPassword = document.querySelector('.password')
const tex = document.querySelector('.texPodderska')

batMenu.onclick = () => {
    if(menu.style.left === '-12em'){
        menu.style.left = '0'
        batMenu.style.left = '0.45em'
    }
    else{
        menu.style.left = '-12em'
        batMenu.style.left = '-8em'
    }
}

login.onclick = () => {
    const steamLogin = prompt('Введите логин: ', 0)
    const steamPassword = prompt('Введите пароль: ', 0)
    pLogin.textContent = `Ваш логин: ${steamLogin}`
    pPassword.textContent = `Ваш пароль: ${steamPassword}`
}

FAQ.onclick = () => {
    alert('Возможно мы обработаем ваш запрос.')
}

tex.onclick = () => {
    alert('Мы вас поддержми!!!')
}

