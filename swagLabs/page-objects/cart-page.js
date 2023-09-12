import Common from "./common.js";
import { homePage } from "./home-page.js";
import { checkOutPage } from "./checkout-page.js";
class CartPage extends Common {
  constructor() {
    super();
  }

  /**
   * click on cart icon
   */
  async clickOnCart() {
    await homePage.$cart().click();
    await homePage.$item().waitForDisplayed({ timeout: 20000 });
  }

  /**
   * click on  checkout
   */
  async clickOnCheckout(){
    await this.$button("Checkout").click();
    await checkOutPage.$sideHeading("Checkout: Your Information").waitForDisplayed({timeout: 20000});
  }
}
export const cartPage = new CartPage();
