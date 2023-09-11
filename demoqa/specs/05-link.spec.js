import { openingPage } from "../page-objects/opening-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { linkPage } from "../page-objects/links-page.js";

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
    expect(await elementsPage.$collapsedList().isDisplayed())
      .withContext("Expect list of Elements to be displayed")
      .toBe(true);
  });

  it("Click on the Links menu and verify the navigation", async () => {
    await elementsPage.clickOnSubList("Links");
    expect(await linkPage.$header())
      .withContext("Expect Links header to be displayed")
      .toBeDisplayed();
  });

  it("Click On Home Link and Verify navigation", async () => {
    await linkPage.clickOnLink();

    let windowHandle = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandle[1]);

    expect(await openingPage.$tileName('Elements').isDisplayed())
      .withContext("Expected tiles to be displayed")
      .toBe(true);
  });
})