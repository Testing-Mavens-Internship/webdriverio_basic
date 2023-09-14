import { checkOutPage } from "../page-objects/checkout-page.js";
import { contactPage } from "../page-objects/contact-page.js";
import { homePage } from "../page-objects/home-page.js";

let handle;

describe("End to end flow of maven konnect", () => {
  it("Load the maven konnect", async () => {
    await homePage.openUrl();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on contact us and verify navigation", async () => {
    await homePage.navigateToContactPage();
    handle = await browser.getWindowHandles();
    await browser.switchToWindow(handle[1]);
    expect(await homePage.$header().isDisplayed())
      .withContext("Expecting header")
      .toBe(true);
  });
  it("Enter contact details and verify navigation",async ()=>{
    await contactPage.enterDetails()
    await browser.acceptAlert()
    expect(await contactPage.$navigationVerification().isDisplayed())
      .withContext("Expecting Thank you message to be displayed")
      .toBe(true)
      await browser.closeWindow()
  });
  it("Back to home page and verify",async ()=>{
    await browser.switchToWindow(handle[0])
    expect(await homePage.$header().isDisplayed())
      .withContext("Expecting header to be displayed")
      .toBe(true)
  })
  it("Click on cart button and verify navigation",async ()=> {
    await homePage.clickOnCartButton()
    expect(await homePage.$header().isDisplayed())
      .withContext("Expecting header to be displayed")
      .toBe(true)
  })
  it("Add details and verify navigation",async ()=>{
    await checkOutPage.addBillingDetails()
    expect(await contactPage.$navigationVerification().isDisplayed())
      .withContext("Expecting Thank you message to be displayed")
      .toBe(true)
  })
});
