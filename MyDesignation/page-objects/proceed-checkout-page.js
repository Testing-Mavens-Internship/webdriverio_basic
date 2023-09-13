import Common from "./common-page.js";

class ProceedCheckout extends Common{
    constructor(){
        super()
        this.$clickToProceedButton=()=>$(`//div[@class="wc-proceed-to-checkout"]//a`)// click to proceed button
        this.$billingDetailsHeading=()=>$(`//h3[text()="Billing Details"]`) // billing details heading
        this.$detailedAddressMessage=()=>$(`//div[@class="col-md-12 col-xs-12"]//p`) // heading above the address form

    }
    async clickOnProceedCheckout(){
        await this.$clickToProceedButton().scrollIntoView({block: 'center'});
        await this.$clickToProceedButton().click()
        await browser.pause(3000);

    }
}
export const proceedCheckout=new ProceedCheckout()