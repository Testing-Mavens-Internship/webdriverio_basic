import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";


describe("Demo QA Application Text Box automation", () => {
    it("load the demo qa url", async() => {
        await landingPage.openUrl();
        expect(await landingPage.$header().isDisplayed())
            .withContext("Expect header to be displayed")
            .toBe(true);
    });

    it("Click on the elements tile and verify the navigation", async() => {
        await landingPage.clickOnTile("Elements");
        expect(await elementsPage.$header())
            .withContext("Expect header to be displayed")
            .toBeDisplayed();

    });

    it("Click on Text Box button", async() => {
        await elementsPage.$uploadAnddownload();
        expect(await elementsPage.$header5())
            .withContext("Expected header to be redirected")
            .toBeDisplayed();
    })

    // it("Click on download button", async() => {
    //  await elementsPage.clickOnDownLoad();
    // expect(await elementsPage.$selectFileHeader().isDisplayed())
    //   .withContext("exepected header to be displayed").toBe(true)
    // })
})