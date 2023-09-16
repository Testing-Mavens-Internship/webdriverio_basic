export default class Common {
  constructor() {
    this.$header = () => $('//div[@class="logo"]');
  }
  /**
   * Method to lauch the MavenKonnet application
   */
  async launchUrl() {
    await browser.url("https://www.akbartravels.com/in/flight?lan=en");
    await browser.maximizeWindow();
  }
}
