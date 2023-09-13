import { checkOut } from "./checkout-page.js";
import Common from "./common.js";
import { contactUs } from "./contactus-page.js";

class HomePage extends Common{
    constructor(){
        super();
        this.$contactUs = () => $('(//a[contains(text(),"Contact Us")])[2]');
        this.$cartIocn = () => $('//i[@class="fa fa-cart-plus"]')
    }
    /**
     * Method to click contact us button
     */
    async clickContactUs(){
        await this.$contactUs().click();
        await contactUs.$contactHeader().waitForDisplayed({timeout: 1000});
    }
    /**
     * Method to click cart icon
     */
    async clickCart(){
        await this.$cartIocn().click();
        await checkOut.$checkOutHeader().waitForDisplayed({timeout: 1000});
    }
}
export const homePage = new HomePage();