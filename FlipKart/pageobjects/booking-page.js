import Common from "./common.js"; 
class BookingPage extends Common {
  constructor() {
    super();
    this.$travelHeader = ()=>$(`//div[@class="lAXZRO"][text()="Travel"]`);
    this.$stopFilter = ()=>$(`//div[text()="Non-stop"]`);
    this.$flightTime = (value)=>$(`//div[text()="${value}"]`);
    this.$priceFilter = ()=>$(`//span[text()="PRICE"]`);
    this.$chooseAirline = ()=>$(`//div[text()="Air India"]`);
    this.$airlineValidation = ()=>$(`//span[contains(text(),"Air India")]`)
    this.$ticketPrice = ()=>$(`//div[@class="_3uUoiD"]`);
    this.$$price = ()=>$$(`//div[@class="_3uUoiD"]`);
    this.$bookButton = ()=>$(`//div[@class="_3uUoiD"]/../following-sibling::div[text()="Book"]`);
    this.$loginText=()=>$(`//span[text()="Login"]`);
    this.$$flightDetails = () => $$('//span[@class="KO_IQZ"]');
    this.$flightDetail = (index) => $(`//span[@class="KO_IQZ"]["${index}"]`);
    this.$airportValidation=(text,index)=>$(`(//span[text()="Flight Details"]/ancestor::div//div//span[text()="${text}"])[${index}]`);
    this.$$timeValidation = ()=>$$('//span[@class="_2l73WS _1ljBda"]')
}
/**
 * Method for applying filters
 * @param {number} time 
 */
async applyFilters(time){
    await this.$stopFilter().click();
    await this.$flightTime(time).click();
    await this.$chooseAirline().scrollIntoView({block:'center'});
    await this.$chooseAirline().click();
    await this.$priceFilter().click();
    await this.$travelHeader().waitForDisplayed({setTimeout:20000});
}
/**
 * Method for validating time filter
 * @param {number} time 
 * @returns boolean
 */
async timeValidation(time){
  if(time=="Early Morning"){
  let time = await this.$$timeValidation().map(item=>item.getText());
  let flag;
  console.log(time)
  for(let item of time){
    if((item>='00:00')&&(item<='06:00')){
      flag = true;
    }
    else{
      flag= false;
    }
  }
  return flag;
}
if(time=="Morning"){
let time = await this.$$timeValidation().map(item=>item.getText());
let flag;
console.log(time)
for(let item of time){
  if((item>='06:00')&&(item<='12:00')){
    flag = true;
  }
  else{
    flag= false;
  }
}
return flag;
}
if(time=="Afternoon"){
let time = await this.$$timeValidation().map(item=>item.getText());
let flag;
console.log(time)
for(let item of time){
  if((item>='06:00')&&(item<='18:00')){
    flag = true;
  }
  else{
    flag= false;
  }
}
return flag;
}
if(time=="Night"){
let time = await this.$$timeValidation().map(item=>item.getText());
let flag;
console.log(time)
for(let item of time){
  if((item>='18:00')&&(item<='24:00')){
    flag = true;
  }
  else{
    flag= false;
  }
}
return flag;
}
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
async validateFlight(i){
    await this.$flightDetail(i).click();
    await this.$travelHeader().waitForDisplayed({setTimeout:20000});
}
/**
 * Method for booking flight
 * @param {string} price 
 */
async bookFlight(price){
    await this.$bookButton(price).click();
    await this.$travelHeader().waitForDisplayed({setTimeout:20000});
}
}
export const bookingPage = new BookingPage();