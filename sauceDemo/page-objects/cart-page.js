import CommonPage from "./common-page.js";

class CartPage extends CommonPage{
    constructor(){
        super();
        this.$listedProduct =(product) => $(`//div[contains(text(),'${product}')]/ancestor::div[@class="cart_item"]`);
        
    }


}

export const cartPage = new CartPage();