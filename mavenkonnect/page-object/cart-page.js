import Common from "./common.js";

class CartPage extends Common {
  constructor() {
    super();
    this.$cartPageHeader = () => $(`//h1[text()="Check Out karo !"]`);
    this.$inputField = (field) => $(`//input[@id="${field}"]`);
    this.$continueToCheckout = () =>
      $(`//input[@value="Continue to checkout"]`);
  }

  /**
   * Method to enter inputs
   * @param {string} fullName
   * @param {string} eMail
   * @param {string} address
   * @param {string} city
   * @param {string} state
   * @param {string} zipCode
   * @param {string} nameOnCard
   * @param {string} creditCardNumber
   * @param {string} expiryMonth
   * @param {string} expiryYear
   * @param {string} cvv
   */

  async fillForm(
    fullName,
    eMail,
    address,
    city,
    state,
    zipCode,
    nameOnCard,
    creditCardNumber,
    expiryMonth,
    expiryYear,
    cvv
  ) {
    await this.$inputField("fname").setValue(fullName);
    await this.$inputField("email").setValue(eMail);
    await this.$inputField("cname").setValue(nameOnCard);
    await this.$inputField("adr").setValue(address);
    await this.$inputField("ccnum").setValue(creditCardNumber);
    await this.$inputField("city").setValue(city);
    await this.$inputField("expmonth").setValue(expiryMonth);
    await this.$inputField("state").setValue(state);
    await this.$inputField("zip").setValue(zipCode);
    await this.$inputField("expyear").setValue(expiryYear);
    await this.$inputField("cvv").setValue(cvv);
    await this.$continueToCheckout().click();
    await browser.acceptAlert();
    await this.$thankYou().waitForDisplayed({ timeout: 20000 });
  }
}

export const cartPage= new CartPage();
