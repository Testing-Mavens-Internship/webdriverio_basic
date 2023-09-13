import CommonPage from "../page-objects/common-page.js";

class HomePage extends CommonPage{
    constructor(){
        super();
        this.$product = () => $('//a[@href="https://www.mydesignation.com/product/gojo-co-ords-set-for-men/"]/ancestor::div[@class="owl-item cloned"]');
    }
/**click on the desired product */
        async viewProduct(){
            await this.$product().scrollIntoView({ block : 'center'});
            await this.$product().waitForClickable(5000);
            await this.$product().click();
            
        }

}
export const homePage = new HomePage()
