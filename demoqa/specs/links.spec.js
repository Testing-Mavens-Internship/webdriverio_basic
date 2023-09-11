import { landingPage } from ("../page-objects/landing-page.js");
import { elementsPage } from ("../page-objects/elements-page.js");
import { link } from ("../page-objects/links-page.js");

describe("Demo QA Application Text Box automation", () => {
  it("load the demo qa url", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$header())
      .withContext("Expect header to be displayed")
      .toBeDisplayed();
  });

  it("Click on the elements tile and verify the navigation", async () => {
    await landingPage.clickOnTile("Elements");
    expect(await elementsPage.$header().isDisplayed())
      .withContext("Expect elements header to be displayed")
      .toBe(true);
  });

  it("Click on the links and verify the navigation", async () => {
    await link.clickOnLink();
    expect(await link.$header().isDisplayed())
      .withContext("Expect Text Box to be displayed")
      .toBe(true);
  });

  it("Click on the home text and navigate to the new window", async () => {
    await link.clickOnNewHome();
    let windowshandle = await browser.getWindowHandles();
    await browser.switchToWindow(windowshandle[1]);
    expect(await landingPage.$tileName("Elements").isDisplayed())
      .withContext("Expect elements to be displayed")
      .toBe(true);
  });
});
