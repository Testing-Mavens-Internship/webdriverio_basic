import { homePage } from "../page-objects/home-page.js";
import { productPageObj } from "../../myDesignation/page-objects/product-page.js";
import { checkoutPageObj } from "../../myDesignation/page-objects/checkout-page.js";
describe("My Designation automation", () => {
  it("Launch URL", async () => {
    await homePage.launchUrl();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
    expect(await homePage.$menuBar().isDisplayed())
      .withContext("Expect menubar to be displayed")
      .toBe(true);
  });

  it("Click on product", async () => {
    await homePage.clickOnItem();
    expect(await productPageObj.$productName().isDisplayed())
      .withContext("Expect product name to be displayed")
      .toBe(true);
  });

  it("Select size and add to cart", async () => {
    await productPageObj.addToCart();
    expect(await productPageObj.$added().isDisplayed())
      .withContext("Expect succesfully addedd to cart to be displayed")
      .toBe(true);
  });

  it("click on view cart and verify", async () => {
    await productPageObj.viewCart();
    expect(await productPageObj.$checkoutButton().isDisplayed())
      .withContext("Expect checkout button to be displayed")
      .toBe(true);
    expect(await productPageObj.$itemInCart().isDisplayed())
      .withContext("Expect the item to be displayed")
      .toBe(true);
  });

  it("Click on proceed to checkout", async () => {
    await productPageObj.clickOnCheckout();
    expect(await checkoutPageObj.$pageHeader().isDisplayed())
      .withContext("Expect checkout page header to be displayed")
      .toBe(true);
    expect(await checkoutPageObj.$placeOrderButton().isDisplayed())
      .withContext("Expect place order button to be displayed")
      .toBe(true);
  });

  it("click on Place order and verify warning messages", async () => {
    await checkoutPageObj.placeOrder();
    let warnings = [];
    warnings = await checkoutPageObj
      .$$warningMessages()
      .map((item) => item.getText());
    console.log(warnings);
    for (let item of warnings) {
      expect(await checkoutPageObj.$warning(item).isDisplayed())
        .withContext("Expect warning messages to be displayed")
        .toBe(true);
    }
    await checkoutPageObj.enterFirstName();
    expect(
      await checkoutPageObj
        .$warning("Billing First name")
        .waitForDisplayed({ timeout: 20000, reverse: true })
    )
      .withContext("Expect first name warning not to be displayed")
      .toBe(true);
    await checkoutPageObj.enterLastName();
    expect(
      await checkoutPageObj
        .$warning("Billing Last name")
        .waitForDisplayed({ timeout: 20000, reverse: true })
    )
      .withContext("Expect last name warning not to be displayed")
      .toBe(true);
    await checkoutPageObj.enterAddress1();
    expect(
      await checkoutPageObj
        .$warning("Billing Street address")
        .waitForDisplayed({ timeout: 20000, reverse: true })
    )
      .withContext("Expect address warning not to be displayed")
      .toBe(true);
    await checkoutPageObj.enterCity();
    expect(
      await checkoutPageObj
        .$warning("Billing Town / City")
        .waitForDisplayed({ timeout: 20000, reverse: true })
    )
      .withContext("Expect town/city warning not to be displayed")
      .toBe(true);
    await checkoutPageObj.selectState();
    expect(
      await checkoutPageObj
        .$warning("Billing State")
        .waitForDisplayed({ timeout: 20000, reverse: true })
    )
      .withContext("Expect state warning not to be displayed")
      .toBe(true);
    await checkoutPageObj.enterPostCode();
    expect(
      await checkoutPageObj
        .$warning("Billing PIN Code")
        .waitForDisplayed({ timeout: 20000, reverse: true })
    )
      .withContext("Expect pincode warning not to be displayed")
      .toBe(true);
    await checkoutPageObj.enterPhone();
    expect(
      await checkoutPageObj
        .$warning("Billing Phone")
        .waitForDisplayed({ timeout: 20000, reverse: true })
    )
      .withContext("Expect phone number warning not to be displayed")
      .toBe(true);
    await checkoutPageObj.enterMail();
    expect(
      await checkoutPageObj
        .$warning("Billing Email address")
        .waitForDisplayed({ timeout: 20000, reverse: true })
    )
      .withContext("Expect email warning not to be displayed")
      .toBe(true);
  });
});
