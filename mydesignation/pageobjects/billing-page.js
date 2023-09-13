class BillingPage{
    constructor(){
        /**elements */
        this.$billingHeader = () =>$('//h3[text()="Billing Details"]');
        this.$placeOrderButton = () => $('//button[@value="Place order"]')
    }

    async clickOnPlaceOrderButton(){
        await this.$placeOrderButton().scrollIntoView();
        await this.$placeOrderButton().click()
    }
}
export const billingPage=new BillingPage();