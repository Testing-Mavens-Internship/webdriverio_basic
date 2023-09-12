import CommonPage from "./common-page.js";

class CartPage extends CommonPage{
    constructor(){
        super();
        this.$listedProduct =(product) => $(`//div[contains(text(),'${product}')]/ancestor::div[@class="cart_item"]`);

    }
async clickOnCheckout(){
    await this.$button('Checkout').click();
    // await this.$header('Checkout: Your Information').waitForDisplayed({ timeout : 2000 });
}

}

export const cartPage = new CartPage();