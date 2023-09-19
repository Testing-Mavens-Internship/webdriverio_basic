
class Common {
  constructor() {
    this.$header = () => $(`//img[@alt="images"]`);
  }

  /**
   * Method to launch the url
   */
  async launchUrl() {
    await browser.url("https://edelivery.zoproduct.com/");
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({ timeout: 20000 });
  }
}
export const common=new Common();
