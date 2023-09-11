const {landingPage} = require('../page-objects/landing-page.js')
const {elementsPage} = require('../page-objects/elements-page.js')
const {linkPageObject}=require('../page-objects/link-page.js')

xdescribe("DEMOQA Check Box automation",()=>{
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
      })
      it("Click on the links option from menu list drop down", async () => {
        await elementsPage.clickOnMenuListElement("Links");
        expect(await linkPageObject.$header())
        .withContext("Expect header to be displayed")
        .toBeDisplayed();
      });
      it("click on Home link", async()=>{
        await linkPageObject.clickOnLink();
        expect(await linkPageObject.$linkValidation().isDisplayed())
        .withContext("Expect Element header to be displayed")
        .toBe(true);
      })

})