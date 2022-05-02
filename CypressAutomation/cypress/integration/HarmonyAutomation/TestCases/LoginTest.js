/// <reference types="Cypress"/>

import { LoginPage } from "../Page-Object/LoginPage"
import { MyAccountPage } from "../Page-Object/MyAccountpage";

const tc = new LoginPage()
const accPage = new MyAccountPage()

const data = require('../../../fixtures/signin.json')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

describe('Login Functionality', function(){

    // before(function(){
    //     //access fixture data
    //     cy.fixture('signin').then(function(signInData){
    //        this.signInData = signInData
    //     })
    //  })

    data.forEach(signInData=>{

        it(signInData.testcasename,function(){
            tc.loginTest(signInData.url, signInData.email,signInData.password)
            if(signInData.testcasename=='Invalid Password'){
                cy.get('#UserName').should('have.css','border-top-color','rgb(255, 0, 0)')
            }else if(signInData.testcasename=='Invalid Email and Password'){
                cy.get('#UserName').should('have.css','border-top-color','rgb(255, 0, 0)')
            }else if(signInData.testcasename=='Invalid Email'){
                cy.get('#UserName').should('have.css','border-top-color','rgb(255, 0, 0)')
            }else if(signInData.testcasename=='Keep password and email field Empty'){
                cy.get('#UserName').should('have.css','border-top-color','rgb(255, 0, 0)')
                cy.get('#Password').should('have.css','border-top-color','rgb(255, 0, 0)')
            }else if(signInData.testcasename=='Keep password field Empty'){
                cy.get('#Password').should('have.css','border-top-color','rgb(255, 0, 0)')
            }else if(signInData.testcasename=='Keep email field Empty'){
                cy.get('#UserName').should('have.css','border-top-color','rgb(255, 0, 0)')
            }
            else{
                cy.get('img[title="Profile"]').should('be.visible')
            }
        })

        // it('TestLogin',function(){
        //     tc.loginTest(this.signInData[0].url , this.signInData[0].email , this.signInData[0].password)
        //     accPage.verifySTView()
        //     accPage.verifyDecView()
        //  })
    })
}) 

