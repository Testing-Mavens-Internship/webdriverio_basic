import Common from "./common-page.js";

class CartPage extends Common {
  constructor() {
    super();
    this.$productNameInCart = (name) => $(`//a[text()="${name}"]`);
    this.$proceedToCheckOutButton = () =>
      $('//a[@class="checkout-button button alt wc-forward"]');
  }
  /**
   * Method to click on proceed to check out button
   */
  async clickOnProceedToCheckOutButton() {
    await this.$proceedToCheckOutButton().scrollIntoView();
    await this.$proceedToCheckOutButton().waitForClickable({ timeout: 2000 });
    await this.$proceedToCheckOutButton().click();
  }
}
export const cartPage = new CartPage();
