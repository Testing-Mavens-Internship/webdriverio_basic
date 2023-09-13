import CommonPage from "./common.js";

class CartPage extends CommonPage{
    constructor(){
        super();
        this.$checkOutProductname=()=>$(`//div[text()="Sauce Labs Fleece Jacket"]`) // name of product in checkout page
        this.$checkoutButton=()=>$(`//div[@class="wc-proceed-to-checkout"]`) //checkout button
        this.$billingHeader=()=>$(`//h3[text()="Billing Details"]`)

    }
    /**
     * function for clicking checkout button
     */
    
    async clickOnCheckoutButton()
    {
        await this.$checkoutButton().click()
        
    }
 }

export const cartPage = new CartPage() 