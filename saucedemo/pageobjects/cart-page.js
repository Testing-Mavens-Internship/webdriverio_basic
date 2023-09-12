import Common from "./common.js";

class cartPage extends Common{
    constructor () {
        super();
        this.$checkout = () => $ ('//button[@id="checkout"]');
        this.$info = () => $ ('//span[text()="Checkout: Your Information"]');
        this.$continue = (value) => $ (`//input[@id="${value}"]`);
        this.$overview = () => $ ('//span[text()="Checkout: Overview"]')
    }
    
    /**
     * Click on the checkout button
     */
    async clickOnCheckout () {
        await this.$checkout().click();
        await browser.pause(2000);
    }

    /**
     * Enter values in text box
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} zipcode 
     */

    async fillForm(firstName, lastName, zipcode) {
        await this.$continue('first-name').setValue(firstName);
        await this.$continue('last-name').setValue(lastName);
        await this.$continue('postal-code').setValue(zipcode);
        
      }

      /**
       * Click on continue button
       */
      async clickOnContinue () {
        await this.$continue('continue').click();
        await browser.pause(2000);
      }

}

export const cart = new cartPage();