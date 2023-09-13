
import { checkoutPage } from "../pageobjects/checkout-page.js";
import { home } from "../pageobjects/landing-page.js";

describe ("Mydesignation application automation", () => {
    it ("Load Mydesignation url", async () => {
        await home.openUrl();
      expect(await home.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
        expect(await home.$nav().isDisplayed())
        .withContext("Expect navbar to be displayed")
        .toBe(true);
    });

    it ("Click on product", async () => {
      await home.clickOnProduct();
      expect(await home.$item().isDisplayed())
      .withContext("Expect navigation to item page")
      .toBe(true);
    });

    it("Click on size and add to cart", async () => {
      await home.clickOnsize();
      expect(await home.$added().isDisplayed())
      .withContext("Expect item added to cart")
      .toBe(true);
    });

    it("Click on cart icon an verify navigation", async () => {
      await home.clickOnCartIcon();
      expect(await home.$cartItem().isDisplayed())
      .withContext("Expect navigation to checkout page")
      .toBe(true);
    });

    it("Click on proceed ", async () => {
      await checkoutPage.clickOnProceed();
      expect(await checkoutPage.$bill().isDisplayed())
      .withContext("Expect navigation to billing details page")
      .toBe(true);
    });

    it("Click on place order", async () => {
      await checkoutPage.clickOnPlaceOrder();
      expect (await checkoutPage.$error('Billing First name').isDisplayed()).withContext("Expect the error message to be displayed").toBe(true);
    })

});