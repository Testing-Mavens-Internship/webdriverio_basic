import { openingPage } from "../page-objects/opening-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { radioButtonPage } from "../page-objects/radio-button-page.js";

xdescribe("Demo QA Application Web Tables automation", () => {
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

  it("Click on the Radio Button menu and verify the navigation", async () => {
    await elementsPage.clickOnSubList("Radio Button");
    expect(await radioButtonPage.$header())
      .withContext("Expect Radio Button header to be displayed")
      .toBeDisplayed();
  });

  it("Click on Yes option", async () => {
    await radioButtonPage.clickOnRadioButton('Yes');
    expect(await radioButtonPage.$buttonResult('Yes').isDisplayed())
      .withContext("Expect Yes to be displayed")
      .toBe(true);
  });

  it("Click on Impressive option", async () => {
    await radioButtonPage.clickOnRadioButton('Impressive');
    expect(await radioButtonPage.$buttonResult('Impressive').isDisplayed())
      .withContext("Expect Impressive to be displayed")
      .toBe(true);
  });

  //   it("Click on Yes Icon", async() =>{
  //     await radioButtonPage.clickOnYesIcon();
  //     expect (await radioButtonPage.$buttonResult('Yes').isDisplayed())
  //     .withContext("Expect Yes to be displayed")
  //     .toBe(true);
  //   });

});