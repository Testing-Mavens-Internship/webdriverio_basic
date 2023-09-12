import { launchPage } from "../pageobjects/landing-page.js";
import { elementPage }  from "../pageobjects/01-element-page.js";
import { radioButton } from "../pageobjects/radio-button-page.js";



xdescribe('Demoqa website radio button validation', () => {
    it('launch the url', async () => {
        await launchPage.openUrl();
        expect(await launchPage.$logo().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });
    it('click on the element tile', async () => {
        await launchPage.clickOnTile("Elements");
        expect(await elementPage.$header().isDisplayed()).withContext("Expect the element page to load").toBe(true);
    });
    it('click on the radio button tile', async () => {
        await elementPage.clickOnRadioButton();
        let a = await radioButton.$headerRadioButton().getText();
        console.log(a);
        
        expect(await radioButton.$headerRadioButton().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    })

    it ('click on Yes radio button', async () => {
        await radioButton.clickOnYes();
        expect(await radioButton.$text().isDisplayed()).withContext("Expect text to be displayed");
    })
    it ('click on Impressive radio button', async () => {
        await radioButton.clickOnImpressive();
        expect(await radioButton.$text().isDisplayed()).withContext("Expect text to be displayed");
    })
    it ('click on No radio button', async () => {
        await radioButton.clickOnNo();
        expect(await radioButton.$text().isDisplayed()).withContext("Expect text to be displayed");
    })
})