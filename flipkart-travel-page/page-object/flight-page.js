import Common from "./common.js";


class FlightPage extends Common {
  constructor() {
    super();
    this.$verifyDetails = (data) =>
      this.$logo(`//input[contains(@value,"${data}")]`);
    this.$flightTime = (value) =>
      $(`//div[text()="${value}"]/ancestor::label//div[@class="_24_Dny _1MtB6C"]`);
    this.$stopFilter = (stop) => 
    $(`//div[text()="${stop}"]`); 
    this.$priceFilter = () => 
    $(`//span[contains(text(),"PRICE")]`);
    this.$ticketPrice = (price) =>
      $(`//div[@class="_3xFhY1"]//div[text()="${price}"]`); 
    this.$bookButton = (price) =>
      $(`(//div[text()="Book"])[1]`);
    this.$loginText = () => $(`//span[text()="Login"]`);
    this.$flight = (index) => $(`(//span[text()="Flight Details"])[${index}]`)
    this.$$price = () => $$(`//div[@class="_3uUoiD"]`)
    //this.$$flightDetails = () => $$(`//div[@class="_1O-me8"]`); 
    this.$$records = () => $$(`//div[@class="_2GJTkY"]`);
    this.$flightDetail = (place,index) => $(`(//span[text()="Flight Details"]/ancestor::div//div//span[text()="${place}"])[${index}]`)
  }
  /**
   * Method to apply filter
   */
  async applyTimeFilter() {
    await this.$stopFilter("Non-stop").click();
    await this.$flightTime("Morning").click();
    await this.$priceFilter().click();
    await browser.pause(3000);
    await this.$priceFilter().waitForDisplayed({timeout:2000});
  }
  /**
   * Method to sort the price 
   * @returns boolean
   */
  async sortPrice(){
    let flightPrice = [];
    let newFlightPrice =[];
    flightPrice  = await this.$$price().map(item => item.getText());
    console.log(flightPrice);
    for (let item of flightPrice){
    newFlightPrice.push(parseInt(item.replace(/[₹,]/g,"")));
  } 
   //newFlightPrice =  await Number(flightPrice);
    for(let i=0; i<newFlightPrice.length-1;i++){
      if(newFlightPrice[i]>newFlightPrice[i+1]){
        return true;
      }
      else
      {
        return false;
      }
    }
  }
  /**
   * Method to verify the flight details
   * @param {Number} index 
   */
  async verifyFlightDetails(index){
    await this.$flight(index).click();

  }
  /**
   * Method to click on Book button
   */
  async ClickOnBookButton(){
    await this.$bookButton().click();
    await this.$loginText().waitForDisplayed({ timeout: "3000" });
  }
}
export const flightPage = new FlightPage();
