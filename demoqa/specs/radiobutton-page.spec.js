import { elementsPage } from '../page-objects/elements-page.js';
import { landingPage } from '../page-objects/landing-page.js';
import { radiobutton } from '../page-objects/radiobutton-page.js';

xdescribe("Radio button automation", () => {
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
    it ("Click on radio button in the side nav bar", async () => {
        await radiobutton.clickOnRadioButton();
        expect(await radiobutton.$header())
        .withContext("Expect radio button to be displayed")
        .toBeDisplayed();
    });

    it("Click on Yes radio button", async() =>{
        await radiobutton.ClickOnYes();
        expect(await radiobutton.$valtext('Yes'))
        .withContext ("Expected Yes Radio button not selected")
        .toBeDisplayed();
    });

    it("Click on Impressive radio button", async() =>{
      await radiobutton.ClickOnImpressive();
      expect(await radiobutton.$valtext('Impressive'))
      .withContext ("Expected Impressive Radio button not selected")
      .toBeDisplayed();
  });
});