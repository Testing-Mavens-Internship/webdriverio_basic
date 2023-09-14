export default class Common {
  constructor() {
    /**elements */
    this.$header = () => $('//span[contains(text(),"MavenKonnect")]');
    this.$homeButton = () => $('//a[contains(text(),"Home")]')
  }

  /**method to open url */
  async openUrl() {
    await browser.url("https://demotmwebsite.github.io/");
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({ timeout: 2000 });
  }
  async clickOnHomePage(){
    await this.$homeButton();
    await this.$header().waitForDisplayed({ timeout: 2000 });
  }
}
