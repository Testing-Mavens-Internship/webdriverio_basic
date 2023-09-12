import { cartPage } from "../pageobjects/cart-page.js";
import { homePage } from "../pageobjects/home-page.js";
import { overview } from "../pageobjects/overview-page.js";
import { yourInfo } from "../pageobjects/yourInfo-page.js";

let fname = "Vaishnav";
let lname = "s";
let zip = "680562";
let productPrice = 0;

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
    // let price = homePage.$productPrice().getText();
    // price.replace("$","");
    productPrice = await homePage.$productPrice().getText();
  });

  it("go to cart", async () => {
    await homePage.addToCart();
    expect(await cartPage.$yourCartHeader().isDisplayed())
      .withContext("expect remove button to be displayed")
      .toBe(true);

    expect(await cartPage.$cartProduct().isDisplayed())
      .withContext("expect remove button to be displayed")
      .toBe(true);
  });

  it("your cart", async () => {
    await cartPage.checkOut();
    expect(await yourInfo.$header().isDisplayed())
      .withContext("expect your info header to be displayed")
      .toBe(true);
  });

  it("Fill in your information and continue", async () => {
    await yourInfo.yourInfoForm(fname, lname, zip);
    expect(await overview.$header().isDisplayed())
      .withContext("expect your info header to be displayed")
      .toBe(true);
  });

  // it("Item displayed is the added item", async () =>{
  //   await overview.$overviewProductPrice().getText()
  // })

  it("Overview", async () => {
    let itemTotal = await overview.$itemTotal().getText();
    let itemTotalNew = await parseFloat(itemTotal.slice(13, 18));
    let tax = await overview.$tax().getText();
    let taxNew = await parseFloat(tax.slice(6, 13));
    let total = await overview.$total().getText();
    let totalNew = await parseFloat(total.slice(8, 15));
    let productPriceNew = await parseFloat(productPrice.slice(1, 9));

    expect(await overview.verifyPrice(itemTotalNew, productPriceNew))
      .withContext("Expect item price equals to item total")
      .toBe(true);

    expect(await overview.verifyTotalPrice(itemTotalNew, totalNew, taxNew))
      .withContext("Expect total price is addition of tax and item total")
      .toBe(true);
  });

  it("Finish ", async () => {
    await overview.finsih();
    expect(await overview.$thankYouHeader().isDisplayed())
      .withContext("Expect thank you for your order header is displayed")
      .toBe(true);
  });
});
