import { openingPage } from "../page-objects/opening-page.js";
import { elementsPage } from "../page-objects/elements-page.js";
import { textBoxPage } from "../page-objects/text-box-page.js";

let fullName = " Fathima Hanan";
let email = "hanan@gmail.com";
let currAddress = "Mariam Veettil, Koyilandy, Kozhikode";
let permAddress = "Mariam Veettil, Kozhikode";

xdescribe("Demo QA Application Text Box automation", () => {
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

  it("Click on the textbox menu and verify the navigation", async () => {
    await elementsPage.clickOnSubList("Text Box");
    expect(await textBoxPage.$menuHeader())
      .withContext("Expect TextBox menu header to be displayed")
      .toBeDisplayed();
  });

  it("Fill form and verify displayed data", async () => {
    await textBoxPage.fillForm(
      fullName,
      email,
      currAddress,
      permAddress
    );
    expect(await textBoxPage.$outputValue(fullName).isDisplayed()).toBe(true);
    expect(await textBoxPage.$outputValue(email).isDisplayed()).toBe(true);
    expect(await textBoxPage.$outputValue(currAddress).isDisplayed()).toBe(true);
    expect(await textBoxPage.$outputValue(permAddress).isDisplayed()).toBe(true);

    // expect(await textBoxPage.$outputValue('uuuuuu'))
    // .withContext("Expect Email to be displayed")
    // .toBe(true);

  })

});