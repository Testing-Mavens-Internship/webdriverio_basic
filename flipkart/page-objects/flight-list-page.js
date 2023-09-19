import  Common  from "./common.js";
let prices= [];
let prcieArray =[];
let replacedPrice = [];


class FligthDetails extends Common{
    constructor(){
        super();
        this.$filterByText = () =>$('//div[@class ="_2CzBsO"][text()="Filter By"]')
        this.$filter = (filters) =>$(`//div[@class ="_325M91"][text()="${filters}"]`)
        this.$clickBook = () =>$('//div[@class="_-5f1wK"][text()="Book"]');
        this.$$price = () =>$$('//div[@class ="_3uUoiD"]')
        this.$sortPrice = () =>$('//span[@class ="_3W-vry"][text()="PRICE"]')
        this.$loginHeader = () =>$('//span[@class="_36KMOx"]//span[text()="Login"]')
        this.$location = (fromTo) =>$(`//span[@class="_271Zih"][text()="${fromTo}"]`)
        this.$airLineValidation = (airlines) =>$(`//div[@class="ZLipHt"]//span[text()="${airlines}"]`)
        this.$clickFlightDetails = (flightDetails) =>$(`(//div[@class="WwPZ25"]//span[text()="Flight Details"])[${flightDetails}]`)
        this.$clickDetailsFrom = (from) =>$(`//div[@class="_3K77nP"]//span[text()="${from}"]`);
        this.$clickDetailsTo = (to) =>$(`//div[@class="_3K77nP _29BGl3"]//span[text()="${to}"]`)
        this.$$departTime = () => $$(`//span[@class="_2l73WS _1ljBda"]`);
        this.$flightName = (flightName) => $(`//div[@class="ZLipHt"]//span[text()="${flightName}"]`)
    }

    /**
     * Method to click the sort price
     */
    async sortPrice(){
        await this.$sortPrice().click();
    }
    /**
     * Method to select flight with or without stop
     */
    async clickOnStop(stop){
        await this.$filter(stop).click();   
    }
    /**
     * Method to click the morning flight
     */
    async clickOnTime(time){
        await this.$filter(time).scrollIntoView({block : "center"})
        await this.$filter(time).click()
    }
    
    /**
     * Method to click on the book flight
    */
   async clickOnBook(){
       await this.$clickBook().isClickable()
       await this.$clickBook().click()
    }
    /**
     * Method to click the sort price filter
     */
    async clickOnPriceFilter(){
        await this.$sortPrice().click();
    }
    /**
     * Method to get price,sorting and replacing the rupee sign 
    */
   async getPriceAndSort(){
    for(let price of await this.$$price()){
        prices.push(await price.getText());
        }
        for(let i of prices){
            replacedPrice.push(parseInt(i.replace(/[₹,]/g, "")));
        }
        let flag=false;// ivide enthe value ane kodukane athe same value anme pass avunne
        for(let i=0;i<replacedPrice.length-1;i++)
        {
            if(replacedPrice[i]>=replacedPrice[i+1]){
                flag = true;
            }
            else{
                flag= false;    
            }
        }
        return flag;
    }
    /**
     * Method to click on the flight details
     * @param {number} index 
    */
   async clickOnFlightDetails(index){
       await this.$clickFlightDetails(index).click();
       await this.$clickFlightDetails(index).waitForClickable();
    }
    /**
     * Method to get count of the flights
     * @returns number
    */
   async getCount(){
       for(let i of await this.$$price()){
           prcieArray.push(await i.getText());
           
        }
        let count = await  prcieArray.length;
        return  count ;
    }
    /**
     * 
     * @param {string} flight 
     * @returns boolean
     */
    async getFromTime(flight){
        let flag;
        let departFrom = await this.$$departTime().map(item=>item.getText())
        await this.$filter(flight).click();
        if(flight == "Early Morning"){
            for(let i=0; i<departFrom.length;i++){
            if(departFrom[i] >='00:00' && departFrom[i]<='6:00'){
                flag = true
            }
            else{
                flag = false;
            }
            
        }
        return flag
    }
    if(flight == "Morning"){
        for(let i=0; i<departFrom.length;i++){
        if(departFrom[i] >='06:00' && departFrom[i]<='12:00'){
            flag = true
        }
        else{
            flag = false;
        }
        
    }
        return flag
    }
    if(flight == "Afternoon"){
        for(let i=0; i<departFrom.length;i++){
        if(departFrom[i] >='12:00' && departFrom[i]<='18:00'){
            flag = true
        }
        else{
            flag = false;
        }
        
    }
        return flag
    }
    if(flight == "Night"){
        for(let i=0; i<departFrom.length;i++){
        if(departFrom[i] >='18:00' && departFrom[i]<='23:59' || departFrom[i]== "00:00"){
            flag = true
        }
        else{
            flag = false;
        }
        
    }
        return flag
    }
}
    /**
     * Method to click on the flight filter
     * @param {string} filter 
     */
    async clickOnFlightFilter(filter){
        await this.$filter(filter).waitForClickable();
        await this.$filter(filter).click();
    }
}
export const fligthDetails = new FligthDetails()