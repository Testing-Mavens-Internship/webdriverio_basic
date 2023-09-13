class checkOut {
    constructor() {
        this.$proceed = () => $ (`//a[@class="checkout-button button alt wc-forward"]`);
        this.$bill = () => $ ('//h3[text()="Billing Details"]');
        this.$placeOrder = () => $('//button[@class="button alt"]');
        this.$error = (text) => $(`//strong[text()="${text}"]`);
    }

    async clickOnProceed () {
        await this.$proceed().scrollIntoView({block : 'center'});
        await this.$proceed().click();
    }

    async clickOnPlaceOrder(){
        await this.$placeOrder().scrollIntoView({ block : 'end'});
        await this.$placeOrder().click()
    }
}

export const checkoutPage = new checkOut();