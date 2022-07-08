/// <reference types="cypress" />

describe('Submit Sessions', () => {
  // Run before each test in this describe block
  beforeEach(() => {
    cy.visit('/conference');
    cy.get('h1').contains('View Sessions').click();
    cy.url().should('include', '/sessions');
    cy.get('a').contains('Submit a Session!').click();
  });
  
  it('should navigate to submit sessions page', () => {
    cy.url().should("include", "/sessions/new");
  });

  it('should submit a session successfully', () => {
    // Filling the form with session information
    cy.contains("Title").type("New Session Title");
    cy.contains("Description").type("New Session Description");
    cy.contains("Day").type("Friday");
    cy.contains("Level").type("Beginner");

    //Submitting the form
    cy.get('form').submit();

    //Verifying that the session was submitted successfully
    cy.contains("Session Submitted Successfully");
  });
  })