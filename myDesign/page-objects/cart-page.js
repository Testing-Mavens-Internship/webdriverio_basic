import CommonPage from "../page-objects/common-page.js";

class CartPage extends CommonPage {
  constructor() {
    super();
    this.$viewCartPage = () => $('//a[text()="Shopping Cart"]');
    this.$checkout = () => $('//div[@class="wc-proceed-to-checkout"]');
  }

  /**click on check out  */
  async proceedToCheckout() {
    await this.$checkout().scrollIntoView({ block: "center" });
    await this.$checkout().waitForClickable(5000);
    await this.$checkout().click();
  }
}

export const cartPage = new CartPage();
