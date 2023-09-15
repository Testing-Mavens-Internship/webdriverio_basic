import { Common } from "./common.js";
class Home extends Common {
  constructor() {
    super();
    this.$login = () => $('//button[text()="Login "]');
    this.$signUp = () => $('//a[@class ="signup_btn"]');
    this.$inputDetails = (details) => $(`//input[@id ="${details}"]`);
    this.$loginHeader = () => $('//div[@class ="pop_tle"]');
    this.$registerHeader = () =>
      $('//div[@class ="pop_tle"][contains(text(),"Register")]');
    this.$verificationHeader = () =>
      $('//div[contains(text(),"Verification Message Sent")]');
    this.$continue = () => $('//button[text()= "Continue"]');
  }
  /**
   * Method to click on the login button present in the home screen
   */
  async clickOnLoginButton() {
    await this.$login().click();
  }
  /**
   * Method to click on the sign up button
   */
  async clickOnSignUp() {
    await this.$signUp().waitForDisplayed({ timeout: 3000 });
    await this.$signUp().isClickable();
    await this.$signUp().click();
  }
  /**
   * Method to enter the details in sign up
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} email
   * @param {string} phoneNumber
   */
  async enterDetails(firstName, lastName, email, phoneNumber) {
    await this.$inputDetails("first_name").setValue(firstName);
    await this.$inputDetails("last_name").setValue(lastName);
    await this.$inputDetails("email").setValue(email);
    await this.$inputDetails("tel").setValue(phoneNumber);
  }
  /**
   * Method to click continue button after entering the details
   */

  async clickOnContinue() {
    await this.$continue().waitForDisplayed({ timeout: 3000 });
    await this.$continue().click();
  }
}

export const home = new Home();
