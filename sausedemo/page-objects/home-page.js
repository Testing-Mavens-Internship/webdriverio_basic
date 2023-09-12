import CommonPage from "./common-page.js";
let originalPrice = 0;
class LandingPage extends CommonPage {
  constructor() {
    super();
    this.$sort = () => $('//select[@class="product_sort_container"]//option[@value="hilo"] ');
    this.$$sortPrice = () => $$('//div[@class="inventory_item_price"]');
    this.$clickAddToCart = (product) => $(`//div[text()="${product}"]//ancestor::div//div//button[text()="Add to cart"]`);
    this.$getPrice = (product) => $(`//div[text()="${product}"]/../../..//div[@class="inventory_item_price"]`);
    this.$verifyRemove = (product) => $(`//div[text()="${product}"]//ancestor::div//button[text()="Remove"]`);
    this.$clickCart = () => $('//a[@class="shopping_cart_link"]');
   
    
  }
  /**
   * to sort price highest to lowest
   */
  async clickSort() {
    let price=[];
    let newPrice =[]; 
    await this.$sort().click();
    price = await this.$$sortPrice().map(item => item.getText());
    await this.$sort().waitForDisplayed({ timeout: 5000 });
    newPrice = await price.map(item => item.replace("$","")).map(Number) 
    for(let i=0;i<newPrice.length;i++){
            if(newPrice[i]>newPrice[i+1]){
                return true;
            }
            else {
                return false;
            }
        }
  }
  /**
   * pass the product to be purchased
   * @param {string} product 
   */

  async clickOnAddToCart(product){
    await this.$clickAddToCart(product).click();
    //await this.$verifyRemove().waitForDisplayed({ timeout: 5000 });
  }

  async productPrice(product){
    originalPrice= await this.$getPrice(product).getText();
    originalPrice = originalPrice.replace("$","");
    originalPrice = Number(originalPrice);
    return originalPrice;
  }
  /**
   * click cart icon
   */
  async clickCart(){
    await this.$clickCart().click();
  }
 
}   

export const landingPage = new LandingPage();
