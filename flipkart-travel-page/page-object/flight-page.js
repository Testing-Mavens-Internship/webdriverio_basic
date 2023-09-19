import Common from "./common.js";
// import data from "get-time";

class FlightPage extends Common {
  constructor() {
    super();
    
    this.$verifyDetails = (data) => $(`//div[@class="_3Jcym_"]//span[text()="${data}"]`);
    this.$flightTime = (value) =>$(`//div[text()="${value}"]/ancestor::label//div[@class="_24_Dny _1MtB6C"]`);
    this.$stopFilter = (stop) => $(`//div[text()="${stop}"]`); 
    this.$priceFilter = () => $(`//span[contains(text(),"PRICE")]`);
    this.$ticketPrice = (price) =>$(`//div[@class="_3xFhY1"]//div[text()="${price}"]`); 
    this.$bookButton = (price) => $(`(//div[text()="Book"])[1]`);
    this.$loginText = () => $(`//span[text()="Login"]`);
    this.$flight = (index) => $(`(//span[text()="Flight Details"])[${index}]`);
    this.$$price = () => $$(`//div[@class="_3uUoiD"]`);
    this.$$records = () => $$(`//div[@class="_2GJTkY"]`);
    this.$flightDetail = (place,index) => $(`(//span[text()="Flight Details"]/ancestor::div//div//span[text()="${place}"])[${index}]`);
    this.$$verifyTime = () => $$(`//span[@class="_2l73WS _1ljBda"]`);
  }
  /**
   * Method to apply filter
   */
  async applyTimeFilter(time) {
    await this.$stopFilter("Non-stop").waitForClickable();
    await this.$stopFilter("Non-stop").click();
    await this.$flightTime(time).click();
    await this.$priceFilter().click();
    await browser.pause(3000);
    await this.$priceFilter().waitForDisplayed({timeout:2000});
  }
  /**
   * Method to sort the price 
   * @returns boolean
   */
  async sortPrice()
  {
    let flightPrice = [];
    let newFlightPrice =[];
    flightPrice  = await this.$$price().map(item => item.getText());
    console.log(flightPrice);
    for (let item of flightPrice)
    {
    newFlightPrice.push(parseInt(item.replace(/[₹,]/g,"")));
    } 
    for(let i=0; i<newFlightPrice.length-1;i++)
    {
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
 * Method to verify the appied time filter
 * @param {Number} timeFilter 
 * @returns boolean
 */
async verifyTime(timeFilter)
{
  if(timeFilter=="Early Morning")
  {
    let time = [];
    time = await this.$$verifyTime().map(item => item.getText());
    console.log(time); 
    for(let item of time)
    {
      if(item>='00:00' && item<='06:00')
      {
        return true;
      }
      else 
      {
        return false;
      }
    }
  }
  else if(timeFilter=="Morning")
  {
    let time = [];
    time = await this.$$verifyTime().map(item => item.getText());
    console.log(time); 
    for(let item of time)
    {
      if(item>='06:00' && item<='12:00')
      {
        return true;
      }
      else 
      {
        return false;
      }
    }
  }
  else if(timeFilter=="Afternoon")
  {
    let time = [];
    time = await this.$$verifyTime().map(item => item.getText());
    console.log(time); 
    for(let item of time)
    {
      if(item>='12:00' && item<='18:00')
      {
        return true;
      }
      else 
      {
        return false;
      }
    }
  }
  else if(timeFilter=="Night")
  {
    let time = [];
    time = await this.$$verifyTime().map(item => item.getText());
    console.log(time); 
    for(let item of time)
    {
      if((item>='18:00' && item<='23:59') || (item=='00:00'))
      {
        return true;
      }
      else 
      {
        return false;
      }
    }
  }
}
/**
 * Method to verify the flight details
 * @param {Number} index 
 */
  async verifyFlightDetails(index){
    await this.$flight(index).click();
    await this.$flight(index).waitForClickable();
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
