import { landingPage } from "../page-objects/landing-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { textBoxPage } from "../page-objects/text-box-page.js";

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
    expect(await elementsPage.$textBox())
    .withContext("Expect textBox option to be displayed")
    .toBeDisplayed();
  });

  it("Click on the textBox and verify the navigation", async () => {
    await elementsPage.clickOnTextBox();
    expect(await textBoxPage.$text())
    .withContext("Expect Text Box to be displayed")
    .toBeDisplayed();
    expect(await textBoxPage.$fullName()).withContext("Expect Full Name field to be displayed").toBeDisplayed();
  });

  it("Entering details and click submit", async () =>{
    await textBoxPage.fillForm();
    await textBoxPage.clickOnSubmit();
    expect(await textBoxPage.$output('Abc').isDisplayed()).withContext("Expect entered name to be displayed").toBe(true);
    expect(await textBoxPage.$output('abc@gmail.com').isDisplayed()).withContext("Expect entered email to be displayed").toBe(true);
    expect(await textBoxPage.$output('address2').isDisplayed()).withContext("Expect entered current address to be displayed").toBe(true);
    expect(await textBoxPage.$output('address').isDisplayed()).withContext("Expect entered permanent address to be displayed").toBe(true);
  })
});
