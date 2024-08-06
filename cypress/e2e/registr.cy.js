describe("Registration and Redirect Test", () => {
    const { namep, passwordp } = Cypress.env(); 

    before(() => {
        cy.visit(`https://${namep}:${passwordp}@qauto.forstudy.space/`, {
            failOnStatusCode: false,
        });
    });

    it('should complete registration and redirect to the garage page', () => {
        // Знайти і натиснути кнопку "Sign In"
        cy.get('button.btn.btn-outline-white.header_signin').first().click();
        
        // Знайти і натиснути кнопку "Registration" через текст
        cy.get('button.btn.btn-link').contains('Registration').click();
            
        // Заповнити форму реєстрації
        cy.get('input#signupName').type('John');
        cy.get('input#signupLastName').type('Doe');
        cy.get('input#signupEmail').type('john2.doe@example.com');
        cy.get('input#signupPassword').type('Password123!');
        cy.get('input#signupRepeatPassword').type('Password123!');
        
        // Переконатися, що паролі співпадають
        cy.get('input#signupPassword').should('have.value', 'Password123!');
        cy.get('input#signupRepeatPassword').should('have.value', 'Password123!');
        
        // Натиснути кнопку реєстрації
        cy.get('div.modal-footer').find('button.btn.btn-primary')
            .should('not.be.disabled') // Очікувати, поки кнопка стане активною
            .click();
        
        // Перевірити, чи перекидає на сторінку гаража
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
    });
});
