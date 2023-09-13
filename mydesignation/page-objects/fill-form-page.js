import CommonPage from "./common-page.js";

class FillFormPage extends CommonPage {
  constructor() {
    super();
    this.$verifyProceedCheckout = () => $('//h3[text()="Billing Details"]');
    this.$placeOrderButton = () => $('//button[text()="Place order"]');
    this.$fillFormField = (field) =>
      $(
        `//div[@class="woocommerce-billing-fields__field-wrapper"]//input[@id="${field}"]`
      );
    this.$$verifyFillForm = () => $$('//div[@class="box-content"]//li');
    this.$verifyErrorMessages = (name) =>
      $(
        `//li[text()= "The Phone Number should contain only 10 digits."or(text()=" is a required field." and strong[text()="${name}"] )]`
      );
    this.$verifyEachErrorMessage = (error) => $(`//strong[text()="${error}"]`);
    this.$verifyStateErrorMessage = (state) =>
      $(`//span//select[@id="billing_state"]/option[text()="${state}"]`);
  }
  /**
   * click place order button
   */
  async clickPlaceOrder() {
    await this.$placeOrderButton().click();
  }
  /**
   * set first name
   * @param {string} firstName
   */
  async fillFirstName(firstName) {
    await this.$fillFormField("billing_first_name").setValue(firstName);
  }
  /**
   * set last name
   * @param {string} lastName
   */
  async fillLastName(lastName) {
    await this.$fillFormField("billing_last_name").setValue(lastName);
  }
  /**
   * set street address and appartment
   * @param {string} streetAddress
   * @param {string} appartment
   */
  async fillStreetAddress(streetAddress, appartment) {
    await this.$fillFormField("billing_address_1").setValue(streetAddress);
    await this.$fillFormField("billing_address_2").setValue(appartment);
  }
  /**
   * set town
   * @param {string} town
   */
  async fillTown(town) {
    await this.$fillFormField("billing_city").setValue(town);
  }
  /**
   * set state
   * @param {string} state
   */
  async fillState(state) {
    await this.$verifyStateErrorMessage(state).click();
  }
  /**
   * set pincode
   * @param {Number} pinCode
   */
  async fillPinCode(pinCode) {
    await this.$fillFormField("billing_postcode").setValue(pinCode);
  }
  /**
   * set mobile number
   * @param {Number} phone
   */
  async fillPhone(phone) {
    await this.$fillFormField("billing_phone").setValue(phone);
  }
  /**
   * set email
   * @param {string} email
   */
  async fillEmail(email) {
    await this.$fillFormField("billing_email").setValue(email);
  }
}
export const fillForm = new FillFormPage();
