import Common from "./Common.js";

class TravelPage extends Common {
  constructor() {
    super();
    this.$travelHeader = () => $('//div[text()="Travel"]');
    this.$radioButton = () =>
      $('//label[@for="ONE_WAY"]//div[@class="_1XFPmK"]');
    this.$fromcity = () =>
      $('//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2vegSu _2mFmU7"]');
    this.$departurecity = (city) =>
      $(`//div[@class="_24hoQ2 _1EzOls"]/div//span[text()="${city}"]`);
    this.$toCity = () =>
      $('//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2dqBfU _2mFmU7"]');
    this.$arrivalCity = (city) =>
      $(
        `//div[@class="_1fa_Yn HQlQNF nAiqQV _18Y7Fu"]/div//span[text()="${city}"]`
      );
    this.$departureDate = () => $('//input[@name="0-datefrom"]');
    this.$date = (month, day) =>
      $(
        `//div[text()="${month}"]/ancestor::table[@class="aSgzfL"]//td//button[text()="${day}"]`
      );
    this.$travelCount = () => $('//input[@name="0-travellerclasscount"]');
    this.$adults = () =>
      $('(//div[text()="Adults"]/../following-sibling::div//button)[2]');
    this.$children = () =>
      $('(//div[text()="Children"]/../following-sibling::div//button)[2]');
    this.$economy = () =>
      $('//div[text()="Economy"]/../../div[@class="_1XFPmK"]');
    this.$searchButton = () => $('//span[text()="SEARCH"]/..');
  }
  /**
   * Method to search for flight
   * @param {String} departureCity
   * @param {String} arrivalCity
   * @param {String} month
   * @param {String} day
   * @param {String} adults
   * @param {String} children
   */
  async searchForFlight(
    departureCity,
    arrivalCity,
    month,
    day,
    adults,
    children
  ) {
    await this.$radioButton().click();
    await this.$fromcity().setValue(departureCity);
    await this.$departurecity(departureCity).click();
    await this.$toCity().setValue(arrivalCity);
    await this.$arrivalCity(arrivalCity).click();
    await this.$departureDate().click();
    await this.$date(month, day).click();
    await this.$travelCount().click();
    for (let i = 0; i < adults - 1; i++) {
      await this.$adults().click();
    }
    for (let i = 0; i < children; i++) {
      await this.$children().click();
    }
    await this.$economy().click();
    await this.$searchButton().click();
    await travelPage
      .$cityDeparture(departureCity)
      .waitForDisplayed({ timeout: 4000 });
    await travelPage
      .$cityArrival(arrivalCity)
      .waitForDisplayed({ timeout: 4000 });
  }
}

export const travelPage = new TravelPage();
