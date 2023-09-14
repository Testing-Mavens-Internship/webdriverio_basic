import Common from "./common.js";
import { contactPage } from "./contact-page.js";
import { cartPage } from "./cart-page.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$contactUs = () => $(`(//a[contains(text(),"Contact Us")])[2]`);
    this.$cartIcon = () => $(`//i[@class="fa fa-cart-plus"]`);
  }
  /**
   * Method to click on Contact Us
   */
  async clickOnContactUs() {
    await this.$contactUs().click();
    let windowHandle = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandle[1]);
    await contactPage.$sideHeader().waitForDisplayed({ timeout: 20000 });
  }
  /**
   * Methdod to click Cart icon
   */
  async clickOnCartIcon() {
    await this.$cartIcon().click();
    await cartPage.$cartPageHeader().waitForDisplayed({ timeout: 20000 });
  }
}
export const homePage = new HomePage();
