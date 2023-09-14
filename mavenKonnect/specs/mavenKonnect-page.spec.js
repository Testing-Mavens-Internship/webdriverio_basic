import { launchPage } from "../page-object.js/launch-page.js";
import { contactPage } from "../page-object.js/contact-page.js";
import { paymentPage } from "../page-object.js/payment-page.js";

let fullName = "Aparna Udayan";
let email = "aparna@gmail.com";
let mobileNumber = "2233445566";
let address = "Kayees home, kochi";
let state = " Kerala";
let city = "Kochi";
let zip = "683020";
let cardname = "APARNA UDAYAN";
let cardnuber = "222244668812";
let expiryMonth = "June";
let expiryYear = "2023";
let cvv = "123";
let a;

describe("Fill the contact and payment details in the mavenKonnect website and validate the details are being entered", () => {

    it("launch the website and validate the header", async () => {
    await launchPage.openUrl();
    expect(await launchPage.$pageHeader().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("click on the connect button and validate a new window loaded", async () => {
    await launchPage.clickOnConnectUs();
    a = await browser.getWindowHandles();
    await browser.switchToWindow(a[1]);
    expect(await launchPage.$pageHeader().isDisplayed())
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
    expect(await launchPage.$pageHeader().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
    await paymentPage.clickOnCartIcon();
    expect(await paymentPage.$checkOutHeader().isDisplayed())
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
