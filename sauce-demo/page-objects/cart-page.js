import Common from "./common-page.js";

class Cart extends Common{
    constructor(){
        super()
        this.$route = () => $('//a[@class="shopping_cart_link"]')
        this.$verify = (price) => $(`//div[@class="item_pricebar"]//div[text()="${price}"]`)
    }
    async navigateToCart(){
        await this.$route().click()
    }
}
export const cartPage = new Cart()