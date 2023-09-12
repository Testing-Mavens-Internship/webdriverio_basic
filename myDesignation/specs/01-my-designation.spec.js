import { landingPage } from "../page-objects/landing-page.js";

xdescribe("My Designation Application automation", () => {
    it("load the My designation url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$logo().isDisplayed())
        .withContext("Expect Logo to be displayed")
        .toBe(true);
    });
})