import Common from "./common.js";
import { homePage } from "./home-page.js";
class CheckOutPage extends Common{
    constructor(){
        super();
        this.$sideHeading = () => $(`//div//span[text()="Checkout: Your Information"]`);
        this.$input = (field) => $(`//input[@placeholder="${field}"]`)
        this.$continue = () => $(`//input[@id="continue"]`);
        this.$sideHeading1 = () => $(`//span[text()="Checkout: Overview"]`);
        this.$sideHeading2 = () => $(`//span[text()="Checkout: Complete!"]`);
        this.$headingFinish = () => $(`//h2[text()="Thank you for your order!"]`);
        this.$finishButton = () => $(`//button[text()="Finish"]`);
        this.$home = () => $(`//button[text()="Back Home"]`);
    }

    /**
     * Enter the details and click continue
     */
    async enterDetails(){
        await this.$input("First Name").setValue("Saifu");
        await this.$input("Last Name").setValue("JP");
        await this.$input("Zip/Postal Code").setValue(680500);
        await this.$continue().click();
        await this.$header().waitForDisplayed({timeout: 20000});
    }

    /**
     * click finish
     */
    async clickFinish(){
        await this.$finishButton().click();
        await this.$headingFinish().waitForDisplayed({timeout:20000});
    }

    /**
     * click back to home
     */
    async clickOnBackHome(){
        await this.$home().click();
        await this.$header().waitForDisplayed({timeout: 20000});
    }
}
export const checkOutPage = new CheckOutPage();