import Common from "./common.js";
class checkoutPage extends Common {
  constructor() {
    super();
    this.$home = () => $('//a[contains(text(),"Home")]');
    this.$bill = () => $('//h1[contains(text(),"Check Out karo")]');
    this.$cart = () => $('//i[@class="fa fa-cart-plus"]');
    this.$pay = (item) => $(`//input[@id="${item}"]`);
    this.$continue = () => $('//input[@value="Continue to checkout"]');
  }
  /**
   * Method to click on home option
   */
  async clickOnHome() {
    await this.$home().click();
  }
  /**
   * Method to click on cart icon
   */
  async clickOnCart() {
    await this.$cart().click();
  }
  /**
   *
   * @param {string} fullName
   * @param {string} email
   * @param {string} address
   * @param {string} city
   * @param {string} state
   * @param {string} zip
   * @param {string} cardName
   * @param {string} credit
   * @param {string} expMonth
   * @param {string} expYear
   * @param {string} cvv
   */
  async payDetails(
    fullName,
    email,
    address,
    city,
    state,
    zip,
    cardName,
    credit,
    expMonth,
    expYear,
    cvv
  ) {
    await this.$pay("fname").setValue(fullName);
    await this.$pay("email").setValue(email);
    await this.$pay("adr").setValue(address);
    await this.$pay("city").setValue(city);
    await this.$pay("state").setValue(state);
    await this.$pay("zip").setValue(zip);
    await this.$pay("cname").setValue(cardName);
    await this.$pay("ccnum").setValue(credit);
    await this.$pay("expmonth").setValue(expMonth);
    await this.$pay("expyear").setValue(expYear);
    await this.$pay("cvv").setValue(cvv);
  }
  /**
   * Method to click on continue to checkout button
   */
  async clickOnContinue() {
    await this.$continue().click();
  }
}
export const checkout = new checkoutPage();
