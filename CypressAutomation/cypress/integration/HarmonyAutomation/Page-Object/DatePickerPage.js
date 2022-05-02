/// <reference types="Cypress"/>

export class DatePickerPage{
    
    launchSite(){
        cy.visit('https://fengyuanchen.github.io/datepicker/')
    }

    verifydate(){
        cy.get('input[placeholder="Pick a date"]').click()
    }

    getCalander(){
        cy.get('div[class="datepicker-panel"]').should('be.visible')
    }

    getmonth(month){
        //cy.get('li[data-view="month current"]').click()
        cy.get('ul[data-view="months"]').find('li').contains(month).click()
    }
    getYear(year){

        cy.get('li[data-view="month current"]').click()
        cy.get('li[data-view="year current"]').click()
        if(cy.get('ul[data-view="years"]').find('li').contains(year)){
            cy.get('ul[data-view="years"]').find('li').contains(year).click()
        }else {
            cy.get('li[data-view="years prev"]').click()
        }
    }
    getDate(date){
        cy.get('ul[data-view="days"]').find('li').contains(date).click()
    }
}