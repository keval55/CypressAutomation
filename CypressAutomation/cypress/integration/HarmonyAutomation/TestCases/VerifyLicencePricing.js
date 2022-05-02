/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

import { LoginPage} from "../../HarmonyAutomation/Page-Object/LoginPage"
import { LicencePage } from "../Page-Object/LicencePage";
import { MyAccountPage } from "../Page-Object/MyAccountpage";

const beforeTest = new LoginPage()
const accPage = new MyAccountPage()
const licPage = new LicencePage()

describe('verify Account Page',function(){

    before(function(){
        //access fixture data
        cy.fixture('signin').then(function(signInData){
           this.signInData = signInData
           beforeTest.loginTest(this.signInData[0].url , this.signInData[0].email , this.signInData[0].password)
        })
    })

    beforeEach(function(){
        accPage.verifyLicencepage()
        licPage.verifyLicenceView()
    })

    it('verify Pricing of Licence', function(){
        licPage.verifyMonthlySubscriptionPrice()
        licPage.verifyAnnuallySubscriptionPrice()
    })
})