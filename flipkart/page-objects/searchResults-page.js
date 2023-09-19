import Common from "./Common.js";
import time from "gettime";
let priceArray = [];
let sortArray = [];
let timeArray = [];
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
    this.$flightTiming = (time) => $(`//div[text()="${time}"]`);
    this.$$flightTIme = () => $$('//span[@class="_2l73WS _1ljBda"]');
  }
  /**
   * Methos to validate timing if flight
   * @param {Strin} timing 
   * @returns boolean 
   */
  async flightTiming(timing) {
    if (timing == "Early Morning") {
      this.$flightTiming(timing).click();
      timeArray = await this.$$flightTIme().map((item) => item.getText());
      for (let i = 0; i < this.$$flightTIme().length; i++) {
        if (item > "00:00" && item < "6:00") {
          return true;
        } else {
          return false;
        }
      }
    }
    if (timing == "Morning") {
      await this.$flightTiming(timing).click();
      timeArray = await this.$$flightTIme().map((item) => item.getText());

      for (let item of timeArray) {
        if ("06:00" < item && item < "12:00") {
          return true;
        } else {
          return false;
        }
      }
    }
    if (timing == "Afternoon") {
      await this.$flightTiming(timing).click();
      timeArray = await this.$$flightTIme().map((item) => item.getText());
      for (let item of timeArray) {
        if ("06:00" < item && item < "18:00") {
          return true;
        } else {
          return false;
        }
      }
    }
    if (timing == "Night") {
      this.$flightTiming(timing).click();
      timeArray = await this.$$flightTIme().map((item) => item.getText());
      for (let item of timeArray) {
        if ("18:00" < item && item < "24:00") {
          return true;
        } else {
          return false;
        }
      }
    }
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
