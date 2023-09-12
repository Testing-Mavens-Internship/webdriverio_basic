import CommonPage from "./common-page.js";

class ProductDetailsPage extends CommonPage{
    constructor(){
        super();
        this.$tShirtSize = (tShirt) => $(`//div[@Class="variations"]//div[@class="thwvsf_fields"]//span[text()="${tShirt}"]`);
        this.$shortsSize = (shorts) => $(`//div[@Class="variations"]//div[@class="thwvsf_fields"]//span[text()="${shorts}"]`);
        this.$addToCartButton = () => $('//button[@class="single_add_to_cart_button button alt"]');
        this.$verifyAddToCart = (product) => $(`//div[contains(text(),"${product}")]`)
        this.$clickViewCart = () => $('//a[text()="View cart"]')
      }
    async selectSize(tShirt,shorts){
        await this.$tShirtSize(tShirt).click();
        if(shorts != 0){
        await this.$shortsSize(shorts).click();
        }
        await this.$addToCartButton().waitForClickable(2000);
    }
    async clickAddToCart(productName){
        await this.$addToCartButton().click();
        await this.$verifyAddToCart(productName).waitForClickable(5000);
    }
    async clickViewCart(){
        await this.$clickViewCart().click();
    }
}
export const productDetails = new ProductDetailsPage()