import Common from "./common-page.js";

class LandingPage extends Common{
    constructor(){
        super();
        this.$purchaseItem=()=>$(`//a[@href="https://www.mydesignation.com/product/gojo-co-ords-set-for-men/"]/ancestor::div[@class="owl-item cloned"]`)
        
    }
    async clickOnItem(){
        await this.$purchaseItem().scrollIntoView({block: 'center'});
        await this.$purchaseItem().waitForClickable()
        await this.$purchaseItem().click()
        


    }
}

export const landingPage= new LandingPage()