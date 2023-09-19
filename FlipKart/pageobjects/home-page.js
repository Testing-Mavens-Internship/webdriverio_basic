import Common from "./common.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$travelTitle = () =>$('//img[@alt="Travel"]');
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
    await this.$travelTitle().click();
    await this.$travelHeader().waitForDisplayed({setTimeout:20000});
  }
 /**
  * 
  * @param {string} from 
  * @param {string} to 
  * @param {string} clickFrom 
  * @param {string} clickTo 
  * @param {string} month 
  * @param {string} day 
  * @param {string} adults 
  * @param {string} children 
  * @param {string} cabinClass 
  */
  async searchFlightTickets(from,to,clickFrom,clickTo,month,day,adults,children,cabinClass){
    await this.$clickTextFields("departcity").setValue(from);
    await this.$selectAirports(clickFrom).waitForClickable();
    await this.$selectAirports(clickFrom).click();
    await this.$clickTextFields("arrivalcity").setValue(to);
    await this.$selectAirports(clickTo).waitForClickable();
    await this.$selectAirports(clickTo).click();
    await this.$clickTextFields("datefrom").click();
    await this.$departOn(month,day).click();
    await this.$clickTextFields("travellerclasscount").click();
    for(let i=0;i<adults-1;i++){
      await this.$travellers("Adults").click();
    }
    for(let j=0;j<children;j++){
      await this.$travellers("Children").click();
    }
    await this.$cabinClass(cabinClass).click();
    await this.$doneButton("Done").click();
    await this.$searchButton().click();
    await this.$travelHeader().waitForDisplayed({setTimeout:20000});
  }
}
export const homePage = new HomePage();