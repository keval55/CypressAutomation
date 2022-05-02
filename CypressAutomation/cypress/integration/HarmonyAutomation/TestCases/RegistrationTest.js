/// <reference types="Cypress"/>

import { Registrationpage } from "../Page-Object/RegistrationPage";

const data = require('../../../fixtures/registration.json')


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

    const regtc = new Registrationpage()
    describe('Registration Functionality', function(){

         data.forEach(signUpData => {
            it(signUpData.testcasename,function(){
                regtc.validateRegistration(signUpData.url , signUpData.name , signUpData.surname , signUpData.email)
                if(signUpData.email=='keval.k'){
                    cy.on('window:alert',(txt)=>{
                        expect(txt).to.contains(signUpData.email + ' is not valid email address, Please correct or provide other email address')
                    })
                }else if(signUpData.name==" ") {
                    cy.get('#Account_Name').clear()
                    cy.get('#Account_Name').should('have.css', 'border-top-color' , 'rgb(255, 0, 0)')
                    
                }
                else if(signUpData.surname==" "){
                    cy.get('#Account_Surname').clear()
                    cy.get('input[class="input-validation-error form-control"]').should('have.css','border-top-color','rgb(255, 0, 0)')

                }
                else{
                    cy.get('div[class="validation-summary-errors"]').should('include.text','Please, fill all fields correctly')
                }
            }) 
         });

        // before(function(){
        //     //access fixture data
        //     cy.fixture('registration').then(function(signUpData){
        //        this.signUpData = signUpData
        //     })
        //  })
 
        // it('Register new User',function(){
        //     regtc.validateRegistration(this.signUpData[1].url , this.signUpData[1].name , this.signUpData[1].surname , this.signUpData[1].email)
        // }) 
    })