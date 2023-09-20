import Common from "./common.js";

class FlightPage extends Common {
  constructor() {
    super();
    this.$$flightPrices = () => $$(`//div[@class="_3Byyvw"]`); // flight prices
    this.$$flightDropDown = () => $$(`//div[@class="_2o0hgL"]`); // more flight dropdown
    // this.$flightPriceValidation=(price)=>$(`//div[@class="_3Byyvw"]`)
    this.$descending = () => $(`//span[@class="_3W-vry"][text()="PRICE"]`); //sort icon
    this.$$morningTime = () => $$(`//span[@class="_3p2vNo _2keVvy"]`); //Morning time
    this.$bookButton = () =>
      $(
        `(//div[text()="₹3,18,829"]/../following-sibling::div[@class="ZiOg5a"])[1]`
      ); //book button
  }
  /**
   * function for click on more flights dropdown
   * @returns boolean
   */
  async clickOnDropDown() {
    let flightDropDowns = await this.$$flightDropDown();
    if (!flightDropDowns || flightDropDowns.length === 0) {
      console.log("No flight dropdowns found.");
      return;
    }
    let count = flightDropDowns.length;
    console.log(count);
    for (let i = 0; i < count; i++) {
      await flightDropDowns[i].click();
    }
  }
  /**
   * function for getting the price of tickets and click on sort
   * @returns boolean
   */
  async sort() {
    await this.clickOnDropDown();
    await this.$descending().waitForClickable();
    await this.$descending().click();
    let prices = await this.$$flightPrices().map((item) => item.getText());
    let price = prices.map((item) => parseInt(item.replace(/[\₹,]/g, ""), 10));
    return price;
    // console.log(price);
  }
  /**
   * function for checking flight listed as per the above sort
   * @returns boolean
   */
  async flightSort() {
    let price = await this.sort();
    let flag = false;
    for (let k = 0; k < price.length - 1; k++) {
      if (price[k] >= price[k + 1]) {
        console.log(price[k]);
        console.log(price[k + 1]);
        flag = true;
      } else {
        flag = false;
      }
    }
    // let sortPrice = price.sort((a,b)=>b-a)
    return flag;
  }
  /**
   * function for clicking the departure checkbox (Morning) && clicking on Airlines
   * @param {String} time
   */
  async clickOnCheckBox(time) {
    await this.$checkBox(time).waitForClickable();
    await this.$checkBox(time).click();
    await browser.pause(3000);
  }
  /**
   * function for checking the flight times according to the checkbox clicked on the above function
   * @param {String} start
   * @param {String} end
   * @returns boolean
   */
  async timeRange(start, end) {
    let MorningTime = await this.$$morningTime().map((item) => item.getText());
    const startTime = start;
    const endTime = end;
    let flag;
    MorningTime.filter((time) => {
      const currentTime = new Date(`2000-01-01T${time}`);
      const startTimeObj = new Date(`2000-01-01T${startTime}`);
      const endTimeObj = new Date(`2000-01-01T${endTime}`);
      if (currentTime >= startTimeObj && currentTime <= endTimeObj) {
        flag = true;
      } else {
        flag = false;
      }
    });
    return flag;
  }
  // async clickOnAirlines(airlines){
  //     await this.clickOnDepartureCheckBox(airlines)

  // }
  async clickOnBook() {
    await this.$bookButton().click();
    await browser.pause(3000);
    await this.$loginPageHeader().waitForDisplayed({ timeout: 5000 });
  }
}

export const flightPage = new FlightPage();
