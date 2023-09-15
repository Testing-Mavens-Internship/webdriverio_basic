import CommonPage from "./common-page.js";

class FlightPage extends CommonPage{
    constructor(){
        super();
        this.$searchType = (type) => $(`//div[@class="mat-radio-label-content"][contains(text(),"${type}")]`);
    }
    /**
     * Method for selecting search type
     * @param {string} type 
     */
    async clickOnSearchType(type){
        await this.$searchType(type).click();
    }
}

export const flightPage = new FlightPage();