export default class Common {
  constructor() {
    this.$header = () => $('//span[contains(text(),"MavenKonnect")]');
  }
  /**
   * Launch the mavenkonect website
   */
  async openUrl() {
    await browser.url("https://demotmwebsite.github.io/index.html");
    await browser.maximizeWindow();
  }
}
