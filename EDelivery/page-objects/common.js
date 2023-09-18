export default class Common {
    constructor() {
      this.$pageHeader = () => $('//div[@class="navbar-header logo-head"]');
     // this.$button = (value) => $(`//button[contains(text(),"${value}")]`);
    }
    /**
     * Method to launch the url
     */
    async openUrl() {
      await browser.url("https://edelivery.zoproduct.com/");
      await browser.maximizeWindow();
      await this.$pageHeader().waitForDisplayed();
    }
  }
  