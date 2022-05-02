/// <reference types="Cypress"/>


export class LoginPage{

    loginTest(url , email, password){
        cy.clearCookies()
        cy.visit(url)
        cy.get('#UserName').type(email)
        cy.get('#Password').type(password)
        cy.get('label[for="Remember"]').click()
        cy.get('#btnLogin').click()
        // cy.get('.onbording_redio > :nth-child(2) > label').click({force: true})
        // cy.get('#myselection > span').click({force: true})
        // cy.get('.notranslate > img').should('be.visible')
        // cy.get('input[id="rdbBoth"]').should('be.checked')
    }
}