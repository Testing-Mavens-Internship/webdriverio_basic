import Common from "./Common.js";

class LandingPage extends Common {
  constructor() {
    super();
    this.$contactUsButton = () => $('(//a[contains(text(),"Contact Us")])[2]');
    this.$cartIcon = () => $('//i[@class="fa fa-cart-plus"]');
    this.$cartHeader = () => $('//h1[contains(text(),"Check Out")]');
  }
  /**
   * Method to click on Contact Us button
   */
  async clickOnContactUs() {
    await this.$contactUsButton().click();
    let windowVariable = await browser.getWindowHandles();
    await browser.switchToWindow(windowVariable[1]);
  }
  async clickOnCartIcon() {
    await this.$cartIcon().click();
  }
}

export const landingPage = new LandingPage();
