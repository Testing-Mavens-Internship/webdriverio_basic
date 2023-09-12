import Common from "./commonFIle-page.js";
import { homePage } from "./home-page.js";
let total,itemTotal,tax

class CheckOutOverview extends Common{
    constructor(){
        super();
        this.$finishButton=()=>$('//button[text()="Finish"]')
        this.$itemTotal=()=>$('//div[@class="summary_info"]/div[@class="summary_subtotal_label"]')
        this.$tax=()=>$('//div[@class="summary_info"]/div[@class="summary_tax_label"]')
        this.$total=()=>$('//div[@class="summary_info"]/div[@class="summary_info_label summary_total_label"]')

    }
    /**
     * compare price of the product 
     * @returns boolean
     */
    async priceComparison(productName){
        itemTotal= await this.$itemTotal().getText()
itemTotal=itemTotal.replace("Item total: $","")
itemTotal=Number(itemTotal)
//tax= await this.$tax().getText()
//total=itemTotal+tax
let initialPrice= await homePage.price(productName)
if(initialPrice==itemTotal){
    return true;
}
else{
    return false
}
    }
    /**
     *Click on the Finish button to complete the transaction
     */
    async finishButton(){

await this.$finishButton().scrollIntoView()
await this.$finishButton().click()
    }
}

export const checkOutOverview = new CheckOutOverview()