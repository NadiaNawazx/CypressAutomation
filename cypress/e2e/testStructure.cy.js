/// <reference types="cypress" />

describe('Context: My First Test', () => {
    before(() =>{ // runs once before all tests cases in this describer block.

    })
    beforeEach(() => { // runs before each tests case.
        cy.clearCookies();
    })
    after(() => { // runs once after all tests finished.

    })
    afterEach(() => { // runs after all test case.
    
    })
    it('Opening a web application', () => {
        cy.visit('/registration_form'); //baseUrl is in the cypress.config.js folder, i am adding the rest of the page link here
        cy.get(':nth-child(1) > .col-sm-5 > .form-control').type('Manha');
        cy.get(':nth-child(2) > .col-sm-5 > .form-control').type('Zanib');
        cy.get(':nth-child(3) > .col-sm-5 > .form-control').type('MZanib');
        cy.get(':nth-child(4) > .col-sm-5 > .form-control').type('mzanib@mail.com');
        cy.get(':nth-child(5) > .col-sm-5 > .form-control').type('abcdefg123');
        cy.get(':nth-child(6) > .col-sm-5 > .form-control').type('004479888890');


    })
})