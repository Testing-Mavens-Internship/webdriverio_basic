import CommonPage from "./common-page.js";

class CheckoutPage extends CommonPage {
  constructor() {
    super();
    this.$checkOutField = (value) => $(`//input[@id="${value}"]`);
  }
  /**
   * click button for continue checkout process
   */
  async clickOnContinue() {
    await this.$checkOutField("continue").scrollIntoView({ block : 'center'});
    await this.$checkOutField("continue").click();
  }

  /**
   * fill up checkout information form
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} postalCode
   */
  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.$checkOutField("first-name").setValue(firstName);
    await this.$checkOutField("last-name").setValue(lastName);
    await this.$checkOutField("postal-code").setValue(postalCode);
  }
}

export const checkOutPage = new CheckoutPage();