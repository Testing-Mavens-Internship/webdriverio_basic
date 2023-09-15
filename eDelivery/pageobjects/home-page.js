import Common from "./common.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$location = () =>
      $('//div[@class="pac-item"][1]//span[@class="pac-matched"]');
    this.$locatioField = () => $('//input[@id="searchlocation"]');
    this.$outlet = (item) =>
      $(`//div[@class="filter_foods"]/img[@alt="${item}"]`);
    this.$recommended = () => $('//h2[text()="Recommended"]');
  }
/**
 * Method to enter location
 * @param {string} location 
 */
  async selectLoaction(location) {
    await this.$locatioField().setValue(location);
    await this.$location().waitForDisplayed({ timeout: 7000 });
    await this.$location().click();
  }
  /**
   * Method to navigate to outlet page
   */
  async clickOnOutlet() {
    await this.$outlet("MAX FASHIONS").waitForClickable({ timeout: 7000 });
    await this.$outlet("MAX FASHIONS").click();
  }
}
export const homePage = new HomePage();
