import CommonPage from "./common.js";

class CheckOutPage extends CommonPage{
    constructor(){
        super()
        this.$placeOrderButton=()=>$(`//button[@id="place_order"]`);
        this.$errorMessage=(text)=>$(`//strong[text()="${text}"]`);

        
    }
    async clickOnPlaceOrderButton()
    {
        await this.$placeOrderButton().scrollIntoView({block : 'center'});
        await this.$placeOrderButton().waitForClickable()
        await this.$placeOrderButton().click()
        
    }
}
export const checkOutPage = new CheckOutPage() 