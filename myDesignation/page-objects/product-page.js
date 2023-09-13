import Common from "./common-page.js";

class ProductPage extends Common{
constructor(){
    super();
    this.$productPageHeading=(name)=>$(`//div[@class="summary entry-summary"]/h1[text()="${name}"]`)
    this.$sizeOfProduct=(size)=>$(`//span[text()="${size}"]`)
    this.$addToCartButton=()=>$('//button[text()=" Add to cart "]')
    this.$cartIcon=()=>$('//li[@class="menu-item menu-item-cart"]/a')
    
}
/**
 * Adds a product to cart after gining size
 * @param {String} a 
 * @param {String} b 
 */
async addToCart(a,b){
await this.$sizeOfProduct(a).click();
await this.$sizeOfProduct(b).click();
await this.$addToCartButton().scrollIntoView()
await this.$addToCartButton().waitForClickable({ timeout: 2000 });
await this.$addToCartButton().click();
await browser.pause(2000)
await this.$cartIcon().scrollIntoView()
await this.$cartIcon().waitForClickable({ timeout: 2000 });
await this.$cartIcon().click()
}
}

export const productPage= new ProductPage()