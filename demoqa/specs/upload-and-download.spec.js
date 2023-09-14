import { landingPage } from "../page-objects/landing-web-page.js";
import {elementsPage} from "../page-objects/elements-page.js";
import { uploadAndDownload } from "../page-objects/elements-upload&download-page.js";
describe("Automation of upload and download",()=>{
    it("load the demo qa url", async () => {
        await landingPage.openUrl();
        expect(await landingPage.$header().isDisplayed())
            .withContext("Expect header to be displayed")
            .toBe(true);
    })

    it("Click on the elements tile and verify the navigation", async () => {
        await landingPage.clickOnTile("Elements");
        expect(await elementsPage.$header("Elements"))
            .withContext("Expect header to be displayed")
            .toBeDisplayed();
    });
    it("Click on the upload and download section and verify navigation",async () => {
        await uploadAndDownload.clickOnUploadDownloadSection()
        expect(await uploadAndDownload.$header())
        .withContext("Expect upload and download to be displayed")
        .toBeDisplayed();
    })
    it("Upload file and verify upload",async ()=>{
        await uploadAndDownload.uploadFileToSite()
        expect(await uploadAndDownload.$uploadVerify().isDisplayed())
            .withContext("Expecting file name to be displayed")
            .toBe(true)
    })
    it("Download",async ()=>{
        await uploadAndDownload.downloadFileFromSite()
    })
})