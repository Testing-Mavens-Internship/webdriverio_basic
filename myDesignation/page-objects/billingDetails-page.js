import Common from "./common-page.js";

class BillingDetailsPage extends Common{
constructor(){
super();
   
    this.$placeOrderButton=()=>$('//button[text()="Place order"]')
    this.$secondaryHeader=()=>$('//h3[text()="Billing Details"]')
    this.$$errorMessages=()=>$$('//div[@class="box-content"]//li')
    this.$errorMessage=(name)=>$(`//li[text()= "The Phone Number should contain only 10 digits."or(text()=" is a required field." and strong["${name}"] )]`)
    this.$fillForm=(field)=>$()(`//div[@class="woocommerce-billing-fields__field-wrapper"]//input[@id="${field}"]`)
    this.$stateField=(state)=>$(`//span//select[@id="billing_state"]/option[@value="${state}"]`)
    this.$dropDown=()=>$('//select[@id="billing_state"]/..//span[@class="select2-selection__arrow"]')
}
async clickOnPaceOrder(){
    await this.$placeOrderButton().scrollIntoView();
    await this.$placeOrderButton().waitForClickable({ timeout: 2000 });
await this.$placeOrderButton().click();
}
async fillForm(fname,lname,StreetAaddress1,StreetAaddress2,townCity,state,pinCode,phone,email){
    await this.$fillForm("billing_first_name").setValue(fname)
    await this.$fillForm("billing_last_name_field").setValue(lname)
    await this.$fillForm("billing_address_1_field").setValue(StreetAaddress1)
    await this.$fillForm("billing_address_2_field").setValue(StreetAaddress2)
    await this.$fillForm("billing_city").setValue(townCity)
    await this.$dropDown().click()
    await this.$stateField(state).click()
    await this.$fillForm("billing_postcode_field").scrollIntoView();
    // await this.$proceedToCheckOutButton().waitForClickable({ timeout: 2000 });
    await this.$fillForm("billing_postcode_field").setValue(pinCode)
    await this.$fillForm("billing_phone_field").setValue(phone)
    await this.$fillForm("billing_email_field").setValue(email)
  
    
}
}

export const billingDetailsPage = new BillingDetailsPage()