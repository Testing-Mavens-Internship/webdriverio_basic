import Common from "./common.js";
class TravelPage extends Common {
  constructor() {
    super();
    this.$loginButton = () => $('//a[text() = "Login"]');
    this.$tripType = (trip) => $(`//input[@id="${trip}"]`);
    this.$tripTypeAlternate = (trip) => $(`//label[@for ="${trip}"]`);
    this.$fromToDepartReturnClass = (index) => $(`//input[@name="0-${index}"]`);
    this.$location = (fromOrTo) => $(`//div[text() ="${fromOrTo}"]`);

    this.$fromLocationValidation = (from) =>
      $(
        `//input[@tabindex="01" and contains(@value,"${from}")]`
      );
    this.$toLocationValidaiton = (to) =>
      $(
        `//input[@tabindex="02" and contains(@value,"${to}")]`
      );
    this.$dateValidation = () =>
      $('//input[@tabindex="03" and @value="21 Sep, Thu"]');
    this.$date = (month, day) =>
      $(
        `//div[contains(text(),"${month}")]/ancestor::thead/following-sibling::tbody//button[contains(text(),"${day}")]`
      );
    this.$passengerPlus = (passenger) =>
      $(
        `//div[@class= "_1Di8FC"]//div[@class="_2zLOdI"][text()="${passenger}"]/../following-sibling::div//button[@class ="_2KpZ6l _34K0qG _37Ieie"]`
      );
    this.$passengerMinus = (passenger) =>
      $(
        `//div[@class= "_1Di8FC"]//div[@class="_2zLOdI"][text()="${passenger}"]/../following-sibling::div//button[@class ="_2KpZ6l _34K0qG _37Ieie _3Yulbw"]`
      );
    this.$cabinClass = (cabin) => $(`//div//label[@for="${cabin}"]`);
    this.$clickDone = () => $('//button[text()="Done"]');
    this.$clickSearch = () =>
      $('//button[@type="button"]//span[text()="SEARCH"]');

  }
  /**
   * Method to enter the from location
   * @param {string} from 
   * @param {string} toClick
   */
  async fromLocation(from, fromClick) {
    await this.$fromToDepartReturnClass("departcity").setValue(from);
    await this.$location(fromClick).waitForClickable();
    await this.$location(fromClick).click();
  }
  /**
   * Method to enter the to location
   * @param {string} to 
   * @param {string} toClick
   */
  async toLocation(to, toClick) {
    await this.$fromToDepartReturnClass("arrivalcity").setValue(to);
    await this.$location(toClick).waitForClickable();
    await this.$location(toClick).click();
  }
  /**
   * Method to enter the date
   * @param {sting} month 
   * @param {string} day 
   */
  async selectDepartDate(month, day) {
    await this.$date(month, day).scrollIntoView({ block: "center" });
    await this.$date(month, day).click();
  }
  /**
   * Method to click the travelers
   * @param {string} travelers 
   */
  async travelerClass(travelers) {
    await this.$passengerPlus(travelers).doubleClick();
    await this.$passengerPlus(travelers).click();
  }

  /**
   * /**
   * Method to click the cabin
   * e => economy
   * w => premium economy
   * b => business
   * @param {string} cabin 
   */
  async selectCabinClass(cabin) {
    await this.$cabinClass(cabin).click;
  }
  /**
   * Click on the done button
   */
  async clickOnDone() {
    await this.$clickDone().click();
  }
  /**
   * Click on the search button
   */
  async clickOnSearch() {
    await this.$clickSearch().click();
  }
}

export const travelPage = new TravelPage();
