import { checkoutPageObj } from "../../myDesignation/page-objects/checkout-page.js";
import Common from "../../myDesignation/page-objects/common.js";
class ProductPage extends Common{
    constructor(){
        super();
        this.$productName = () => $(`//h1[text()="Gojo Co-Ords Set for Men"]`);
        this.$size = (sizeValue) => $(`//span[text()="${sizeValue}"]`);
        this.$addCart = () => $(`//button[text()=" Add to cart "]`);
        this.$added = () => $(`//div[contains(text()," added to your cart.")]`);
        this.$cart = () => $(`//a[text()="View cart"]`);
        this.$checkoutButton = () => $(`//a[@class="checkout-button button alt wc-forward"]`);
        this.$itemInCart = () => $(`//a[text()="Gojo Co-Ords Set for Men"]`);
    }

    /**
     *select size and add to cart
     */
    async addToCart(){
        await this.$size("M").click();
        await this.$size("34").click();
        await this.$addCart().scrollIntoView({block: 'center'});
        await this.$addCart().waitForClickable({timeout: 20000});
        await this.$addCart().click();
        await this.$added().waitForDisplayed({timeout: 20000});
    }

    /**
     * view cart
     */
    async viewCart(){
        await this.$cart().click();
        await this.$checkoutButton().scrollIntoView({block: 'center'});
        await this.$checkoutButton().waitForDisplayed({timeout: 20000});
    }

    /**
     * click on proceed to checkout
     */
    async clickOnCheckout(){
        await this.$checkoutButton().scrollIntoView({block: 'center'});
        await this.$checkoutButton().waitForClickable({timeout: 20000});
        await this.$checkoutButton().click();
        await checkoutPageObj.$pageHeader().waitForDisplayed({timeout: 20000});
    }
}
export const productPageObj = new ProductPage();