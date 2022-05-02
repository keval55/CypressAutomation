/// <reference types ="Cypress"/>



Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

export class HomePage{
    

    verifyTitle(){
        cy.title().should('eq',"Harmony - Login")
    }

    verifySwitchtransactionOffFeature(){

        cy.get('input[id="chbSwitchOffTranslate"]').should('not.be.checked')
        cy.get('div[id=":0.targetLanguage"]').should('be.visible')
        cy.get('input[id="chbSwitchOffTranslate"]').check().should('be.checked')
        cy.get('div[id=":0.targetLanguage"]').should('not.exist')
    }

    verifyNavBar(){
        cy.get('ul[class="nav navbar-nav home-nav"]').find('li').should('have.length','6')
    }

    verifyAllNavPage(){

        //verify what's new Page
        cy.get('.nav > :nth-child(1) > a').click()
        cy.title().should('eq',"Harmony - What’s New Autumn 2014")


        //verify pricing
        cy.get('.nav > :nth-child(3) > a').click()
        cy.title().should('eq','Harmony - Pricing')


        //verify Mobile Apps
        cy.get('.nav > :nth-child(4) > a').click()
        cy.title().should('eq','Harmony - Goldratt Mobile Apps')
   

        //verify Company Page
        cy.get('.nav > :nth-child(5) > a').click()
        cy.title().should('eq','Harmony - About')
     

        //verify Contact Page
        cy.get('.nav > :nth-child(6) > a').click()
        cy.title().should('eq','Harmony - Contact Us')

        //verfy Guide Page
        cy.get('a[target="_blank"]').contains('How-To Guide').invoke('removeAttr','target').click()
        cy.get('a[class="sidebar-navi-item active"]').contains('General Questions').should('be.visible')
    }
    
}
