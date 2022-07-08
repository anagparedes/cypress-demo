/// <reference types="cypress" />

describe('Sessions page', () => {
  beforeEach(() => {
    cy.visit('/conference');
    cy.get('h1').contains('View Sessions').click();
    cy.url().should('include', '/sessions');
  });

  it('should navigate to conference sessions page and view day filter buttons', () => {
    // Validate that the buttons to filter by day exists.
    cy.get('[data-cy="AllSessions"]');
    cy.get('[data-cy="Wednesday"]');
    cy.get('[data-cy="Thursday"]');
    cy.get('[data-cy="Friday"]');
  });
  })