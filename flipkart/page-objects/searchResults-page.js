import Common from "./Common.js";
let priceArray = [];
let sortArray = [];
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
    this.$flight = () => $('//div[text()="Air India"]');
    this.$bookFlight = () =>
      $(
        '//span[text()="SpiceJet"]/ancestor::div[@class="_2IAB80"]/following-sibling::div[@class="_-5f1wK"]'
      );
    this.$bookFlight1 = () => $('(//div[@class="_-5f1wK"])[1]');
    this.$loginHeader = () => $('//span[text()="Login"]');
    this.$$flightDetails = () => $$('//span[@class="KO_IQZ"]');
    this.$flightDetail = (index) => $(`//span[@class="KO_IQZ"][${index}]`);
    this.$validationCity = (name) =>
      $(`//div[@class="_3K77nP"]/span[text()="${name}"]`);
    this.$$ticketPrice = () => $$('//div[@class="_3uUoiD"]');
    this.$sortButton = () => $('//span[text()="PRICE"]');
  }
  /**
   * Method to validate to and from city in search results page
   * @param {String} index
   * @param {String} name
   */
  async flightValidation(index, name) {
    await this.$flightDetail(index).click();
  }
  /**
   * Method to sort the search result in descending order
   * @returns boolean
   */
  async sortPrice() {
    await this.$flight().click();
    await this.$sortButton().click();
    priceArray = await this.$$ticketPrice().map((item) => item.getText());
    sortArray = await priceArray
      .map((item) => item.replace(/[₹,]/g, ""))
      .map(Number);
    for (let i = 0; i < sortArray.length; i++) {
      if (sortArray[i] >= sortArray[i + 1]) {
        return true;
      } else {
        return false;
      }
    }
  }
  /**
   * Method the book the flight
   */
  async chooseFlight() {
    await this.$bookFlight1().click();
    await searchResultsPage.$loginHeader().waitForDisplayed({ timeout: 6000 });
  }
}

export const searchResultsPage = new SearchResultsPage();
