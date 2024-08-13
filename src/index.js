import background from './images/background.jpg'

import './styles.css'

import { home } from './javascript/home.js'
import { menu } from './javascript/menu.js'
import { about } from './javascript/about'

document.getElementById("background-img").src = background;

document.querySelector("button.home").addEventListener("click", (e) => {
    e.preventDefault();
    home();
})
document.querySelector("button.menu").addEventListener("click", (e) => {
    e.preventDefault();
    menu();
})
document.querySelector("button.about").addEventListener("click", (e) => {
    e.preventDefault();
    about();
})

home();
