import Common from "../page_objects/common_page.js"

class HomePage extends Common {
    constructor() {
            super();
            this.$sort = () => $(`//option[@value="hilo"]`)
            this.$$price = () => $$(`//div[@class="inventory_item_price"]`)
            this.$productPrice = () => $(`//div[text()='49.99']`)
        }
        /**
         * 
         * Sort the Products
         */
    async priceSort() {
            await this.$sort().click();
            let price = [];

            price = await this.$$price().map(item => item.getText());
            let newPrice = [];
            newPrice = await price.map(item => item.replace("$", " ")).map(Number)
                //newPrice === newPrice.sort((a, b) => b - a);//descending order
            for (let i = 0; i < newPrice.length; i++) {
                if (newPrice[i] > newPrice[i + 1]) {
                    return (true)
                } else {
                    return (false)
                }
            }

        }
        /**
         * Add the products to the cart
         */
    async clickOnAddToCart() {
        await this.$addButton('add-to-cart-sauce-labs-fleece-jacket').click()
    }

}
export const homePage = new HomePage();