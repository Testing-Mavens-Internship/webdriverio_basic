import CommonPage from "./common.js";
class CheckOutPage extends CommonPage{
    constructor(){
        super()
        this.$placeOrderButton=()=>$(`//button[@id="place_order"]`);
        this.$errorMessage=(text)=>$(`//strong[text()="${text}"]`);
        this.$enterFields=(text)=>$(`//input[@id="${text}"]`)
        this.$selectState=(text)=>$(`//label[@for="billing_state"]/following-sibling::span//select//option[contains(.,"${text}")]`)
        this.$payNowText=()=>$('//button[@class="svelte-13mgn3i"][text()="Pay Now"]')
    }
    /**
     * function for clicking place order button
     */
    async clickOnPlaceOrderButton()
    {
        await this.$placeOrderButton().scrollIntoView({block : 'center'});
        await this.$placeOrderButton().waitForClickable()
        await this.$placeOrderButton().click()
        
    }
    /**
     * function for entering the details in the checkout page
     */
    async enterDetails()
     {
        await this.$enterFields("billing_first_name").setValue("Anchana")
        await this.$placeOrderButton().click()
        await this.$enterFields("billing_last_name").setValue("Babu")
        await this.$placeOrderButton().click()
        await this.$enterFields("billing_address_1").setValue("Anjanayem P.O Kottayam")
        await this.$placeOrderButton().click()
        await this.$enterFields("billing_city").setValue("Puthuppally")
        await this.$placeOrderButton().click()
        await this.$selectState("Kerala").click()
        await this.$placeOrderButton().click()
        await this.$enterFields("billing_postcode").setValue("686011")
        await this.$placeOrderButton().click()
        await this.$enterFields("billing_phone").setValue("9447110461")
        await this.$placeOrderButton().click()
        await this.$enterFields("billing_email").setValue("abc@gmail.com")
        await this.$placeOrderButton().click()
        
    }
}
export const checkOutPage = new CheckOutPage() 