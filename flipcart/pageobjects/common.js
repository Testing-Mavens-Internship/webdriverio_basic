export default class Common {
  constructor() {
    this.$header = () => $(`//img[@alt="Flipkart"]`);
    this.$login = () => $(`//span[text()="Login"]`);
  }
  /**
   * Method to launch flipcart url
   */
  async lauchUrl() {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
  }
}