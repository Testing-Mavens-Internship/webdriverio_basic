import { common } from "../page-objects/common.js";
import { landingPage } from "../page-objects/landing-page.js";

describe("End to end flow automation of Edelivery website", () => {
    it("Launch URL", async () => {
      await common.launchUrl();
      expect(await common.$header().isDisplayed())
        .withContext("Expect Eelivery header to be displayed")
        .toBe(true);
    });
    it("Signup in the website", async()=>{
        await landingPage.signUp();
        expect(await landingPage.$headerInPopUp().isDisplayed())
        .withContext("Expect Eelivery header to be displayed")
        .toBe(true);
        
    });
}) 