export default class Common {
  constructor() {
    this.$header = () => $('//a[@class="navbar-brand"]');
    this.$thank = () => $('//h1[text()="THANK YOU!"]');
  }
  /**
   * Method to lauch the MavenKonnet application
   */
  async launchUrl() {
    await browser.url("https://demotmwebsite.github.io/");
    await browser.maximizeWindow();
    await browser.pause(2000);
  }
}
