import Common from "./common.js";

class TravelPage extends Common {
  constructor() {
    super();
    this.$from = () =>
      $(`//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2vegSu _2mFmU7"]`);
    this.$fromOption = (place) =>
      $(`(//div[@class="_3uA4ax"]//span[text()="${place}"])[1]`);
    this.$to = () =>
      $(`//input[@class="_1w3ZZo _1YBGQV _2EjOJB lZd1T6 _2dqBfU _2mFmU7"]`);
    this.$date = (month, day) =>
      $(
        `//div[contains(text(),"${month}")]/ancestor::thead/following-sibling::tbody//button[contains(text(),"${day}")]`
      );
    this.$travellers = (value) =>
      $(
        `//div[@class="_1Di8FC"]//div[@class="_2zLOdI"][text()="${value}"]/../following-sibling::div//button[@class="_2KpZ6l _34K0qG _37Ieie"]`
      );
    this.$class = () =>
      $(`//div[@class="_2jIO64 _1NhOqr"]//div[text()="Premium Economy"]`);
    this.$done = () => $(`//button[text()="Done"]`);
    this.$search = () => $(`//button[@class="_2KpZ6l _1QYQF8 _3dESVI"]`);
    this.$validate = (time, place) =>
      $(
        `//div[text()="${time}"]/..//div[@class="_1OSdiW"]//input[contains(@value,"${place}")]`
      );
    this.$flightTime = (item) => $(`//div[text()="${item}"]`);
    this.$morning = () =>
      $(`//input[@class="_30VH1S"]/..//div[text()="Morning"]`);
    this.$book = () => $(`(//div[@class="ZiOg5a"][text()="Book"])[1]`);
  }
  /**
   * Method to enter from, to, date, class, and number of travellers
   * @param {string} place1
   * @param {string} place2
   * @param {string} month
   * @param {string} date
   */
  async enterLoaction(place1, place2, month, date) {
    await this.$from().setValue("cochin");
    await this.$fromOption(place1).click();
    await this.$to().setValue("dubai");
    await this.$fromOption(place2).click();
    await this.$date(month, date).click();
    await this.$travellers("Adults").doubleClick();
    await this.$travellers("Children").doubleClick();
    await this.$class().click();
    await this.$done().click();
    await this.$search().click();
  }
  /**
   * Method to select flight time
   */
  async clickOnFlightTime() {
    await this.$flightTime("Morning").click();
  }
  /**
   * Method to click on book button
   */
  async clickOnBook() {
    await this.$book().click();
  }
}
export const travelPage = new TravelPage();
