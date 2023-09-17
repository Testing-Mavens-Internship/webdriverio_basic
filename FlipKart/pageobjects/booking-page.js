import Common from "./common.js";
class BookingPage extends Common {
  constructor() {
    super();
    this.$travelHeader = ()=>$(`//div[@class="lAXZRO"][text()="Travel"]`);
    this.$stopFilter = ()=>$(`//div[text()="Non-stop"]`);
    this.$flightTime = ()=>$(`//div[contains(text(),"Early Morning")]`);
    this.$priceFilter = ()=>$(`//span[text()="PRICE"]`);
    this.$chooseAirline = ()=>$(`//div[text()="Air India"]`)
    this.$ticketprice = ()=>$(`//div[@class="_3uUoiD"]`)
    this.$bookButton = ()=>$(`//div[@class="_3uUoiD"]/../following-sibling::div[text()="Book"]`)
    this.$loginText=()=>$(`//span[text()="Login"]`)
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
 * Method for booking flight
 * @param {string} price 
 */
async bookFlight(price){
    await this.$bookButton(price).click();
}


}
export const bookingPage = new BookingPage();