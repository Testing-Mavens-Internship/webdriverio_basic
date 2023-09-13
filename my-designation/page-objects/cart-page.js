import Common from "./common-page.js";

class CartPage extends Common{
    constructor(){
        super()
        this.$checkOut = ()=>$('//div[@class="wc-proceed-to-checkout"]//a[@href="https://www.mydesignation.com/checkout/"]')
    }
    /**
     * Used to navigate to checkout
     */
    async proceedToCheckOut (){
        await this.$checkOut().scrollIntoView({block:'center'})
        await this.$checkOut().waitForClickable({timeout: 20000});
        await this.$checkOut().click();
    }
}
export const cartPage = new CartPage()