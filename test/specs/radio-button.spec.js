import LoginPage from '../pageobjects/login.page.js';
import { elementsPage } from '../pageobjects/element-page.js';
import { radioButtonPage } from '../pageobjects/radio-button.js';

xdescribe('My Login application', () => {
    it('should launch the url', async () => {
        await LoginPage.openUrl()
        expect(await LoginPage.$header().isDisplayed()).withContext('expect home page logo is displayed ').toBe(true);
    })

    it('click the element title and verify the navigation',async () =>{
        await LoginPage.clickOnTile("Elements")
        expect(await elementsPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBe(true);
    })

    it('click on radio button',async ()=>{
        await radioButtonPage.clickOnRadioButton()
        expect(await radioButtonPage.$radioButtonTitle().isDisplayed()).withContext('Expect radio button to be clicked').toBe(true);

    })
    it('click on radio icons',async ()=>{
        await radioButtonPage.clickOnRadioIcons("Yes")
        expect(await radioButtonPage.$radioIcons("Yes").isDisplayed()).withContext('Expect radio icons to be clicked').toBe(true);
        expect(await radioButtonPage.$validateIcons("Yes").isDisplayed()).withContext('Expect radio icons to be clicked').toBe(true);

    })

    it('click on radio icons',async ()=>{
        await radioButtonPage.clickOnRadioIcons("Impressive")
        expect(await radioButtonPage.$radioIcons("Impressive").isDisplayed()).withContext('Expect radio icons to be clicked').toBe(true);
        expect(await radioButtonPage.$validateIcons("Impressive").isDisplayed()).withContext('Expect radio icons to be clicked').toBe(true);

    })


})