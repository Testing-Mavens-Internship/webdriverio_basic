import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { radioButton } from "../page-objects/radio-button.js";

xdescribe("Demo QA Application radio button automation", () => {
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

  it("Click on the  radio button and verify the navigation", async () => {
    await elementsPage.clickOnTile("Radio Button");
    expect(await radioButton.$header("Radio Button"))
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
  });

  it("click on option button", async () => {
    await radioButton.options("Yes");
    expect(await radioButton.$verify("Yes"))
      .withContext("Expect yes to be displayed")
      .toBeDisplayed();
  });
});
