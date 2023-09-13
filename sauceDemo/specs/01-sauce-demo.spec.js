import { loginPage } from "../page-objects/login-page.js";
import { productPage } from "../page-objects/product-page.js";
import { cartPage } from "../page-objects/cart-page.js";
import { checkOutPage } from "../page-objects/checkout-page.js";
import { checkOutSummary } from "../page-objects/checkout-summary-page.js";
import { orderConfirm } from "../page-objects/order-confirm-page.js";

let userName = "standard_user";
let passWord = "secret_sauce";
let sortProduct = "Price (low to high)";
let product = "Backpack";
let firstName = "Hanan";
let lastName = "Ash";
let postalCode = 673307;
let productPrice = 0;

xdescribe("Sauce Demo Application automation", () => {
  it("Load the sauce demo url", async () => {
    await loginPage.openUrl();
    expect(await loginPage.$title().isDisplayed())
      .withContext("Expect Title to be displayed")
      .toBe(true);
  });

  it("Login to Sauce demo and Verify Login", async () => {
    await loginPage.login(userName, passWord);

    expect(await loginPage.$header("Products").isDisplayed())
      .withContext("Expect Header to be displayed")
      .toBe(true);
  });

  it("Sort Product in Order of Price Low to High", async () => {
    await productPage.sortProduct(sortProduct);

    let priceArray = await productPage
      .$$itemPrices()
      .map((items) => items.getText());
    let priceArrayNew = priceArray.map((item) => item.slice(1));

    expect(await productPage.isSorted(priceArrayNew))
      .withContext(" Expect product to be displayed in Low to High price ")
      .toBe(true);
  });

  it("Add an product to Cart", async () => {
    await productPage.addToCart(product);
    productPrice = await productPage.$price(product).getText();

    let cartCount = await productPage.$cartCount().getText();

    expect(await productPage.checkCartCount(cartCount))
      .withContext("Expect Cart Count to be displayed")
      .toBe(true);

    expect(await productPage.$removeButton(product).isDisplayed())
      .withContext("Expect remove button to be displayed")
      .toBe(true);
  });

  it("Go To Cart and verify item displayed", async () => {
    await productPage.goToCart();

    expect(await cartPage.$header("Your Cart").isDisplayed())
      .withContext("Expect cart header to be displayed")
      .toBe(true);

    expect(await cartPage.$listedProduct(product).isDisplayed())
      .withContext(`Expect ${product} to be listed in cart`)
      .toBe(true);
  });

  it("Click on Checkout Button and verify navigation", async () => {
    await cartPage.clickOnCheckout();

    expect(
      await checkOutPage.$header("Checkout: Your Information").isDisplayed()
    )
      .withContext("Expect CheckOut header to be displayed")
      .toBe(true);
  });

  it("Complete Checkout Process", async () => {
    await checkOutPage.fillCheckoutForm(firstName, lastName, postalCode);
    await checkOutPage.clickOnContinue();

    expect(await checkOutPage.$header("Checkout: Overview").isDisplayed())
      .withContext("Expect checkout Overview header to be displayed")
      .toBe(true);

    let itemTotal = await checkOutSummary.$priceField("Item total").getText();
    let itemTotalNew = await parseFloat(itemTotal.slice(13, 18));

    let tax = await checkOutSummary.$priceField("Tax").getText();
    let taxNew = await parseFloat(tax.slice(6, 13));

    let total = await checkOutSummary.$totalPrice().getText();
    let totalNew = await parseFloat(total.slice(8, 15));
    let productPriceNew = await parseFloat(productPrice.slice(1, 9));

    expect(await checkOutSummary.verifyPrice(itemTotalNew, productPriceNew))
      .withContext("Expect item price equals to item total")
      .toBe(true);

    expect(await checkOutSummary.verifyTotalPrice(itemTotalNew, taxNew, totalNew))
      .withContext("Expect total price is addition of tax and item total")
      .toBe(true);
  });

  it("Click on Finish and Confirm Order", async () => {
    await checkOutSummary.clickOnFinish();

    expect(await orderConfirm.$confirmMessage().isDisplayed())
      .withContext("Expect Order confirmation Message to be displayed")
      .toBe(true);
  });

  it("Click on Back Home and Verify navigation", async () => {
    await orderConfirm.clickOnBackToHome();

    expect(await productPage.$title().isDisplayed())
      .withContext("Expect Title to be displayed")
      .toBe(true);

    expect(await productPage.$header("Products").isDisplayed())
      .withContext("Expect product header to be displayed")
      .toBe(true);
  });
});
