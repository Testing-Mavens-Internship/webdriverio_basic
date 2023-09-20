import Common from "./common.js";
class TravelPage extends Common {
  constructor() {
    super();
    this.$from = () =>
      $('//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2vegSu _2mFmU7"]');
    this.$departure = (city) =>
      $(`//div[@class="_24hoQ2 _1EzOls"]/div//span[text()="${city}"]`);
    this.$to = () =>
      $('//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2dqBfU _2mFmU7"]');
    this.$arrival = (city) =>
      $(
        `//div[@class="_1fa_Yn HQlQNF nAiqQV _18Y7Fu"]/div//span[text()="${city}"]`
      );
    this.$departOn = () => $('//input[@name="0-datefrom"]');
    this.$date = (month, day) =>
      $(
        `//div[text()="${month}"]/ancestor::table[@class="aSgzfL"]//td//button[text()="${day}"]`
      );
    this.$totalCount = () => $('//input[@name="0-travellerclasscount"]');
    this.$adultsChildren = (category) =>
      $(`(//div[text()="${category}"]/../following-sibling::div//button)[2]`);
    this.$cabinClass = (cabin) =>
      $(`//div[text()="${cabin}"]/../../div[@class="_1XFPmK"]`);
    this.$searchButton = () => $('//span[text()="SEARCH"]/..');
  }
  /**
   * Method to fill details of flight
   * @param {string} from
   * @param {string} to
   * @param {string} month
   * @param {string} day
   * @param {string} noOfAdults
   * @param {string} noOfChild
   * @param {string} cabin
   */
  async searchFlight(from, to, month, day, noOfAdults, noOfChild, cabin, verifyName) {
    await this.$from().setValue(from);
    await this.$departure(from).click();
    await this.$to().setValue(to);
    await this.$arrival(to).click();
    await this.$departOn().click();
    await this.$date(month, day).click();
    await this.$totalCount().click();
    for (let i = 0; i < noOfAdults - 1; i++) {
      await this.$adultsChildren("Adults").click();
    }
    for (let i = 0; i < noOfChild; i++) {
      await this.$adultsChildren("Children").click();
    }
    await this.$cabinClass(cabin).click();
    await this.$searchButton().click();
    await verifyName.waitForDisplayed({ timeout: 6000 });
    await verifyName.waitForDisplayed({ timeout: 6000 });
  }
}

export const travelPage = new TravelPage();
