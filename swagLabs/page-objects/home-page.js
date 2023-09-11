import Common from "./common.js";
class HomePage extends Common {
    constructor() {
        super();
        this.$item = () => $(`//div[contains(text(),"Backpack")]`);
        this.$sortMenu = () => $(`//span//select[contains(@class,"sort")]`);
        this.$sort = () => $(`//span//select//option[text()="Price (high to low)"]`);
        this.$$priceOfItems = () => $$(`//div[@class="inventory_container"]//div[@class="inventory_item_price"]`);
        this.$itemPrice = () => $(`//div[contains(text(),"Backpack")]/..//..//..//div[@class="inventory_item_price"]`);
        this.$item1 = () => $(`//a//div[text()="Sauce Labs Fleece Jacket"]`);
        this.$addCart = () => $(`//div[contains(text(),"Backpack")]/..//..//..//button`);
        this.$remove = () => $(`//button[text()="Remove"]`);
        this.$cart = () => $(`//div//a[contains(@class,"shopping_cart")]`);
    }

    /**
     * sort the products in price high to low
     */
    async sortProducts() {
        await this.$sortMenu().click();
        await this.$sort().click();
        await this.$item1().waitForDisplayed({ timeout: 20000 });
    }

    /**
     * add to cart
     */
    async addToCart() {
        await this.$addCart().click();
        await this.$remove().waitForDisplayed({ timeout: 20000 });
    }

    /**
     * validate sorting
    */
    async sortingValidation() {
        let priceArray = [];
        priceArray = await this.$$priceOfItems().map(item => item.getText());
        console.log(priceArray);
        let arrayPrice = [];
        arrayPrice = priceArray.map(item => item.replace("$",""));
        let price = [];
        for(let j=0;j<priceArray.length;j++){
            price.push(parseInt(arrayPrice[j]));
        }
        console.log(price);
        for(let i=0;i<price.length;i++){
            if(price[i]>price[i+1]){
                return true;
            }
            else {
                return false;
            }
        }
    }

    /**
     * verifying item price is same
     */
    async verifyPrice(){
        let priceOfItem = await this.$itemPrice().getText();
        
    }
}
export const homePage = new HomePage();