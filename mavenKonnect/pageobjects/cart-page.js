import Common from "./common.js";

class CartPage extends Common {
  constructor() {
    /**elements */
    super();
    this.$header = () => $('//h1[text()="Check Out karo !"]');
    this.$billingAddress = (value) => $(`//input[@name="${value}"]`);
    this.$stateZip = (value) =>
      $(`//div[@class="row"]//label[text()="${value}"]`);
    this.$inputField = (id) => $(`//input[@id="${id}"]`);
    this.$checkOutButton = () => $(`//input[@class="btn"]`);
  }
  /**
   * Method for fill up checkout form
   * @param {string} fullName
   * @param {string} email
   * @param {string} address
   * @param {string} city
   * @param {string} state
   * @param {number} zip
   * @param {string} nameOncard
   * @param {number} cardNo
   * @param {number} expMonth
   * @param {number} expYear
   * @param {number} cvv
   */

  async fillCheckoutForm(
    fullName,
    email,
    address,
    city,
    state,
    zip,
    nameOnCard,
    cardNo,
    expMonth,
    expYear,
    cvv
  ) {
    await this.$inputField("fname").setValue(fullName);
    await this.$inputField("email").setValue(email);
    await this.$inputField("adr").setValue(address);
    await this.$inputField("city").setValue(city);
    await this.$inputField("state").setValue(state);
    await this.$inputField("zip").setValue(zip);
    await this.$inputField("email").setValue(email);
    await this.$inputField("cname").setValue(nameOnCard);
    await this.$inputField("ccnum").setValue(cardNo);
    await this.$inputField("expmonth").setValue(expMonth);
    await this.$inputField("expyear").setValue(expYear);
    await this.$inputField("cvv").setValue(cvv);
    await this.$checkOutButton().click();
  }
  async clickOnHomeButton() {
    await this.$homeButton();
  }
}
export const cartPage = new CartPage();
