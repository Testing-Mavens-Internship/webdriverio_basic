import { checkout } from "../pageobjects/checkout-page.js";
import { landingPage } from "../pageobjects/landing-page.js";

let handle;
describe("End-toend automation for MavenKonnet application", () => {
  it("Launch the url and verify header", async () => {
    await landingPage.launchUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on contact us and validate navigation to contact us page", async () => {
    await landingPage.clickOnContact();
    handle = await browser.getWindowHandles();
    await browser.switchToWindow(handle[1]);
    expect(await landingPage.$contactUs().isDisplayed())
      .withContext("Expect navigation to contact us page")
      .toBe(true);
  });

  it("Enter values in text box and click send", async () => {
    let fullName = "abc";
    let email = "abc@gmail.com";
    let phoneNumer = "1234567890";
    let message = "qwerty";
    await landingPage.enterText(fullName, email, phoneNumer, message);
    await browser.acceptAlert();
    expect(await landingPage.$thank().isDisplayed())
      .withContext("Expect navigation to thank you page")
      .toBe(true);
  });

  it("Click on home button and navigate to home page", async () => {
    await checkout.clickOnHome();
    await browser.closeWindow();
    handle = await browser.getWindowHandles();
    await browser.switchToWindow(handle[0]);
    expect(await checkout.$header().isDisplayed())
      .withContext("Expect navigation to home page")
      .toBe(true);
    await checkout.clickOnCart();
    expect(await checkout.$bill().isDisplayed())
      .withContext("Expect navigation to cart page")
      .toBe(true);
  });

  it("Click on text field and enter values in checkout page", async () => {
    let fullName = "abc";
    let email = "abc@gmail.com";
    let address = "abcde";
    let city = "edappally";
    let state = "Kerala";
    let zip = "683939";
    let cardName = "abc";
    let credit = "111122223334444";
    let expMonth = "january";
    let expYear = "2025";
    let cvv = "111";
    await checkout.payDetails(
      fullName,
      email,
      address,
      city,
      state,
      zip,
      cardName,
      credit,
      expMonth,
      expYear,
      cvv
    );
    await checkout.$continue().scrollIntoView({ block: "center" });
    await checkout.clickOnContinue();
    expect(await checkout.$thank().isDisplayed())
      .withContext("Expect navigation to thank you page")
      .toBe(true);
  });
});
