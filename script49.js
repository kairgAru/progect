const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.onload = function() {
 if (xhr.status === 200) {
   const data = JSON.parse(xhr.responseText);
    data.forEach(post => {
    console.log(post.title);
    });
 } else {
   console.error('Ошибка загрузки данных:', xhr.status);
 }
};
xhr.onerror = function() {
 console.error('Ошибка соединения');
};
xhr.send(); // Отправляем запрос




const xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr1.onload = function () {
      if (xhr1.status === 200) {
        const posts = JSON.parse(xhr1.responseText);

        const ul = document.createElement('ul');

        posts.forEach(post => {
          const li = document.createElement('li');
          li.textContent = post.title;
          ul.appendChild(li);
        });

        document.body.appendChild(ul);

      } else {
        console.error('Ошибка загрузки:', xhr1.status);
      }
    };

    xhr1.onerror = function () {
      console.error('Ошибка соединения');
    };

    xhr1.send();
    



    const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  xhr2.onload = function () {
    if (xhr2.status === 200) {
      const posts = JSON.parse(xhr2.responseText);

      posts.forEach(post => {
        // создаём внешний <ul> для одного поста
        const postUl = document.createElement('ul');

        // заголовок
        const titleLi = document.createElement('li');
        titleLi.textContent = `Заголовок: ${post.title}`;

        // текст
        const bodyLi = document.createElement('li');
        bodyLi.textContent = `Текст: ${post.body}`;

        // ID пользователя
        const userLi = document.createElement('li');
        userLi.textContent = `ID пользователя: ${post.userId}`;

        // добавляем все элементы в <ul>
        postUl.appendChild(titleLi);
        postUl.appendChild(bodyLi);
        postUl.appendChild(userLi);

        // добавляем пост на страницу
        document.body.appendChild(postUl);
      });

    } else {
      console.error('Ошибка загрузки:', xhr2.status);
    }
  };

  xhr2.onerror = function () {
    console.error('Ошибка соединения');
  };

  xhr2.send();



  const output = document.getElementById('output');

  const xhr3 = new XMLHttpRequest();
  xhr3.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  // успешный ответ
  xhr3.onload = function () {
    if (xhr3.status === 200) {
      try {
        const data = JSON.parse(xhr3.responseText);
        const ul = document.createElement('ul');

        data.forEach(post => {
          const li = document.createElement('li');
          li.textContent = post.title; // выводим заголовки
          ul.appendChild(li);
        });

        output.appendChild(ul);
      } catch (e) {
        output.textContent = 'Ошибка обработки данных: ' + e.message;
      }
    } else {
      output.textContent = 'Ошибка загрузки: ' + xhr.status;
    }
  };

  // ошибка соединения
  xhr3.onerror = function () {
    output.textContent = 'Ошибка соединения с сервером';
  };

  xhr3.send();



  const output4 = document.getElementById('output');

  // 1. Показываем индикатор загрузки
  output4.textContent = 'Загрузка данных...';

  const xhr4 = new XMLHttpRequest();
  xhr4.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  xhr4.onload = function () {
    // убираем индикатор
    output4.textContent = '';

    if (xhr4.status === 200) {
      try {
        const data = JSON.parse(xhr4.responseText);
        const ul = document.createElement('ul');

        data.forEach(post => {
          const li = document.createElement('li');
          li.textContent = post.title;
          ul.appendChild(li);
        });

        output4.appendChild(ul);
      } catch (e) {
        output4.textContent = 'Ошибка обработки данных: ' + e.message;
      }
    } else {
      output4.textContent = 'Ошибка загрузки: ' + xhr4.status;
    }
  };

  xhr4.onerror = function () {
    output4.textContent = 'Ошибка соединения с сервером';
  };

  xhr4.send();