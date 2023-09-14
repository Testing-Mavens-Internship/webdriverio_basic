let priceOfProduct
export default class Common {

    constructor() {
        this.$header = () => $('//div[text()="Swag Labs"]')
    this.$cartIcon =() =>$('//a[@class="shopping_cart_link"]') 
    this.$secondaryHeader=(name)=>$(`//span[text()="${name}"]`)
    this.$thankYouText=()=>$('//h2[text()="Thank you for your order!"]')
    }

    /**
     * Load url
     */
    async openUrl() {
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
        await this.$header().waitForDisplayed({ timeout: 2000 });
    }
 

}
