import CommonPage from "./common-page.js";

class FlightPage extends CommonPage{
    constructor(){
        super();
        this.$airport = (index) => $(`(//span[@class="_271Zih"])[${index}]`);
        this.$fromCode = (code) => $(`//div[@class="_3K77nP"]//span[text()='${code}']`);
        this.$destinationCode = (code) => $(`//span[@class="_2vwrMb"][text()='${code}']`);
        this.$filter = (type) => $(`//div[@class="_325M91"][contains(text(),'${type}')]`);
        this.$$flightName = () => $$(`//div[@class="ZLipHt"]//span/following-sibling::span`);
        this.$detailView = () => $(`//div[@class="_2XB9pH"]`);
        this.$flightDetails = (flight) => $(`//span[text()='${flight}']/ancestor::div[@class="_3xFhY1"]/following-sibling::div//span`);
        this.$priceSort = () => $(`//div[@class="_1ysLi0"]`);
        this.$$flightPrice = () => $$(`//div[@class="_3uUoiD"]`);
        this.$$departureTime = () => $$(`//div[@class="_2GJTkY"]//span[@class="_2l73WS _1ljBda"]`);
        this.$booking = (flight) => $(`//span[contains(text(),'${flight}')]/ancestor::div[@class="_2IAB80"]/following-sibling::div[@class="_-5f1wK"]`)
    }
    /**
     * method for applying filter
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
     * Method for click on  flight price
     */
    async clickOnPriceSort(){
        await this.$priceSort().scrollIntoView({ block : 'center'});
        await this.$priceSort().click();
    }
    /**
     * Method for checking flight price is sorted or not
     * @param {number} priceArray 
     * @returns  boolean
     */
    async isPriceSorted(priceArray){
        for (let i = 1; i < priceArray.length; i++) {
            if (priceArray[i] > priceArray[i - 1]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Method for click on booking
     */
    async clickOnBook(flight){
        await this.$booking(flight).click();
    }
    /**
     * Method for verifying searched place and displayed Place
     * @param {string} searchedPlace 
     * @param {string} displayedPlace 
     * @returns string
     */
    async verifyAirport(searchedPlace, displayedPlace){
        if(searchedPlace == displayedPlace){
            return true;
        }
        else{
            return false;
        }
    }
    /**
     * 
     * @param {string} startTime 
     * @param {string} endTime 
     * @param {string} time 
     * @returns boolean
     */
    async isTimeInFilter(startTime, endTime, time){
        const [hours, minutes] = time.split(':').map(Number);
        const [startHours, startMinutes] = startTime.split(':').map(Number);
        const [endHours, endMinutes] = endTime.split(':').map(Number);

        if((hours > startHours || (hours === startHours && minutes >= startMinutes)) &&
        (hours < endHours || (hours === endHours && minutes < endMinutes))){
            return true;
        }
        else{
            return false;
        }
    }
    
}
export const flightPage = new FlightPage();