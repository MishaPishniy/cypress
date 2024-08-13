
Cypress.Commands.add('typePassword', {prevSubject : 'element' } , (subject , password) => {

    cy.wrap(subject).type(password, {log: false});
});


import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();
