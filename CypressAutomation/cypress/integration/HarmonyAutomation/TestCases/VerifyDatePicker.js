/// <reference types="Cypress"/>

import { DatePickerPage } from "../Page-Object/DatePickerPage";

const datePage = new DatePickerPage()

describe('verify datepicker', function(){

    before(function(){
        datePage.launchSite()
    })
    
    it('verify DatePicker',function(){
        datePage.verifydate()
        datePage.getCalander()
        datePage.getYear("2024")
        datePage.getmonth("Jun")
        datePage.getDate("15")
    })
})