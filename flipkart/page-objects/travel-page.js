import Common from "./Common.js";
let departurecity = "Kochi";
let arrivalCity = "Mumbai";
let month = "October 2023";
let day = "27";
class TravelPage extends Common {
  constructor() {
    super();
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
      $(
        '//div[text()="Adults"]/../following-sibling::div[@class="_1_YMe_"]//div[@class="VjWsXZ"]/button[@class="_2KpZ6l _34K0qG _37Ieie"]'
      );
    this.$children = () =>
      $(
        '//div[text()="Children"]/../following-sibling::div[@class="_1_YMe_"]//div[@class="VjWsXZ"]/following-sibling::div/button[@class="_2KpZ6l _34K0qG _37Ieie"]'
      );
    this.$economy = () =>
      $('//div[text()="Economy"]/../../div[@class="_1XFPmK"]');
    this.$searchButton = () => $('//span[text()="SEARCH"]/..');
  }
/**
 * Method to search for flights
 */
  async searchForFlight() {
    await this.$radioButton().click();
    await this.$fromcity().setValue(departurecity);
    await this.$departurecity(departurecity).click();
    await this.$toCity().setValue(arrivalCity);
    await this.$arrivalCity(arrivalCity).click();
    await this.$departureDate().click();
    await this.$date(month, day).click();
    await this.$travelCount().click();
    await this.$adults().click();
    await this.$adults().click();
    await this.$children().click();
    await this.$children().click();
    await this.$economy().click();
    await this.$searchButton().click();
    await travelPage
      .$cityDeparture(departurecity)
      .waitForDisplayed({ timeout: 2000 });
  }
}

export const travelPage = new TravelPage();
