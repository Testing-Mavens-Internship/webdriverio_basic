import { home } from "../page-objects/home.js";
import { cart } from "../page-objects/cart-page.js";
import { checkOut } from "../page-objects/check-out-page.js";
describe("Automation the sauce demo website", () => {
  it("load the saucedemo qa url", async () => {
    await home.openUrl();
    expect(await home.$headers().isDisplayed())
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

  it("Click on the filter", async () => {
    await home.useFilter();
    expect(await home.$clickOnFilterHiLo().isDisplayed())
      .withContext("Expect the values to be sorted and to be displayed")
      .toBe(true);
  });
  it("Validating weather the price is sorted or not" , async() =>{
    await home.sortCheck();
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
    expect(await cart.$cartHeader().isDisplayed())
      .withContext("Expect cart page  header to be displayed")
      .toBe(true);
  });

  it("Click on the Check out and verify the navigation", async () => {
    await cart.checkOut();
    expect(await cart.$checkOutHeader().isDisplayed())
      .withContext("Expect check out  header to be displayed")
      .toBe(true);
  });

  it("Enter the details in the information page and click on continue", async () => {
    await checkOut.inputInformation();
    expect(await checkOut.$overViewHeader().isDisplayed())
      .withContext("Expect overview header to be displayed")
      .toBe(true);
  });

  it("Validating the item name in the overveiw page", async () => {
    let viewedItem = await checkOut.viewItem();
    expect(viewedItem).toContain("Sauce Labs Fleece Jacket");// Using the method
    expect(await checkOut.$itemName()).toHaveTextContaining("Sauce Labs Fleece Jacket");//Directly through the element.
    expect(await checkOut.$itemName().isDisplayed())
    .toBe(true);
  });

  it("Validating the price of the product" ,async() =>{
    let viewedItemPrice = await checkOut.viewPrice();
    expect(viewedItemPrice).toContain("49.99");
    expect(await checkOut.$itemPrice()).toHaveTextContaining("49.99");
  })
});
