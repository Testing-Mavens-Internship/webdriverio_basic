import Common from "./common-page.js";
class CartPage extends Common {
  constructor() {
    super();
    this.$checkOutButton = () => $('//button[@id="checkout"]');
  }
  /**
   * click on the Checkout button
   */
  async checkOut() {
    await this.$checkOutButton().click();
    await browser.pause(1000);
  }
}

export const cart = new CartPage();
