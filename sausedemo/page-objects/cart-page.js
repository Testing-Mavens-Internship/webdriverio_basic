import CommonPage from "./common-page.js";

class CartPage extends CommonPage{
    constructor(){
        super();
        
        this.$cartProduct = (product) => $(`//a[@href="#"]//div[text()="${product}"]`)
        this.$clickCheckout = () => $('//button[text()="Checkout"]')
    }
    /**
     * click checkout button
     */
    async clickCheckout(){
        await this.$clickCheckout().click();
      }
}

export const cartPage = new CartPage()