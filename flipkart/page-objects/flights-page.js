import Common from "./common.js";
class FlightsPage extends Common {
  constructor() {
    super();
    this.$departureTime = (section) =>
      $(`//section[@class="_2t_2yL"]//div[text()="${section}"]`);
    this.$$times = () => $$(`//span[@class="_2l73WS _1ljBda"]`);
    this.$fromAndTo = (value) =>
      $(`//div[@class="_3qBKP_ _1Jqgld"]//input[@tabindex="${value}"]`);
    this.$sort = () => $(`//span[text()="PRICE"]`);
    this.$$prices = () => $$(`//div[@class="_3uUoiD"]`);
    this.$bookButton = () => $(`(//div[@class="_-5f1wK"])[1]`);
    this.$loginPopUP = () => $(`//span[text()="Login"]`);
    this.$flightDetails = (index) =>
      $(`(//*[text()="Flight Details"])[${index}]`);
    this.$outputFlightDetails = (place) =>
      $(`//span[@class="_3eJLu6" and contains(text(),"${place}")]`);
    this.$$flightsCount = () => $$(`//div[@class="_-5f1wK"]`);
  }
  /**
   * Method to get count of flights displayed
   */
  async getCount() {
    let bookButtons = [];
    bookButtons = await this.$$flightsCount().map((item) => item.getText());
    let count = bookButtons.length;
    return count;
  }
  /**
   * Method to select departure time
   * @param {string} departureTime
   */
  async selectDepartureTime(departureTime) {
    await this.$departureTime(departureTime).scrollIntoView({
      block: "center",
    });
    await this.$departureTime(departureTime).click();
  }
  /**
   *Method to veridy displayed departure time
   @param {string} time1
   @param {string} time2
   */
  async verifyDepartureTime(time1, time2) {
    let flag;
    let timesArray = [];
    timesArray = await this.$$times().map((item) => item.getText());
    console.log(timesArray);
    for (let item of timesArray) {
      if (item >= time1 && item <= time2) {
        flag = true;
      } else {
        flag = false;
      }
    }
    return flag;
  }

  /**
   * Method to verify sort option
   */
  async verifySort() {
    let flag;
    await this.$sort().click();
    let priceArray = [];
    let price = [];
    for (let elem of await this.$$prices()) {
      priceArray.push(await elem.getText());
    }
    for (let item of priceArray) {
      price.push(parseInt(item.replace(/[₹,]/g, "")));
    }
    console.log(price);
    for (let i = 0; i < price.length - 1; i++) {
      if (price[i] >= price[i + 1]) {
        flag = true;
      } else {
        flag = false;
      }
    }
    return flag;
  }
  /**
   * @param {number} i 
   * Method to click flight details
   */
  async clickOnFlightDetails(i){
    await this.$flightDetails(i).click();
  }
  /**
   * Method to click book option
   */
  async clickOnBook() {
    await this.$bookButton().click();
    await this.$loginPopUP().waitForDisplayed({ timeout: 3000 });
  }
}
export const flightsPage = new FlightsPage();
