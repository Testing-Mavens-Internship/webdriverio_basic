import { homePage } from "./home-page.js";

export default class Common {
  constructor() {
    this.$header = () => $(`//div[text()="Swag Labs"]`);
    this.$credentials = (field) => $(`//input[@placeholder="${field}"]`);
    this.$loginButton = () => $(`//input[@class="submit-button btn_action"]`);
    this.$button = (buttonName) => $(`//button[text()="${buttonName}"]`);
  }
  /**
   * launch url
   */
  async launchUrl() {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({ timeout: 20000 });
  }

  /**
   * login
   */
  async login() {
    await this.$credentials("Username").setValue("standard_user");
    await this.$credentials("Password").setValue("secret_sauce");
    await this.$loginButton().click();
    await this.$header().waitForDisplayed({ timeout: 20000 });
  }
}
