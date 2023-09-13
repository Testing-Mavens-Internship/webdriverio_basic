import { landingPage } from "../page-objects/landing-page.js";
import { contactUs } from "../page-objects/contacUs-page.js";
import { cartPage } from "../page-objects/cart-page.js";
let name = "Test";
let email = "test@gmail.com";
let phoneNumber = "9090909090";
let message = "test message";
let fullName = "Tester";
let emailId = "test@gmail.com";
let address = "road city state";
let nameOncard = "Tester Test";
let cardNumber = "1111-2222-3333-4444";
let city = "City";
let expMonth = "September";
let state = "kerala";
let zip = "682021";
let expYear = "2023";
let cvv = "654";
describe("Automate end to end flow of MAVEN KONNET website", () => {
  it("Load the url and validate navigation", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Header not displayed")
      .toBe(true);
  });

  it("Click on Contact us button", async () => {
    await landingPage.clickOnContactUs();
    expect(await landingPage.$secondaryHeader().isDisplayed())
      .withContext("Secondary header is not displayed")
      .toBe(true);
  });
  it("Click on SEND button after filling all the fields", async () => {
    await contactUs.fillForm(name, email, phoneNumber, message);

    expect(await contactUs.$validationMessage().isDisplayed())
      .withContext("Thank you message not found")
      .toBe(true);
  });

  it("close the existing window and navigate back to home page", async () => {
    await browser.closeWindow();
    let windowVariable = await browser.getWindowHandles();
    await browser.switchToWindow(windowVariable[0]);
    expect(await landingPage.$header().isDisplayed())
      .withContext("Header not displayed")
      .toBe(true);
  });
  it("Click on cart icon and navigate to cart page", async () => {
    await landingPage.clickOnCartIcon();
    expect(await landingPage.$cartHeader().isDisplayed())
      .withContext("Header not displayed")
      .toBe(true);
  });
  it("Fill billing address and Payment details in cart page and click on continue to checkout", async () => {
    await cartPage.continueToCheckout(
      fullName,
      emailId,
      nameOncard,
      address,
      cardNumber,
      city,
      expMonth,
      state,
      zip,
      expYear,
      cvv
    );
    expect(await contactUs.$validationMessage().isDisplayed())
      .withContext("Thank you message not found")
      .toBe(true);
  });
});
