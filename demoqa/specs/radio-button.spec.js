import { radioButtonPage } from ('../page-objects/radio-button-page');
import { landingPage } from '../page-objects/landing-page.js';
import { elementsPage } from '../page-objects/elements-page.js';
describe("Radio Button", () => {
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

    it("Load the radio-button page", async() =>{
        await radioButtonPage.clickOnRadioButtons();
        expect (await radioButtonPage.$header())
        .withContext("Radio button header expected to be displayed")
        .toBeDisplayed();
    });

    it("Click on yes radio button", async() =>{
        await radioButtonPage.clickOnYes();
        expect(await radioButtonPage.$clickableRadio('Yes'))
        .withContext ("Expected Yes Radio button not selected")
        .toBeDisplayed();
        
    });

    it("Click on Impressive radio button", async() =>{
      await radioButtonPage.clickOnImpressive();
      expect(await radioButtonPage.$clickableRadio('Impressive'))
      .withContext ("Expected Impressive Radio button not selected")
      .toBeDisplayed();
  });
})
