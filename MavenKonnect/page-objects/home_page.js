import Common from "./common.js";

class HomePage extends Common {
    constructor() {
            super();
            this.$contactUs = () => $('(//a[contains(text(),"Contact Us")])[2]');
            this.$cartButton = () => $('//i[@class="fa fa-cart-plus"]')

        }
        /** 
         * Click On Contact Us Button 
         * */
    async clickOnContactUs() {
        //await this.$contactUs().scrollIntoView({ block: 'center' });
        await this.$contactUs().click();
    }
    async clickOnCartButton() {
        await this.$cartButton().click();
    }
}
export const homePage = new HomePage();