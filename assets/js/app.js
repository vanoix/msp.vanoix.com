import '../css/app.css';
require('mailgo/dist/mailgo.min.js');

let main = document.querySelector('#main-menu');
let list = document.querySelector('#responsive-list');
let closeButton = document.querySelector('#close-button');

let closeaction = ['opacity-0', 'scale-95', 'hidden'];
let openaction = ['opacitny-100', 'scale-100', 'shown'];

main.addEventListener('click', show(list, closeaction, openaction), false);
closeButton.addEventListener('click', hide(list, closeaction, openaction), false);

list.classList.add('opacity-0', 'scale-95', 'hidden');

function hide(target, close, open) {
  if(target.classList.contains('shown')) {
    target.classList.remove(...open);
    target.classList.add(...close);
  }
}

function show(target, close, open) {
  if(target.classList.contains('hidden')) {
    target.classList.remove(...close);
    target.classList.add(...open);
  }
}
