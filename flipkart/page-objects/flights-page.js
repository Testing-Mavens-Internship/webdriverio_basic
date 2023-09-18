import Common from "./common-page.js";

class Flights extends Common{
    constructor(){
        super()
        this.$stops = (stops)=>$(`//div[text()="${stops}"]/ancestor::label`)
        this.$filterCheck = (filter="Clear filters")=>$(`//div[@class="_3uXfnG"]//div[text()=${filter}]`)
        this.$$flights = ()=>$$('//div[@class="_2GJTkY"]')
        this.$details = (item)=>$(`(//span[text()="Flight Details"])[${item}]`)
    }
    async selectNonStop(){
        await this.$stops("Non-stop").click()
    }
    async clickOnDetails(){
        let count = await this.$$flights().length
        for(let i=0;i<count;i++){
            await this.$details(i).click()
        }
    }
}
export const flightsPage = new Flights()