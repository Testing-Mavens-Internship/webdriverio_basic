import { homePage } from "../page-objects/home-page.js";
import { productDetails } from "../page-objects/product-details-page.js";
import { viewCart } from "../page-objects/view-cart-page.js";

let productName = "Sukuna Co-Ords Set for Women";
let tShirt = "XS";
let shorts = 30;
describe("MYDESIGNATION Application Automation", () => {
    it("load the url", async () => {
      await homePage.openUrl();
      expect(await homePage.$header().isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Select product", async () => {
      await homePage.selectProduct(productName);
      expect(await homePage.$verifyProduct(productName).isDisplayed())
        .withContext("Expect header to be displayed")
        .toBe(true);
    });

    it("Select size and verify add to cart button", async () => {
      await productDetails.selectSize(tShirt,shorts);
      expect(await productDetails.$addToCartButton().isDisplayed())
      .withContext("Expected add to cart button is enabled")
      .toBe(true);
    })

    it ("Click on add to cart", async () => {
      await productDetails.clickAddToCart(productName);
      expect(await productDetails.$verifyAddToCart(productName).isDisplayed())
      .withContext("Expected a message showing product added to the cart")
      .toBe(true);
    })
    it ("Click on view cart", async () => {
      await productDetails.clickViewCart();
      expect(await viewCart.$verifyCartPage().isDisplayed())
      .withContext("Expected 'Shopping cart' to be displayed")
      .toBe(true);
      expect (await viewCart.$verifyProduct(productName,tShirt,shorts).isDisplayed())
      .withContext("Expect product to be displayed")
      .toBe(true);
    })
});