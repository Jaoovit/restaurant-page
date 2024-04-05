import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayAbout } from "./about";

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

displayHome();

homeBtn.addEventListener('click', () => {
    displayHome();
});

menuBtn.addEventListener('click', () => {
    displayMenu();
})

aboutBtn.addEventListener('click', () => {
    displayAbout();
})
