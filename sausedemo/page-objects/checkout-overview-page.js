import CommonPage from "./common-page.js";
import { landingPage } from "./home-page.js";

class CheckoutOverviewPage extends CommonPage{
    constructor(){
        super();
        this.$itemTotal = () => $('//div[@class="summary_subtotal_label"]')
        this.$itemTax = () => $('//div[@class="summary_tax_label"]');
        this.$totalPrice = () => $('//div[@class="summary_info_label summary_total_label"]')
        this.$finishButton = () => $('//button[text()="Finish"]')
    }
    /**
     * compare the price of the product
     * @param {string} product 
     * @returns boolean
     */
async comparePrice(product){
    let itemPrice = await this.$itemTotal().getText();
    itemPrice = itemPrice.replace("Item total: $","");
    itemPrice = Number(itemPrice);
    if(itemPrice == await landingPage.productPrice(product)){
        return true;
    }
    else{
        return false;
    }
}
/**
 * compare the total price
 * @returns boolean
 */
async totalPrice(){
    let itemPrice = await this.$itemTotal().getText();
    itemPrice = itemPrice.replace("Item total: $","");
    itemPrice = Number(itemPrice);
    let tax = await this.$itemTax().getText();
    tax = tax.replace("Tax: $","");
    tax = Number(tax);
    let sum = tax + itemPrice;
    let total= await this.$totalPrice().getText();
    total = total.replace("Total: $","");
    total = Number(total);
    if(total ==  sum){
        return true;
    }
    else{
        return false;
    }
}
/**
 * click finish buton
 */
async finishButton(){
    await this.$finishButton().click();
}
}
export const overView = new CheckoutOverviewPage()