import Common from "./common.js";

class Products extends Common {
    constructor() {
        super();
        this.$order = () => $ ('//option[text()="Price (high to low)"]');
        this.$$value = () => $$ (`//div[@class="inventory_item_price"]`);
        this.$cartButton = (button) => $ (`//button[@id="${button}"]`);
        this.$cart = () => $ ('//a[@class="shopping_cart_link"]');
        this.$yourCart = () => $ ('//span[text()="Your Cart"]');
    }

    async clickOnSort() {
        await this.$order().click();
        let price=[];
        let newPrice =[];
        price = await this.$$value().map(item => item.getText());
        newPrice = await price.map(item => item.replace("$"," ")).map(Number);
        //newPrice.sort(function (a, b) { return b - a });
        for(let i = 0; i<newPrice.length; i++){
            if (newPrice[i]>newPrice[i+1]) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    async ClickOnCart() {
        await this.$cartButton('add-to-cart-sauce-labs-backpack').click();
        await this.$cart().click();
    }

    async ClickCart() {
        await this.$cart().click();
    }
    
}

export const product = new Products();