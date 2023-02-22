/// <reference types="cypress" />

describe('My First Test', () => {
    it('clicking type shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

        cy.get('.action-email')
        .type('alhudarmdhn@gmail.com')
        .should('have.value','alhudarmdhn@gmail.com')
    });
});