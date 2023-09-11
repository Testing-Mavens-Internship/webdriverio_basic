import Common from '../page-objects/common.js';
class Checkout extends Common{
    constructor(){
        super();
        this.$checkOutProductname=()=>$(`//div[text()="Sauce Labs Fleece Jacket"]`) // name of product in checkout page
        this.$checkoutButton=()=>$(`//button[text()="Checkout"]`) //checkout button

    }
    //function for clicking checkout button
    async clickOnCheckoutButton()
    {
        await this.$checkoutButton().click()
        
    }

}
export const checkoutPage=new Checkout()