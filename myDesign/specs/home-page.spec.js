import { checkoutPage } from "../pageobjects/checkout-page.js";
import { home } from "../pageobjects/landing-page.js";

describe("End-to-end automation for Mydesignation application", () => {
  it("Load Mydesignation url", async () => {
    await home.openUrl();
    expect(await home.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
    expect(await home.$navigation().isDisplayed())
      .withContext("Expect navbar to be displayed")
      .toBe(true);
  });

  it("Click on product and verify the navigation", async () => {
    await home.clickOnProduct();
    expect(await home.$item().isDisplayed())
      .withContext("Expect navigation to item page")
      .toBe(true);
  });

  it("Click on size and add item to cart ", async () => {
    await home.clickOnsize();
    expect(await home.$added().isDisplayed())
      .withContext("Expect item added to cart")
      .toBe(true);
  });

  it("Click on cart icon an verify navigation to checkout page", async () => {
    await home.clickOnCartIcon();
    expect(await home.$cartItem().isDisplayed())
      .withContext("Expect navigation to checkout page")
      .toBe(true);
  });

  it("Click on proceed button and verify navigation to billing details page", async () => {
    await checkoutPage.clickOnProceed();
    expect(await checkoutPage.$bill().isDisplayed())
      .withContext("Expect navigation to billing details page")
      .toBe(true);
  });

  it("Click on place order and verify error message", async () => {
    await checkoutPage.clickOnPlaceOrder();
    await checkoutPage
      .$error("Billing First name")
      .waitForDisplayed({ timeout: 2000 });
    expect(await checkoutPage.$error("Billing First name").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await checkoutPage
      .$error("Billing Last name")
      .waitForDisplayed({ timeout: 2000 });
    expect(await checkoutPage.$error("Billing Last name").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await checkoutPage
      .$error("Billing Street address")
      .waitForDisplayed({ timeout: 2000 });
    expect(await checkoutPage.$error("Billing Street address").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await checkoutPage
      .$error("Billing Town / City")
      .waitForDisplayed({ timeout: 2000 });
    expect(await checkoutPage.$error("Billing Town / City").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await checkoutPage
      .$error("Billing State")
      .waitForDisplayed({ timeout: 2000 });
    expect(await checkoutPage.$error("Billing State").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await checkoutPage
      .$error("Billing PIN Code")
      .waitForDisplayed({ timeout: 2000 });
    expect(await checkoutPage.$error("Billing PIN Code").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await checkoutPage
      .$error("Billing Phone")
      .waitForDisplayed({ timeout: 2000 });
    expect(await checkoutPage.$error("Billing Phone").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await checkoutPage
      .$error("Billing Email address")
      .waitForDisplayed({ timeout: 2000 });
    expect(await checkoutPage.$error("Billing Email address").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
  });

  it("Enter details on billing details page", async () => {
    await checkoutPage.enterText();
    expect(
      await checkoutPage
        .$error("Billing First name")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await checkoutPage
        .$error("Billing Last name")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await checkoutPage
        .$error("Billing Street address")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await checkoutPage
        .$error("Billing Town / City")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await checkoutPage
        .$error("Billing State")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await checkoutPage
        .$error("Billing PIN Code")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await checkoutPage
        .$error("Billing Phone")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await checkoutPage
        .$error("Billing Email address")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
  });
});
