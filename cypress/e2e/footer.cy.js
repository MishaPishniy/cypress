describe("Footer Social Links", () => {
    const { namep, passwordp } = Cypress.env();
  
    before(() => {
      cy.visit(`https://${namep}:${passwordp}@qauto.forstudy.space/`, {
        failOnStatusCode: false,
      });
    });
  
    it("should check Telegram social link opens new window with correct URL", () => {
      cy.get('a[href="https://t.me/ithillel_kyiv"]').should('have.attr', 'target', '_blank').within(() => {
        cy.get('span.socials_icon.icon-telegram').should('be.visible');
      }).then(($link) => {
        const href = $link.attr('href');
  
        // Перехватываем вызов window.open
        cy.window().then((win) => {
          cy.stub(win, 'open').as('windowOpen');
        });
  
        // Кликаем на иконку
        cy.get('a[href="https://t.me/ithillel_kyiv"]').click();
  
        // Проверяем, что window.open был вызван с правильным URL
        cy.get('@windowOpen').should('be.calledWith', href);
      });
    });
  });
  