import Common from "./common.js";
class Home extends Common {
  constructor() {
    super();
    this.$contactButton = () => $('(//a[contains(text(),"Contact Us")])[2]');
    this.$clickOnCart = () =>
      $('//div[@class = "user_option-box"]//a//i[@class = "fa fa-cart-plus"]');
  }
  /**
   * Method to click on contact us button
   */
  async clickOnContactUs() {
    await this.$contactButton().click();
  }
  /**
   * Method to click on the cart icon
   */
  async clickOnCart() {
    await this.$clickOnCart().click();
  }
}
export const homeMaven = new Home();
