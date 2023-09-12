import Common from "../page-objects/common.js";
class CheckoutInfo extends Common {
  constructor() {
    super();
    this.$checkoutInputs = (values) => $(`//input[@id="${values}"]`); // Input fields in checkout form
    this.$checkoutContinueButton = () =>
      $(
        `//input[@class="submit-button btn btn_primary cart_button btn_action"]`
      ); // continue button
  }
  /**
   * Function for fill the form
   * @param {String} firstName
   * @param {String} lastName
   * @param {String} postalCode
   */
  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.$checkoutInputs("first-name").setValue(firstName);
    await this.$checkoutInputs("last-name").setValue(lastName);
    await this.$checkoutInputs("postal-code").setValue(postalCode);
    await this.$checkoutContinueButton().click();
  }
}
export const checkoutInformation = new CheckoutInfo();
