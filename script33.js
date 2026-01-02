let person = {
   name: "ARU",
   age: 22,
   city: "Almaty"
};
console.log(person);
// 2

console.log(person.name);
console.log(person.age);


person.city = "Астана";


console.log( person.city);
// 3
person.greet = function() {
  console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет!`);
};


person.greet();
// 4
let obj1 = { a: 10, b: 20 }
let obj2 = { a: 10, b: 20 }
console.log(obj1 === obj2);
// 5

let book = {
  title: "Властелин колец",
  author: "Дж. Р. Р. Толкин",
  details: {
    year: 1954,
    pages: 1216
  }
};
let copybook = Object.assign({}, book);
copybook.year=2005;
console.log(book);
console.log(copybook)
// 6
let calculator = {
    a:3,
    b:7,

    sum:function () {
        return this.a+this.b;
    },
    multiply: function () {
        return this.a*this.b;
            }
};
console.log("Сумма:", calculator.sum());       
console.log("Произведение:", calculator.multiply());
// 7
const car ={
    brand:55,
    model:99
};
car.brand = "LIME";
console.log(car);