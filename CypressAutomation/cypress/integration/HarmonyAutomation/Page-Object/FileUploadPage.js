/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});


export class FileUploadPage{

    launchSite(){
        cy.visit('https://tus.io/demo.html')
    }
    verifyUploadFIle(){
        const filepath = 'cypress/images/MicrosoftTeams-image.jpeg'
        cy.get('input[type="file"]').selectFile(filepath)
        cy.get('a[class="button button-primary"]').should('include.text','MicrosoftTeams-image')
    }
}