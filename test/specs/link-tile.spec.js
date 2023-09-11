
import { launchPage } from "../pageobjects/landing-page.js";
import { elementPage }  from "../pageobjects/element-page.js";
import { checkBox } from "../pageobjects/check-box-page.js";
import { linkPage } from "../pageobjects/link-page.js";

xdescribe('Demoqa website Link tile validation', () => {
    it('launch the url', async () => {
        await launchPage.openUrl();
        expect(await launchPage.$logo().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });
    it('click on the element tile', async () => {
        await launchPage.clickOnTile("Elements");
        expect(await elementPage.$header().isDisplayed()).withContext("Expect the element page to load").toBe(true);

    });
    it('click on link tile', async () => {
        await linkPage.clickOnLinkPage();
        expect(await linkPage.$headerLink().isDisplayed()).withContext("Expect the element page to load").toBe(true);
    })
    it('click on home link', async () => {
        await linkPage.clickOnHome();
        let a= await browser.getWindowHandles();
        console.log(a);
        await browser.switchToWindow(a[1])
        expect(await elementPage.$elementsTile().isDisplayed()).withContext("Expect Elements tile to be displayed").toBe(true);
    })
}) 