export default class Common {
  constructor() {
    this.$logo = () => $(`//div[@class="_3qX0zy"]`);
    this.$button = (value) => $(`//button[contains(text(),"${value}")]`);
    this.$travel =() => $(`//img[@alt="Travel"]`);
    this.$closeLogin = () => $(`//*[text()="✕"]`)
  }
  /**
   * Method to launch the url
   */
  async openUrl(value) {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
    await this.$closeLogin().click();
    await this.$travel().click();
    await value.waitForDisplayed({ timeout: 40000 });
  }
}
