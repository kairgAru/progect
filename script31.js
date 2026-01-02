let x = prompt("Enter x:");
if (x>10) {
    console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
}
// 2
let file = confirm("Вы уверены, что хотите удалить файл?");

if (file) {
   console.log("Файл удален");
} else {
   console.log("Удаление отменено");
};
// 3

let y = prompt("Enter y:");
if (y<18) {
    console.log("Вы еще подросток")
} else if (y>=18 && y<=30) {
    console.log("Вы молодой взрослый")
} else {
    console.log("Вы взрослый")
}
// 4
let a = prompt("Enter a:");
let number = (a%2===0) ? "Четное число" : "Нечетное число";
console.log(number)
// 5
let day = prompt("Enter day:");
let week;

switch (day) {
   case "1":
       week = "Понедельник.";
       break;
   case "2":
       week = "Вторник.";
       break;
   case "3":
       week = "Среда.";
       break;
    case "4":
       week = "Четверг.";
       break;
    case "5":
       week = "Пятница.";
       break;
    case "6":
       week = "Суббота.";
       break;
    case "7":
       week = "Воскресенье.";
       break;
   default:
       week = "Некорректное значение.";
}

console.log(week); 

// 6
let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
if (num1===num2) {
    console.log("Числа равны")
} else if (num1>num2) {
    console.log("Первое число больше")
} else if (num2>num1){
    console.log("Второе число больше")
}
// 7
let month = prompt("Enter month:");
let timeyear;

switch (month) {
   case "1":
       timeyear = "Зима.";
       break;
   case "2":
       timeyear = "зима.";
       break;
   case "3":
       timeyear = "весна.";
       break;
    case "4":
       timeyear = "весна.";
       break;
    case "5":
       timeyear = "весна.";
       break;
    case "6":
       timeyear = "лето.";
       break;
    case "7":
       timeyear = "лето.";
       break;
    case "8":
       timeyear = "лето.";
       break;
    case "9":
       timeyear = "осень.";
       break;
    case "10":
       timeyear = "осень.";
       break;
    case "11":
       timeyear = "осень.";
       break;
    case "12":
       timeyear = "зима.";
       break;


   default:
       timeyear = "Некорректное значение.";
}

console.log(timeyear); 
