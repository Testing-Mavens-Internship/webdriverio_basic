import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { uploadDownload } from "../page-objects/upload-download.js";
xdescribe("Demo QA Application Text Box automation", () => {
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
      expect(await uploadDownload.$header())
        .withContext("Expect header to be displayed")
        .toBeDisplayed();
    });

    // it("Click on the download button ", async () => {
    //     await uploadDownload.clickOnDownload();
    //     expect(await uploadDownload.$download())
    // });

    it("click upload and verify navigation", async () => {
        await uploadDownload.clickUpload();
        expect(await uploadDownload.$verifyUpload().isDisplayed()).toBe(true);
    })
});