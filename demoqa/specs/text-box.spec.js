import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { textBoxPage } from "../page-objects/textbox-page.js";    

let fullName = "Anisha";
let email = "anisha@gmail.com";
let address1 = "abc street";
let address2 = "def street";
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

  it("Click on the Textbox tile and verify the navigation", async () => {
    await elementsPage.clickOnTile("Text Box");
    expect(await textBoxPage.$header())
    .withContext("Expect header to be displayed")
    .toBeDisplayed();
  });

  it("Enter full name",async () => {
    await textBoxPage.enterName("Full Name",fullName);
    expect(await textBoxPage.$input("Full Name").getValue())
    .withContext("Expect full name to be displayed")
    .toBe(fullName);
  });
  it("Enter email",async () => {
    await textBoxPage.enterEmail("Email",email);
    expect(await textBoxPage.$input("Email").getValue())
    .withContext("Expect Email to be displayed")
    .toBe(email);
  });
  it("Enter current address",async () => {
    await textBoxPage.enterCurrentAddress("Current Address",address1);
    expect(await textBoxPage.$current("Current Address").getValue())
    .withContext("Expect current address to be displayed")
    .toBe(address1);
  });
  it("Enter permenant address",async () => {
    await textBoxPage.enterPermenantAddress("Permanent Address",address2);
    expect(await textBoxPage.$current("Permanent Address").getValue())
    .withContext("Expect permenant address to be displayed")
    .toBe(address2);
  });
  it("CLick on submit button and validate the entered data",async () => {
    await textBoxPage.submitButton();
    expect(await textBoxPage.$validate("name").getText()).withContext("Expect name to be displayed").toContain(fullName)
    expect(await textBoxPage.$validate("email").getText()).withContext("Expect email to be displayed").toContain(email)
    expect(await textBoxPage.$validate("currentAddress").getText()).withContext("Expect current address to be displayed").toContain(address1)
    expect(await textBoxPage.$validate("permanentAddress").getText()).withContext("Expect permanent address to be displayed").toContain(address2)
  });
});
