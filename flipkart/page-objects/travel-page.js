import Common from "./common.js";
class TravelPage extends Common {
  constructor() {
    super();
    this.$travelHeader = () => $('//div[@class ="lAXZRO"][text() = "Travel"]');
    this.$tripType = (trip) => $(`//input[@id="${trip}"]`);
    this.$tripTypeAlternate = (trip) => $(`//label[@for ="${trip}"]`);
    this.$fromToDepartReturnClass = (index) =>
      $(`//input[@name="0-${index}"]`);
    this.$location = (fromOrTo) => $(`//div[text() ="${fromOrTo}"]`);
    
    this.$fromLocationValidation = () =>
      $(
        '//input[@tabindex="01" and @value ="Kochi, COK - Cochin International Airport, India"]'
      );
    this.$toLocationValidaiton = () =>
      $(
        '//input[@tabindex="02" and @value ="Mumbai, BOM - Chatrapati Shivaji International Airport"]'
      );
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
   * Click on from location
   */
  async fromLocation() {
    await this.$fromToDepartReturnClass("departcity").setValue("cochin");
    await this.$location("COK").waitForClickable();
    await this.$location("COK").click();
  }

  /**
   *Select the to location
   */
  async toLocation() {
    await this.$fromToDepartReturnClass("arrivalcity").setValue("mumbai");
    await this.$location("BOM").waitForClickable();
    await this.$location("BOM").click();
  }
  /**
   * Select Departuire date
   */
  async selectDepartDate() {
    await this.$date("September", "24").scrollIntoView({ block: "center" });
    await this.$date("September", "24").click();
  }
  /**
   * Method to increment or decremment the count of the people based on peopletype(adults,children,infants)
   */
  async travelerClass() {
    await this.$passengerPlus("Adults").doubleClick();
  }

  /**
   * Method to click the cabin
   * e => economy
   * w => premium economy
   * b => business
   */
  async selectCabinClass() {
    await this.$cabinClass("e").click;
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
