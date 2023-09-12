import CommonPage from "./common-page.js";

class HomePage extends CommonPage{
    constructor(){
        super();
    
      this.$filterSelect=(filterValue)=>$(`//option[text()="${filterValue}"]`);
      this.$$priceOfItems=()=>$$(`//div[@id="inventory_container"]//div[@class="inventory_item_price"]`);
      this.$addToCart=()=>$(`//div[text()="49.99"]/../button[text()="Add to cart"]`);
      this.$remove=()=>$(`//div[text()="49.99"]/../button[text()="Remove"]`);
      this.$cartIcon=()=>$(`//span[@class="shopping_cart_badge"]`);
      this.$selectedCartItemName=()=>$(`//div[text()="Sauce Labs Fleece Jacket"]`) ;      
      this.$thankYouTitle=()=>$(`//h2[text()="Thank you for your order!"]`);
      this.$priceField = (type) => $(`//div[contains(text(),'${type}')]`);
      this.$totalPrice = () => $(`//div[@class="summary_info_label summary_total_label"]`);
      this.$price = (type) =>$(`//div[contains(text(),"${type}")]/../../following-sibling::div//div`)
    }
    //filter selection
    /**
     * 
     * @param {String} hightoLow 
     */
    async sort(hightoLow){
        await this.$filterSelect(hightoLow).click()
    }
    // sorting out the highest price product
    async sortValidation(){
        let priceArray=[];
        priceArray=await this.$$priceOfItems().map(item=>item.getText())
      let  price=priceArray.map((item)=>item.replace('$',''))
      price.sort((a, b) => b - a);
      let priceArr = price.map((str) => parseInt(str, 10));
      for(let i=0;i<=priceArr.length;i++)
      {
        if(priceArr[i]>priceArr[i+1])
        {
            return true
        }
            else
            {
                return false
            }
            
      }
        console.log(priceArr);
    }
    async clickOnAddToCart()
    {
        await this.$addToCart().click()
    }
    async clickOnCartIcon()
    {
        await this.$cartIcon().click()
    }
}
export const homePage = new HomePage() 