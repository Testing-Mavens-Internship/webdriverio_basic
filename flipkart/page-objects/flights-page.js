import Common from "./common-page.js";

class Flights extends Common{
    constructor(){
        super()
        this.$stops = (stops)=>$(`//div[text()="${stops}"]/ancestor::label`)
        this.$$flights = ()=>$$('//div[@class="_2GJTkY"]')
        this.$details = (item)=>$(`(//span[text()="Flight Details"])[${item}]`)
        this.$filterCheck = (filter)=>$(`//span[text()="${filter}"]/..//div[text()="Clear filters"]`)
        this.$$getTime = ()=>$$('//div[@class="_2g-pkx"]//span')
        this.$verifyTime = (index)=>$(`(//div[@class="_2g-pkx"]//span)[${index}]`)
        this.$routeCheck = (check,index)=>$(`(//div[@class="_2XB9pH"]//span[text()="${check}"])[${index}]`)
    }
    /**
     * Function to select the non stop filter
     */
    async selectNonStop(){
        await this.$stops("Non-stop").click()
        await this.$page("Clear filters").waitForDisplayed({timeout:20000})
    }
    /**
     * Click on the details of each flight
     */
    async clickOnDetails(){
        let count = await this.$$flights().length
        for(let i=1;i<=count;i++){
            await this.$details(i).click()
        }
    }
    /**
     * Apply depature filter
     * @param {string} filter 
     */
    async filterByTime(filter){
        await this.$page(filter).scrollIntoView({block:'center'})
        await this.$page(filter).click()
        
        await this.$filterCheck("Departure from Kochi").waitForDisplayed({timeout:20000})
    }
    /**
     * Used to verify if the time of flight is correct as per filter
     * @param {string} time1 
     * @param {string} time2
     * @returns boolean
     */
    async verifyDepartureTime(time1, time2) {
        let flag = false;
        let timesArray = [];
        timesArray = await this.$$getTime().map((item) => item.getText());
        console.log(timesArray);
        for (let item of timesArray) {
          if (item > time1 && item < time2) {
            flag = true;
          } else {
            flag = false;
          }
        }
        return flag;
    }
}
export const flightsPage = new Flights()