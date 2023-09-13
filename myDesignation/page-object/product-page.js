import Common from "./common.js";

class ProductPage extends Common{
    constructor(){
        super();
        this.$size = (value) => $(`//li//span[text()="${value}"]`)
        this.$addToCartButton = () => $('//button[@class="single_add_to_cart_button button alt"]')
        this.$productNotification =() => $('//div[@class="box-content"]')
        this.$viewCart =() => $('//a[text()="View cart"]')
        this.$productName =() => $('//a[text()="Gojo Co-Ords Set for Men"]')
        this.$proceedButton = () => $('//a[@class="checkout-button button alt wc-forward"]')
        this.$placeOrder = () => $('//button[text()="Place order"]')
        this.$mandatoryFieldInfo =(value) => $(`//strong[contains(.,"${value}")]`)
        this.$inputField =(value) => $(`//label[@for="${value}"]/following-sibling::span//input`)
        this.$state = (value) => $(`//label[@for="billing_state"]/following-sibling::span//select//option[contains(.,"${value}")]`)
        this.$payButton = () => $('//button[@class="svelte-13mgn3i"][text()="Pay Now"]')
        this.$$warningmessages = () => $$(`//div[@class="box-content"]//li`)
    }/**
     * Enter size and click addToCart button
     */
    async selectSize(){
        await this.$size("S").click();
        await this.$size("32").scrollIntoView({block: 'center'});
        await this.$size("32").waitForClickable();
        await this.$size("32").click();
        await this.$addToCartButton().scrollIntoView({block: 'center'});
        await this.$addToCartButton().waitForClickable();
        await this.$addToCartButton().click();
    }
    /**
     * Click view cart buton
     */
    async viewCart(){
     await this.$viewCart().click();
    }
    /**
     * click proceed button to move to the place order page
     */
    async proceedToCheckout(){
        await this.$proceedButton().scrollIntoView({block:'center'});
        await this.$proceedButton().click();
    }
    /**
     * click on placeorder button
     */
    async placeOrder(){
     await this.$placeOrder().scrollIntoView({block:'center'});
     await this.$placeOrder().waitForClickable();
     await this.$placeOrder().click();
    }
    /**
     * enter the details in each field and click placeorder button cccc 
     */
    async billingDetails(){
        await this.$inputField("billing_first_name").setValue("APARNA")
        await this.placeOrder();
        await this.$inputField("billing_last_name").setValue("UDAYAN")
        await this.placeOrder();
        await this.$inputField("billing_address_1").setValue("Kayees home, kochi")
        await this.placeOrder();
        await this.$inputField("billing_city").setValue("Kochi")
        await this.placeOrder();
        await this.$state("Kerala").click();
        await this.placeOrder();
        await this.$inputField("billing_postcode").setValue("683020")
        await this.placeOrder();
        await this.$inputField("billing_phone").setValue("8078426144")
        await this.placeOrder();
        await this.$inputField("billing_email").setValue("aparna@gmail.com")
        await this.placeOrder();
    }
}
export const productPage = new ProductPage()