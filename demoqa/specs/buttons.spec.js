import { checkbox } from "../page-objects/check-box-page";
import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { buttonPage } from "..//page-objects/buttons-page.js";

describe("Demo QA Application Text Box automation", () => {
  it("load the demo qa url", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on the elements tile and verify the navigation", async () => {
    await landingPage.clickOnTile("Elements");
    expect(await elementsPage.$header())
      .withContext("Expect elements header to be displayed")
      .toBeDisplayed();
  });

  it("Click on the Buttons page and verify the navigation", async () => {
    await buttonPage.clickOnButtonPage();
    expect(await buttonPage.$header().isDisplayed())
     .withContext("Expect Text Box to be displayed")
      .toBe(true);
  });

  it("Double click on the Double click on the page", async () => {
    await buttonPage.clickOnDoubleClick();
    expect(await buttonPage.$buttonClick("Double Click Me").isDisplayed())
     .withContext("Expect Message You have done a double click")
      .toBe(true);
    expect(await buttonPage.$displayMessage("doubleClickMessage").isDisplayed())
    .withContext("Expect Display message to be displayed")
    .toBe(true);
  });

  it("Do any click on the click me ", async () => {
    await buttonPage.simpleClick();
    expect(await buttonPage.$buttonClick("Click Me").isDisplayed())
     .withContext("Expect Message You have done a dynamic click")
      .toBe(true);
    expect(await buttonPage.$displayMessage("dynamicClickMessage").isDisplayed())
    .withContext("Expect Dynamic display clicked  message to be displayed")
    .toBe(true);
  });
  it("Right click on the Right click button", async () => {
    await buttonPage.clickOnRightClick();
    expect(await buttonPage.$buttonClick("Right Click Me").isDisplayed())
     .withContext("Expect Message You have done a double click")
      .toBe(true);
    expect(await buttonPage.$displayMessage("rightClickMessage").isDisplayed())
    .withContext("Expect Display message to be displayed")
    .toBe(true);
  });
});
