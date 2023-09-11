import Common from "./common-page.js";

class Checkout extends Common{
    constructor(){
        super()
        this.$route = (option="Checkout")=> $(`//button[text()="${option}"]`)
        this.$confirmation = () => $('//h2[text()="Thank you for your order!"]')
    }
    async navigateToCheckout(){
        await this.$route().click()
        await this.$inputField('first-name').setValue("Joyal")
        await this.$inputField('last-name').setValue("Francis")
        await this.$inputField('postal-code').setValue("682002")
        await this.$inputField('continue').click()
    }
    async finishOrdering(){
        await this.$route("Finish").click()
        await browser.pause(5000)
        // await this.$confirmation().waitForDisplayed({timeout:20000})
    }
    async backHome(){
        await this.$route("Back Home").click()
    }
}
export const checkOutPage = new Checkout()