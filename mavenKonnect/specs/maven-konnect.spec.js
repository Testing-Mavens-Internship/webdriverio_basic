import { homePage } from "../page-objects/home-page.js";
import { contactPage } from "../page-objects/contact-page.js";
import { cartPage } from "../page-objects/cart-page.js";
let firstName = "Saifu";
let eMail = "saifu@gmail.com";
let phoneNumber = "9876543210";
let message = "Testing";
let fullName = "Saifulla";
let address = "Thiruvilwamala";
let city = "Thrissur";
let state = "Kerala";
let zipCode = "680500";
let nameOnCard = "Saifu";
let creditCardNumber = "1111-2222-3333-4444";
let expiryMonth = "December";
let expiryYear = "2030";
let cvv = "352";
describe("End to end flow automation of MavenKonnect", () => {
  it("Launch URL", async () => {
    await homePage.launchUrl();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect MavenKonnect header to be displayed")
      .toBe(true);
  });

  it("click on contact us and verify navigation", async () => {
    await homePage.clickOnContactUs();
    expect(await contactPage.$sideHeader().isDisplayed())
      .withContext("Expect contact page side header to be displayed")
      .toBe(true);
  });

  it("Enter details and click send button ", async () => {
    await contactPage.enterDetails(firstName, eMail, phoneNumber, message);
    expect(await contactPage.$thankYou().isDisplayed())
      .withContext("Expect ThankYou message to be displayed")
      .toBe(true);
  });

  it("Click on home menu and verify navigation", async () => {
    await contactPage.clickOnHomeMenu();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expext homepage header to be displayed")
      .toBe(true);
  });

  it("Click on cart icon and verify navigation", async () => {
    await homePage.clickOnCartIcon();
    expect(await cartPage.$cartPageHeader().isDisplayed())
      .withContext("Expect cart page header to be displayed")
      .toBe(true);
  });

  it("Fill the details and click continue to checkout", async () => {
    await cartPage.fillForm(
      fullName,
      eMail,
      address,
      city,
      state,
      zipCode,
      nameOnCard,
      creditCardNumber,
      expiryMonth,
      expiryYear,
      cvv
    );
    expect(await contactPage.$thankYou().isDisplayed())
      .withContext("Expect thankyou message to be displayed")
      .toBe(true);
  });
});
