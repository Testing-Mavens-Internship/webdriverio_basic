import { loginPage } from "../page-objects/login-page.js";
import { productPage } from "../page-objects/product-page.js";
import { cartPage } from "../page-objects/cart-page.js";

let userName = "standard_user";
let passWord = "secret_sauce";
let sortProduct = "Price (low to high)";
let product = "Backpack";

describe("Sauce Demo Application automation", () => {
  it("load the sauce demo url", async () => {
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

  it("Add an item to Cart", async () => {
    await productPage.addToCart(product);

    // let productPrice = await productPage.$price(product).getText();
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

  // it("Click on Checkout Button");
});
