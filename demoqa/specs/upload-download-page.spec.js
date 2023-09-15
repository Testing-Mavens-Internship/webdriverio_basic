import { launchPage } from "../page-objects/landing-page.js";
import { elementPage } from "../page-objects/01-element-page.js";
import { uploadPage } from "../page-objects/upload-download-page.js";

describe('Demoqa website button page validation', () => {
    it('launch the url', async () => {
        await launchPage.openUrl();
        expect(await launchPage.$logo().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });
    it('click on the element tile', async () => {
        await launchPage.clickOnTile("Elements");
        expect(await elementPage.$header().isDisplayed()).withContext("Expect the element page to load").toBe(true);
    })

    it('click on the upload and download tile', async () => {
        await uploadPage.clickOnUploadTile();
        expect(await uploadPage.$headerUploadTile().isDisplayed()).withContext('Expect the upload and download header to be displayed').toBe(true);
        await uploadPage.clickUploadButton();
        expect(await uploadPage.$verifyMessage().isDisplayed()).withContext("Expect verify message to be displayed").toBe(true);

    })
}) 