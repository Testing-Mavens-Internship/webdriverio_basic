import Common from "./common.js";

class LandingPage extends Common {
  constructor() {
    super();
    this.$connectUs = () => $('(//a[@href="contact.html"])[2]');
  }
  /**
   * Method to click on Connect us button
   */
  async clickOnConnectUs() {
    await this.$connectUs().click();
  }
}
export const landingPage = new LandingPage();
