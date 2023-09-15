import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { checkPage } from "../page-objects/checkbox-page.js"
xdescribe("Demo QA Application check box automation", () => {
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

  it("Click on the Check box tile and verify the navigation", async () => {
    await elementsPage.clickOnTile("Check Box");
    expect(await checkPage.$header("Check Box"))
      .withContext("Expect web table header to be displayed")
      .toBeDisplayed();
  });
  
  it("Click toggle home", async () => {
    await checkPage.clickOnHomeToggle();
    let textArray = [];
    textArray = await checkPage.$$result().map(item => item.getText())
    for (let item of textArray) {
      expect(await checkPage.$output(item).isDisplayed()).withContext("text is not displayed").toBe(true);
    }
  })

  it("Click check box and verify all subnodes are selected", async () => {
    await checkPage.clickHomeCheckBox();
    let textArray = [];
    textArray = await checkPage.$$result().map(item => item.getText())
    for (let item of textArray) {
      expect(await checkPage.$output(item).isDisplayed()).withContext("text is not displayed").toBe(true);
    }
  })
let option1 = "Documents";
let option2 = "Office";
it("Click toggle of subnodes of home", async () => {
  await checkPage.clickHomeCheckBox();
  await checkPage.clickOnSUbnodesOfHome(option1,option2);
  let textArray = [];
    textArray = await checkPage.$$result().map(item => item.getText())
    for (let item of textArray) {
      expect(await checkPage.$output(item).isDisplayed()).withContext("text is not displayed").toBe(true);
    }
  })
});