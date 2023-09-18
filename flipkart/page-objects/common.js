export default class Common {
  constructor() {
    this.$header = () => $('//div[@class="_3qX0zy" or @class="_16ZfEv"]');
    this.$secondHeader = (option) => $(`//div[text()="${option}"]`);
    this.$closeLogin1 = () => $('//*[text()="✕"]');
  }
  /**
   * Method to launch url
   */
  async openUrl() {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
    await this.$closeLogin1().click();
    await this.$header().waitForDisplayed({ timeout: 20000 });
  }
}
