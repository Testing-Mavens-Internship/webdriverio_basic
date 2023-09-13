import Common from "./common-page.js";

class Billing extends Common{
    constructor(){
        super()
        this.$inputField = (field)=>$(`//label[@for="${field}"]/..//span//input`)
        this.$stateField=(state)=>$(`//span//select[@id="billing_state"]/option[@value="${state}"]`)
        this.$placeOrder=()=>$('//button[text()="Place order"]')
        this.$$warningMessages = () => $$('//div[@class="box-content"]//li');
        this.$verify = ()=>$('//div[@class="box-content"]')
        this.$verifyIndividual = (messageName)=>$(`//div[@class="box-content"]//ul//li//strong[text()="${messageName}"]`)
    }
    /**
     * Used to place order each time when a value is entered in a field
     */
    async placeOrder(){
        await this.$placeOrder().scrollIntoView({block: 'center'})
        await this.$placeOrder().click()
        await this.$verify().waitForDisplayed({timeout:20000})

    }
    /**
     * Used to enter first name in the details page
     */
    async enterFirstName(){
        await this.$inputField("billing_first_name").setValue("Thomas")
        await this.placeOrder()
    }
    /**
     * Used to enter last name in the details page
     */
    async enterLastName(){
        await this.$inputField("billing_last_name").scrollIntoView({block:'center'})
        await this.$inputField("billing_last_name").setValue("Edgar")
        await this.placeOrder()
    }
    /**
     * Used to enter address in the details page
     */
    async enterAddress(){
        await this.$inputField("billing_address_1").scrollIntoView({block:'center'})
        await this.$inputField("billing_address_1").setValue("25/1401 Lovedale, Nazerath, Fortkochi")
        await this.placeOrder()
    }
    /**
     * Used to enter city name in the details page
     */
    async enterCity(){
        await this.$inputField("billing_city").scrollIntoView({block:'center'})
        await this.$inputField("billing_city").setValue("Kochi")
        await this.placeOrder()
    }
    /**
     * Used to enter state name in the details page
     */
    async enterState(){
        await this.$stateField("KL").scrollIntoView({block:'center'})
        await this.$stateField("KL").click()
        await this.placeOrder()
    }
    /**
     * Used to enter post code in the details page
     */
    async enterPostCode(){
        await this.$inputField("billing_postcode").scrollIntoView({block:'center'})
        await this.$inputField("billing_postcode").setValue("682002")
        await this.placeOrder()
    }
    /**
     * Used to enter phone number in the details page
     */
    async enterPhone(){
        await this.$inputField("billing_phone").scrollIntoView({block:'center'})
        await this.$inputField("billing_phone").setValue("9995657730")
        await this.placeOrder()
    }
    /**
     * Used to enter email in the details page
     */
    async enterEmail(){
        await this.$inputField("billing_email").scrollIntoView({block:'center'})
        await this.$inputField("billing_email").setValue("edgar007@gmail.com")
        await this.placeOrder()
    }
}
export const billingPage = new Billing()