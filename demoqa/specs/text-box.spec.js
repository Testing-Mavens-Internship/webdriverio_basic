// import { landingPage } from "../page-objects/landing-page.js";
// import { elementsPage } from "../page-objects/elements-page.js";
const {landingPage} = require('../page-objects/landing-page.js')
const {elementsPage} = require('../page-objects/elements-page.js')
const {textBoxPage} = require('../page-objects/textBox-page.js')

let a="Tester"
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
  it("Click on the text box option from menu list drop down", async () => {
    await elementsPage.clickOnMenuListElement("Text Box");
    expect(await textBoxPage.$header())
    .withContext("Expect header to be displayed")
    .toBeDisplayed();
  });
  it("Enter Full Name", async () => {
    await textBoxPage.enterFullName("Full Name",a);
    
    expect(await textBoxPage.$menuElement("Full Name").getValue())
    .withContext("Expect full name to be displayed")
    .toEqual(a);
  });
  it("Enter email id", async () => {
   
   await textBoxPage.enterEmailId("Email");
   
    expect(await textBoxPage.$menuElement("Email").getValue())
    .withContext("Expect email id to be displayed")
    .toEqual("tester@gmail.com");
  });
  it("Enter current address", async () => {
   
    await textBoxPage.currentAddress("Current Address");
    
     expect(await textBoxPage.$address("Current Address").getValue())
     .withContext("Expect address id to be displayed")
     .toEqual("abc street");
   });
   it("Enter current address", async () => {
   
    await textBoxPage.permanentAddress("Permanent Address");
    
     expect(await textBoxPage.$address("Permanent Address").getValue())
     .withContext("Expect address id to be displayed")
     .toEqual("efg street");
   });
   it("Click on submit", async () => {
   
    await textBoxPage.clickSubmit("Submit");
    expect(await textBoxPage.$subval("name").getText()).withContext("Expect permanent address to be displayed").toContain(a)
    expect(await textBoxPage.$subval("email").getText()).withContext("Expect permanent address to be displayed").toContain("tester@gmail.com")
    expect(await textBoxPage.$subval("currentAddress").getText()).withContext("Expect permanent address to be displayed").toContain("abc street") 
    expect(await textBoxPage.$subval("permanentAddress").getText()).withContext("Expect permanent address to be displayed").toContain("efg street")
  });


});
