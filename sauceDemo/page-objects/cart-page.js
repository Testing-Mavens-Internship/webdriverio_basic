import Common from "./common-page.js";
class CartPage extends Common{
    constructor(){
        super();
        this.$cartHeader= () =>$('//span[@class = "title"]'); 
        this.$checkOutHeader = () =>$('//span[@class = "title"]')
        this.$checkOutButton = () =>$('//button[@id="checkout"]');        
    }
    /**
     * click on the Checkout button
     */
    async checkOut(){
        await this.$checkOutButton().click();
        
    }
}

export const cart = new CartPage()