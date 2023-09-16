export default class Common {
  constructor() {
    this.$loginHeader = () => $('//span[text() = "Login"]');
  }
  async openURL() {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
  }
}