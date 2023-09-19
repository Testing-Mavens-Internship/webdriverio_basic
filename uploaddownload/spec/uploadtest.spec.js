
import { launchP } from "../page-object/loading-page.js";
import { uploadDownload } from "../page-object/upload-download-page.js";

describe('Demoqa website button page validation', () => {
    it('launch the url', async () => {
        await launchP.openUrl();
        expect(await launchP.$logo().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    });
    it('click on the element tile', async () => {
        await launchP.clickOnTile("Elements");
        expect(await launchP.$header().isDisplayed()).withContext("Expect the element page to load").toBe(true);
    });
    it('Click on Upload and Download', async()=>{
        await uploadDownload.clickOnUploadDownload();
         await browser.pause(5000);
    });
    it("click upload and verify navigation", async () => {
        await uploadDownload.clickUpload();
        expect(await uploadDownload.$verifyUpload().isDisplayed()).toBe(true);
    })
})