import Common from "./common_page.js";
import { homePage } from "./home_page.js";

class Cart extends Common {
    constructor() {
            super();
            this.$addCart = () => $(`//a[@class="shopping_cart_link"]`)
            this.$yourCart = () => $(`//span[text()="Your Cart"]`)
            this.$verifySelectedItem = () => $(`//div[text()="Sauce Labs Fleece Jacket"]/..//../..`)
            this.$checkout = () => $(`//button[text()="Checkout"]`)
            this.$header2 = () => $(`//span[text()="Checkout: Your Information"]`)

        }
        /**
         * click on cart image 
         */
    async clickOnAddToCartImage() {

            await this.$addCart().click();
            //$yourCart().waitForDisplayed({ timeout: 3000 })
            await browser.pause(3000)
        }
        /**
         * click on checkout button and verify users information adding form is dispalyed
         */
    async clickOnCheckoutButton() {
        await this.$checkout().scrollIntoView({ block: 'center' });
        await this.$checkout().click();

    }

}

export const cartPage = new Cart();