import Common from "./common.js";
class CartPage extends Common{
    constructor(){
        super();
        this.$cartIcon = () => $(`//i[@class="fa fa-cart-plus"]`);
        this.$successMessage = () =>$(`//h1[contains(text(),"Check Out karo")]`);
        this.$fillFields = (text) =>$(`//input[@name="${text}"]`);
        this.$checkOutButton = () => $(`//input[@value="Continue to checkout"]`);
    }
    /**
     * Method for clicking cart icon
     */
    async clickOnCartIcon() {
        await this.$cartIcon().click()
     }
     /**
      * Method for filling the billing address details
      * @param {string} firstName 
      * @param {string} email 
      * @param {string} address 
      * @param {string} city 
      * @param {string} state 
      * @param {string} zip 
      * @param {string} cardName 
      * @param {string} cardNumber 
      * @param {string} expiryMonth 
      * @param {string} expiryYear 
      * @param {string} cvv 
      */
     async fillDetails(firstName,email,address,city,state,zip,cardName,cardNumber,expiryMonth,expiryYear,cvv) {
        await this.$fillFields('firstname').setValue(firstName)
        await this.$fillFields('email').setValue(email)
        await this.$fillFields('address').setValue(address)
        await this.$fillFields('city').setValue(city)
        await this.$fillFields('state').setValue(state)
        await this.$fillFields('zip').setValue(zip)
        await this.$fillFields('cardname').setValue(cardName)
        await this.$fillFields('cardnumber').setValue(cardNumber)
        await this.$fillFields('expmonth').setValue(expiryMonth)
        await this.$fillFields('expyear').setValue(expiryYear)
        await this.$fillFields('cvv').setValue(cvv)
     }
     /**
      * Method for clicking check out button
      */
     async clickOnCheckOutButton() {
        await this.$checkOutButton().scrollIntoView({block : 'center'});
        await this.$checkOutButton().waitForClickable()
        await this.$checkOutButton().click()  
     }
}
export const cartPage = new CartPage() 