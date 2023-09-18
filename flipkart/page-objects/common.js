export default class Common {
  constructor() {
    this.$logo = () => $(`//img[@title="Flipkart"]`);
    this.$closeButton = () => $(`//*[text()="✕"]`);
  }
  /**
   * Method to launch url
   */
  async launchUrl() {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
    await this.$closeButton().click();
    await this.$logo().waitForDisplayed({ timeout: 10000 });
  }
}
