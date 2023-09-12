import { home } from "../page-objects/home.js";
import { cart } from "../page-objects/cart-page.js";
import { checkOut } from "../page-objects/check-out-page.js";
import { complete } from "..//page-objects/complete-page.js";
import { checkOutSummary } from "../page-objects/checkout-summary-page.js";
let productPrice=0;
describe("Automation the sauce demo website", () => {
  it("load the saucedemo qa url", async () => {
    await home.openUrl();
    expect(await home.$homeHeader().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Entering the user name and password", async () => {
    await home.enterTheDetails();
    expect(await home.$header().isDisplayed())
      .withContext(
        "Expect user name and password to be entered and click on login"
      )
      .toBe(true);
  });

  it("Click on the filter high to low and validating the prices to be in descending order", async () => {
    await home.sortCheck();
    expect(await home.$clickOnFilterHiLo().isDisplayed())
      .withContext("Expect the values to be sorted and to be displayed")
      .toBe(true);
  });

  it("Click on add to cart of the Sauce lab Fleece Jacket", async () => {
    await home.clickOnAddToCart();
    expect(await home.$removeFromCart().isDisplayed())
      .withContext(
        "Expect add to cart button to be changed to remove and  to be displayed"
      )
      .toBe(true);
  });

  it("Click on the cart icon in the home page", async () => {
    await home.clickOnCartIcon();
    productPrice = (await home.$price("Sauce Labs Fleece Jacket")).getText()

    expect(await cart.$header().isDisplayed())
      .withContext("Expect cart page  header to be displayed")
      .toBe(true);
  });

  it("Click on the Check out and verify the navigation", async () => {
    await cart.checkOut();
    expect(await cart.$header().isDisplayed())
      .withContext("Expect check out  header to be displayed")
      .toBe(true);
  });

  it("Enter the details in the information page and click on continue", async () => {
    await checkOut.inputInformation();
    expect(await checkOut.$header().isDisplayed())
      .withContext("Expect overview header to be displayed")
      .toBe(true);
  });

  it("Validating the item name in the overveiw page", async () => {
    let viewedItem = await checkOut.viewItem();
    expect(viewedItem).toContain("Sauce Labs Fleece Jacket"); 
    expect(await checkOut.$itemName()).toHaveTextContaining("Sauce Labs Fleece Jacket"); 
    expect(await checkOut.$itemName().isDisplayed()).toBe(true);
    });
    it("Price comparison in product overview page", async () => {
      let a = await checkOutSummary.priceComparison("Sauce Labs Fleece Jacket");
      expect(await a).toBe(true);
    });
    it("Price comparison after adding tax in product overview page", async () => {
      let b = await checkOutSummary.totalPrice();
      expect(await b).toBe(true);
    });

  it("Validating the finish button and clicking on it and verify to the complete page", async () => {
    await checkOutSummary.clickOnFinish();
    expect(await complete.$header().isDisplayed())
      .withContext("Expect Checkout: Complete header to be displayed")
      .toBe(true);
  });

  it("Validating the back to home button and going back to the home page", async () => {
    await complete.clickOnBackToHome();
    expect(await home.$header().isDisplayed())
      .withContext("Expect to appear of the home page of saucedemo site")
      .toBe(true);
  });
});
