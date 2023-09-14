import { cartPage } from "../pageobjects/cart-page.js";
import { contactUs } from "../pageobjects/contact-us-page.js";
import { homePage } from "../pageobjects/home-page.js";

let fullName = "Vaishnav S";
let email = "vsn@gmail.com";
let phoneNumber = 1234567890;
let address = "p.o.house";
let city = "ny";
let state = "kerala";
let zip = 654321;
let nameOnCard = "Hanan";
let cardNo = 1111222233334444;
let expMonth = "July";
let expYear = 2025;
let cvv = 352;

describe("End to end flow of maven konnect", () => {
  it("Open url", async () => {
    await homePage.openUrl();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect MavenKonnect title to be displayed")
      .toBe(true);
  });

  it("Click on contact us and goto Contact us page", async () => {
    await homePage.clickOnContactUs();
    let a = await browser.getWindowHandles();
    await browser.switchToWindow(a[1]);
    expect(await contactUs.$header().isDisplayed())
      .withContext("Expect ContactUs header to be displyed")
      .toBe(true);
  });

  it("Fill Contact Us form", async () => {
    await contactUs.fillForm(fullName, email, phoneNumber);
    await contactUs.submit();
    await browser.acceptAlert();
    expect(await contactUs.$thankYouHeader().isDisplayed())
      .withContext("Expect thank you header to be displyed")
      .toBe(true);
  });

  it("Redirect to home page and click on cart", async () => {
    let a = await browser.getWindowHandles();
    await browser.switchToWindow(a[0]);
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect to redirect to home page ")
      .toBe(true);
    await homePage.clickOnCartIcon();
    expect(await cartPage.$header().isDisplayed())
      .withContext("expect cart icon to be displayed")
      .toBe(true);
  });

  it("Fill up Checkout form", async () => {
    await cartPage.fillCheckoutForm(
      fullName,
      email,
      address,
      city,
      state,
      zip,
      nameOnCard,
      cardNo,
      expMonth,
      expYear,
      cvv
    );
    await browser.acceptAlert();
    expect(await contactUs.$thankYouHeader().isDisplayed())
      .withContext("Expect response message to be displayed")
      .toBe(true);
  });

  it("Go Back to Home Page",async()=>{
    await homePage.clickOnHomePage();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect MavenKonnect title to be displayed")
      .toBe(true);
  })
});
