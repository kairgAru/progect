localStorage.setItem('greeting', 'Привет мир!');

localStorage.removeItem('greeting');
const greet = localStorage.getItem('greeting');

const address = { улица: 'Навои', дом: 5, подьезд: 3 };
const addressJSON = JSON.stringify(address);
localStorage.setItem('address', addressJSON);
const newaddress = localStorage.getItem('address');
const parsedaddress = JSON.parse(newaddress); 
console.log(parsedaddress);

const user = {
  name: 'Алексей',
  age: 25,};
localStorage.setItem('user', JSON.stringify(user));
let auser = JSON.parse(localStorage.getItem('user'));
auser.country = 'Россия';
localStorage.setItem('user', JSON.stringify(auser));
console.log(auser);

let jonu = JSON.parse(localStorage.getItem('jonu'));
if (jonu) {
  console.log('Пользователь найден:', jonu);
} else {
    jonu = {
    name: 'Дима',
    age: 0,
    country: 'Казахстан'
  };
  localStorage.setItem('auser', JSON.stringify(jonu));
  console.log( jonu);
}

localStorage.clear();
const test = localStorage.getItem('user'); 
console.log(test);

const list = [
   { id: 5, title: 'asdfg', completed: 1 },
   { id: 0, title: 'rgtyhj4rty', completed: 0 },
   { id: 6, title: 'sdfghtyhjkghjk', completed: 0 }
 ];
 const listJSON = JSON.stringify(list);
 localStorage.setItem('list', listJSON);
 const storedlistJSON = localStorage.getItem('list');
 const parsedlist = JSON.parse(storedlistJSON);
 console.log(parsedlist);

let lists = JSON.parse(localStorage.getItem('list'));
lists[1].completed = '1';
localStorage.setItem('list', JSON.stringify(lists));
console.log(lists);