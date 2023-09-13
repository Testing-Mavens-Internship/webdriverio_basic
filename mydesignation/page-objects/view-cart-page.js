import CommonPage from "./common.js";

class ViewCartPage extends Common{
    constructor(){
        super();
        this.$verifyCartPage = () => $('//a[text()="Shopping Cart"]');
        this.$verifyProduct = (productName) => $(`//a[text()="${productName}"]`)
        this.$clickProceedCheckout = () => $('//a[@class="checkout-button button alt wc-forward"]')
    }
    /**
     * Method to click proceed checkout
     */
    async clickProceedCheckout(){
        await this.$clickProceedCheckout().waitForClickable(2000);
        await this.$clickProceedCheckout().click();
    }
}
export const viewCart = new ViewCartPage()