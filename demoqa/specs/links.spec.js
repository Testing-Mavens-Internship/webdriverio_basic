const landingPage = require("../page-objects/landing-web-page.js")
const elementsPage = require("../page-objects/elements-links-page.js")

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
    it("Click on the link and verify navigation",async () => {
        await elementsPage.clickOnLinkSection()
        expect(await elementsPage.$header("Links"))
        .withContext("Expect link to be displayed")
        .toBeDisplayed();
    })
    it("Click on the link and verify navigation",async()=>{
        await elementsPage.clickLink()
        let handle = await browser.getWindowHandles()
        await browser.switchToWindow(handle[1])
        expect(await elementsPage.$tileName("Elements").isDisplayed())
        .withContext("Expected element tile to be displayed")
        .toBe(true)
    })


});
