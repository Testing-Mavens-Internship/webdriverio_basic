class BillingPage{
    constructor(){
        this.$input=(value)=>$(`//input[contains(@id,"${value}")]`);
        this.$placeOrder=()=>$(`//button[@id="place_order"]`);
        // this.$dropDownState=()=>$(`//span[@aria-label="State"]`);
        this.$state = () => $(`//label[@for="billing_state"]/following-sibling::span//select//option[contains(.,"Goa")]`);
        this.$numberError=()=>$(`//ul/li[text()="The Phone Number should contain only 10 digits."]`);
        this.$errorDisplay=(value)=>$(`//ul/li/strong[contains(.,"${value}")]`);
       
    }
    /**
     * Click on Placeorder
     */
    async placeOrder(){
        await this.$placeOrder().scrollIntoView({block: 'center'});
        await this.$placeOrder().click();
        await this.$numberError().waitForDisplayed({ timeout :2000});
    }
    /**
     * Entering the Input Fields
     */
    async inputFields(){
        await this.$input("first_name").setValue("Patrick");
        await this.placeOrder();

        await this.$input("last_name").setValue("Batman");
        await this.placeOrder();
         
        await this.$input("billing_address_1").setValue("House number 22 gandhinagar second street");
        await this.placeOrder();

        await this.$input("city").setValue("Gotham");
        await this.placeOrder();

       
        await this.$state().scrollIntoView({block: 'center'});
        await this.$state().click();
        await this.placeOrder();

        await this.$input("billing_postcode").setValue(855978);
        await this.placeOrder();


    }
}
export const billingPage=new BillingPage();
