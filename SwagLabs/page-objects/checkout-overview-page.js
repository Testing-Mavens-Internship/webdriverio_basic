import Common from '../page-objects/common.js';
class CheckoutOverview extends Common{
    constructor(){
        super();
        this.$finishButton=()=>$(`//button[text()="Finish"]`) //finish button
        this.$$totalPriceOfItem=()=>$$(`//div[@class="summary_info_label summary_total_label"]`)// total price of the item
        this.$$taxOfItem=()=>$$(`//div[text()="4.00"]`)// tax price of item
        this.$$itemPrice=()=>$$(`//div[@class="summary_subtotal_label"]`)// price of item
    }   
    async clickOnFinish()
    {
        await this.$finishButton().click()
        await browser.pause(3000);
    }
    async priceCalculation()
    {
        /**
         * Getting the total price, tax price and item price
         */
        let totalPrice=0;
        let taxPrice=0;
        let itemPrice=0;
        totalPrice=await this.$$totalPriceOfItem().map(item=>item.getText())
        totalPrice=totalPrice.map((item)=>item.replace('Total: $',''))
        totalPrice = totalPrice.map((str) => parseInt(str, 10));
        
        taxPrice=await this.$$taxOfItem().map(item=>item.getText())
        taxPrice=taxPrice.map((item)=>item.replace('Tax: $',''))
        taxPrice = taxPrice.map((str) => parseInt(str, 10));
        
        itemPrice=await this.$$itemPrice().map(item=>item.getText())
        itemPrice=itemPrice.map((item)=>item.replace('Item total: $',''))
        itemPrice = itemPrice.map((str) => parseInt(str, 10));
        

        console.log(totalPrice);
        console.log(taxPrice);
        console.log(itemPrice);

        let sum=0
        sum=itemPrice[0]+taxPrice[0]
        if(sum==totalPrice[0]){
            return true
        }
        else{
            return false
        }

        // removing the $symbol and text from the price



    }
}
export const checkoutOverview=new CheckoutOverview()