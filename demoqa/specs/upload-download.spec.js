import {landingPage} from '../page-objects/landing-page.js'
import {elementsPage} from '../page-objects/elements-page.js'
import { uploadDownloadPage } from "../page-objects/uploadDownload-page.js";


describe("DEMOQA Check Box automation",()=>{
    it("load the demo qa url", async () => {
        await landingPage.openUrl();
        expect(await landingPage.$header().isDisplayed())
          .withContext("Expect header to be displayed")
          .toBe(true);
      });
      it("Click on the elements tile and verify the navigation", async () => {
        await landingPage.clickOnTile("Elements");
   
        expect(await elementsPage.$header())
        .withContext("Expect header to be displayed")
        .toBeDisplayed();
      })
      it("Click on the upload download option from menu list drop down", async () => {
        await elementsPage.clickOnMenuListElement("Upload and Download");
        expect(await uploadDownloadPage.$header())
        .withContext("Expect header to be displayed")
        .toBeDisplayed();
      });
   

 it("click upload and verify navigation", async () => {
await uploadDownloadPage.clickUpload();
expect(await uploadDownloadPage.$validationMessage().isDisplayed()).toBe(true);

    })


})