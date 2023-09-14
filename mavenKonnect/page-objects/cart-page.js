import Common from "./Common.js";

class CartPage extends Common {
  constructor() {
    super();
    this.$cartFields = (name) => $(`//input[@id="${name}"]`);
    this.$continueToCheckoutButton = () =>
      $('//input[@value="Continue to checkout"]');
  }
  /**
   *  Method to click on Continue to Checkout button after filling all the fields
   * @param {String} fullName
   * @param {String} emailId
   * @param {String} nameOncard
   * @param {String} address
   * @param {String} cardNumber
   * @param {*String} city
   * @param {String} expMonth
   * @param {String} state
   * @param {*String} zip
   * @param {*String} expYear
   * @param {String} cvv
   */
  async continueToCheckout(
    fullName,
    emailId,
    nameOncard,
    address,
    cardNumber,
    city,
    expMonth,
    state,
    zip,
    expYear,
    cvv
  ) {
    await this.$cartFields("fname").setValue(fullName);
    await this.$cartFields("email").setValue(emailId);
    await this.$cartFields("cname").setValue(nameOncard);
    await this.$cartFields("adr").setValue(address);
    await this.$cartFields("ccnum").setValue(cardNumber);
    await this.$cartFields("city").setValue(city);
    await this.$cartFields("expmonth").setValue(expMonth);
    await this.$cartFields("state").setValue(state);
    await this.$cartFields("zip").setValue(zip);
    await this.$cartFields("expyear").setValue(expYear);
    await this.$cartFields("cvv").setValue(cvv);
    await this.$continueToCheckoutButton().click();
    if(await browser.isAlertOpen()){
    await browser.acceptAlert();
    }
    await this.$validationMessage().waitForDisplayed({timeout:1000})
  }
}

export const cartPage = new CartPage();
