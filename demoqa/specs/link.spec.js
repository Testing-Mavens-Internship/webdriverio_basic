import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { link } from "../page-objects/link.js";

xdescribe("Demo QA Application checkbox automation", () => {

    it("load the demo qa url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);

    });

 

    it("Click on the elements tile and verify the navigation", async () => {
      await landingPage.clickOnTile("Elements");
      expect(await elementsPage.$header("Elements"))
      .withContext("Expect header to be displayed")
      .toBeDisplayed();

    });

    it("Click on the  link and verify the navigation", async () => {
        await elementsPage.clickOnTile("Links");
        expect(await link.$header("Links"))
        .withContext("Expect header to be displayed")
        .toBeDisplayed();

      });

      it("Click on the home and verify the navigation", async () => {
        await link.homepage();
        let handle = await browser.getWindowHandles();
        await browser.switchToWindow(handle[1]);
        expect(await landingPage.$tileName("Elements").isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true)
        
    
    })

})