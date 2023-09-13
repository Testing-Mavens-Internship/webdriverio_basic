import Common from "../../myDesignation/page-objects/common.js";
class CheckoutPage extends Common{
    constructor(){
        super();
        this.$pageHeader = () => $(`//h3[text()="Billing Details"]`);
        this.$placeOrderButton = () => $(`//button[text()="Place order"]`);
        this.$input = (field) => $(`//input[@name="${field}"]`);
        this.$$warningMessages = () => $$(`//div[@class="box-content"]//strong`);
        this.$warningMessageBox = () => $(`//div[@class="box-content"]`);
        this.$warning = (message) => $(`//div[@class="box-content"]//strong[text()="${message}"]`);
    }

    /**
     * enter first name
     */
    async enterFirstName(){
        await this.$input('billing_first_name').setValue('Saifu');
        await this.placeOrder();
    }

    /**
     * enter last name
     */
    async enterLastName(){
        await this.$input('billing_last_name').setValue('jp');
        await this.placeOrder();
    }


    /**
     * click on place order button
     */
    async placeOrder(){
        await this.$placeOrderButton().scrollIntoView();
        await this.$placeOrderButton().waitForClickable({timeout: 20000});
        await this.$placeOrderButton().click();
        await this.$warningMessageBox().waitForDisplayed({timeout: 20000});
    }

    /**
     * warning message validation
     */
    async warningValidation(){
        let warnings = []; 
        warnings = await this.$$warningMessages().map(item => item.getText());
        console.log(warnings);
    }
}
export const checkoutPageObj = new CheckoutPage();