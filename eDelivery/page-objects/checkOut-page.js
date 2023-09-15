import Common from "./Common.js";

class CheckOutPage extends Common {
  constructor() {
    super();
    this.$checkOutButton = () => $('//a[text()="Checkout"]');
    this.$checkoutHeader = () => $('//h2[text()="Complete Your Order"]');
  }
  /**
   * Method to check out an item
   */
  async checkOut() {
    await this.$checkOutButton().click();
    await this.$checkoutHeader().waitForDisplayed({ timeout: 3000 });
  }
}
export const checkOutPage = new CheckOutPage();
