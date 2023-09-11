class CartPage {
  constructor() {
    //**elements */
    this.$yourCartHeader = () =>
      $('//div[@class="header_secondary_container"]//span');
    this.$cartProduct = () =>
      $('//div[contains(text(),"Sauce Labs Fleece Jacket")]//..//..//..');
    this.$checkOutButton = () =>
      $('//div[@class="cart_footer"]//button[text()="Checkout"]');
  }
}
export const cartPage = new CartPage();
