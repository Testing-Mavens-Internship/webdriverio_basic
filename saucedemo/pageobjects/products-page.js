import Common from "./common.js";

class Products extends Common {
    constructor() {
        super();
        this.$order = () => $ ('//option[text()="Price (high to low)"]');
        this.$$value = () => $$ (`//div[@class="inventory_item_price"]`);
        this.$cartButton = (button) => $ (`//button[@id="${button}"]`);
        this.$cart = () => $ ('//a[@class="shopping_cart_link"]');
        this.$yourCart = () => $ ('//span[text()="Your Cart"]');
        this.$value1 = () => $ (`//div[@class="inventory_item_price"]`);
        
    }

    /**
     * 
     * Click on sort button and comaprison
     */
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

    /**
     * Click on add to cart button
     */
    async ClickOnCart() {
        await this.$cartButton('add-to-cart-sauce-labs-backpack').click();
        await this.$cart().click();
        await browser.pause(2000);
    }

    /**
     * Click on cart icon
     */
    async ClickCart() {
        await this.$cart().click();
        await browser.pause(2000);
    }

    /**
     * To get value of the selected product
     * @param {string} p 
     */
    async price(p) {
        let price1=[];
        price1 = await this.$value1(p).getText();
        price1 = await price1.replace("$", "");
        price1 = await Number(price1);
        return price1;
    
      }
    
 }
    
export const product = new Products();