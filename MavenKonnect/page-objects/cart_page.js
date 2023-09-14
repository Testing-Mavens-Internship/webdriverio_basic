import Common from "./common.js";

class CartPage extends Common {
    constructor() {
            super();
            this.$cartFields = (name) => $(`//input[@id="${name}"]`);
            this.$continueToCheckoutButton = () =>
                $('//input[@value="Continue to checkout"]');
        }
        /**
         * 
         * @param {string} fullName 
         * @param {*string} emailId 
         * @param {*string} nameOncard 
         * @param {*string} address 
         * @param {*string} cardNumber 
         * @param {*string} city 
         * @param {*string} expMonth 
         * @param {*string} state 
         * @param {*string} zip 
         * @param {*string} expYear 
         * @param {*string} cvv 
         */
    async continueToCheckout(
        fullName,
        emailId,
        nameOncard,
        address,
        cardNumber,
        city,
        expMonth,
        state,
        zip,
        expYear,
        cvv

    ) {
        await this.$cartFields("fname").setValue(fullName);
        await this.$cartFields("email").setValue(emailId);
        await this.$cartFields("cname").setValue(nameOncard);
        await this.$cartFields("adr").setValue(address);
        await this.$cartFields("ccnum").setValue(cardNumber);
        await this.$cartFields("city").setValue(city);
        await this.$cartFields("expmonth").setValue(expMonth);
        await this.$cartFields("state").setValue(state);
        await this.$cartFields("zip").setValue(zip);
        await this.$cartFields("expyear").setValue(expYear);
        await this.$cartFields("cvv").setValue(cvv);
        await this.$continueToCheckoutButton().click();
        if (await browser.isAlertOpen()) {
            await browser.acceptAlert();

        }
        await this.$thankyouHeader().waitForDisplayed({ timeout: 1000 })
    }

}
export const cartPage = new CartPage()