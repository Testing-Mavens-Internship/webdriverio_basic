import Common from "./common.js";
class FlightPage extends Common {
  constructor() {
    super();
    this.$cityName = (city) => $(`//div[text()="From"]/..//div[@class="_3qBKP_ _1Jqgld"]/input[contains(@value,"${city}")]`);
    this.$airLine = (flight) => $(`//div[text()="${flight}"]`);
    this.$bookFlight = () => $('//span[text()="SpiceJet"]/ancestor::div[@class="_2IAB80"]/following-sibling::div[@class="_-5f1wK"]');
    this.$loginHeader = () => $('//span[text()="Login"]');
  }
  /**
   * Method to book the flight
   */
  async chooseFlight(flight) {
    await this.$airLine(flight).click();
    await this.$bookFlight().click();
    await this.$loginHeader().waitForDisplayed({ timeout: 6000 });
  }
}

export const flightPage = new FlightPage();