import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { radioButtonPage } from "../page-objects/radio-button-page.js";


xdescribe("Demo QA Application Radio Button automation", () => {
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

    it("Click on radio button",async()=>{
        await elementsPage.clickOnRadioButton();
        expect(await radioButtonPage.$header().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    })


    it("click on radio Yes", async() =>{
        await radioButtonPage.clickOnYes();
        expect(await radioButtonPage.$display('Yes').isDisplayed()).withContext("Expect Yes to be displayed").toBe(true);

    })

    it("Click on Impressive", async () =>{
        await radioButtonPage.clickOnImpressive();
        expect(await radioButtonPage.$display('Impressive').isDisplayed()).withContext("Expect impressive to be displayed").toBe(true);
        
    })
});
