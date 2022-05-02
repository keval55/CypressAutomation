/// <reference types="Cypress"/>


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

export class MyAccountPage{

    verifyProfile(){
        cy.get('img[title="Profile"]').should('be.visible')
    }

    verifyLicencepage(){
        cy.get('a[class="notranslate dropdown-toggle"]').click({force: true})
        cy.get('li').find('a').contains('My Licenses').click()
    }

    verifyDecView(){

        cy.get('a[class="dropp-header__btn js-dropp-action"]').find('i[class="icon"]').click({force: true})
        cy.get('div[class="dropp-body js-open"]').find('a[onclick="showConflict()"]').click({force: true})
        cy.wait(1000)
        if(cy.get('#spnSelectedView').contains("Decision View")){
             cy.get('div[class="top-action-area"]').find('h3[class="grid-title"]').contains("My Decisions Library (Total: ").should('be.visible')
        }
    }

    verifySTView(){
        cy.get('a[class="dropp-header__btn js-dropp-action"]').find('i[class="icon"]').click({force: true})
        cy.get('div[class="dropp-body js-open"]').find('a[onclick="showst()"]').click({force: true})
        if(cy.get('#spnSelectedView').contains("S&T View")){
            cy.wait(1000)
            cy.get('div[class="top-action-area"]').find('h3[class="grid-title"]').contains("My Strategy & Tactic (S&T) Trees (Total:").should('be.visible')
        }
    }

    verifyHeaderBar(){
        cy.get('ul[class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"]').find('li[role="tab"]').should('have.length','6')
    }
    verifynavBar(){
        cy.get('ul[class="nav navbar-nav"]').find('li').should('have.length','10')
    }

}