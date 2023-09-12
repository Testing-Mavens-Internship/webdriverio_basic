import Common from "./common.js";

class CartPage extends Common{
    constructor(){
        super();
        this.$cartHeader = () => $('//span[text()="Your Cart"]')
        this.$checkoutForm = () => $('//div[@class="checkout_info"]')
        this.$continueButton = () => $('//input[@id="continue"]')
        this.$cartItem =()=> $('//div[@class="cart_item"]')
        this.$cartItemPrice =() => $('//div[@class="inventory_item_price"]')
        this.$overviewPrice = (value) => $(`//div[@class="${value}"]`)
        this.$homeButton = () => $('//button[text()="Back Home"]')
    }
    /**
     * click on checkout button
     */
    async checkout(){
        await this.$clickButton("Checkout").click();
        
    }
    /**
     * enter the details in the form
     */
    async fillForm(){
        await this.$credential("first-name").setValue("Aparna")
        await this.$credential("last-name").setValue("Udayan")
        await this.$credential("postal-code").setValue("123456")
        await this.$continueButton().click();
    }
    /**
     * verifying the price of the product is same as the product in the cart
     * @returns true
     */
    async verifyPrice(){
        let itemPrice = this.$price().getText();
        let cartItemPrice = this.$cartItemPrice().getText();
        if(itemPrice==cartItemPrice){
            return true;
        }
        let taxPrice = this.$overviewPrice("summary_tax_label").getText();
        let price =cartItemPrice + taxPrice;
        let totalPrice = this.$overviewPrice("summary_info_label summary_total_label").getText();
        if(totalPrice==price){
            return true;
        }
    }
    /**
     * click on finish button 
     */
    async finishButton(){
        await this.$clickButton("Finish").click();
    }
}

export const cartPage = new CartPage()