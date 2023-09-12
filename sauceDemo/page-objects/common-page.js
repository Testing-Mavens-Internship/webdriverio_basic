export default class Common {
  constructor() {
    this.$submit = () => $('//input[@type="submit"]');
    this.$input = (values) => $(`//input[@name="${values}"]`);
    this.$submit = () => $('//input[@type="submit"]');
    this.$header = () => $('//span[@class = "title"]');
  }
  /**
   * Opening the URL
   */
  async openUrl() {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow();
  }
  /**
   * Enter the user name and password and click the submit button
   */
  async enterTheDetails() {
    await this.$input("user-name").setValue("standard_user");
    await this.$input("password").setValue("secret_sauce");
    await this.$submit().click();
  }
}
