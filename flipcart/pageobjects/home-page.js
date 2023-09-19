import Common from "./common.js";

class HomePage extends Common {
  constructor() {
    super();
    this.$closeLogin = () => $(`//*[text()="✕"]`);
    this.$travelButton = () => $(`//img[@alt="Travel"]`);
    this.$from = () =>
      $(`//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2vegSu _2mFmU7"]`);
  }
  /**
   * Method to click on close button
   */
  async clickOnClose() {
    await this.$closeLogin().click();
    await this.$travelButton().waitForDisplayed({ timeout: 5000 });
  }
  /**
   * Method to click on travel option and navigat to travel page
   */
  async clickOnTravel(travel) {
    await this.$travelButton().click();
    await travel.waitForDisplayed({ timeout: 5000 });
  }
}
export const homePage = new HomePage();
