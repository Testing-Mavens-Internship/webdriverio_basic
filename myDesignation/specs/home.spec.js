import { homePage } from "../page-objects/home-page.js";
import { cartPage } from "../page-objects/cart-page.js";
import { billPages } from "../../myDesignation/page-objects/bill-details-page.js";

describe("End to end automation for  mydesignation website", () => {
  it("load the mydesignation url", async () => {
    await homePage.openUrl();
    await homePage.clickOnOk();
    expect(await homePage.$header().isDisplayed())
      .withContext("Expect header to be displayed")
      .toBe(true);
  });

  it("Click on the Gojo Co-ORds", async () => {
    await homePage.clickOnTheProduct();
    expect(await homePage.$productHeader().isDisplayed())
      .withContext("expect particular product to display")
      .toBe(true);
  });

  it("Click on tshirt size m and short size 32 and click on add to cart ", async () => {
    await homePage.clickOnSize();
    expect(await homePage.$headerAfterAdding().isDisplayed())
      .withContext("The product is added to the cart ")
      .toBe(true);
  });

  it("Click on the cart icon", async () => {
    await homePage.clickOnCartIcon();
    expect(await cartPage.$cartHeader().isDisplayed())
      .withContext("the cart page should load successfully")
      .toBe(true);
  });

  it("Click on the proceed to checkout button", async () => {
    await cartPage.clickOnProceedToCheckout();
    expect(await billPages.$header().isDisplayed())
      .withContext("Billing section appears")
      .toBe(true);
  });

  it("Click on place order", async () => {
    await billPages.placeOrderButton();
    await billPages
      .$errorMessage("Billing First name")
      .waitForDisplayed({ timeout: 2000 });
    expect(await billPages.$errorMessage("Billing First name").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await billPages
      .$errorMessage("Billing Last name")
      .waitForDisplayed({ timeout: 2000 });
    expect(await billPages.$errorMessage("Billing Last name").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await billPages
      .$errorMessage("Billing Street address")
      .waitForDisplayed({ timeout: 2000 });
    expect(
      await billPages.$errorMessage("Billing Street address").isDisplayed()
    )
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await billPages
      .$errorMessage("Billing Town / City")
      .waitForDisplayed({ timeout: 2000 });
    expect(await billPages.$errorMessage("Billing Town / City").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await billPages
      .$errorMessage("Billing State")
      .waitForDisplayed({ timeout: 2000 });
    expect(await billPages.$errorMessage("Billing State").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await billPages
      .$errorMessage("Billing PIN Code")
      .waitForDisplayed({ timeout: 2000 });
    expect(await billPages.$errorMessage("Billing PIN Code").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await billPages
      .$errorMessage("Billing Phone")
      .waitForDisplayed({ timeout: 2000 });
    expect(await billPages.$errorMessage("Billing Phone").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
    await billPages
      .$errorMessage("Billing Email address")
      .waitForDisplayed({ timeout: 2000 });
    expect(await billPages.$errorMessage("Billing Email address").isDisplayed())
      .withContext("Expect the error message to be displayed")
      .toBe(true);
  });
  it("Enter details and validate each fields ", async () => {
    await billPages.enterThDetails();
    expect(
      await billPages
        .$errorMessage("Billing First name")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await billPages
        .$errorMessage("Billing Last name")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await billPages
        .$errorMessage("Billing Street address")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await billPages
        .$errorMessage("Billing Town / City")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await billPages
        .$errorMessage("Billing State")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await billPages
        .$errorMessage("Billing PIN Code")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await billPages
        .$errorMessage("Billing Phone")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
    expect(
      await billPages
        .$errorMessage("Billing Email address")
        .waitForDisplayed({ reverse: true })
    ).withContext("Expect the error message is not to be displayed");
  });
  // it("Validating the paynow page",async() =>{
  //   expect (await billPages.$paymentTab().waitForDisplayed({timeout:10000}))
  //   .withContext("The payment header is displayed")
  //   .toBe(true)
  // })
});
