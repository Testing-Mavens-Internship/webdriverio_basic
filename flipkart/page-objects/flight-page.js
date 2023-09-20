import Common from "./common.js";
class FlightPage extends Common {
  constructor() {
    super();
    this.$verifyName = (city) => $(`//div[@class="_3Jcym_"]//span[text()="${city}"]`);
    this.$bookFlight = () => $('(//div[@class="_-5f1wK"])[1]');
    this.$loginHeader = () => $('//span[text()="Login"]');
    this.$filter = (filter) => $(`//div[text()="${filter}"]`);
    this.$sortPriceButton = () => $('//span[text()="PRICE"]')
    this.$$getPrice = () => $$('//div[@class="_3uUoiD"]');
    this.$$getFlightDetails = () => $$('//span[@class="KO_IQZ"]');
    this.$flightDetail = (index) => $(`(//span[@class="KO_IQZ"])[${index}]`);
    this.$validationPlace = (place,index) => $(`(//span[text()="Flight Details"]/ancestor::div//div//span[text()="${place}"])[${index}]`)
    this.$flightTiming = (time) => $(`//div[text()="${time}"]`);
    this.$$flightTime = () => $$('//span[@class="_2l73WS _1ljBda"]');
    this.$$getAirLine = (name) => $$(`//div[@class="ZLipHt"]//span[text()="${name}"]`)
    this.$validateAirLine = (name,index) => $(`(//div[@class="ZLipHt"]//span[text()="${name}"])[${index}]`)
    this.$validateStop = (stop) =>$(`//span[contains(text(),"${stop}")]`)
  }
  /**
   * Method to sort
   * @returns Boolean
   */
  async sortPrice() {
    await this.$sortPriceButton().click();
    let price = [];
    price = await this.$$getPrice().map((item) => item.getText());
    price = await price.map((item) => item.replace(/[₹,]/g, "")).map(Number);
    if (price.length == 1) {
      return true;
    } else if (price.length == 0) {
      console.log("No Flights");
      return false;
    } else {
      for (let i = 0; i < price.length; i++) {
        if (price[i] >= price[i + 1]) 
          return true;
        else
          return false;
      }
    }
  }
  /**
   * Method to apply filters
   * @param {String} filterStops 
   * @param {String} filterDeparture 
   * @param {String} filterAirline 
   */
  async filter(filterStops,filterAirline) {
    await this.$filter(filterStops).click();
    await this.$filter(filterAirline).click();
  }
  /**
   * Method to validate filtered departure time
   * @param {String} filterDeparture 
   * @returns Boolean
   */
  async validateDeparture(filterDeparture){
    await this.$filter(filterDeparture).click();
    let timeArray = []
    timeArray = await this.$$flightTime().map((item) => item.getText());
    for (let i = 0; i < timeArray.length; i++) { 
      for (let item of timeArray) {
        if (filterDeparture == "Early Morning") {
          if (item >= "00:00" && item < "6:00") 
            return true;
          else 
            return false;
          }
        if (filterDeparture == "Morning") {
            if ("06:00" <= item && item < "12:00")
              return true;
            else
              return false;
          }
        if (filterDeparture == "Afternoon") {
            if ("12:00" <= item && item < "18:00")
              return true;
            else 
              return false;
          }
        if (filterDeparture == "Night") {
            if ("18:00" <= item && item <= "23:59") 
              return true;
            else 
              return false;
          }
      }
    }
  }
  /**
   * Method to validate flight details
   * @param {string} index
   */
  async flightValidation(index) {
    await this.$flightDetail(index).click();
    await this.$flightDetail(index).waitForDisplayed({ timeout : 20000})
  }
  /**
   * Method to book flight
   */
  async bookFlight() {
    await this.$bookFlight().scrollIntoView({block : 'center'})
    await this.$bookFlight().waitForDisplayed({ timeout : 20000})
    await this.$bookFlight().click();
    await this.$loginHeader().waitForDisplayed({ timeout: 6000 });
  }
}
export const flightPage = new FlightPage();
