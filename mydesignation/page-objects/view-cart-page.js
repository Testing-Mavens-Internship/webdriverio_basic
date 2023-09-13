import CommonPage from "./common-page.js";

class ViewCartPage extends CommonPage{
    constructor(){
        super();
        this.$verifyCartPage = () => $('//a[text()="Shopping Cart"]');
        this.$verifyProduct = (productName) => $(`//a[text()="${productName}"]`)
        this.$clickProceedCheckout = () => $('//a[@class="checkout-button button alt wc-forward"]')
    }
    /**
     * click proceed checkout
     */
    async clickProceedCheckout(){
        await this.$clickProceedCheckout().waitForClickable(2000);
        await this.$clickProceedCheckout().click();
    }
}
export const viewCart = new ViewCartPage()