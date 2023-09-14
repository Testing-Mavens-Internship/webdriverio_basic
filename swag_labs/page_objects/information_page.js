import Common from "../page_objects/common_page.js";

class Information extends Common {
    constructor() {
            super();
            this.$information = (details) => $(`//input[@placeholder="${details}"]`)
            this.$continue = () => $(`//input[@id="continue"]`)
            this.$header3 = () => $(`//span[text()="Checkout: Overview"]`)
        }
        /***
         * Enter the user details and click on continue button
         */
    async clickOnUserDetails() {
        await this.$information('First Name').setValue("Tester1")
        await this.$information('Last Name').setValue("Tester2")
        await this.$information('Zip/Postal Code').setValue("123456")
        await this.$continue().click()
        await browser.pause(5000)
    }
}
export const information = new Information();