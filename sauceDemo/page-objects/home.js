import Common from "./common-page.js";
class Home extends Common{
    constructor ()
    {
        super();
        this.$header = () => $('//div[@class ="app_logo"]');
        this.$clickOnFilterHiLo = () =>$('//select[@class ="product_sort_container"]//option[@value = "hilo"]');
        this.$clickOnAddToCarts = () =>$('//button[@id = "add-to-cart-sauce-labs-fleece-jacket"]');
        this.$removeFromCart = () =>$('//button [@id = "remove-sauce-labs-fleece-jacket"]');
        this.$clickOnCart = () =>$('//a[@class ="shopping_cart_link" ]');
        this.$$getPrice = () =>$$(`//div[@class ="inventory_item_price"]`)
    }
    /**
     * Click on the filter to high to low 
     */
    async useFilter(){
        //Sawait this.$clickOnFilterHiLo().waitForClickable();
        await this.$clickOnFilterHiLo().click();
    }
    /**
     * Click on the add to cart button 
     */
    async clickOnAddToCart(){
        await this.$clickOnAddToCarts().click();
    }
    async sortCheck(){
        let array = [];
        array = await this.$$getPrice().map(item=>item.getText())
        
        let arrayNew = [];
        parseInt(arrayNew) =map(item=>item.getText())
        array.replace("$","");
        
    }
    /**
     * Click on the cart icon present in the top right corner
     */
    async clickOnCartIcon(){
        await this.$clickOnCart().click();
    }
}
export const home = new Home()