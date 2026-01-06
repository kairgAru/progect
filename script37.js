const button = document.querySelector('#jsButton');

button.addEventListener('click', () => {
   console.log('Событие обработано через JS');
});

const div = document.querySelector('#myDiv');

div.addEventListener('click', () => {
   div.style.backgroundColor = 'blue';
});

div.addEventListener('mouseover', () => {
   console.log('Элемент нажат');
});

const sms = document.querySelector('#textInput');
sms.addEventListener('keydown', (event) => {
    console.log('Элемент:', event.key);
});

const link = document.querySelector('#myLink');

link.addEventListener('click', function (event) {
event.preventDefault(); 
    console.log('Переход по ссылке отменен');
});

const spicok = document.querySelector('#list');
spicok.addEventListener('click', () => {
    if (event.target.tagName === 'LI') {
   console.log(event.target.textContent);
    }
});


 const input = document.querySelector('#keyboardInput');

  input.addEventListener('keydown', (event) => {
    console.log(event.key);
  });