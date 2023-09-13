import { landingPage } from "../page-objects/landing-page.js";
import { itemPage } from "../page-objects/item-page.js";
import { cartPage } from "../page-objects/cart-page.js";
import { checkoutPage } from "../page-objects/checkout-page.js";

let item = "Sukuna Co-Ords Set for Women";
let tshirtSize = "M";
let shortsSize = 32;
let errorMessageContent = [
  "Phone Number",
  "First name",
  "Last name",
  "Street address",
  "Town / City",
  "State",
  "PIN Code",
  "Email address",
];
let firstName = "Hanan";
let lastName = "Ash";
let houseName = "M.V House";
let streetName = "17th Miles";
let city = "Kozhikode";
let state = "Kerala";
let pin = 673307;
let phone = 9188826401;
let email = "hanan@gmail.com";

describe("My Designation Application automation", () => {
  it("Load the My designation url", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$logo().isDisplayed())
      .withContext("Expect Logo to be displayed")
      .toBe(true);
  });

  it(`Click on item : ${item}`, async () => {
    await landingPage.clickOnItem(item);

    expect(await itemPage.$itemName(item).isDisplayed())
      .withContext(`Expect ${item} header to be displayed`)
      .toBe(true);
  });

  // it("Click on Add to Cart", async () => {
  //   await itemPage.clickOnAddToCart();

  //   expect(await itemPage.$warningMessage().isDisplayed())
  //     .withContext("Expect Si message box to be displayed")
  //     .toBe(true);
  // });
  
  it("Choose Item Sizes and Click Add to Cart", async () => {
    await itemPage.clickOnItemSize(tshirtSize, shortsSize);
    await itemPage.clickOnAddToCart();

    expect(await itemPage.$messageBox().isDisplayed())
      .withContext("Expect success message box to be displayed")
      .toBe(true);
  });

  it("Click Cart Icon and verify item displayed", async () => {
    await itemPage.clickOnCartIcon();

    expect(await cartPage.$header().isDisplayed())
      .withContext("Expect cart header to be displayed")
      .toBe(true);

    expect(await cartPage.$cartItems(item).isDisplayed())
      .withContext(`Expect ${item} to be displayed in cart`)
      .toBe(true);
  });

  it("Click on proced to Checkout and verify navigation", async () => {
    await cartPage.clickOnCheckout();

    expect(await checkoutPage.$header().isDisplayed())
      .withContext("Expect CheckOut header to be displayed")
      .toBe(true);
  });

  it("Click on Place Order", async () => {
    await checkoutPage.clickOnPlaceOrder();

    for (let content of errorMessageContent) {
      expect(await checkoutPage.$errorMessageBox(content).isDisplayed())
        .withContext(`Expect ${content} required message to be displayed`)
        .toBe(true);
    }
  });

  it("Enter First Name and Click on Place Order", async () => {
    await checkoutPage.fillBillingField("billing_first_name", firstName);
    await checkoutPage.clickOnPlaceOrder();

    expect(await checkoutPage.$errorMessageBox("First name").isDisplayed())
      .withContext(`Expect First name is required message not displayed`)
      .toBe(false);

    for (let content of errorMessageContent) {
      if (content != "First name") {
        expect(await checkoutPage.$errorMessageBox(content).isDisplayed())
          .withContext(`Expect ${content} required message to be displayed`)
          .toBe(true);
      }
    }
  });

  it("Enter Last Name and Click on Place Order", async () => {
    await checkoutPage.fillBillingField("billing_last_name", lastName);
    await checkoutPage.clickOnPlaceOrder();

    expect(await checkoutPage.$errorMessageBox("Last name").isDisplayed())
      .withContext(`Expect First name is required message not displayed`)
      .toBe(false);
  });

  it("Enter Street Adress and Click on Place Order", async () => {
    await checkoutPage.fillBillingField("billing_address_1", houseName);
    await checkoutPage.fillBillingField("billing_address_2", streetName);
    await checkoutPage.clickOnPlaceOrder();

    expect(await checkoutPage.$errorMessageBox("Street address").isDisplayed())
      .withContext(`Expect First name is required message not displayed`)
      .toBe(false);
  });

  it("Enter Town / City and Click on Place Order", async () => {
    await checkoutPage.fillBillingField("billing_city", city);
    await checkoutPage.clickOnPlaceOrder();

    expect(await checkoutPage.$errorMessageBox("Town / City").isDisplayed())
      .withContext(`Expect Town / City is required message not displayed`)
      .toBe(false);
  });

  it("Enter state and Click on Place Order", async () => {
    await checkoutPage.selectState(state);
    await checkoutPage.clickOnPlaceOrder();

    expect(await checkoutPage.$errorMessageBox("State").isDisplayed())
      .withContext(`Expect First name is required message not displayed`)
      .toBe(false);
  });

  it("Enter Postal Code and Click on Place Order", async () => {
    await checkoutPage.fillBillingField("billing_postcode", pin);
    await checkoutPage.clickOnPlaceOrder();

    expect(await checkoutPage.$errorMessageBox("PIN Code").isDisplayed())
      .withContext(`Expect PIN Code is required message not displayed`)
      .toBe(false);
  });

  it("Enter Phone Number and Click on Place Order", async () => {
    await checkoutPage.fillBillingField("billing_phone", phone);
    await checkoutPage.clickOnPlaceOrder();

    expect(await checkoutPage.$errorMessageBox("Phone Number").isDisplayed())
      .withContext(`Expect Phone Number is required message not displayed`)
      .toBe(false);
  });

  it("Enter Email and Click on Place Order", async () => {
    await checkoutPage.fillBillingField("billing_email", email);
    await checkoutPage.clickOnPlaceOrder();

    expect(await checkoutPage.$errorMessageBox("Email address").isDisplayed())
      .withContext(`Expect Email address is required message not to displayed`)
      .toBe(false);
  });
});
