import { elementsPage } from "../page-objects/elements-page.js";
import { landingPage } from "../page-objects/landing-page.js";
import { links } from "../page-objects/links-page.js";

xdescribe("Demo QA Application Links automation", () => {
    it("load the demo qa url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect landing page header to be displayed")
        .toBe(true);
    });

    it("Click on the elements tile and verify the navigation", async () => {
        await landingPage.clickOnTile("Elements");
        expect(await elementsPage.$header().isDisplayed())
        .withContext("Expect elements page header to be displayed").toBe(true); 
    });

    it("Click on links ", async() =>{
        await elementsPage.clickOnLinks();
        expect(await links.$header().isDisplayed()).toBe(true);
    })

    it("Click on Home link", async() => {
        await links.clickHomeLink();
        let w = await browser.getWindowHandles();
        await browser.switchToWindow(w[1]);
        await links.$tileElement().scrollIntoView({ block: 'center'});
        expect(await links.$tileElement().isDisplayed()).withContext("expect Element tile to be displayed").toBe(true);
    })
});