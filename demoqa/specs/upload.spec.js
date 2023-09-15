import { landingPage } from '../page-objects/landing-page.js';
import { elementsPage } from '../page-objects/elements-page.js';
import { upload } from '../page-objects/upload.js';

describe("Demo QA Application Text Box automation", () => {
    it("load the demo qa url", async () => { // it block shows the action to be performed
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed") // error message if failed
        .toBe(true);
    });

    it("Click on the elements tile and verify the navigation", async () => {
        await landingPage.clickOnTile("Elements");
        expect(await elementsPage.$header().isDisplayed())
          .withContext("Expect elements header to be displayed")
          .toBe(true);
      });

      it("Click on the upload and verify the navigation", async () => {
        await upload.clickOnUpload();
        expect(await upload.$header())
        .withContext("Expect header to be displayed")
        .toBeDisplayed();
      });

      it("Click on choose file and upload file", async () => {
        await upload.uploadFile();
        expect(await upload.$uploadFile().isDisplayed())
        .withContext("Expect uploaded file to be displayed")
        .toBeDisplayed();
      });
});