import Common from "./common.js";
class FlightPage extends Common {
  constructor() {
    super();
    this.$verifyName = (city) =>
      $(`//div[@class="_3Jcym_"]//span[text()="${city}"]`);
    this.$bookFlight = () => $('(//div[@class="_-5f1wK"])[1]');
    this.$loginHeader = () => $('//span[text()="Login"]');
    this.$filter = (filter) => $(`//div[text()="${filter}"]`);
    this.$$getPrice = () => $$('//div[@class="_3uUoiD"]');
    this.$$flightDetails = () => $$('//span[@class="KO_IQZ"]');
    this.$flightDetail = (index) => $(`//span[@class="KO_IQZ"][${index}]`);
    this.$validationCity = (name) =>
      $(`//div[@class="_3K77nP"]/span[text()="${name}"]`);
  }
  /**
   * Method to filter flights and sort price in ascending order
   * @param {string} filter
   * @returns boolean
   */
  async filterSort(filter) {
    await this.$filter(filter).click();
    let price = [];
    price = await this.$$getPrice().map((item) => item.getText());
    price = await price.map((item) => item.replace(/[₹,]/g, "")).map(Number);
    for (let i = 0; i < price.length; i++) {
      if (price[i] <= price[i + 1]) {
        return true;
      } else {
        return false;
      }
    }
  }
  /**
   * Method to validate flight details
   * @param {string} index
   */
  async flightValidation(index) {
    await this.$flightDetail(index).click();
  }
  /**
   * Method to book flight
   */
  async bookFlight() {
    await this.$bookFlight().click();
    await this.$loginHeader().waitForDisplayed({ timeout: 6000 });
  }
}
export const flightPage = new FlightPage();
