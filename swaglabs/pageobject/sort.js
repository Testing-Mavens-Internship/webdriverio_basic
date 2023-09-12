import LoginPage from "./common.js";

class Sort extends LoginPage{
    constructor()
    {
        super();
        this.$sortButton=()=>$(`//select[@class="product_sort_container"]`);
        this.$sortHightoLow=()=>$('//select/option[@value="hilo"]');
         this.$$priceOfItems = () => $$(`//div[@class="inventory_container"]//div[@class="inventory_item_price"]`);
        this.$itemPrice = () => $(`//div[contains(text(),"Backpack")]/..//..//..//div[@class="inventory_item_price"]`);
        this.$item1 = () => $(`//a//div[text()="Sauce Labs Backpack"]`);
        this.$addCart = () => $(`//div[contains(text(),"Backpack")]/..//..//..//button`);
        this.$cart = () => $(`//div//a[contains(@class,"shopping_cart")]`);
        this.$button = (buttonName) => $(`//button[text()="${buttonName}"]`);
    }
    /**
     * For the sorting purpose
     */
    async sorting(){
        await this.$sortButton().click();
        await this.$sortHightoLow().click();
    
    }
        /**

     * add to cart

     */

    async addToCart() {

        await this.$addCart().click();

        await this.$button("REMOVE").waitForDisplayed({ timeout: 20000 });

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
}

export const sort=new Sort();