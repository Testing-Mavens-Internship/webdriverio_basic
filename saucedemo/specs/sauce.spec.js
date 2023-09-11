import { cartPage } from "../pageobjects/cart-page.js";
import { homePage } from "../pageobjects/home-page.js";

describe("Sauce demo website automation", () => {
  it("Load the url", async () => {
    await homePage.openUrl();
    expect(await homePage.$loginheader().isDisplayed())
      .withContext("expect header to be displayed")
      .toBe(true);
  });

  it("Login", async () => {
    await homePage.login();
    expect(await homePage.$appheader().isDisplayed())
      .withContext("expect header to be displayed")
      .toBe(true);
  });

  it("Sort from highest to lowest", async () => {
    await homePage.sort();

    let textArray = [];
    let dollor = [];
    textArray = await homePage.$$price().map((item) => item.getText());

    expect(await homePage.isSorted(textArray))
      .withContext(" Expect product to be displayed in high to low price ")
      .toBe(true);

    for (let item of textArray) {
      dollor = item.replace("$", "");
    }
  });

  it("Add product to the cart ", async () => {
    await homePage.addProduct();
    expect(await homePage.$remove().isDisplayed())
      .withContext("expect remove button to be displayed")
      .toBe(true);
  });

  it("go to cart", async () => {
    await homePage.addToCart();
    expect(await cartPage.$yourCartHeader().isDisplayed())
      .withContext("expect remove button to be displayed")
      .toBe(true);

    expect(await cartPage.$cartProduct().isDisplayed())
      .withContext("expect remove button to be displayed")
      .toBe(true);

    await cartPage.$checkOutButton().click();
  });
});
