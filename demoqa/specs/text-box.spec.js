import { landingPage } from '../page-objects//landing-page.js';
import { elementsPage } from '../page-objects/elements-page.js';
import { textBoxPage } from '..//page-objects/text-box.js';


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
    .withContext("Expect header to be displayed")
    .toBeDisplayed();
  });

  it("Click on the textBox and verify the navigation", async () => {
    await elementsPage.clickOnTextBox();
    expect(await textBoxPage.$text())
    .withContext("Expect Text Box to be displayed")
    .toBeDisplayed();
  });

  it("CLick on the full name and enter the values", async() => {
    await textBoxPage.clickOnFullName("userName");
    expect(await textBoxPage.$elementName("userName").getValue()).toBe("Sreerag");
    // expect(await textBoxPage.$elementName("userName"))
    // .withContext("Expect full name to be displayed")
    // .toBeDisplayed();
  });

  it("CLick on the full email and enter the values", async() => {
    await textBoxPage.clickOnEmail("userEmail");
    expect(await textBoxPage.$elementName("uesrEmail"))
    .withContext("Expect email be displayed")
    .toBeDisplayed();
  });

  it("Click on the Current address",async () =>{
    await textBoxPage.clickOnCurrentAddress("currentAddress");
    expect(await textBoxPage.$address("currentAddress"))
    .withContext("Expect current Address to be displayed")
    .toBeDisplayed();
  });

  it("Click on the permanent address",async () =>{
    await textBoxPage.clickOnPermanentAddress("permanentAddress");
    expect(await textBoxPage.$address("permanentAddress"))
    .withContext("Expect permanentAddress to be displayed")
    .toBeDisplayed();
  });

  it("Click on the submit button",async () => {
    await textBoxPage.clickOnSubmit();
    expect(await textBoxPage.$validatingfields("name"))
    .withContext("Expect name to be displayed")
    .toBeDisplayed();
  });
  

  it("Verify the  name",async () => {
    expect(await textBoxPage.$validatingfields("Sreerag").isDisplayed()).toBe(true)
  });

  it("Verify the email",async () => {
    expect(await textBoxPage.$validatingfields("tester@gmail.com").isDisplayed()).toBe(true)
  });
  it("Verify the current address ",async () => {
    expect(await textBoxPage.$validatingfields("abc").isDisplayed()).toBe(true)
  });

  it("Verify the permanent address",async () => {
    expect(await textBoxPage.$validatingfields("abc").isDisplayed()).toBe(true)
  });

});