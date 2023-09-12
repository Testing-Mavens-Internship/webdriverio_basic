import Common from "./common-page.js";

class PaymentPage extends Common{
    constructor(){
        super();
        this.$payNowButton=()=>$('//div[@class="redesign-v15-cta-wrapper svelte-13mgn3i"]//button[text()="Pay Now"]')
    }

}

export const paymentPage = new PaymentPage()