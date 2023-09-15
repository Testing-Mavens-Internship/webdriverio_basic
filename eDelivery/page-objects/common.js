export default class Common {
  constructor() {
    this.$logo = () => $(`//img[@class="img-responsive"]`);
    this.$button = (buttonName) => $(`//button[text()="${buttonName}"]`);
    this.$button2 = (buttonName2) =>
      $(`//a[contains(text(),"${buttonName2}")]`);
  }
  /**
   * Method to launch the url
   */
  async launchUrl() {
    await browser.url("https://edelivery.zoproduct.com/");
    await browser.maximizeWindow();
    await this.$logo().waitForDisplayed({ timeout: 20000 });
  }
}
