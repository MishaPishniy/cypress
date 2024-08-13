describe('Intercepting requests with Cypress', () => {
    it('should intercept and mock a GET request', () => {
      cy.intercept('GET', '/api/posts', { fixture: 'posts.json' }).as('getPosts');
  
      // Викликаємо дію, яка відправляє запит
      cy.visit('/posts');
  
      // Чекаємо на перехоплений запит
      cy.wait('@getPosts').its('response.statusCode').should('eq', 200);
  
      // Додаткові перевірки, наприклад, рендеринг постів на сторінці
      cy.get('.post').should('have.length', 10);
    });
  });
  