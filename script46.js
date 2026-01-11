setTimeout(() => console.log('Привет Мир!'), 2000);

let i = 0;

const id = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
  if (++i === 5) clearInterval(id);
}, 1000);

function fetchData(){
    return new Promise((resolve)=> {
        setTimeout(() => {
      resolve('Данные получены!');
    }, 3000);
  });
}

fetchData().then(result => console.log(result));
    
function fetchDataWithError(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
      reject('Ошибка загрузки!');
    }, 2000);
  });
}
fetchDataWithError().catch(error => console.log(error));


async function fetchDataAsync() {
    const  result = await fetchData();
    console.log(result);
   }

  fetchDataAsync(); 

  async function fetchDataWithErrorAsync() {
  try {
    const result = await fetchDataWithError();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchDataWithErrorAsync();

function task1() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Результат task1'), 1000);
  });
}
function task2() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Результат task2'), 2000);
  });
}
async function runTasks() {
  const result1 = await task1();  
  console.log(result1);

  const result2 = await task2(); 
  console.log(result2);
}
runTasks();


function taskA() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Результат taskA'), 2000);
  });
}
function taskB() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Результат taskB'), 3000);
  });
}
Promise.all([taskA(), taskB()])
  .then(results => {
    console.log(results[0]); 
    console.log(results[1]);
  });

  async function delayedMessage(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}
delayedMessage("Привет через 2 секунды", 2000);
delayedMessage("Ещё одно сообщение через 1 секунду", 1000);