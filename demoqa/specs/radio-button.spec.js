const landingPage = require("../page-objects/landing-web-page.js")
const elementsPage = require("../page-objects/elements-radio-page.js")

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
    })

    it("Click on Radio Button and verify the navigation",async ()=>{
        await elementsPage.clickOnRadioButtonSection()
        expect(await elementsPage.$subHead("Impressive"))
        .withContext("Expected yes to be displayed")
        .toBeDisplayed();
    })
});