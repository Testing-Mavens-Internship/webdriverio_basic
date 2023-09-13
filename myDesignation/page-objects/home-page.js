import Common from "../../myDesignation/page-objects/common.js";
import { productPageObj } from "../../myDesignation/page-objects/product-page.js";
class HomePage extends Common{
    constructor(){
        super();
        this.$item = () => $(`//a[@href="https://www.mydesignation.com/product/gojo-co-ords-set-for-men/"]/ancestor::div[@class="owl-item cloned"]`);
    }
    /**
     * click on product
     */
    async clickOnItem(){
        await this.$item().waitForClickable({timeout: 20000});
        await this.$item().click();
        await productPageObj.$productName().waitForDisplayed({timeout: 20000});
    }
}
export const homePage = new HomePage();