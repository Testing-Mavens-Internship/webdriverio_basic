import CommonPage from "./common-page.js";

class LandingPage extends CommonPage {
  constructor() {
    super();
    this.$sort = () => $('//select[@class="product_sort_container"]//option[@value="hilo"] ');
    this.$$sortPrice = () => $$('//div[@class="inventory_item_price"]');
    this.$clickCart = (product) => $(`//div[text()="${product}"]//ancestor::div//div//button[text()="Add to cart"]`)
    this.$$getPrice = (product) => $$(`//div[text()="${product}"]/../../..//div[@class="inventory_item_price"]`)
    this.$verifyRemove = (product) => $(`//div[text()="${product}"]//ancestor::div//button[text()="Remove"]`)
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

  async clickOnAddToCart(product){
    await this.$clickCart(product).click();
    //let productprice = await this.$$getPrice().map(item => item.getText());

  }
  
}   

export const landingPage = new LandingPage();
