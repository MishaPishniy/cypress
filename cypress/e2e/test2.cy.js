describe("Add Car ", () => {
    const { namep, passwordp } = Cypress.env(); 
  
    before(() => {
      cy.visit(`https://${namep}:${passwordp}@qauto.forstudy.space/`, {
        failOnStatusCode: false,
      });
    });

    it('type gest-login ', () => {
   cy.get("button.header-link.-guest", {timeout:1000}).click();
   cy.url().should("eq", `${Cypress.config('baseUrl')}/panel/garage`)
   cy.get("button.btn.btn-primary", {timeout:1000}).click();
   cy.get('label[for="addCarBrand"]').should("be.visible")

// Вибір значення з <select> за допомогою .trigger
cy.get('select#addCarModel').trigger('change', { 
    force: true,
    // Щоб спровокувати подію з певним значенням, можна передати його як опцію
    value: 'A6'
});
    
   cy.get("input#addCarMileage").type(Math.random())

   cy.get('div.modal-content').find("button.btn.btn-primary").should('be.enabled').click()
   cy.get('div.car-heading').should('be.visible').within(() => {
    cy.get('p.car_name').should('contain.text', 'Audi A6');
    cy.get('img.car-logo_img').should('have.attr', 'SRC', 'https://qauto.forstudy.space/public/images/brands/audi.png');
   });
});
});
