let fruits= ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);
// 2
console.log(fruits[0]); 
console.log(fruits[2]); 
fruits.push("Груша");
console.log(fruits);
// 3
let lastFruit = fruits.pop();
let firstFruit = fruits.shift();
console.log(fruits);
// 4

fruits.sort();
console.log(fruits);
// 5
let lengths = fruits.map(fruit => fruit.length);
console.log(lengths);
// 6
let numbers = [1, 2, 3, 4,5,6,7,8,9,10];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// 7
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// 8
let result = numbers.find(number => number > 5);

console.log(result);
// 9
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3= arr1.concat(arr2);
console.log(arr3);
// 10
let hasBanana = fruits.includes("Banana");
console.log(hasBanana);
// 11
fruits.reverse();
console.log(fruits);