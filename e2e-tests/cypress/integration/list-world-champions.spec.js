/// <reference types="Cypress" />

describe("My First Test", function() {
  it("Visits the F1 world champions website", function() {
    cy.visit("http://localhost:3000");
  });
});
