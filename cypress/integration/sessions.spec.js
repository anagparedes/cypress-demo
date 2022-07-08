/// <reference types="cypress" />

describe('Sessions page', () => {
  beforeEach(() => {
    cy.visit('/conference');
    cy.get('h1').contains('View Sessions').click();
    cy.url().should('include', '/sessions');

    // Define aliases here 
    cy.get('[data-cy="AllSessions"]').as('allSessionsBtn');
    cy.get('[data-cy="Wednesday"]').as('wednesdayBtn');
    cy.get('[data-cy="Thursday"]').as('thursdayBtn');
    cy.get('[data-cy="Friday"]').as('fridayBtn');
  });

  it('should navigate to conference sessions page and view day filter buttons', () => {
    // Validate that the buttons to filter by day exists.
    cy.get('@allSessionsBtn');
    cy.get('@wednesdayBtn');
    cy.get('@thursdayBtn');
    cy.get('@fridayBtn');
  });

  it('should filter sessions and only display Wednesday session when Wednesday button is clicked', () => {
    // Validate that the buttons to filter by day exists.
    cy.intercept('POST', 'http://localhost:4000/graphql').as('getSessionInfo');
    cy.get('@wednesdayBtn').click();
    cy.wait("@getSessionInfo");

    // Assertions
    cy.get('[data-cy=day]').contains('Wednesday').should('be.visible');
    cy.get('[data-cy=day]').contains('Thursday').should('not.exist');
    cy.get('[data-cy=day]').contains('Friday').should('not.exist');
  });

  it('should filter sessions and only display Thursday session when Thursday button is clicked', () => {
    // Validate that the buttons to filter by day exists.
    cy.intercept('POST', 'http://localhost:4000/graphql').as('getSessionInfo');
    cy.get('@thursdayBtn').click();
    cy.wait("@getSessionInfo");

    // Assertions
    cy.get('[data-cy=day]').contains('Wednesday').should('not.exist');
    cy.get('[data-cy=day]').contains('Thursday').should('be.visible');
    cy.get('[data-cy=day]').contains('Friday').should('not.exist');
  });

  it('should filter sessions and only display Friday session when Friday button is clicked', () => {
    // Validate that the buttons to filter by day exists.
    cy.intercept('POST', 'http://localhost:4000/graphql').as('getSessionInfo');
    cy.get('@fridayBtn').click();
    cy.wait("@getSessionInfo");

    // Assertions
    cy.get('[data-cy=day]').contains('Wednesday').should('not.exist');
    cy.get('[data-cy=day]').contains('Thursday').should('not.exist');
    cy.get('[data-cy=day]').contains('Friday').should('be.visible');
  });

  it('should show all sessions when All Sessions button is clicked', () => {
    // Validate that the buttons to filter by day exists.
    cy.intercept('POST', 'http://localhost:4000/graphql').as('getSessionInfo');
    cy.get('@allSessionsBtn').click();
    cy.wait("@getSessionInfo");
    // Assertions
    cy.get('[data-cy=day]').contains('Wednesday').should('be.visible');
    cy.get('[data-cy=day]').contains('Thursday').should('be.visible');
    cy.get('[data-cy=day]').contains('Friday').should('be.visible');
  });
  })