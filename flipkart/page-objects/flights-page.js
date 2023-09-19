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
    async selectNonStop(){
        await this.$stops("Non-stop").click()
        await this.$page("Clear filters").waitForDisplayed({timeout:20000})
    }
    async clickOnDetails(){
        let count = await this.$$flights().length
        for(let i=1;i<=count;i++){
            await this.$details(i).click()
        }
    }
    async filterByTime(filter){
        await this.$page(filter).scrollIntoView({block:'center'})
        await this.$page(filter).click()
        
        await this.$filterCheck("Departure from Kochi").waitForDisplayed({timeout:20000})
    }
}
export const flightsPage = new Flights()