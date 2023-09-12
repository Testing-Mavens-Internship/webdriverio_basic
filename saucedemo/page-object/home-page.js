import Common from "./common.js";

class HomePage extends Common{
    constructor(){
        super();
        this.$clickFilter =() => $('//span[@class="select_container"]')
        this.$selectFilter =() => $('//option[text()="Price (high to low)"]')
        this.$addToCart = () => $('//a[@id="item_5_title_link"]/../following-sibling::div//button')
        this.$iconNotification = () => $('//span[text()="1"]')
        this.$cartIcon = () => $('//a[@class="shopping_cart_link"]') 
        
    }
   /**
    * applying filter
    */
    async filter(){
        await this.$clickFilter().click();
        await this.$selectFilter().click();
    }
    /**
     * click on addToCart button
     */
    async addToCart(){
        await this.$addToCart().click();
    }
    /**
     * click on the cart icon
     */
    async cartPage(){
        await this.$cartIcon().click();
    }
}
export const homePage = new HomePage()