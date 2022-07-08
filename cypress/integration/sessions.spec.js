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

  it('should filter sessions and only display Wednesday session when Wednesday button is clicked', () => {
    // Validate that the buttons to filter by day exists.
    cy.get('[data-cy="Wednesday"]').click();

    // Assertions
    cy.get('[data-cy=day]').contains('Wednesday').should('be.visible');
    cy.get('[data-cy=day]').contains('Thursday').should('not.exist');
    cy.get('[data-cy=day]').contains('Friday').should('not.exist');
  });

  it('should filter sessions and only display Thursday session when Thursday button is clicked', () => {
    // Validate that the buttons to filter by day exists.
    cy.get('[data-cy="Thursday"]').click();

    // Assertions
    cy.get('[data-cy=day]').contains('Wednesday').should('not.exist');
    cy.get('[data-cy=day]').contains('Thursday').should('be.visible');
    cy.get('[data-cy=day]').contains('Friday').should('not.exist');
  });

  it('should filter sessions and only display Friday session when Friday button is clicked', () => {
    // Validate that the buttons to filter by day exists.
    cy.get('[data-cy="Friday"]').click();

    // Assertions
    cy.get('[data-cy=day]').contains('Wednesday').should('not.exist');
    cy.get('[data-cy=day]').contains('Thursday').should('not.exist');
    cy.get('[data-cy=day]').contains('Friday').should('be.visible');
  });

  it('should show all sessions when All Sessions button is clicked', () => {
    // Validate that the buttons to filter by day exists.
    cy.get('[data-cy="AllSessions"]').click();

    // Assertions
    cy.get('[data-cy=day]').contains('Wednesday').should('be.visible');
    cy.get('[data-cy=day]').contains('Thursday').should('be.visible');
    cy.get('[data-cy=day]').contains('Friday').should('be.visible');
  });
  })