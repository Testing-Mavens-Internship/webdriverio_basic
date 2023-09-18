import Common from "./common.js";
import { flightsPage } from "./flights-page.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$travel = () => $(`//*[text()="Travel"]`);
    this.$date = (month, day) =>
      $(
        `//div[contains(text(),"${month}")]/..//..//..//..//button[text()="${day}"]`
      );
    this.$details = (tabindex) => $(`//input[@tabindex="${tabindex}"]`);
    this.$places = (place) => $(`//span[text()="${place}"]`);
    this.$passengerCount = (category) =>
      $(
        `//div[text()="${category}"]/..//..//button[@class="_2KpZ6l _34K0qG _37Ieie"]`
      );
    this.$ticketClass = (travelClass) =>
      $(`//div[@class="_2jIO64 _1NhOqr"]//div[text()="${travelClass}"]`);
    this.$doneButton = () => $(`//button[text()="Done"]`);
    this.$searchButton = () => $(`//span[text()="SEARCH"]`);
  }
  /**
   * Method to click travel option
   */
  async clickOnTravel() {
    await this.$travel().click();
    await this.$details("01").waitForDisplayed({ timeout: 10000 });
  }
  /**
   * Method to enter details and search
   * @param {string} source
   * @param {string} destination
   * @param {string} categoryAdult
   * @param {string} categoryChildren
   * @param {string} day
   * @param {string} month
   * @param {string} ticketClass
   */
  async searchFlights(
    source,
    destination,
    month,
    day,
    categoryAdult,
    categoryChildren,
    ticketClass
  ) {
    await this.$details("01").setValue(source);
    await this.$places(source).click();
    await this.$details("02").setValue(destination);
    await this.$places(destination).click();
    await this.$details("03").click();
    await this.$date(month, day).click();
    await this.$details("05").click();
    await this.$passengerCount(categoryAdult).doubleClick();
    await this.$passengerCount(categoryChildren).doubleClick();
    await this.$ticketClass(ticketClass).click();
    await this.$doneButton().click();
    await this.$searchButton().click();
    await flightsPage.$bookButton().waitForDisplayed({ timeout: 10000 });
  }
}
export const homePage = new HomePage();
