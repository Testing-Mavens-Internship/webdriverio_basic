import Common from "./common-page.js";

class ProductPage extends Common{
constructor(){
    super();
    this.$productPageHeading=(name)=>$(`//div[@class="summary entry-summary"]/h1[text()="${name}"]`)
    this.$sizeOfProduct=(size)=>$(`//span[text()="${size}"]`)
    this.$addToCartButton=()=>$('//button[text()=" Add to cart "]')
}
async addToCart(a,b){

}
}

export const productPage= new ProductPage()