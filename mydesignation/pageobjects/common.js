export default class Common {
  constructor() {
    /**
     * elements
     */
    this.$mainHeader = () => $('//a[@class="logo"]');
  }
  /**opening the url */
  async openUrl() {
    await browser.url("https://www.mydesignation.com/");
    await browser.maximizeWindow();
  }
}
