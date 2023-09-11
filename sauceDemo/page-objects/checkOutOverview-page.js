import Common from "./commonFIle-page.js";
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
     *Click on the Finish button to complete the transaction
     */
    async finishButton(){
// itemTotal=Number(this.$itemTotal.getText())
// tax=Number(this.$tax.getText())
// total=itemTotal+tax
await this.$finishButton().scrollIntoView()
await this.$finishButton().click()
    }
}

export const checkOutOverview = new CheckOutOverview()