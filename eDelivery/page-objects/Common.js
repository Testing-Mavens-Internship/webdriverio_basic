export default class Common {
  constructor() {
    this.$header = () => $('//img[@class="img-responsive"]');
  }
  /**
   * Method to load the website
   */
  async loadPage() {
    await browser.url("https://edelivery.zoproduct.com/");
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({ timeout: 4000 });
  }
}
