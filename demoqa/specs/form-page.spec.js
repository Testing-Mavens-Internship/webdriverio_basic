import { landingPage } from "../page-objects/landing-page.js";
import { formsPage } from "../page-objects/form-page.js";

xdescribe("Demo QA Application Text Box automation", () => {
    it("load the demo qa url", async() => {
        await landingPage.openUrl();
        expect(await landingPage.$header().isDisplayed())
            .withContext("Expect header to be displayed")
            .toBe(true);
    });

    it("Click on the Form tile and verify the navigation", async() => {
        await landingPage.clickOnForm();
        expect(await landingPage.$headerForm())
            .withContext("Expect header to be displayed")
            .toBeDisplayed();

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