import { cartPage } from "../page-objects/cart-page.js";
import { fillForm } from "../page-objects/fill-form-page.js";
import { landingPage } from "../page-objects/home-page.js";
import { overView } from "../page-objects/checkout-overview-page.js";
import { finishPage } from "../page-objects/finish-page.js";
let userName = "standard_user";
let password = "secret_sauce";
let product = "Sauce Labs Fleece Jacket";
let firstName = "Anisha";
let lastName = "V A";
let postalCode = "680683";
let originalPrice = 0;
describe("Sausedemo Application Automation", () => {
  it("load the sausedemo url", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("User login", async () => {
    await landingPage.login(userName, password);
    expect(await landingPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("sort products based on price high to low", async () => {
    await landingPage.clickSort();
    expect(await landingPage.clickSort()).toBe(true);
  });

  it("Click on add to cart", async () => {
    await landingPage.clickOnAddToCart(product);
    expect(await landingPage.$verifyRemove(product).isDisplayed())
      .withContext("Expect Remove to be displayed")
      .toBe(true);
  });

  it("Click cart icon and verify navigation", async () => {
    await landingPage.clickCart();
    expect(await cartPage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
    expect(await cartPage.$secondHeader("Your Cart").isDisplayed())
      .withContext("Expect 'your cart' header to be displayed")
      .toBe(true);
    expect(await cartPage.$cartProduct(product).isDisplayed())
      .withContext("Expect product to be displayed")
      .toBe(true);
  });

  it("Click on ckeckout and verify navigation", async () => {
    await cartPage.clickCheckout();
    expect(await fillForm.$secondHeader("Checkout: Your Information").isDisplayed())
    .withContext("Expect 'Checkout: Your Information' header to be displayed")
    .toBe(true);
  })

  it("Fill form", async () => {
    await fillForm.fillDetails(firstName,lastName,postalCode);
    expect(await overView.$secondHeader("Checkout: Overview").isDisplayed())
    .withContext("Expect 'Checkout: Overview' header to be displayed")
    .toBe(true);
  })

  it("Compare product price", async () => {
    await overView.comparePrice(product);
    expect(await overView.comparePrice(product)).toBe(true);
 })

  it("Total product price", async () => {
        await overView.totalPrice();
        expect(await overView.totalPrice()).toBe(true);
 })
 it("click on Finish button and verify navigation", async () => {
    await overView.finishButton();
    expect(await finishPage.$thankYouMessage().isDisplayed()).toBe(true);
});
});