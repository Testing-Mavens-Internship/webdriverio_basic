import Common from "./common.js";

class PaymentPage extends Common{
    constructor(){
        super();
        this.$cartIcon = () => $('//i[@class="fa fa-cart-plus"]')
        this.$checkOutHeader = () => $('//h1[contains(text(),"Check Out karo !")]')
        this.$paymentInput =(value) => $(`//input[@name="${value}"]`)
        this.$checkOutButton = () => $('//input[@class="btn"]')
    }
    /**
     * Method to click on the cart icon
     */
    async clickOnCartIcon(){
        await this.$cartIcon().click();
    }
    /**
     * Method to enter the payment details in the field
     * @param {string} fullName 
     * @param {string} email 
     * @param {string} address 
     * @param {string} city 
     * @param {string} state 
     * @param {string} zip 
     * @param {string} cardname 
     * @param {string} cardnuber 
     * @param {string} expiryMonth 
     * @param {string} expiryYear 
     * @param {string} cvv 
     */
    async fillPaymentDetails(fullName,
        email,
        address,
        city,
        state,
        zip,
        cardname,
        cardnuber,
        expiryMonth,
        expiryYear,
        cvv){
        await this.$paymentInput("firstname").setValue(fullName);
        await this.$paymentInput("email").setValue(email);
        await this.$paymentInput("address").setValue(address);
        await this.$paymentInput("city").setValue(city);
        await this.$paymentInput("state").setValue(state);
        await this.$paymentInput("zip").setValue(zip);
        await this.$paymentInput("cardname").setValue(cardname);
        await this.$paymentInput("cardnumber").setValue(cardnuber);
        await this.$paymentInput("expmonth").setValue(expiryMonth);
        await this.$paymentInput("expyear").setValue(expiryYear);
        await this.$paymentInput("cvv").setValue(cvv);
        await this.$checkOutButton().scrollIntoView({block:'center'});
        await this.$checkOutButton().click();
    }
}
export const paymentPage = new PaymentPage()