import Common from '../page-objects/common.js';
class CheckoutOverview extends Common{
    constructor(){
        super();
        this.$finishButton=()=>$(`//button[text()="Finish"]`)
    }   
    async clickOnFinish()
    {
        await this.$finishButton().click()
        await browser.pause(3000);
    }
}
export const checkoutOverview=new CheckoutOverview()