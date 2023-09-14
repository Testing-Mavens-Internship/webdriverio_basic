import { billingPage } from "../pageobjects/billing-page.js";
import { home } from "../pageobjects/home-page.js";
import { productPage } from "../pageobjects/product-page.js";
import { shoppingCartPage } from "../pageobjects/shopping-cart-page.js";

let product = "Gojo";
// let size1 = "T-shirt Size";
// let size2 = "Shorts Size";
let tsize = "XS";
let ssize = 32;

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

let firstName = "Vaishnav";
let lastName = "S";
let houseName = " House";
let streetName = "17th Miles";
let city = "Thrissur";
let state = "Kerala";
let pin = 673307;
let phone = 9188826401;
let email = "vsn@gmail.com";

describe("automating the website mydesignation", () => {
  it("Open url", async () => {
    await home.openUrl();
    expect(await home.$mainHeader().isDisplayed())
      .withContext("expect header to be displayed")
      .toBe(true);
  });

  it("select a product", async () => {
    await home.productSelect(product);
    expect(await productPage.$productHeader(product).isDisplayed())
      .withContext("expect header to be displayed")
      .toBe(true);
  });

  it("select size", async () => {
    await productPage.selectSize(tsize, ssize);
    //expect (shoppingCartPage.$shoppingCartHeader().isDisplayed()).withContext("expect shopping cart header to be displayed ").toBe(true);
    expect(await productPage.$checkIfSelectedTshirt().isDisplayed())
      .withContext("expect size to be selected")
      .toBe(true);
    expect(await productPage.$checkIfSelectedShorts().isDisplayed())
      .withContext("expect size to be selected")
      .toBe(true);
  });

  it("add to cart ", async () => {
    await productPage.addToCart();
    expect(await productPage.$itemAddedMessage().isDisplayed())
      .withContext("expect shopping cart value to be displayed ")
      .toBe(true);
  });

  it("go to cart ", async () => {
    await productPage.goToCart();
    expect(await shoppingCartPage.$productInCart().isDisplayed())
      .withContext("expect shopping cart header to be displayed ")
      .toBe(true);
  });

  it("Proceed to checkout", async () => {
    await shoppingCartPage.clickOnCheckOutButton();
    expect(await billingPage.$billingHeader().isDisplayed())
      .withContext("expect billing header to be displayed")
      .toBe(true);
  });

  it("click place order", async () => {
    await billingPage.clickOnPlaceOrder();
    for (let content of errorMessageContent) {
      expect(await billingPage.$errorMessageBox(content).isDisplayed())
        .withContext("error message is expected")
        .toBe(true);
    }
  });

  it("Enter First Name and Click on Place Order", async () => {
    await billingPage.fillBillingField("billing_first_name", firstName);
    await billingPage.clickOnPlaceOrder();
    expect(await billingPage.$errorMessageBox("First name").isDisplayed())
      .withContext(`Expect First name is required message not displayed`)
      .toBe(false);
    for (let content of errorMessageContent) {
      expect(await billingPage.$errorMessageBox(content).isDisplayed())
        .withContext(`Expect ${content} required message to be displayed`)
        .toBe(false);
    }
  });

  it("Enter Last Name and Click on Place Order", async () => {
    await billingPage.fillBillingField("billing_last_name", lastName);
    await billingPage.clickOnPlaceOrder();
    expect(await billingPage.$errorMessageBox("Last name").isDisplayed())
      .withContext(`Expect First name is required message not displayed`)
      .toBe(false);
  });

  it("Enter Street Adress and Click on Place Order", async () => {
    await billingPage.fillBillingField("billing_address_1", houseName);
    await billingPage.fillBillingField("billing_address_2", streetName);
    await billingPage.clickOnPlaceOrder();
    expect(await billingPage.$errorMessageBox("Street address").isDisplayed())
      .withContext(`Expect First name is required message not displayed`)
      .toBe(false);
  });

  it("Enter Town / City and Click on Place Order", async () => {
    await billingPage.fillBillingField("billing_city", city);
    await billingPage.clickOnPlaceOrder();
    expect(await billingPage.$errorMessageBox("Town / City").isDisplayed())
      .withContext(`Expect Town / City is required message not displayed`)
      .toBe(false);
  });

  it("Enter state and Click on Place Order", async () => {
    await billingPage.selectState(state);
    await billingPage.clickOnPlaceOrder();
    expect(await billingPage.$errorMessageBox("State").isDisplayed())
      .withContext(`Expect First name is required message not displayed`)
      .toBe(false);
  });

  it("Enter Postal Code and Click on Place Order", async () => {
    await billingPage.fillBillingField("billing_postcode", pin);
    await billingPage.clickOnPlaceOrder();
    expect(await billingPage.$errorMessageBox("PIN Code").isDisplayed())
      .withContext(`Expect PIN Code is required message not displayed`)
      .toBe(false);
  });

  it("Enter Phone Number and Click on Place Order", async () => {
    await billingPage.fillBillingField("billing_phone", phone);
    await billingPage.clickOnPlaceOrder();
    expect(await billingPage.$errorMessageBox("Phone Number").isDisplayed())
      .withContext(`Expect Phone Number is required message not displayed`)
      .toBe(false);
  });

  it("Enter Email and Click on Place Order", async () => {
    await billingPage.fillBillingField("billing_email", email);
    await billingPage.clickOnPlaceOrder();
    expect(await billingPage.$errorMessageBox("Email address").isDisplayed())
      .withContext(`Expect Email address is required message not to displayed`)
      .toBe(false);
  });
});
