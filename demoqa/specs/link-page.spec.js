import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { linksPage} from "../page-objects/links-page.js"
xdescribe("Demo QA Application link page automation", () => {
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

    it("Click on the Links tile and verify the navigation", async () => {
      await elementsPage.clickOnTile("Links");
      expect(await linksPage.$header("Links"))
      .withContext("Expect links header to be displayed")
      .toBeDisplayed();
    });

    it("Click on the home link and verify the navigation", async () => {
        await linksPage.homeLink();
        let a = await browser.getWindowHandles(); 
        await browser.switchToWindow(a[1]);
        expect(await landingPage.$tileName("Elements").isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
});
});