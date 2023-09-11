// import { landingPage } from "../page-objects/landing-page.js";
// import { elementsPage } from "../page-objects/elements-page.js";
const landingPage = require("../page-objects/landing-page.js")
const elementsPage = require("../page-objects/elements-page.js")

xdescribe("Demo QA Application Text Box automation", () => {
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
  it("Click on TextBox and verify text box elements",async()=>{
    await elementsPage.clickOnDropDown("Text Box");
    expect(await elementsPage.$subHead())
    .withContext("Expected sublist header as TextBox")
    .toBeDisplayed();
  })
  it("Enter Values to form",async()=>{
    await elementsPage.setValues();
    expect(await elementsPage.$results("Joyal"))
    .withContext("First name matched")
    .toBeDisplayed();
    expect(await elementsPage.$results("sample@sample.com"))
    .withContext("Email matched ")
    .toBeDisplayed();
    expect(await elementsPage.$results("25/1461 Thekkeveettil House"))
    .withContext("Current address matched")
    .toBeDisplayed();
    expect(await elementsPage.$results("25/1461 Thekkeveettil House"))
    .withContext("Permanent address matched")
    .toBeDisplayed();
  })
});
