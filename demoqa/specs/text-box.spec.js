const { landingPage } = require ('../page-objects/landing-page.js');
const { elementsPage } = require ('../page-objects/elements-page.js');

xdescribe("Demo QA Application Text Box automation", () => {
  it("load the demo qa url", async () => { // it block shows the action to be performed
    await landingPage.openUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed") // error message if failed
      .toBe(true);
  });

  it("Click on the elements tile and verify the navigation", async () => {
    await landingPage.clickOnTile("Elements");
    expect(await elementsPage.$header())
    .withContext("Expect header to be displayed")
    .toBeDisplayed();
  });
});
