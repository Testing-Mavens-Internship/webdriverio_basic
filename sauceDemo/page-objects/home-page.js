import Common from "./commonFIle-page.js";
let array1=[];
let intArray = [];
let array2=[];
let priceOfProduct;
class HomePage extends Common {
  
  constructor() {
    super();
    this.$clickDropDown = () => $('//select[@class="product_sort_container"]');
    this.$sortDropDown = () =>$('//select[@class="product_sort_container"]/option[text()="Price (high to low)"]');
    this.$$price=()=>$$('//div[@class="inventory_item_price"]');
this.$addToCart=(productName)=>$(`//div[text()="${productName}"]//ancestor::div//div//button[text()="Add to cart"]`)
this.$verifyRemove=(a)=>$(`//div[text()="${a}"]/ancestor::div//button[text()="Remove"]`)
this.$priceOfItem=(product)=>$(`//div[text()="${product}"]/../../..//div[@class="inventory_item_price"]`)

  }

  async sortProducts() {
   
    await this.$clickDropDown().click();
    await browser.pause(2000)
    await this.$sortDropDown().click();
  
    
   array1= await this.$$price().map(item => item.getText())
   intArray = await array1.map(item => item.replace("$", "")).map(Number)

   for(let i=0;i<intArray.length;i++){
      
    if(intArray[i]>intArray[i+1]){
      return true
    }
    else{
      return false
    }
          }

  }
  /**
   * Add product to cart
   * @param {String} product 
   */
async addToCart(product){
//  priceOfProduct=await this.$priceOfItem(product).getText()
// priceOfProduct= await priceOfProduct.replace("$","")
//  priceOfProduct=await Number(priceOfProduct)
await this.$addToCart(product).click();

}
/**
 * click on the cart icon to navigate to the cart page
 */
async clickOnCartIcon(){
  await homePage.$cartIcon().click();
}
  }


export const homePage = new HomePage()