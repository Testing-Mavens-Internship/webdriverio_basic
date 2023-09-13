import Common from "./common.js";
class Cart extends Common {
  constructor() {
    super();
    this.$header = () => $('//h1[text()="Check Out karo !"]');
    this.$inputDetails = (checkout) => $(`//input[@id="${checkout}"]`);
    this.$clickCheckout = () => $('//input[@value="Continue to checkout"]');
    this.$checkOutHeader = () => $('//h1[@data-lead-id = "site-header-title"]');
  }
  /**
   * Method to enter the details in the checkout page
   * @param {string} checkOutName
   * @param {string} checkOutEmail
   * @param {string} address
   * @param {string} city
   * @param {string} state
   * @param {string} zip
   * @param {string} cardName
   * @param {string} cardNumber
   * @param {string} year
   * @param {string} cvv
   */
  async enterDetails(
    checkOutName,
    checkOutEmail,
    address,
    city,
    state,
    zip,
    cardName,
    cardNumber,
    year,
    cvv
  ) {
    await this.$inputDetails("fname").setValue(checkOutName);
    await this.$inputDetails("email").setValue(checkOutEmail);
    await this.$inputDetails("adr").setValue(address);
    await this.$inputDetails("city").setValue(city);
    await this.$inputDetails("state").setValue(state);
    await this.$inputDetails("cname").setValue(zip);
    await this.$inputDetails("ccnum").setValue(cardName);
    await this.$inputDetails("expmonth").setValue(cardNumber);
    await this.$inputDetails("expyear").setValue(year);
    await this.$inputDetails("cvv").setValue(cvv);
  }
  /**
   * Method to click on the check out button
   */
  async clickCheckout() {
    await this.$clickCheckout().click();
  }
}
export const cartPage = new Cart();
