import { landingPage } from "../page-objects/landing-page.js";
import { uploadDownload } from "../page-objects/upload-download-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
describe("Demo QA Application form automation", () => {
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
    });

    it("Click on the upload and download tile and verify the navigation", async () => {
        await elementsPage.clickOnTile("Upload and Download");
        expect(await uploadDownload.$pageHeader("Upload and Download"))
          .withContext("Expect web table header to be displayed")
          .toBeDisplayed();
      });

    it("click upload and verify navigation", async () => {
        await uploadDownload.clickUpload();
        expect(await uploadDownload.$verifyUpload().isDisplayed()).toBe(true);
    })
      
    it("click download and verify navigation", async () => {
        await uploadDownload.clickDownload();
        //expect(await uploadDownload.$verifyUpload().isDisplayed()).toBe(true);
    })
});