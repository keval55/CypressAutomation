/// <reference types="Cypress"/>


export class Registrationpage{

    validateRegistration(url, name, surname, email){
        cy.visit(url)
        cy.get('p[class="lead"]').contains('New user? To Register click Here').click()
        cy.get('input[placeholder="Work Email"]').type(email)
        cy.get('input[placeholder="First Name"]').type(name)
        cy.get('input[placeholder="Last Name"]').type(surname)
        cy.get('select[id="Product"]').select('9')
        cy.get('input[id="Account_ReceiveUpdates"]').should('be.checked')
        cy.get('a[class="btn btn-primary registerButton"]').click()     
    }
}