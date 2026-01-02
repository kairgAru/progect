function greet (){
    console.log("Привет, мир!");
}
greet();
// 2
function sayHello (name) {
    console.log("Привет, "+ name+ "!")

}
sayHello("Aru");
// 3
function sum (a,b){
    return a+b;
}
const result = sum(4, 5);
console.log(result);
// 4
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(5));
// 5
function max(a, b) {
  if (a === b) {
    return "Числа равны";
  }
  return a > b ? a : b;
}
console.log(max(5, 10)); 
console.log(max(20, 15)); 
console.log(max(7, 7));
// 6
function getInitials(name,fum){
    return name[0]+"."+ fum[0]+".";
}
console.log(getInitials("Аружан", "Кайратовна"))
// 7
function square (x){
    return x*x;
}
function cube(x){
    return square(x)*x;
}
console.log(square(4));
console.log(square(8));
// 7
const suumm = (a, b) => a + b;

console.log(suumm(3, 4)); 
// 8
function getFactorial(n) {
  return n <= 1 ? 1 : n * getFactorial(n - 1);
}


console.log(getFactorial(5));