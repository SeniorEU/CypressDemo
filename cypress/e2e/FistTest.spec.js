/// <reference types="cypress" />
descride("My First Test suite", () => {
    it("First Test", () => {
        cy.visit("https://magento.softwaretestingboard.com")
        cy.get("#search").type("Radiant Tee")
        cy.get("#search_autocomplete li").should("have.length", 3)
    })    
})