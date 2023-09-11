import { launchPage } from "../pageobjects/landing-page.js";
import { elementPage } from "../pageobjects/element-page.js";
import { buttonPage } from "../pageobjects/button-tile-page.js";

xdescribe('Demoqa website button page validation', () => {
    it('launch the url', async () => {
        await launchPage.openUrl();
        expect(await launchPage.$logo().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });
    it('click on the element tile', async () => {
        await launchPage.clickOnTile("Elements");
        expect(await elementPage.$header().isDisplayed()).withContext("Expect the element page to load").toBe(true);

    });
    it('click on the button tile', async () => {
        await buttonPage.clickOnButtonTile();
        expect(await buttonPage.$headerButtonTile().isDisplayed()).withContext("Expect the element page to load").toBe(true);
    })
    it('click on the buttons and validating',async () =>{
        await buttonPage.clickON();
        expect(await buttonPage.$text("double").isDisplayed()).withContext("Expect double click message to be displayed").toBe(true);
        expect(await buttonPage.$text("dynamic").isDisplayed()).withContext("Expect click message to be displayed").toBe(true);
        expect(await buttonPage.$text("right").isDisplayed()).withContext("Expect right click message to be displayed").toBe(true);
        
    })
})