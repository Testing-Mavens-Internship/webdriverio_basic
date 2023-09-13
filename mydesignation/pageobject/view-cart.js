class ViewCart{
    constructor(){
        
        this.$checkOut=()=>$('//div[@class= "wc-proceed-to-checkout"]/a');
        this.$headerCheckBilling=()=>$(`//h3[text()="Billing Details"]`);
    }
    /**
     * To continue with the checkout
     */
    async checkOUt(){
        await this.$checkOut().scrollIntoView({block: 'center'});
        await this.$checkOut().click();
    }
}
export const viewCart=new ViewCart();