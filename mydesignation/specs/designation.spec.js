import { billingPage } from "../pageobjects/billing-page.js";
import { home } from "../pageobjects/home-page.js";
import { productPage } from "../pageobjects/product-page.js";
import { shoppingCartPage } from "../pageobjects/shopping-cart-page.js";

let product = "Gojo";
// let size1 = "T-shirt Size";
// let size2 = "Shorts Size";
let tsize = "XS";
let ssize = 32;

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

  it("fill details and place order", async () => {
    await billingPage.clickOnPlaceOrderButton();
  });
});
