import { elementsPage } from "../pageobjects/element-page.js";
import { loginpage } from "../pageobjects/login.page.js";
import {radioButtonPage} from "../pageobjects/radio-button-page.js";


xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await loginpage.openUrl()
        expect(await loginpage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })

    it('click the element title and verify the navigation',async () =>{
        await loginpage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })
    it("click on the radio button menu on side navigation",async()=>{
        await radioButtonPage.clickOnRadioButtonNav("Radio Button")
        expect(await radioButtonPage.$radioButtonTitle().isDisplayed()).withContext("Expect radio button title should be there").toBe(true)
    })
    it("click on the yes radio button",async ()=>{
        await radioButtonPage.clickOnRadioIcon("Yes")
        expect(await radioButtonPage.$radioStatusName("Yes").isDisplayed()).withContext("expect the yes radio button should enable").toBe(true)
        expect(await radioButtonPage.$radioResult("Yes").isDisplayed()).withContext("Expect the selected yes result should be display ").toBe(true)
    })
    it("click on the no radio button",async ()=>{
        await radioButtonPage.clickOnRadioIcon("Impressive")
        expect(await radioButtonPage.$radioStatusName("Impressive").isDisplayed()).withContext("expect the Impressive radio button should enable").toBe(true)
        expect(await radioButtonPage.$radioResult("Impressive").isDisplayed()).withContext("Expect the selected Impressive result should be display ").toBe(true)
    })
    

})
