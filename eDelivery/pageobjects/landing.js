import Common from "./common.js";
class LandingPage extends Common {
  constructor() {
    super();
    this.$login = () => $('//button[text()="Login "]');
    this.$signup = () => $('//a[@class="signup_btn"]');
    this.$details = (value) => $(`//input[@id="${value}"]`);
    this.$continue = () => $('//button[@class="btn btn-default show-res-btn"]');
    this.$verify = () => $('//div[@class="subm_btn"]//a[@class="ng-binding"]');
    this.$success = () => $('//div[text()="Registered Successfully"]');
    this.$user = (first) => $(`//span[contains(text(),"${first}")]`);
  }
  /**
   * Method to click on login and sign up button
   */
  async clickOnLogin() {
    await this.$login().waitForClickable({ timeout: 7000 });
    await this.$login().click();
    await this.$signup().waitForClickable({ timeout: 7000 });
    await this.$signup().click();
  }
  /**
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} email
   * @param {string} phone
   */
  async enterText(firstName, lastName, email, phone) {
    await this.$details("first_name").setValue(firstName);
    await this.$details("last_name").setValue(lastName);
    await this.$details("email").setValue(email);
    await this.$details("tel").setValue(phone);
  }
  /**
   * Method to click on continue button
   */
  async clickOnContinue() {
    await this.$continue().waitForClickable({ timeout: 7000 });
    await this.$continue().click();
    await this.$verify().waitForClickable({ timeout: 7000 });
    await this.$verify().click();
    await this.$success().waitForDisplayed({ timeout: 7000 });
  }
}
export const land = new LandingPage();