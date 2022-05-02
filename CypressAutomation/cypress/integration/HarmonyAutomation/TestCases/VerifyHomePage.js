/// <reference types="Cypress"/>

import { HomePage } from "../Page-Object/HomePage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

const homePage = new HomePage

describe('verify Home page', function(){

    before(function(){
        cy.visit("http://dev.harmonytoc.com/Account/Login")
    })

    it('verify title of the page', function(){
        homePage.verifyTitle()
    })

    it('Verify Switch Transaction Off Feature', function(){

        homePage.verifySwitchtransactionOffFeature()
    })

    it('verify Nav Bar', function(){
        homePage.verifyNavBar()
    })

    it('verify All Nav Pages',function(){
        homePage.verifyAllNavPage()
    })

})

