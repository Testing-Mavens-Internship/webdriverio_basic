import { landingPage } from ('../page-objects/landing-page.js');
import { formsPage } from ('..//page-objects/forms-page.js');
describe("Demo QA Application Text Box automation", () => {
    it("load the demo qa url", async () => {
      await landingPage.openUrl();
      expect(await landingPage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Click on the forms tile and verify the navigation", async () => {
      await landingPage.clickOnTile("Forms");
      expect(await formsPage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
    });

    it("Click on the practice form and verify the navigation", async () => {
        await formsPage.clickOnPracticeForms()
        expect(await formsPage.$header().isDisplayed())
        .withContext("Expect header of practice forms to be displayed")
        .toBe(true);
    });

    it("Enter the details in the practice forms", async() =>{
      await formsPage.enterDetails("firstName", "lastName","userEmail","userNumber")
      expect(await formsPage.$details().isDisplayed())
      .withContext("Expect submit button to be clicked")
      .toBe(true);
    });

    it("Enter current address", async()=>{
      await formsPage.currentAddress();
    });
    
});