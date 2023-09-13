export default class Common {
  constructor() {
    this.$header = () => $('//a[@class="navbar-brand"]');
    this.$secondaryHeader = () => $('//h2[contains(text(),"Contact Us")]');
    this.$validationMessage = () => $('//h1[contains(text(),"THANK")]');
  }
  /**
   * Launches the url and navigates to landing page og the site
   */
  async openUrl() {
    await browser.url("https://demotmwebsite.github.io/");
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({ timeout: 2000 });
  }
}
