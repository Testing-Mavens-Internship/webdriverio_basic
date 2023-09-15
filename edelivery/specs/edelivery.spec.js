import { home } from "../page-objects/home-page.js";
import { loginPage } from "../page-objects/after-login-page.js";
import { shopping } from "../page-objects/shoping-page.js";
import randomName from "random-name";
import randomNum from "random-num";
let firstName = randomName.first();
let lastName = randomName.last();
let email = randomName.first() + "@gmail.com";
let phoneNumber = randomNum(9000000000, 9999999999);

describe("End to end automation of edelivery website", () => {
  it("Launch the URL", async () => {
    await home.openURL();
    expect(await home.$header().waitForDisplayed())
      .withContext("Launch the URl")
      .toBe(true);
  });

  it("Click on the login button", async () => {
    await home.clickOnLoginButton();
    expect(await home.$loginHeader().waitForDisplayed())
      .withContext("Login header is displayed")
      .toBe(true);
  });

  it("Click on the sign up button", async () => {
    await home.clickOnSignUp();
    expect(await home.$registerHeader().waitForDisplayed())
      .withContext("Register header is displayed")
      .toBe(true);
  });

  it("Enter the details in sign up", async () => {
    await home.enterDetails(firstName, lastName, email, phoneNumber);
    expect(await home.$continue().waitForDisplayed())
      .withContext("Expect continue button is clickable")
      .toBe(true);
  });

  it("Click on the continue button after signing up", async () => {
    await home.clickOnContinue();
    expect(await home.$verificationHeader().waitForDisplayed())
      .withContext("Expect a verification tab aften click on continue button")
      .toBe(true);
  });

  it("Click on the login button and get logged into the application", async () => {
    await loginPage.loginButtonClick();
    expect(await loginPage.$successMessaage().waitForDisplayed())
      .withContext(
        "Success message should be visible when user logs in successfully."
      )
      .toBe(true);
    expect(await loginPage.$hiText().waitForDisplayed())
      .withContext("The user is able to login and entered the users page")
      .toBe(true);
  });

  it("Click on the location bar  to enter the location", async () => {
    await loginPage.clickOnLocation();
    expect(await loginPage.$locations().waitForDisplayed())
      .withContext("Search location is displayed")
      .toBe(true);
  });

  it("Click on Chennai Tamil Naidu", async () => {
    await loginPage.clickOnChennai();
    expect(await loginPage.$verifyLocation().waitForDisplayed())
      .withContext("chennai is displayed on the location")
      .toBe(true);
  });

  it("Click on the Max shopping site", async () => {
    await shopping.selectShoppingSite();
    expect(await shopping.$shopHeader("MAX").waitForDisplayed())
      .withContext("Clicked on max fasshion")
      .toBe(true);
  });

  it("Click on the khaki add button", async () => {
    await shopping.selectItem();
    expect(await shopping.$specialInstruction().waitForDisplayed())
      .withContext(
        "Clicked on khaki and additional infromation header is displayed"
      )
      .toBe(true);
  });

  it("Click on add to cart button present in the special instruction page", async () => {
    await shopping.clickOnAddToCart();
    expect(await shopping.$checkOut().waitForDisplayed())
      .withContext("After aadding to the cart the checkout button is visible")
      .toBe(true);
  });
});
