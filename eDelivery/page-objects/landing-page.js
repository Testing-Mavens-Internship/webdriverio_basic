import { th } from "@faker-js/faker";
import CommonPage from "./common-page.js";

class LandingPage extends CommonPage {
  constructor() {
    super();
    this.$signUpButton = () => $(`//div[@class="sgn_up_btn"]`);
    this.$inputField = (value) => $(`//input[contains(@placeholder,'${value}')]`);
    this.$loginButton = () => $(`//div[@class="subm_btn"]`);
    this.$toastMessage = (message) => $(`//div[@class="toast-message"][contains(text(),'${message}')]`);
  }
  /**
   * Method for click on Login Button
   */
  async clickOnLogin(){
    await this.$button('Login').click();
    await this.$popup('Login').waitForDisplayed({ timeout : 2000});
  }

  /**
   * Method for click on Sign Up Now Button
   */
  async clickOnSignUp(){
    await this.$signUpButton().click();
    await this.$popup('Register').waitForDisplayed({ timeout : 2000});
  }

  /**
   * Method for filling registration form
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {string} email 
   * @param {string} phone 
   */
  async fillUpRegister(firstName, lastName, email, phone){
    await this.$inputField('First Name').setValue(firstName);
    await this.$inputField('Last Name').setValue(lastName);
    await this.$inputField('Email').setValue(email);
    await this.$inputField('Phone Number').setValue(phone);
    await this.$button('Continue').click();
  }
  /**
   * Method for click on login button
   */
  async clickOnLogin(){
    await this.$loginButton().click();
  }
}

export const landingPage = new LandingPage();
