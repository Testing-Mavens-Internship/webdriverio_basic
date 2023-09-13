import Common from "./common-page.js";
class Complete extends Common {
  constructor() {
    super();
    this.$backToHome = () => $('//button[@id ="back-to-products"]');
  }
  /**
   * Click on the back to home
   */
  async clickOnBackToHome() {
    await this.$backToHome().click();
  }
}
export const complete = new Complete();
