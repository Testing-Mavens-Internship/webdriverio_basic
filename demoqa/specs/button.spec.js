import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { buttonPage } from "../page-objects/buttons.js";

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

  it("Click on the  checkbox side bar and verify the navigation", async () => {
    await elementsPage.clickOnTile("Buttons");
    expect(await buttonPage.$header("Buttons"))
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
    
  });

  it('click on the buttons and validating',async () =>{

    await buttonPage.clickButtons();

    expect(await buttonPage.$text("double").isDisplayed()).withContext("Expect double click message to be displayed").toBe(true);
    expect(await buttonPage.$text("dynamic").isDisplayed()).withContext("Expect click message to be displayed").toBe(true);
    expect(await buttonPage.$text("right").isDisplayed()).withContext("Expect right click message to be displayed").toBe(true);
    await browser.pause(10000);

});

});
