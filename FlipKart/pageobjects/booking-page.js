import Common from "./common.js";
class BookingPage extends Common {
  constructor() {
    super();
    this.$travelHeader = ()=>$(`//div[@class="lAXZRO"][text()="Travel"]`);
    this.$stopFilter = ()=>$(`//div[text()="Non-stop"]`);
    this.$flightTime = ()=>$(`//div[contains(text(),"Early Morning")]`);
    this.$priceFilter = ()=>$(`//span[text()="PRICE"]`);
    this.$chooseAirline = ()=>$(`//div[text()="Air India"]`);
    this.$ticketPrice = ()=>$(`//div[@class="_3uUoiD"]`);
    this.$$price = ()=>$$(`//div[@class="_3uUoiD"]`);
    this.$bookButton = ()=>$(`//div[@class="_3uUoiD"]/../following-sibling::div[text()="Book"]`);
    this.$loginText=()=>$(`//span[text()="Login"]`);
    this.$$flightDetails=()=>$$('//span[@class="KO_IQZ"]')
    this.$airportValidation=(text)=>$(`//div[@class="_3K77nP"]/span[text()="${text}"]`)
}
/**
 * Method for applying filters
 */
async applyFilters(){
    await this.$stopFilter().click();
    await this.$flightTime().click();
    await this.$chooseAirline().scrollIntoView({block:'center'});
    await this.$chooseAirline().click();
    await this.$priceFilter().click();
}
/**
 * Method for sorting price
 * @returns boolean
 */
async sortPrice(){
    let priceArray = await this.$$price().map(item => item.getText());
    let sortArray
    for (let item of priceArray){
      sortArray = await priceArray.map(item => item.replace(/[₹,]/g,'')).map(Number);
    }
    console.log(sortArray);
    for(let i=0; i<sortArray.length; i++){
      if(sortArray[i]<=sortArray[i+1]) {
        return true;
      }
      else {
        return false;
      }
    }
  }
/**
 * Method for validating flight details
 */
async validateFlight(){
    await this.$$flightDetails().click();
}
/**
 * Method for booking flight
 * @param {string} price 
 */
async bookFlight(price){
    await this.$bookButton(price).click();
}
}
export const bookingPage = new BookingPage();