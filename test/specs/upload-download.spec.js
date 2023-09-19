import { launchPage } from "../pageobjects/landing-page.js";
import { elementsPage } from "../pageobjects/element-page.js";
import { uploadDownload } from "../../uploaddownload/page-object/upload-download-page.js";

describe('Demoqa website button page validation', () => {
    it('launch the url', async () => {
        await launchPage.openUrl();
        expect(await launchPage.$logo().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });
    it('click on the element tile', async () => {
        await launchPage.clickOnTile("Elements");
        expect(await elementsPage.$header().isDisplayed()).withContext("Expect the element page to load").toBe(true);
    });
    it('Click on Upload and Download', async()=>{
        await uploadDownload.clickOnUploadDownload();
         await browser.pause(5000);
    });
})