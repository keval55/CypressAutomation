/// <reference types="Cypress"/>

export class LicencePage{

    verifyLicenceView(){
        cy.get('a[class="button"]').contains('New License').click()
    }

    verifyMonthlySubscriptionPrice(){

        //Without Discount
        cy.get('select[class="form-control"]').select('1')
        cy.get('label[id="totalPrice"]').click()
        cy.get('label[id="totalPrice"]').should('contain','$6.99')

        //Apply Discount Code
        cy.get('input[id="DiscountCode"]').type('UNI50')
        cy.get('label[id="totalPrice"]').click()
        cy.get('label[id="totalPrice"]').should('contain','$3.50')
    }

    verifyAnnuallySubscriptionPrice(){
        //Discount Applied
        cy.get('select[class="form-control"]').select('12')
        cy.get('label[id="totalPrice"]').click()
        cy.get('label[id="totalPrice"]').should('contain','$40.00')

        //Without Discount
        cy.get('input[id="DiscountCode"]').clear()
        cy.get('label[id="totalPrice"]').click()
        cy.get('label[id="totalPrice"]').should('contain','$79.99')
    }
}