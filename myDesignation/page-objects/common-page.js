export default class Common {
  constructor() {
    this.$header = () => $('//a[text()="MYDESIGNATION"]');
  }
  /**
   * Method to load url
   */
  async openUrl() {
    await browser.url("https://www.mydesignation.com/");
    await browser.maximizeWindow();
   
    await this.$header().waitForDisplayed({ timeout: 2000 });
  }
}
