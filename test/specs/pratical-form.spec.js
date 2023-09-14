import { loginpage } from "../pageobjects/login.page.js";
import { elementsPage } from "../pageobjects/element-page.js";
import { practiceformpage } from "../pageobjects/pratical-form.js";

let name="Adhithya"
let email="abc@gmail.com"
let sex="Male"
let phoneNumber="7468142365"
let date="20 Feb 1998"
let subject="Hind"
let hobbie="Music"

xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await loginpage.openUrl()
        expect(await loginpage.$header().isDisplayed()).withContext('expect home page logo is displayed').toBe(true);
    })

    it('click the forms title and verify the navigation',async () =>{
        await loginpage.clickOnTile("Forms")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })

    it("click on the Practice Form menu on side navigation",async()=>{
        await practiceformpage.clickOnPracticeFormNav("Practice Form")
        expect(await practiceformpage.$practiceFormTitle().isDisplayed()).withContext("Expect Practice Form title should be there").toBe(true)
        expect(await practiceformpage.$formHeading().isDisplayed()).withContext("Expect Student Registration Form heading should be there").toBe(true)
    })

    it("click on each field and enter the values",async()=>{
        await practiceformpage.clickOnNameField(name,email,sex,phoneNumber,date,subject,hobbie)
       expect(await practiceformpage.$nameFields("Name").isDisplayed()).withContext(`Expect the entered value should be taken`).toBe(true)
    })
   
    


})