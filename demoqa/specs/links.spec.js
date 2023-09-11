import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { linkPage } from "../page-objects/links-page.js";

xdescribe("Demo QA Application Text Box automation", () => {
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

    it("Click on Link", async() => {
        await linkPage.clickOnLink();
        expect(await linkPage.$clickElements("Links").isDisplayed())
            .withContext("Links to be displayed").toBe(true)
    })
    it("Click on Home Link inside Link Tile", async() => {
        await linkPage.clicOnHomeLink();
        let switchHolder = await browser.getWindowHandles();
        await browser.switchToWindow(switchHolder[1])
        expect(await landingPage.$tileName("Elements").isDisplayed())
            .withContext("Element tile in new home tab").toBe(true);



    })
})