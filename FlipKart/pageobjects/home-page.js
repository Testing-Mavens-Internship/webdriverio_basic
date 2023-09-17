import Common from "./common.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$travelTitle = () =>$(`//div[text()="Travel"]`);
    this.$travelHeader = ()=>$(`//div[@class="lAXZRO"][text()="Travel"]`)
    this.$clickTextFields = (text)=>$(`//input[@name="0-${text}"]`);
    this.$selectAirports = (text) => $(`//div[text() ="${text}"]`);
    this.$validateFrom=()=>$(`//input[@value="Mumbai, BOM - Chatrapati Shivaji Airport, India"]`);
    this.$validateTo = ()=>$(`//input[@value="Kochi, COK - Cochin International Airport, India"]`);
    this.$departOn = (month,day)=>$(`//div[contains(text(),"${month}")]/ancestor::thead/following-sibling::tbody//button[contains(text(),"${day}")]`);
    this.$validateDate = ()=>$(`//input[@value="1 Oct, Sun"]`);
    this.$travellers = (passenger) =>$(`(//div[text()="${passenger}"]/../following-sibling::div//button)[2]`);
    this.$cabinClass = (value) =>$(`//div[contains(text(),"${value}")]/../preceding-sibling::div`);
    this.$doneButton = ()=>$(`//button[text()="Done"]`);
    this.$searchButton = () =>$(`//button//span[contains(text(),"SEARCH")]`);
  }
  /**
   * Method for searching travel header
   */
  async clickOnTravel(){
    await this.$travelTitle().waitForDisplayed({timeout:7000});
    await this.$travelTitle().click();
  }
  /**
   * Method for searching flight
   * @param {string} from 
   * @param {string} to 
   */
  async searchFlightTickets(from,to){
    await this.$clickTextFields("departcity").setValue("Mumbai");
    await this.$selectAirports("BOM").waitForClickable();
    await this.$selectAirports("BOM").click();
    await this.$clickTextFields("arrivalcity").setValue("Cochin");
    await this.$selectAirports("COK").waitForClickable();
    await this.$selectAirports("COK").click();
    await this.$clickTextFields("datefrom").click();
    await this.$departOn("October 2023","1").click();
    await this.$clickTextFields("travellerclasscount").click();
    await this.$travellers("Adults").click();
    await this.$travellers("Children").click();
    await this.$travellers("Children").click();
    await this.$travellers("Children").click();
    await this.$cabinClass("Business").click();
    await this.$doneButton("Done").click();
    await this.$searchButton().click();
  }
}
export const homePage = new HomePage();