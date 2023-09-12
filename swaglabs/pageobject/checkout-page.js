import Common from "./common.js";
import { landing } from "./login-page.js";
class CheckOutPage extends Common{

    constructor(){

        super();

        this.$sideHeading = () => $(`//div[text()="Checkout: Your Information"]`);
        this.$credentials = (field) => $(`//input[@placeholder="${field}"]`);
        this.$continue = () => $(`//input[@type="submit"]`);
        this.$finish=()=>$(`//a[text()='FINISH']`);
        this.$orderComplete=()=>$(`//div[text()='Finish']`);
        this.$headingFinish = () => $(`//h2[text()="THANK YOU FOR YOUR ORDER"]`);
        this.$header=()=>$('//div[@class="app_logo"]') ;

    }

 

    /**

     * Enter the details and click continue

     */

    async enterDetails(){

        await this.$credentials("First Name").setValue("User");

        await this.$credentials("Last Name").setValue("1");

        await this.$credentials("Zip/Postal Code").setValue(68911);

        await this.$continue().click();

        await this.$header().waitForDisplayed({timeout: 20000});

    }

 

    /**

     * click finish

     */

    async clickFinish(){

        await this.$finish().scrollIntoView({block: 'center'});
        await this.$finish().click();
        await this.$headingFinish().waitForDisplayed({timeout:20000});

    }



}

export const checkOutPage = new CheckOutPage();