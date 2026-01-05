let message = document.getElementById("message");
message.textContent = "Добро пожаловать в JavaScript!";

let boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
boxes[i].style.backgroundColor = "green";
}

const paragraph = document.querySelector("#text");
paragraph.textContent = "Новый текст";

const boxess = document.querySelectorAll(".box");
boxess.forEach(box => {
box.style.backgroundColor = "blue";
 });

 const list = document.querySelectorAll(".highlight");
list.forEach(highlight => {
highlight.style.color = "red";
 });