export default class Common {
  constructor() {
    /**
     * elements
     */

    this.$loginDetails = (value) =>
      $(`//div[@class="form_group"]//input[@placeholder="${value}"]`);
    this.$loginButton = () => $('//input[@class="submit-button btn_action"]');
    this.$appheader = () => $('//div[@class="app_logo"]');
    this.$loginheader = () => $('//div[@class="login_logo"]');
  }
  /**
   * load url
   */
  async openUrl() {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow();
  }
  /**
   * login user
   */
  async login() {
    await this.$loginDetails("Username").setValue("standard_user");
    await this.$loginDetails("Password").setValue("secret_sauce");
    await this.$loginButton().scrollIntoView();
    await this.$loginButton().click();
  }
}
// export const common = new Common();
