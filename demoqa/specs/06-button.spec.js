import { openingPage } from "../page-objects/opening-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { buttonPage } from "../page-objects/button-page.js";

xdescribe("Demo QA Application Links automation", () => {
  it("load the demo qa url", async () => {
    await openingPage.openUrl();
    expect(await openingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on the elements tile and verify the navigation", async () => {
    await openingPage.clickOnTile("Elements");
    expect(await elementsPage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
  });


  it("Click on the elements drop down list", async () => {
    await elementsPage.clickOnList("Elements");
    expect(await elementsPage.$collapsedList())
      .withContext("Expect list of Elements to be displayed")
      .toBeDisplayed();
  });

  it("Click on the Buttons menu and verify the navigation", async () => {
    await elementsPage.clickOnSubList("Buttons");
    expect(await buttonPage.$header())
      .withContext("Expect Buttons header to be displayed")
      .toBeDisplayed();
  });

  it("Click On Double Click Button", async () => {
    await buttonPage.doubleClickOnButton();
    expect(await buttonPage.$buttonDisplay('double click').isDisplayed())
      .withContext("Expected result for double click button to be displayed")
      .toBe(true);
  });

  it("Click On Right Click Button", async () => {
    await buttonPage.rightClickOnButton();
    expect(await buttonPage.$buttonDisplay('right click').isDisplayed())
      .withContext("Expected result for right click button to be displayed")
      .toBe(true);
  });

  it("Click On Dynamic Click Button", async () => {
    await buttonPage.dynamiClickOnButton();
    expect(await buttonPage.$buttonDisplay('dynamic click').isDisplayed())
      .withContext("Expected result for dynamic click button to be displayed")
      .toBe(true);
  });
})