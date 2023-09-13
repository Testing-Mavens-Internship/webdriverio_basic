import Common from "./common-page.js";
class BillingDetails extends Common{
    constructor(){
        super();

        this.$placeOrderButton=()=>$(`//button[text()="Place order"]`) // place order button
        this.$$billFormWarning=()=>$$(`//div[@class="box-content"]//strong`) // warning field common path for getText
        this.$billFormWarningFields=(warningMessage)=>$(`//div[@class="box-content"]//strong[text()="${warningMessage}"]`) //warning message for empty field
        this.$deliveryInstructions=()=>$(`//textarea[@id="order_comments"]`) // delivery instructions input field
        this.$inputFields=(input)=>$(`//input[@id="${input}"]`)


    }
    //function for clicking place order button
    async clickOnPlaceOrderButton()
    {
        await this.$placeOrderButton().scrollIntoView({block: 'center'});
        await this.$placeOrderButton().waitForClickable()
        await this.$placeOrderButton().click()
        await browser.pause(1000);
        


    }
    /**
     * function for inputing values in fields
     * @param {String} firstName 
     * @param {String} lastName 
     * @param {String} address1 
     * @param {String} address2 
     * @param {String} city 
     * @param {String} pinCode 
     * @param {String} phone 
     * @param {String} email 
     */
    async fillingInputFields(firstName,lastName,address1,address2,city,pinCode,phone,email){
        await this.$inputFields(firstName).setValue("Adhithya")
        await this.clickOnPlaceOrderButton()
        await this.$inputFields(lastName).setValue("Somaraj")
        await this.clickOnPlaceOrderButton()
        await this.$inputFields(address1).setValue("123 Main Street")
        await  this.clickOnPlaceOrderButton()
        await this.$inputFields(address2).setValue("abcd")
        await this.clickOnPlaceOrderButton()
        await this.$inputFields(city).setValue("Bangalore")
        await this.clickOnPlaceOrderButton()
        await this.$inputFields(pinCode).setValue("560001")
        await this.clickOnPlaceOrderButton()
        await this.$inputFields(phone).setValue("9876543210")
        await this.clickOnPlaceOrderButton()
        await this.$inputFields(email).setValue("abc@gmail.com")
        await this.clickOnPlaceOrderButton()
        
    }
}
export const billingDetailsPage=new BillingDetails()