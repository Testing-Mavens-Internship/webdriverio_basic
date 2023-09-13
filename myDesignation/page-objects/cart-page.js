class Cart {
  constructor() {
    this.shoppingCart = () => $('//li[@class = "menu-item menu-item-cart"]');
    this.$proceedToCheckOut = () =>
      $('//a[@class = "checkout-button button alt wc-forward"]');
    this.$cartHeader = () =>
      $('//li[@class = "shopping-cart-link line-hover active"]');
  }
  /**
   * click on proceed button
   */
  async clickOnProceedToCheckout() {
    await this.$proceedToCheckOut().click();
  }
}
export const cartPage = new Cart();
