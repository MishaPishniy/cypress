describe('API Tests for Auth/signin', () => {
    const baseUrl = 'https://qauto.forstudy.space/api';
    const endpoint = '/auth/signin';
    const userCurrentEndpoint = '/users/current';
    const username = 'guest';
    const password = 'welcome2qauto';
  
    beforeEach(() => {
      // Перехоплюємо запити для подальшого аналізу
      cy.intercept('POST', `${baseUrl}${endpoint}`).as('signinRequest');
    });
  
    it('should successfully log in with valid credentials', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}${endpoint}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        },
        body: {
          email: 'john2.doe@example.com',
          password: 'Password123!',
          remember: false
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        // Інші перевірки відповідно до документації API
      });
    });
    it('should successfully retrieve user info with valid session cookie', () => {
            cy.request({
              method: 'GET',
              url: `${baseUrl}${userCurrentEndpoint}`,
              headers: {
                'Content-Type': 'application/json',
              },
              failOnStatusCode: false // Чтобы обработать ошибку, а не прерывать тест
            }).then((response) => {
              expect(response.status).to.eq(200); // Ожидаем успешный статус
            });
        });
      });