import CommonPage from "./common-page.js";

class ViewCartPage extends CommonPage{
    constructor(){
        super();
        this.$verifyCartPage = () => $('//a[text()="Shopping Cart"]');
        this.$verifyProduct = (productName) => $(`//a[text()="${productName}"]`)
        //this.$verifyProduct = (productName,tShirt,shorts) => $(`//a[text()="${productName}"]//..//p[text()="${tShirt}"]//..//..//p[text()="${shorts}//ancestor::td"]`)
    }
}
export const viewCart = new ViewCartPage()