import { homePage } from "../page-objects/home-page.js";
import { cartPage } from "../page-objects/cart-page.js";
import { checkOutPage } from "../page-objects/checkout-page.js";
describe("Swag Labs automation", () => {
  it("Launch URL", async () => {
    await homePage.launchUrl();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Login", async () => {
    await homePage.login();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect header to be displayed in home page")
      .toBe(true);
    expect(await homePage.$item().isDisplayed())
      .withContext("Expect backpack to be displayed")
      .toBe(true);
  });

  it("Sort price high to low", async () => {
    await homePage.sortProducts();
    expect(await homePage.$item1().isDisplayed())
      .withContext("Expect the product to be displayed")
      .toBe(true);
    expect(await homePage.sortingValidation()).withContext("Expect price to be sorted").toBe(true);
  });

  it("Add item to cart", async () => {
    await homePage.addToCart();
    expect(await homePage.$remove().isDisplayed())
      .withContext("Expect remove button to be displayed")
      .toBe(true);
  });

  it("click on cart icon", async () => {
    await cartPage.clickOnCart();
    expect(await cartPage.$header().isDisplayed())
      .withContext("Expect header to be displayed in cart page")
      .toBe(true);
    expect(await homePage.$item().isDisplayed())
      .withContext("Expect item to be displayed")
      .toBe(true);
  });

  it("Click on checkout", async () => {
    await cartPage.clickOnCheckout();
    expect(await checkOutPage.$sideHeading().isDisplayed()).withContext("Expect side heading to be displayed").toBe(true);
    expect(await checkOutPage.$header().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
    expect(await checkOutPage.$continue().isDisplayed()).withContext("Expect continue button to be displayed").toBe(true);
  })

  it("Enter details and click continue", async() => {
    await checkOutPage.enterDetails();
    expect(await checkOutPage.$header().isDisplayed()).withContext("Expect header to be displayed");
    expect(await homePage.$item().isDisplayed()).withContext("Expect product to be same").toBe(true);
    expect(await checkOutPage.$sideHeading1().isDisplayed()).withContext("Expect side heading to be displayed").toBe(true);
  })

  it("Click on finish", async() => {
    await checkOutPage.clickFinish();
    expect(await checkOutPage.$sideHeading2().isDisplayed()).withContext("Expect sideheading2 to be displayed").toBe(true);
    expect(await checkOutPage.$headingFinish().isDisplayed()).withContext("Expect finish heading to be displayed").toBe(true);
    expect(await checkOutPage.$header().isDisplayed()).toBe(true);
  })

  it("Click on back to home", async() => {
    await checkOutPage.clickOnBackHome();
    expect(await homePage.$header().isDisplayed()).withContext("Expect homepage header to be displayed").toBe(true);
    expect(await homePage.$item().isDisplayed())
    .withContext("Expect backpack to be displayed")
    .toBe(true);
  })
});
