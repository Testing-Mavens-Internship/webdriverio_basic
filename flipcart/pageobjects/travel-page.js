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
    this.$night = () => $(`//input[@class="_30VH1S"]/..//div[text()="Night"]`);
    this.$book = () => $(`(//div[text()="Book"])[1]`);
    this.$$price = () => $$(`//div[@class="_3uUoiD"]`);
    this.$sortPrice = () => $(`//span[text()="PRICE"]`);
    this.$flightDetails = (index) =>
      $(`(//span[text()="Flight Details"])[${index}]`);
    this.$fromValidate = (place) =>
      $(`//span[@class="_2KEcM_" and contains(text(),"${place}")]`);
    this.$$records = () => $$(`//div[@class="_367J6x"]`);
    this.$flightDetail = (place, index) =>
      $(
        `(//span[text()="Flight Details"]/ancestor::div//div//span[text()="${place}"])[${index}]`
      );
  }
  /**
   * Method to enter from, to, date, class, and number of travellers
   * @param {string} arrival
   * @param {string} departure
   * @param {string} month
   * @param {string} date
   */
  async enterLoaction(departure, arrival, month, date, adults, children) {
    await this.$from().setValue(departure);
    await this.$fromOption(departure).click();
    await this.$to().setValue(arrival);
    await this.$fromOption(arrival).click();
    await this.$date(month, date).click();
    await this.$travellers(adults).doubleClick();
    await this.$travellers(children).doubleClick();
    await this.$class().click();
    await this.$done().click();
    await this.$search().click();
  }
  /**
   * Method to select flight time
   */
  async clickOnFlightTime(time) {
    await this.$flightTime(time).click();
  }
  /**
   * Method to verify sorting of prices
   * @returns
   */
  async sortPrice() {
    await this.$sortPrice().click();
    let priceArray = await this.$$price().map((item) => item.getText());
    let sortArray = [];
    for (let item of priceArray) {
      sortArray.push(parseInt(item.replace(/[₹,]/g, "")));
    }
    console.log(sortArray);
    for (let i = 0; i < sortArray.length - 1; i++) {
      if (sortArray[i] >= sortArray[i + 1]) {
        return true;
      } else {
        return false;
      }
    }
  }
  /**
   * Method to get count
   * @returns
   */
  async getCount() {
    let priceArray = await this.$$price().map((item) => item.getText());
    let count = priceArray.length;
    return count;
  }
  /**
   *
   * @param {number} index
   */
  async verifyFlightDetails(index) {
    await this.$flightDetails(index).click();
  }
  /**
   * Method to click on book button
   */
  async clickOnBook() {
    await this.$book().scrollIntoView({ block: "center" });
    await this.$book().click();
    await this.$login().waitForDisplayed({ timeout: "3000" });
  }
}
export const travelPage = new TravelPage();