import Common from "./common.js";
import { homePage } from "./home-page.js";
class CheckOutPage extends Common{
    constructor(){
        super();
        this.$sideHeading = (heading) => $(`//div//span[text()="${heading}"]`);
        this.$continue = () => $(`//input[@id="continue"]`);
        this.$headingFinish = () => $(`//h2[text()="Thank you for your order!"]`);
        this.$itemTotal = () => $(`//div[@class="summary_subtotal_label"]`);
        this.$tax = () => $(`//div[@class="summary_tax_label"]`);
        this.$total = () => $(`//div[@class="summary_info_label summary_total_label"]`);
    }

    /**
     * Enter the details and click continue
     */
    async enterDetails(){
        await this.$credentials("First Name").setValue("Saifu");
        await this.$credentials("Last Name").setValue("JP");
        await this.$credentials("Zip/Postal Code").setValue(680500);
        await this.$continue().click();
        await this.$header().waitForDisplayed({timeout: 20000});
    }

    /**
     * verifying item price is same
     */
    async verifyPrice(){
        let priceOfItem = await homePage.$itemPrice().getText();
        priceOfItem = priceOfItem.slice(1);
        priceOfItem = parseFloat(priceOfItem);
        console.log(priceOfItem);
        let checkoutPrice = await this.$itemTotal().getText();
        checkoutPrice = checkoutPrice.slice(13);
        checkoutPrice = parseFloat(checkoutPrice);
        console.log(checkoutPrice);
        let taxPrice = await this.$tax().getText();
        taxPrice = taxPrice.slice(6);
        taxPrice = parseFloat(taxPrice);
        console.log(taxPrice);
        let totalPrice = await this.$total().getText();
        totalPrice = totalPrice.slice(8);
        totalPrice = parseFloat(totalPrice);
        console.log(totalPrice);
        let sum = checkoutPrice + taxPrice;
        console.log(sum);
        if(priceOfItem == checkoutPrice){
            if(sum == totalPrice){
                return true;
            }
            else{
                return false;
            }
        }
        else {
            return false;
        }
    }

    /**
     * click finish
     */
    async clickFinish(){
        await this.$button("Finish").click();
        await this.$headingFinish().waitForDisplayed({timeout:20000});
    }

    /**
     * click back to home
     */
    async clickOnBackHome(){
        await this.$button("Back Home").click();
        await this.$header().waitForDisplayed({timeout: 20000});
    }
}
export const checkOutPage = new CheckOutPage();