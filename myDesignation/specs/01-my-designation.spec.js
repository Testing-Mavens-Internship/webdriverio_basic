import { landingPage } from "../page-objects/landing-page.js";
import { itemPage } from "../page-objects/item-page.js";
import { cartPage } from "../page-objects/cart-page.js";
import { checkoutPage } from "../page-objects/checkout-page.js";

let item = "Sukuna Co-Ords Set for Women";
let tshirtSize = "M";
let shortsSize = 32;
let itemName;

// let navbarElements = ['Men', 'Women', 'Kids', 'Couple Tees & Combos', 'Accessories',
// 'Plus Size Store', 'Track Order', 'Custom Print', 'Wishlist'];

describe("My Designation Application automation", () => {
  it("Load the My designation url", async () => {
    await landingPage.openUrl();
    expect(await landingPage.$logo().isDisplayed())
      .withContext("Expect Logo to be displayed")
      .toBe(true);
  });

  // it('Verify navigation bar')
  it(`Click on item : ${item}`, async () => {
    await landingPage.clickOnItem(item);

    expect(await itemPage.$itemName(item).isDisplayed())
      .withContext(`Expect ${item} header to be displayed`)
      .toBe(true);
  });

  it("Choose Item Sizes and Click Add to Cart", async () => {
    await itemPage.clickOnItemSize(tshirtSize, shortsSize);
    await itemPage.clickOnAddToCart();

    expect(await itemPage.$messageBox().isDisplayed())
      .withContext("Expect success message box to be displayed")
      .toBe(true);
  });

  it("Click Cart Icon and verify item displayed", async () => {
    await itemPage.clickOnCartIcon();

    expect(await cartPage.$header().isDisplayed())
      .withContext("Expect cart header to be displayed")
      .toBe(true);

    expect(await cartPage.$cartItems(item).isDisplayed())
      .withContext(`Expect ${item} to be displayed in cart`)
      .toBe(true);
  });

  it("Click on proced to Checkout and verify navigation", async () => {
    await cartPage.clickOnCheckout();

    expect(await checkoutPage.$header().isDisplayed())
      .withContext("Expect CheckOut header to be displayed")
      .toBe(true);
  });
});
