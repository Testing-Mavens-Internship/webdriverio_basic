export default class Common {
  constructor() {
    this.$logo = () => $(`//a[@class="navbar-brand"]`);
    this.$loginButton = () => $('//button[contains(text(),"Login ")]');
  }
  /**method to open url */
  async openUrl() {
    await browser.url("https://edelivery.zoproduct.com/");
    await browser.maximizeWindow();
    await this.$logo().waitForDisplayed({ timeout: 10000 });
  }
  /**method to click on login button */
  async clickOnLogin() {
    await this.$loginButton().click();
  }
}
