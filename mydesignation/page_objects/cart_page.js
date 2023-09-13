import Common from "../page_objects/common.js";

class Cart extends Common {
    constructor() {
            super();
            this.$size = (size) => $(`//span[text()="${size}"]`)
            this.$addToCart = () => $(` //button[text()=" Add to cart "]`)
            this.$cartHeader = () => $(`//div[text()=" “Gojo Co-Ords Set for Men” has been added to your cart."]`) this.$cartContents = () => $(`//a[@class="cart-contents"]`) this.$checkOut = () => $(`//a[@class="checkout-button button alt wc-forward"]`) this.$billingHeader = () => $(`//h3[text()="Billing Details"]`);

        }
        /**
         * select the item and add to cart
         */
    async addToCart() {
            await this.$size('L').scrollIntoView({ block: 'center' })
            await this.$size('L').click();
            await this.$size('36').click();
            await this.$addToCart().click();
        }
        /**
         * Click on cart icon
         */
    async clickOnCartContents() {
        await this.$cartContents().click();
        await this.$checkOut().scrollIntoView({ block: 'center' })
        await this.$checkOut().click()
    }
}
export const cart = new Cart();