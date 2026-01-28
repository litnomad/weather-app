import './style.css';
import './home';

import { renderHome } from './home';
import { renderContact } from './contact';

const homeBtn = document.querySelector('#home');
const contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', () => {
    renderHome();
});

contactBtn.addEventListener('click', () => {
    renderContact();
});

console.log('Hello, World!');