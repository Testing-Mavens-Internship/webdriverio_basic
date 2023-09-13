class Billing {
  constructor() {
    this.$header = () => $('//h3[text()="Billing Details"]');
    this.$clickOnPlaceOrder = () => $('//button[@id = "place_order"]');
    this.$inputDetails = (details) => $(`//input[@id ="${details}"]`);
    this.$stateField = (value) => $(`//label[@for="billing_state"]/following-sibling::span//select//option[contains(.,"${value}")]`)
    this.$errorMessage = (values)  =>$(`//strong[text()="${values}"]`)
    this.$paymentHeader = () => $('//h3[@class = "title svelte-1z0zzkn"]');
  }
  /**
   * Click on the placeorder button
   */
  async placeOrderButton() {
    await this.$clickOnPlaceOrder().scrollIntoView({ block: "end" });
    await this.$clickOnPlaceOrder().click();
  }
  /**
   * Entering each details and clicking the placeorder button to validate the error message is dissapearing
   */
  async enterThDetails() { 
    await this.placeOrderButton();
    await this.$inputDetails("billing_first_name").setValue("Testing");
    await this.placeOrderButton();
    await this.$inputDetails("billing_last_name").setValue("Mavens");
    await this.placeOrderButton();
    await this.$inputDetails("billing_address_1").setValue("abc street");
    await this.placeOrderButton();
    await this.$inputDetails("billing_address_2").setValue("cba road");
    await this.placeOrderButton();
    await this.$inputDetails("billing_city").setValue("Enakulam");
    await this.placeOrderButton();
    await this.$stateField("Kerala").click();
    await this.placeOrderButton();
    await this.$inputDetails("billing_postcode").setValue("668822");
    await this.placeOrderButton();
    await this.$inputDetails("billing_phone").setValue("1234567890");
    await this.placeOrderButton();
    await this.$inputDetails("billing_email").setValue("tester@gmail.com");
    await this.placeOrderButton();
  }
}

export const billPages = new Billing();
