export default class Common {
  constructor() {
    this.$pageHeader = () => $('//span[contains(text(),"MavenKonnect")]');
    this.$button = (value) => $(`//button[contains(text(),"${value}")]`);
  }
  /**
   * Method to launch the url
   */
  async openUrl() {
    await browser.url("https://demotmwebsite.github.io/");
    await browser.maximizeWindow();
    await this.$pageHeader().waitForDisplayed();
  }
}
