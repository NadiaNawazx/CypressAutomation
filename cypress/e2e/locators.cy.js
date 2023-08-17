/// <reference types="cypress" />

describe('Find or Get elements by using different locators', () => {
    beforeEach(() => { // runs before each tests case.
        cy.clearCookies();
        cy.visit('/login'); //baseUrl is in the cypress.config.js folder, i am adding the rest of the 
        //page link here
    })
   
    it('Check different locatots stratergies', () => {
        // By CSS locators
        cy.get("input[name='username']").type('tomsmith');//every statement creates an object to be 
        //interacted and next command makes an operation to the object created at the previous statement.

        //attribute name and value
        cy.get("[type='text']").clear();

        //cy.get("input[name='password']").type('SuperSecretPassword');
        //cy.get("#wooden_spoon").click();

        

    })
    
})