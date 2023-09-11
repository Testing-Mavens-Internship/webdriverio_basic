import { landingPage } from "../page-objects/landing-page.js";

import { elementsPage } from "../pageobjects/elements-page.js";

import { practiceformpage } from "../pageobjects/practise-form-page.js";

 

let name="Alen"

let email="abc@gmail.com"

let sex="Male"

let phoneNumber="7468142365"

let date="20/11/2020"

 

describe('My Login application', () => {

    it('should launch the url', async () => {

        await landingPage.openUrl()

        expect(await landingPage.$header().isDisplayed()).withContext('expect home page logo is displayed').toBe(true);

    })

 

    it('click the forms title and verify the navigation',async () =>{

        await landingPage.clickOnTile("Forms")

        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);

    })

 

    it("click on the Practice Form menu on side navigation",async()=>{

        await practiceformpage.clickOnPracticeFormNav("Practice Form")

        expect(await practiceformpage.$practiceFormTitle().isDisplayed()).withContext("Expect Practice Form title should be there").toBe(true)

        expect(await practiceformpage.$formHeading().isDisplayed()).withContext("Expect Student Registration Form heading should be there").toBe(true)

    })

 

    it("click on the firstname field and enter the name",async()=>{

        await practiceformpage.clickOnNameField(name,email,sex,phoneNumber,date)

       expect(await practiceformpage.$nameFields("Name").isDisplayed()).withContext(`Expect the entered value should be taken`).toBe(true)

    })

   

 

 

})