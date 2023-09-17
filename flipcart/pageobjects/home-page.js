import Common from "./common.js";

class HomePage extends Common {
  constructor() {
    super();
    this.$closeLogin = () => $(`//button[@class="_2KpZ6l _2doB4z"]`);
    this.$travelButton = () => $(`//img[@alt="Travel"]`);
    this.$travel = () => $(`//div[text()="Travel"]`);
    this.$from = () =>
      $(`//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2vegSu _2mFmU7"]`);
  }
  /**
   * Method to click on close button
   */
  async clickOnClose() {
    await this.$closeLogin().click();
  }
  /**
   * Method to click on travel option and navigat to travel page
   */
  async clickOnTravel() {
    await this.$travelButton().click();
  }
}
export const homePage = new HomePage();
