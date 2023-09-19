import Common from "./common.js";
import night from "getTime";
class TravelPage extends Common {
  constructor() {
    super();
    this.$travel = () => $(`//div[text()="Travel"]`);
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
    this.$night = (time) =>
      $(`//input[@class="_30VH1S"]/..//div[text()="${time}"]`);
    this.$book = () => $(`(//div[text()="Book"])[1]`);
    this.$$price = () => $$(`//div[@class="_3uUoiD"]`);
    this.$sortPrice = () => $(`//span[text()="PRICE"]`);
    this.$flightDetails = (index) =>$(`(//span[text()="Flight Details"])[${index}]`);
    this.$fromValidate = (place) =>
      $(`//span[@class="_2KEcM_" and contains(text(),"${place}")]`);
    this.$$records = () => $$(`//div[@class="_367J6x"]`);
    this.$flightDetail = (place, index) =>
      $(
        `(//span[text()="Flight Details"]/ancestor::div//div//span[text()="${place}"])[${index}]`
      );
    this.$$departTime = () => $$(`//span[@class="_2l73WS _1ljBda"]`);
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
    await this.$travel().waitForDisplayed({ timeout: 5000 });
  }
  /**
   * Method to click on departure time and verify the departure time
   * @returns booelan
   */
  async departTimeFilter(time) {
    await this.$flightTime(time).click();
    let depart = await this.$$departTime().map((item) => item.getText());
    let flag;
    let length = depart.length;
    if (time == "Morning") {
      for (let i = 0; i < length; i++) {
        if (depart[i] >= "06:00" && depart[i] <= "12:00") {
          flag = true;
        } else {
          flag = false;
        }
      }
      return flag;
    }
    if (time == "Early Morning") {
      for (let i = 0; i < length; i++) {
        if (depart[i] >= "00:00" && depart[i] <= "06:00") {
          flag = true;
        } else {
          flag = false;
        }
      }
      return flag;
    }
    if (time == "Afternoon") {
      for (let i = 0; i < length; i++) {
        if (depart[i] >= "12:00" && depart[i] <= "18:00") {
          flag = true;
        } else {
          flag = false;
        }
      }
      return flag;
    }
    if (time == "Night") {
      for (let i = 0; i < length; i++) {
        if (
          (depart[i] >= "18:00" && depart[i] <= "23:59") ||
          depart[i] == "00:00"
        ) {
          flag = true;
        } else {
          flag = false;
        }
      }
      return flag;
    }
  }
  /**
   * Method to verify sorting of prices
   * @returns boolean
   */
  async sortPrice() {
    await this.$sortPrice().click();
    let priceArray = await this.$$price().map((item) => item.getText());
    let sortArray = [];
    for (let item of priceArray) {
      sortArray.push(parseInt(item.replace(/[₹,]/g, "")));
    }
    for (let i = 0; i < sortArray.length - 1; i++) {
      if (sortArray[i] >= sortArray[i + 1]) {
        return true;
      } else {
        return false;
      }
    }
  }
  /**
   * Method to get count of number of flights
   * @returns number
   */
  async getCount() {
    let priceArray = await this.$$price().map((item) => item.getText());
    let count = priceArray.length;
    return count;
  }
  /**
   *Method to verify the from and to location
   * @param {number} index
   */
  async verifyFlightDetails(index) {
    await this.$flightDetails(index).click();
    await this.$book().waitForClickable({ timeout: "3000" });
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
