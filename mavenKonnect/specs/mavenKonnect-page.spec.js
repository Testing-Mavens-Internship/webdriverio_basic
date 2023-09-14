import { landingPage } from "../page-object.js/landing-page.js";
import { contactPage } from "../page-object.js/contact-page.js";
import { paymentPage } from "../page-object.js/payment-page.js";

let fullName = "Vineeth";
let email = "vinu@gmail.com";
let mobileNumber = "1234567890";
let address = " home, kochi";
let state = " Kerala";
let city = "Kochi";
let zip = "667777";
let cardname = "Vineeth Vijayakumar";
let cardnuber = "87878787878";
let expiryMonth = "May";
let expiryYear = "2026";
let cvv = "193";
let a;

describe("Fill the contact and payment details in the mavenKonnect website and validate the details are being entered", () => {
  it("launch the website and validate the header", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$pageHeader().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("click on the connect button and validate a new window loaded", async () => {
    await landingPage.clickOnConnectUs();
    a = await browser.getWindowHandles();
    await browser.switchToWindow(a[1]);
    expect(await landingPage.$pageHeader().isDisplayed())
      .withContext("Expect  header to be displayed")
      .toBe(true);
  });

  it("Enter the details in the contactUs page and validate the message if the field is not entered", async () => {
    await contactPage.fillForm(fullName, email, mobileNumber);
    await browser.acceptAlert();
    expect(await contactPage.$thankYouText().isDisplayed())
      .withContext("Expect thankyou header to be displayed")
      .toBe(true);
    await browser.closeWindow();
  });

  it("close the contactUs window and click the cart icon in the home page", async () => {
    await browser.switchToWindow(a[0]);
    expect(await landingPage.$pageHeader().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
    await paymentPage.clickOnCartIcon();
    expect(await paymentPage.$checkoutHeader().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("fill the payment details and ", async () => {
    await paymentPage.fillPaymentDetails(
      fullName,
      email,
      address,
      city,
      state,
      zip,
      cardname,
      cardnuber,
      expiryMonth,
      expiryYear,
      cvv
    );
    await browser.acceptAlert();
    expect(await contactPage.$thankYouText().isDisplayed())
      .withContext("Expect thankyou header to be displayed")
      .toBe(true);
  });
});
