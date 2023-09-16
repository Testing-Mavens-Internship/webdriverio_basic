import Common from "./common.js";
import { register } from "./register.js";

class EdeliveryHomePage extends Common {
  constructor() {
    /**elements */
    super();
    this.$loginButton = () => $('//button[contains(text(),"Login ")]');
    this.$signup = () => $('//a[@class="signup_btn"] ');
    this.$successfullToastMessage = () =>
      $('//div[@class="toast-message" and text()= "Registered Successfully"]');
    this.$userHeader = () => $('//span[@class="user-name ng-binding"]');
    this.$services = (value) =>
      $(` (//p[text()="${value}"]//preceding-sibling::input)[1]`);
    this.$location = (value) =>
      $(
        `//span[contains(text(),"${value}")]//ancestor::div//..//div[@class="form-group error-msg-holder"]//input[@id="searchlocation"]`
      );
  }
  /**method to click on login button */
  async clickOnLogin() {
    await this.$loginButton().click();
    await this.$signup().waitForDisplayed({ timeout: 5000 });
  }
  /** method to click on signup button */
  async clickOnSignup() {
    await this.$signup().click();
    await register.$registerButton().waitForDisplayed({ timeout: 5000 });
  }
  /**method to select services from homepage */
  async selectServices() {
    await this.$services("Grocery").click();
  }
  /**method to select the location */
  async setLocation() {
    await this.$location("Chennai").click();
  }
}
export const edeliveryHomePage = new EdeliveryHomePage();
