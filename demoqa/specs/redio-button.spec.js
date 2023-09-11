const {landingPage} = require('../page-objects/landing-page.js')
const {elementsPage} = require('../page-objects/elements-page.js')
const {radioButton}=require('../page-objects/radioButton-page.js')

xdescribe("Demo QA Application Text Box automation", () => {
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
    it("Click on the web table option from menu list drop down", async () => {
      await elementsPage.clickOnMenuListElement("Radio Button");
      expect(await radioButton.$header("Radio Button"))
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
    });
    it("click on radio button",async() =>{
        await radioButton.clickOnRadioButton("Yes");
        expect(await radioButton.$text("Yes").isDisplayed())
        .withContext("Expect Yes to be displayed")
        .toBe(true);
       
    })
    it('Click on impressive', async()=>{
        await radioButton.clickOnRadioButton("Impressive");
        expect(await radioButton.$text("Impressive").isDisplayed())
        .withContext("Expect Impressive to be displayed")
        .toBe(true);
    })
});