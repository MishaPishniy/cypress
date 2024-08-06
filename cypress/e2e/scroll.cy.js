describe("Scroll to Footer Element", () => {
    const { namep, passwordp } = Cypress.env(); 
  
    before(() => {
      cy.visit(`https://${namep}:${passwordp}@qauto.forstudy.space/`, {
        failOnStatusCode: false,
      });
    });

    it('should scroll to the footer element', () => {
        // Знаходимо елемент <p> за допомогою відповідного селектора або тексту
        cy.contains('p', '© 2021 Hillel IT school')
            .scrollIntoView() // Прокручуємо до елемента
            .should('be.visible'); // Перевіряємо, що елемент видимий
    });
});
