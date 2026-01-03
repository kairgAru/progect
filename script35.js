let count = 1;
while (count <= 10) {
   console.log(count);
   count++;
}
// 2
let num = 0;
while (num <= 10) {
    num++;

    if (num === 5) {
        continue; 
    }

    if (num === 8) {
        break;
    }
    console.log(num)
}
console.log("Цикл завершен");
// 3

let cup = 1;
do {
   console.log(cup);
   cup++;
} while (cup <=5);
// 4
while (true) {
    let input = prompt("Введите число:");

    if (Number(input) === 10) {
        console.log("Цикл завершён.");
        break; 
    }
}
// 5
for (let i = 1; i <= 10; i++) {
   console.log(i);
};
// 6
let i = 0;
for (;;) {
   console.log("Этот цикл будет работать бесконечно");
   if (i===99){
   break;
}
i++
};
// 7
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
};
// 8
let password = "";

while (password !== "1234") {
    password = prompt("Введите пароль");
}


for (let i = 1; i <= 10; i++) {
    console.log("Приседание " + i);
}

// while → пока не случится что-то

// for → сделай N раз
// 9
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// 10

for (let i = 0; i <= 10; i++) {
   if (i % 2 == 1) {
       continue;
       
   };
   console.log(i);
};