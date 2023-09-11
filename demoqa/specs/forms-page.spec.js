import { landingPage } from "../page-objects/landing-page.js"
import { formsPage } from "../page-objects/forms-page.js";

describe("Demo QA Application Forms automation", () => {
    it("load the demo qa url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect landing page header to be displayed")
        .toBe(true);
    });

    it("Click on the Forms tile and verify the navigation", async () => {
        await landingPage.clickOnTile("Forms");
        expect(await formsPage.$header().isDisplayed())
        .withContext("Expect forms page header to be displayed")
        .toBe(true); 
    });

    it("Click on side menu Practice Form", async() => {
        await formsPage.clickOnPracticeForm();
        expect(await formsPage.$header1().isDisplayed())
        .withContext("expect practice form header to be displayed")
        .toBe(true);
    });

    it("Enter the details", async() => {
        await formsPage.enterDetails();
    })
});