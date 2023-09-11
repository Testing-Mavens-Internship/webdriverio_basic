import Common from "./common-page.js";

class Home extends Common{
    constructor(){
        super();
        this.$cart = (cost)=>$(`//div[text()="${cost}"]/..//button`)
        this.$verify = (cost)=>$(`//div[text()="${cost}"]/..//button[text()="Remove"]`)
        this.$select = ()=>$('//select')
        this.$selectHighToLow = () => $('//select//option[text()="Price (high to low)"]')
        this.$$price=()=>$$('//div[@class="inventory_item_price"]');
     }
     async sortProductPrice(){
        let array1= await this.$$price().map(item => item.getText())
        let array2=array1.map(item=>item.replace('$',''))
        array2.sort((a, b) => b - a)
        let priceArray = array2.map(str=>parseFloat(str))
        return Math.max(...priceArray)
     }
     async addProductToCart(){
        await this.$select().click()
        await this.$selectHighToLow().click()
        // let array1= await this.$$price().map(item => item.getText())
        // let array2=array1.map(item=>item.replace('$',''))
        // array2.sort((a, b) => b - a)
        // let priceArray = array2.map(str=>parseFloat(str))
        let value = await this.sortProductPrice()
        await this.$cart(value).click()
        return value
     }
    //  async addProductToCart(product="Sauce Labs Backpack"){
    //     let value=this.sort()
    //     await this.$cart(sort()).click()
    //     await this.$verify(product).waitForDisplayed({timeout:20000})
    //  }
     
}

export const homePage = new Home()