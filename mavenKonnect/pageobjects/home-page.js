import Common from "./common.js";

class HomePage extends Common {
  constructor() {
    /**elements */
    super();
    this.$contactUs = () => $('(//div[@class="btn-box"]//a[@class="btn1"])[1]');
    this.$cartIcon = () => $('//i[@class="fa fa-cart-plus"]');
  }
  /**
   * Method to click on contact us
   */
  async clickOnContactUs() {
    await this.$contactUs().click();
    await this.$header().waitForDisplayed({ timeout: 2000 });
  }

  async clickOnCartIcon() {
    await this.$cartIcon().click();
  }
}
export const homePage = new HomePage();
