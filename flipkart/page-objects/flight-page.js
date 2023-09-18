import { th } from "@faker-js/faker";
import CommonPage from "./common-page.js";

class FlightPage extends CommonPage{
    constructor(){
        super();
        this.$airport = (place) => $(`//span[@class="_271Zih"][contains(text(),'${place}')]`);
        this.$fromCode = (code) => $(`//div[@class="_3K77nP"]//span[text()='${code}']`);
        this.$destinationCode = (code) => $(`//span[@class="_2vwrMb"][text()='${code}']`);
        this.$filter = (type) => $(`//div[@class="_325M91"][contains(text(),'${type}')]`);
        this.$$flightName = () => $$(`//div[@class="ZLipHt"]//span/following-sibling::span`);
        this.$detailView = () => $(`//div[@class="_2XB9pH"]`);
        this.$flightDetails = (flight) => $(`//span[text()='${flight}']/ancestor::div[@class="_3xFhY1"]/following-sibling::div//span`);
        this.$priceSort = () => $(`//div[@class="_1ysLi0"]`);
        this.$$flightPrice = () => $$(`//div[@class="_3uUoiD"]`);
    }
    /**
     * method for select filter
     * @param {string} type 
     */
    async clickOnFilter(type){
        await this.$filter(type).click();
    }
    /**
     * method for click on flight details
     * @param {string} flight 
     */
    async clickOnDetails(flight){
       // await browser.scroll(0,200)
        await this.$flightDetails(flight).scrollIntoView();
        await this.$flightDetails(flight).waitForClickable(5000);
        await this.$flightDetails(flight).click();
        await this.$detailView().scrollIntoView({ block : 'center'});
    }
    /**
     * Method for sort flight price
     */
    async clickOnPriceSort(){
        await this.$priceSort().scrollIntoView({ block : 'center'});
        await this.$priceSort().click();
    }
}
export const flightPage = new FlightPage();