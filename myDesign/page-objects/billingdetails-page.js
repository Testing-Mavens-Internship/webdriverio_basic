import CommonPage from "../page-objects/common-page.js";

class BillingPage extends CommonPage{
    constructor(){
        super();
        this.$billing = () => $('//h3[text()="Billing Details"]');
        this.$placeOrder = () => $('//button[text()="Place order"]');
        //this.$errorMessage = (error) => $(`//strong[text()="${error}"]`);
        this.$errorMessages = (name) => $(`//li[text()= "The Phone Number should contain only 10 digits."or(text()=" is a required field." and strong[text()="${name}"] )]`);
        this.$eachErrorMessage = (error) => $(`//strong[text()="${error}"]`);
        this.$inputValues = (input) => $(`//div[@class="woocommerce-billing-fields__field-wrapper"]//input[@id="${input}"]`); 
    }
    /**click on place order
     */
     async clickOnPlaceOrder(){
        await this.$placeOrder().scrollIntoView({ block : 'center'});
        await this.$placeOrder().waitForClickable(5000);
        await this.$placeOrder().click();
     }
     /**enter input values */
     async enterInputValues(firstName){
            await this.$inputValues("billing_first_name").setValue(firstName);
            await this.$placeOrder().click();
     }
        /**
     * set last name
     * @param {string} lastName
     */

    async fillLastName(lastName){
        await this.$inputValues("billing_last_name").setValue(lastName);

    }

    /**
     * set street address and appartment
     * @param {string} streetAddress
     * @param {string} appartment
     */

    async fillStreetAddress(streetAddress,appartment){
        await this.$inputValues("billing_address_1").setValue(streetAddress);
        await this.$inputValues("billing_address_2").setValue(appartment);

    }

    /**
     * set town
     * @param {string} town
     */

    async fillTown(town){
        await this.$inputValues("billing_city").setValue(town);

    }

    async fillState(state){
        await this.$verifyStateErrorMessage(state).click();

    }

    /**
     * set pincode
     * @param {Number} pinCode
     */

    async fillPinCode(pinCode){
        await this.$inputValues("billing_postcode").setValue(pinCode);

    }

    /**

     * set mobile number
     * @param {Number} phone
     */

    async fillPhone(phone){
        await this.$inputValues("billing_phone").setValue(phone);

    }

    /**
     * set email
     * @param {string} email 
     */

    async fillEmail(email){
        await this.$inputValues("billing_email").setValue(email);

    }
    }
        
export const billingPage = new BillingPage()