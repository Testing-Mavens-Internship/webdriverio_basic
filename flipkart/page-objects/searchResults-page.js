import Common from "./Common.js";

class SearchResultsPage extends Common {
  constructor() {
    super();
    this.$departureCityName = () =>
      $(
        '//div[text()="From"]/..//div[@class="_3qBKP_ _1Jqgld"]/input[contains(@value,"Kochi")]'
      );
    this.$arrivalCityName = (city) =>
      $(
        `//div[text()="To"]/..//div[@class="_3qBKP_ _1Jqgld"]/input[contains(@value,"${city}")]`
      );
    this.$flight = () => $('//div[text()="SpiceJet"]');
    this.$bookFlight = () =>
      $(
        '//span[text()="SpiceJet"]/ancestor::div[@class="_2IAB80"]/following-sibling::div[@class="_-5f1wK"]'
      );
    this.$loginHeader = () => $('//span[text()="Login"]');
  }
/**
 * Methos the book the flight
 */
  async chooseFlight() {
    await this.$flight().click();
    await this.$bookFlight().click();
    await searchResultsPage.$loginHeader().waitForDisplayed({ timeout: 6000 });
  }
}

export const searchResultsPage = new SearchResultsPage();
