class ShoppingCart {
  constructor() {
    /**
     * elements
     */
    this.$clickOnCheckOutButton = () =>
      $('//li[@class="menu-item menu-item-cart"]//a');
    this.$shoppingCartHeader = () => $('//li//a[text()="Shopping Cart"]');
    this.$productInCart = () =>
      $(
        '//tr[@class="woocommerce-cart-form__cart-item cart_item"]//a[contains(text(),"Gojo Co-Ords Set for Men")]'
      );
  }
  /** click on checkout button */
  async clickOnCheckOutButton() {
    await this.$clickOnCheckOutButton().scrollIntoView();
    await this.$clickOnCheckOutButton().click();
  }
}
export const shoppingCartPage = new ShoppingCart();
