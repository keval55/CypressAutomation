/// <reference types="Cypress"/>

import { FileUploadPage } from "../Page-Object/FileUploadPage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});


const fupage = new FileUploadPage()


describe('File Upload', function () {
    before(function () {
        fupage.launchSite()

    })

    it('Verify File Upload', function(){
       fupage.verifyUploadFIle()
    })
})
