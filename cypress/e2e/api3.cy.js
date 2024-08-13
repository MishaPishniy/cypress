cy.request({
    method: 'GET',            // HTTP-метод (GET, POST, PUT, DELETE, ін.)
    url: '/api/users',        // URL-шлях
    qs: {                     // Параметри запиту (query string)
      page: 1,
      limit: 10,
    },
    headers: {                // Заголовки запиту
      Authorization: 'Bearer your_token',
    },
    body: {                   // Тіло запиту для POST або PUT
      key: 'value',
    },
    form: true,               // Вказує, що тіло запиту має бути оброблене як форма
    failOnStatusCode: false,  // Вимикає автоматичне викидання помилок на невдачу
    timeout: 10000,           // Таймаут на запит (в мілісекундах)
    responseTimeout: 30000,   // Таймаут на отримання відповіді (в мілісекундах)
    retryOnNetworkFailure: true,  // Повторювати запит у разі проблем з мережею
    retryOnStatusCodeFailure: true,  // Повторювати запит у разі невдачі за HTTP-статусом
  }).then((response) => {
    // Тут ви можете виконати перевірки на отриману відповідь
  });