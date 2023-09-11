import Common from "./common_page.js";
import { homePage } from "./home_page.js";

class Cart extends Common {
    constructor() {
        super();
        this.$addCart = () => $(`//a[@class="shopping_cart_link"]`)
        this.$yourCart = () => $(`//span[text()="Your Cart"]`)

    }
    async clickOnAddToCartImage() {
        await this.$addCart().click();
    }

}

export const cartPage = new Cart();