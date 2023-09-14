import Common from "./common-page.js";

class Home extends Common{
    constructor(){
        super();
        this.$contactUs = ()=>$('(//a[contains(text(),"Contact Us")])[2]')
        this.$cartIcon = ()=>$('//i[@class="fa fa-cart-plus"]')
    }
    /**
     * Navigate to contact us page
     */
    async navigateToContactPage(){
        await this.$contactUs().click()
    }
    /**
     * Navigate to cart page
     */
    async clickOnCartButton(){
        await this.$cartIcon().click()
    }
}
export const homePage = new Home();