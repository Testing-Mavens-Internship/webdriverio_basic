import { launchPage } from "../pageobjects/landing-page.js";
import { formPage } from "../pageobjects/02-forms-page.js";

let fname ="Aparna"
let lname ="Udayan"
let email = "aparna@gmail.com"
let mobileNumber = "5566773344"
let subject = "Testing"

fdescribe('Demoqa website practice form validation ',() => {
    it('launch the url', async () => {
        await launchPage.openUrl();
        expect(await launchPage.$logo().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });
    it('click on the forms tile', async () => {
        await formPage.clickOnFormTile();
        expect(await formPage.$headerForms().isDisplayed()).withContext("Expect the forms page to load").toBe(true);
    });
    it('click on practice form',async () => {
        await formPage.clickOnPracticeForm();
        expect(await formPage.$headerPracticeForms().isDisplayed()).withContext("Expect the practice form page to load").toBe(true);
    })
    it('fill the form and validate the result form is displayed', async () => {
        await formPage.fillForm(fname,lname,email,mobileNumber,subject);
        expect(await formPage.$resultHeader().isDisplayed()).withContext("expect header to be displayed").toBe(true)
        // let a=["Aparna Udayan","aparna@gmail.com","Female","5566773344","Testing"]
        // for (let i =0; i<a.length;i++){
        //     expect(await formPage.$resultRow(a[i]).isDisplayed()).withContext("expect the filled form to be displayed").toBe(true);
        // }
    })
     it('close the result form', async () => {
        await formPage.resultFormClose();
        expect(await formPage.$headerPracticeForms().isDisplayed()).withContext("Expect the practice form page to load").toBe(true);
        
     })
      
})