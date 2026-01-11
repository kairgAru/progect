fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json())  // Преобразуем ответ в JSON
 .then(data => console.log(data.title))     // Работаем с полученными данными
 .catch(error => console.error('Ошибка:', error)); 

 fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',  
  headers: {
    'Content-Type': 'application/json' 
  },
  body: JSON.stringify({
    title: "Новый пост",
    body: "Содержимое поста",
    userId: 1
  }) 
})
.then(response => response.json())  
.then(data => console.log('Ответ сервера:', data))
.catch(error => console.error('Ошибка:', error));


fetch('https://jsonplaceholder.typicode.com/nonexistent')
 .then(response => {
   if (!response.ok) {
     throw new Error('Ошибка сети: ' + response.status);
   }
   return response.json();
 })
 .then(data => console.log(data))
 .catch(error => console.error('Обработанная ошибка:', error));


 


fetch('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'PUT',
 headers: {
   'Content-Type': 'application/json'
 },
 body: JSON.stringify({
    title: "НовыЙ ЗАГОЛОВОК",
    userId: 1
})
})
 .then(response => response.json())
 .then(data => console.log('Обновлено:', data))
 .catch(error => console.error('Ошибка:', error));

 fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('Пост удалён');
    }
  })
  .catch(error => console.error('Ошибка:', error));


  async function fetchNonexistent() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');
    if (!response.ok) throw new Error('Ошибка сети: ' + response.status);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Обработанная ошибка:', error);
  }
}

fetchNonexistent();



fetch('https://jsonplaceholder.typicode.com/comments', {
  method: 'GET',
  headers: {
    'User-Agent': 'MyApp/1.0',
    'Authorization': 'Bearer test-token'
  }
})
  .then(response => response.json())
  .then(data => console.log('Комментарии:', data))
  .catch(error => console.error('Ошибка:', error));