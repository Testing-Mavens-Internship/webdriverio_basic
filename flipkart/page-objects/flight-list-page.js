import  Common  from "./common.js";
class FligthDetails extends Common{
    constructor(){
        super();
        this.$filterByText = () =>$('//div[@class ="_2CzBsO"][text()="Filter By"]')
        this.$filter = (filters) =>$(`//div[@class ="_325M91"][text()="${filters}"]`)
        this.$clickBook = () =>$('//div[@class="_-5f1wK"][text()="Book"]');
        this.$loginHeader = () =>$('//span[@class="_36KMOx"]//span[text()="Login"]')
    }
    /**
     * Select the flight wiht no stops
     */
    async clickOnNonstop(){
        await this.$filter("Non-stop").click();
    }
    /**
     * Method to select flight with one stop
     */
    async clickOnOneStop(){
        await this.$filter("1 stop").click();   
    }
    /**
     * Method to click the morning flight
     */
    async clickOnTime(){
        await this.$filter("Morning").scrollIntoView({block : "center"})
        await this.$filter("Morning").click()
    }
    /**
     * Method to click on which airlines the user needs to select
     */
    async clickOnFlight(){
        await this.$filter("SpiceJet").scrollIntoView({block : "center"});
        await this.$filter("SpiceJet").click();
    }
    async clickOnBook(){
        await this.$clickBook().isClickable()
        await this.$clickBook().click()
    }
}
export const fligthDetails = new FligthDetails()