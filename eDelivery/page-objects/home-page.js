import Common from "./common.js";

class HomePage extends Common{
    constructor(){
        super();
        this.$userName = (value) => $(`//span[contains(text(),"${value}")]`)
        this.$shop = () => $(`//p[contains(text(),'Clothing')]/..//input`)
        this.$location =(place) => $(`//span[text()="${place}"]`)
        this.$showButton =() => $(`//span[contains(text(),"SHOW BUSINESS")]`)
        this.$clothBrand = (value) => $(`//h3[contains(text(),"${value}")]`);
        this.$searchLocation = () => $(`(//div[@class="home-from1 landing-banner-search"]//input[@type="text"])[1]`)
    }
    /**
     * Method to click on shop
     */
    async clickOnShop(){
        await this.$shop().click();
        await this.$searchLocation().setValue(`Chennai`);
        await this.$location("Tamil Nadu, India").waitForClickable(40000);
        await this.$location("Tamil Nadu, India").click();
        await this.$showButton().waitForClickable(4000);
        await this.$showButton().click();
    }
}
export const homePage = new HomePage()