import Common from "./common-page.js";
import { productPage } from "./product-page.js";

class Home extends Common{
    constructor(){
        super()
        this.$productTile = ()=>$('//a[@href="https://www.mydesignation.com/product/gojo-co-ords-set-for-men/"]/ancestor::div[@class="owl-item cloned"]')
    }
    /**
     * Used to click on the particular item
     */
    async clickOnItem(){
        await this.$productTile().waitForClickable({timeout: 20000});
        await this.$productTile().click();
        await productPage.$productName().waitForDisplayed({timeout: 20000});
    }
}
export const homePage = new Home()