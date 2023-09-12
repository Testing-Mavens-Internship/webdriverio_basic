import { homePage } from "../page-objects/home-page.js";
import { checkoutPage } from "../page-objects/checkout-page.js";
import { checkoutInformation } from "../page-objects/check-your-information-page.js";
import { checkoutOverview } from "../page-objects/checkout-overview-page.js";

let userName = "standard_user";
let password = "secret_sauce";

let AtoZ = "Name (A to Z)";
let ZtoA = "Name (Z to A)";
let lowtoHigh = "Price (low to high)";
let hightoLow = "Price (high to low)";

let title1 = "Products";
let title2 = "Your Cart";
let title3 = "Checkout: Your Information";
let title4 = "Checkout: Overview";
let title5 = "Checkout: Complete!";

let firstName = "Adhithya";
let lastName = "Somaraj";
let postalCode = "686020";

describe("Swag Labs application: ", () => {
  it("It should lauch the Swag Labs application", async () => {
    await homePage.launchUrl();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect Swag Labs title should be display")
      .toBe(true);
  });
  it("Fill the credentials", async () => {
    await homePage.login(userName, password);
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect the Swag Labs title on the home page")
      .toBe(true);
    expect(await homePage.$productTitle(title1).isDisplayed())
      .withContext("Expect the Product title on the homepage")
      .toBe(true);
  });
  it("Sort the products", async () => {
    await homePage.sort(hightoLow);
    expect(await homePage.sortValidation())
      .withContext("Expect the items should be sorted")
      .toBe(true);
  });
  it("Click on the Highest price item", async () => {
    await homePage.clickOnAddToCart();
    expect(await homePage.$remove().isDisplayed())
      .withContext("Expect Add to cart button text changes to remove")
      .toBe(true);
  });
  it("Click on the cart icon", async () => {
    await homePage.clickOnCartIcon();
    expect(await homePage.$productTitle(title2).isDisplayed())
      .withContext("Expect the Cart title on the homepage")
      .toBe(true);
    expect(await homePage.$selectedCartItemName().isDisplayed())
      .withContext("Expect the cart contain name of the product added")
      .toBe(true);
  });
  it("Click on the checkout button", async () => {
    await checkoutPage.clickOnCheckoutButton();
    expect(await homePage.$productTitle(title3).isDisplayed())
      .withContext(
        "Expect the checkout page conatin 'Checkout: Your Information' title"
      )
      .toBe(true);
    //  expect(await checkoutPage.$checkOutProductname().isDisplayed()).withContext("Expect name of item in the cart").toBe(true)
  });
  it("Fill the checkout form", async () => {
    await checkoutInformation.fillCheckoutForm(firstName, lastName, postalCode);
    await checkoutOverview.priceCalculation();
    expect(await homePage.$productTitle(title4).isDisplayed())
      .withContext(
        "Expect checkout overview page conatin the Checkout: Overview heading"
      )
      .toBe(true);
    expect(await checkoutOverview.$checkOutProductname().isDisplayed())
      .withContext(
        "Expect name of item in the overview page with price details"
      )
      .toBe(true);
    expect(await checkoutOverview.priceCalculation())
      .withContext(
        "Expect the sum of item price and tax should be equal to total price"
      )
      .toBe(true);
  });
  it("Click on finish Button", async () => {
    await checkoutOverview.clickOnFinish();
    expect(await homePage.$productTitle(title5).isDisplayed())
      .withContext(
        "Expect the Thank you page contain Checkout: Complete! heading"
      )
      .toBe(true);
    expect(await homePage.$thankYouTitle().isDisplayed())
      .withContext(
        "Expect the Thank you page contain Thank you for your order heading "
      )
      .toBe(true);
  });
});
