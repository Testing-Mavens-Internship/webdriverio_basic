import { landingPage } from "../page-objects/landing-page.js";
import { formPage } from "../page-objects/form-page.js";

describe("Demo QA Application Text Box automation", () => {
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

    it("Click on practice form tag and verify the header", async() => {
        await formPage.clickOnPracticeForm()
        expect(await formPage.$header()).withContext("Expect header to be displayed").toBeDisplayed()
    })
    it("enter student details and validae", async() => {
        await formPage.clickOnStudentDetails();
    })


})