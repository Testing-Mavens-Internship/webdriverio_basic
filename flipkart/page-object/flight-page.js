import Common from "./common.js";

class FlightBookingPage extends Common {
  constructor() {
    super();
    this.$verifyDetails = (data) =>
      this.$logo(`//input[contains(@value,"${data}")]`);
    this.$flightTime = (value) =>
      $(`//div[text()="${value}"]/ancestor::label//div[@class="_24_Dny _1MtB6C"]`);
    this.$stopFilter = () => 
    $(`//div[text()="Non-stop"]`); 
    this.$priceFilter = () => 
    $(`//span[contains(text(),"PRICE")]`);
    this.$ticketPrice = (price) =>
      $(`//div[@class="_3xFhY1"]//div[text()="${price}"]`); 
    this.$bookButton = (price) =>
      $(`//div[text()="${price}"]/../following-sibling::div[text()="Book"]`);
    this.$loginText = () => $(`//span[text()="Login"]`);
  }

  /**
   * Method to apply filters
   */
  async applyTimeFilter() {
    await this.$stopFilter("Non-stop").click();
    await this.$flightTime("Night").click();
    //await this.$priceFilter().click();
  }
  
  /**
   * Method to click on Booking button
   */
  async ClickOnBookButton(ticketCharge) {
    await this.$bookButton(ticketCharge).click();
    await this.$loginText().waitForDisplayed({ timeout: "2000" });
  }
}
export const flightBookingPage = new FlightBookingPage();
