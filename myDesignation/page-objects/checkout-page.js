import CommonPage from "./common-page.js";

class CheckoutPage extends CommonPage {
  constructor() {
    super();
    this.$header =() => $(`//h3[text()='Billing Details']`);
  }
  
}


export const checkoutPage = new CheckoutPage();
