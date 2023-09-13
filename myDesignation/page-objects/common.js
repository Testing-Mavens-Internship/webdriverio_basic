export default class Common {
  constructor() {
    this.$header = () => $(`//a[text()="MYDESIGNATION"]`);
    this.$menuBar = () =>
      $(
        `//div[contains(@class,"mobile-nav-toggle")]/..//..//div[@class="row"]`
      );
  }
  /**
   * launch url
   */
  async launchUrl() {
    await browser.url("https://www.mydesignation.com/");
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({ timeout: 20000 });
  }
}
