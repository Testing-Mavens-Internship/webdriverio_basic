import { openingPage } from "../page-objects/opening-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { sliderPage } from "../page-objects/slider-page.js";

let targetValue = 80;

describe("Demo QA Application Upload and download automation", () => {
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
    await elementsPage.clickOnList("Widgets");
    expect(await elementsPage.$collapsedList().isDisplayed())
      .withContext("Expect list of Elements to be displayed")
      .toBe(true);
  });

  it("Click on the Slider menu and verify the navigation", async () => {
    await elementsPage.clickOnSubList("Slider");
    expect(await sliderPage.$header())
      .withContext("Expect page header to be displayed")
      .toBeDisplayed();
  });

  it("Set slider value", async() =>{
    await sliderPage.setSliderValue(targetValue);
    let displayedValue = await sliderPage.$sliderValue().getText();

    expect(await sliderPage.isSliderMoved(parseInt(displayedValue),targetValue))
    .withContext('Expect slider to be equal')
    .toBe(true);
  })
})