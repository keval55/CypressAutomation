// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("LoginAPI",()=>
{
    cy.request("POST" , "https://api.cogmento.com/api/1/auth/" , {
            "email": "tapan@mailinator.com",
            "password": "Test@123"
          }).then(function(res){
              expect(res.status).is.eq(201)
              //expect(res.body).has.property({response(token,success)})
              Cypress.env('token', res.body.response.token)
          })

})