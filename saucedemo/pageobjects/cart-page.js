class CartPage {
  constructor() {
    //**elements */
    this.$yourCartHeader = () =>
      $('//div[@class="header_secondary_container"]//span');
    this.$cartProduct = () =>
      $('//div[contains(text(),"Sauce Labs Fleece Jacket")]//..//..//..');
    this.$checkOutButton = () =>
      $(
        '//div[@class="cart_footer"]//button[@class="btn btn_action btn_medium checkout_button"]'
      );
  }
  /**
   * checking out with the product
   */
  async checkOut() {
    await this.$checkOutButton().scrollIntoView();
    await this.$checkOutButton().click();
  }
}
export const cartPage = new CartPage();
