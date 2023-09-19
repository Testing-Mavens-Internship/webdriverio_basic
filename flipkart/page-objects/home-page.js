import CommonPage from "./common-page.js";

class HomePage extends CommonPage{
    constructor(){
        super();
        this.$searchType = (type) => $(`//div[@class="_3ZcqzB"]//div[contains(text(),'${type}')]`);
    }
    /**
     * Method for click on menu icon
     * @param {string} icon 
     */
    async clickOnMenuIcon(icon){
        await this.$menuIcon(icon).click();
        await this.$header('Travel').waitForDisplayed({ timeout : 3500 });
    }
    /**
     * Method for selecting search type
     * @param {string} type 
     */
    async clickOnSearchType(type){
        await this.$searchType(type).click();
    }
}
export const homePage = new HomePage();