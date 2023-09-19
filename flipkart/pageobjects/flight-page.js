import Common from "./common.js";

class Flight extends Common {
  constructor() {
    /**elements */
    super();
    this.$flightHeader = () => $('//div[@class="lAXZRO"]');
    this.$radio = (value) => $(`//div[contains(text(),"${value}")]//../..`);
    this.$radioCheck = (value) =>
      $(
        `//div[contains(text(),"${value}")]//ancestor::label[@class="_2Fn-Ln _3L7Pww"]`
      );
    this.$input = (value) =>
      $(`//label[contains(text(),"${value}")]//../input`);
    this.$fromInputSelect = (value) =>
      $(`//div[@class="_2B0KQx" and text()="${value}"]`);
    this.$toInputSelect = (value) =>
      $(`(//div[@class="_2B0KQx" and text()="${value}"])[2]`);
    this.$date = (month, day) =>
      $(
        `//div[contains(text(),"${month}")]//ancestor::thead//following-sibling::tbody//tr/td/div/button[contains(text(),"${day}")]`
      );
    this.$noOfTravellers = (value) =>
      $(
        `//div[contains(text(),"${value}")]/..//following-sibling::div[@class="_1_YMe_"]/div/div/button[@class="_2KpZ6l _34K0qG _37Ieie"]`
      );
    this.$doneButton = (value) => $('//button[text()="Done"]');
    this.$submitButton = () => $('//button[@class="_2KpZ6l _1QYQF8 _3dESVI"]');
    this.$$price = () => $$('//div[@class="_3uUoiD"]');
    this.$sortPrice = () => $('//span[@class="_3W-vry"]');
    this.$time = (value) =>
      $(`//div[@class="vUK3-L"]//div[contains(text(),"${value}")]`);
    this.$airlines = (value) => $(`//div[contains(text(),"${value}")]`);
    this.$$bookButtonNum = () => $$('//div[@class="_-5f1wK"]');
    this.$flightDetails = (i) => $(`(//span[@class="KO_IQZ"])[${i}]`);
    this.$outputFlightDetails = (value) =>
      $(`//div[@class="jrTOn5"]//span[contains(text(),"${value}")]`);
    this.$$fromTime = (time1) => $$(`//span[@class="_2l73WS _1ljBda"]`);
    this.$$toTime = (time2) => $$(`//span[@class="_43sblo _1ljBda"]`);
    this.$$airlineName = (value) => $$(`//span[text()="${value}"]`);
    this.$book = () => $('(//div[@class="_-5f1wK"])[1]');
    this.$fromToHeader = () => $('//div[@class="_3Jcym_"]');
  }

  /**
   *
   * @param {string} fromDestination
   * @param {string} toDestination
   * @param {string} month
   * @param {number} day
   * @param {number} adultNumber
   */
  async fillDetails(fromDestination, toDestination, month, day, adultNumber) {
    await this.$input("From").setValue(fromDestination);
    await this.$fromInputSelect(fromDestination).click();
    await this.$input("To").setValue(toDestination);
    await this.$toInputSelect(toDestination).click();
    await this.$input("Depart").click();
    await this.$date(month, day).click();
    await this.$input("Travellers").click();
    for (let adult = 1; adult < adultNumber; adult++)
      await this.$noOfTravellers("Adult").click();
    await this.$noOfTravellers("Child").click();
    await this.$doneButton().click();
    await this.$submitButton().click();
    await this.$fromToHeader().waitForDisplayed({timeout:2000});
  }
  /**method to sort the prices */
  async sortPrice() {
    await this.$sortPrice().click();
    let priceArray = await this.$$price().map((item) => item.getText());
    let sortArray;
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
  /**Meth0d t0 c0unt the number 0f flights */
  async bookCount() {
    let bookButton = [];
    bookButton = await this.$$bookButtonNum().map((item) => item.getText());
    let count = bookButton.length;
    return count;
  }
  /**
   * Method to filter the departure timing
   * @param {string} timing
   * @returns
   */
  async flightTiming(timing) {
    if (timing == "Early Morning") {
      await this.$time("Early Morning").scrollIntoView({ block: "start" });
      await this.$time("Early Morning").click();
      let time = await this.$$fromTime().map((item) => item.getText());
      for (let i = 0; i <= time.length; i++) {
        if (time[i] >= "00:00" && time[i] <= "06:00") {
          return true;
        } else {
          return false;
        }
      }
    }
    if (timing == "Morning") {
      await this.$time("Morning").scrollIntoView({ block: "start" });
      await this.$time("Morning").click();
      let time = await this.$$fromTime().map((item) => item.getText());
      for (let i = 0; i <= time.length; i++) {
        if (time[i] >= "06:00" && time[i] <= "12:00") {
          return true;
        } else {
          return false;
        }
      }
      return true;
    }
    if (timing == "Noon") {
      await this.$time("Noon").scrollIntoView({ block: "start" });
      await this.$time("Noon").click();
      let time = await this.$$fromTime().map((item) => item.getText());
      for (let i = 0; i <= time.length; i++) {
        if (time[i] >= "12:00" && time[i] <= "18:00") {
          return true;
        } else {
          return false;
        }
      }
      return true;
    }
    if (timing == "Night") {
      await this.$time("Night").scrollIntoView({ block: "start" });
      await this.$time("Night").click();
      let time = await this.$$fromTime().map((item) => item.getText());
      for (let i = 0; i <= time.length; i++) {
        if (time[i] >= "18:00" && time[i] <= "24:00") {
          return true;
        } else {
          return false;
        }
      }
      return true;
    }
  }
}
export const flightPage = new Flight();
