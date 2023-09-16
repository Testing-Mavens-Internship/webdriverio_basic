export default class Common {
  constructor() {
    this.$header = () => $(`//img[@class="aqQN50"]`);
  }
  /**
   * Method to launch flipcart url
   */
  async lauchUrl() {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
  }
}
