class checkOut {
  constructor() {
    this.$proceed = () =>
      $(`//a[@class="checkout-button button alt wc-forward"]`);
    this.$bill = () => $('//h3[text()="Billing Details"]');
    this.$placeOrder = () => $('//button[@class="button alt"]');
    this.$error = (text) => $(`//strong[text()="${text}"]`);
    this.$field = (val) => $(`//input[@id="${val}"]`);
    this.$state = (state) =>
      $(
        `//label[@for="billing_state"]/following-sibling::span//select//option[contains(.,"${state}")]`
      );
  }
  /**
   * Click on proceed button
   */
  async clickOnProceed() {
    await this.$proceed().scrollIntoView({ block: "center" });
    await this.$proceed().click();
  }
  /**
   * Click on place order button
   */
  async clickOnPlaceOrder() {
    await this.$placeOrder().scrollIntoView({ block: "end" });
    await this.$placeOrder().click();
  }
  /**
   * To enter text in fields
   */
  async enterText() {
    await this.$field("billing_first_name").setValue("Athira");
    await this.clickOnPlaceOrder();
    await this.$field("billing_last_name").setValue("Menon");
    await this.clickOnPlaceOrder();
    await this.$field("billing_address_1").setValue("abcd");
    await this.clickOnPlaceOrder();
    await this.$field("billing_city").setValue("abcde");
    await this.clickOnPlaceOrder();
    await this.$state("Kerala").click();
    await this.clickOnPlaceOrder();
    await this.$field("billing_postcode").setValue("682024");
    await this.clickOnPlaceOrder();
    await this.$field("billing_phone").setValue("1234567890");
    await this.clickOnPlaceOrder();
    await this.$field("billing_email").setValue("abcde@gmail.com");
    await this.clickOnPlaceOrder();
  }
}
export const checkoutPage = new checkOut();
