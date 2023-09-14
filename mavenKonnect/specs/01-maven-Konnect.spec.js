import { homePage } from "../page-objects/home-page.js";
import { contactPage } from "../page-objects/contactUs-page.js";
import { cartPage } from "../page-objects/cart-page.js";

let fullName = "Fathima Hanan";
let email = "hanan@gmail.com";
let phone = 9068880710;
let message = "sample message";
let windowHandle;

let address = "M.V House, 17th Miles";
let city = "Kozhikode";
let state = "Kerala";
let zip = 673307;
let nameOnCard = "Hanan";
let cardNo = "1111222233334444";
let expMonth = "July";
let expYear = 2025;
let cvv = 352;

describe("Maven Konnect Application automation", () => {
  it("Load the Maven Konnect url", async () => {
    await homePage.openUrl();
    expect(await homePage.$title().isDisplayed())
      .withContext("Expect Maven Konnect Title to be displayed")
      .toBe(true);
  });

  it("Click on Contact Us and verify navigation", async () => {
    await homePage.clickOnContactUs();
    windowHandle = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandle[1]);

    expect(await contactPage.$header("Contact Us").isDisplayed())
      .withContext("Expected contact page header to be displayed")
      .toBe(true);
  });

  it("Fill Up Contact Form", async () => {
    await contactPage.fillContactForm(fullName, email, phone, message);
    await browser.acceptAlert();

    expect(await contactPage.$message("THANK YOU!").isDisplayed())
      .withContext("Expect response message to be displayed")
      .toBe(true);
  });

  it("Switch to Initial window", async () => {
    await browser.closeWindow();
    await browser.switchToWindow(windowHandle[0]);

    expect(await homePage.$title().isDisplayed())
      .withContext("Expect Maven Konnect Title to be displayed")
      .toBe(true);
  });

  it("Click on Cart Icon", async () => {
    await homePage.clickOnCartIcon();

    expect(await cartPage.$header("Check Out").isDisplayed())
      .withContext("Expect header to be displayed")
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

    expect(await cartPage.$message("THANK YOU!").isDisplayed())
      .withContext("Expect response message to be displayed")
      .toBe(true);
  });

  it("Click On Home and verify navigation", async () => {
    await homePage.clickOnHome();

    expect(await homePage.$title().isDisplayed())
      .withContext("Expect Maven Connect Title to be displayed")
      .toBe(true);
  });
});
