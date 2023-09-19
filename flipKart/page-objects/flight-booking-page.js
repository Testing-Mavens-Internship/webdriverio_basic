import data from "../testdata/data.json" assert { type: "json" };

class BookingPage {
  constructor() {
    this.$details = (tabindex) => $(`//input[@tabindex="${tabindex}"]`);
    this.$places = (place) => $(`//span[text()="${place}"]`);
    this.$ticketClass = (travelClass) =>
      $(`//div[@class="_2jIO64 _1NhOqr"]//div[text()="${travelClass}"]`);
    this.$doneButton = () => $(`//button[text()="Done"]`);
    this.$searchButton = () => $(`//span[text()="SEARCH"]`);
    this.$passengerCount = (category) =>
      $(
        `//div[text()="${category}"]/..//..//button[@class="_2KpZ6l _34K0qG _37Ieie"]`
      );
    this.$date = (month, day) =>
      $(
        `//div[contains(text(),"${month}")]/..//..//..//..//button[text()="${day}"]`
      );
    this.$verifyPlaceaHeader = (value) =>
      $(`//span[@class="_271Zih" and text()="${value}"]`);
  }

  /**
   * Method to search for the flight
   * @param {string} source
   * @param {string} destination
   * @param {string} month
   * @param {number} day
   * @param {string} categoryAdult
   * @param {string} categoryChildren
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
    await this.$verifyPlaceaHeader(data.from).waitForDisplayed(10000);
  }
}

export const bookingDetails = new BookingPage();
