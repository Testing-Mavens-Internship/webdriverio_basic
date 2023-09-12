class Home {
  constructor() {
    this.$header = () => $('//a[@class = "logo"]');
  }
  /**
   * Open the URL
   */
  async openUrl() {
    await browser.url("https://www.mydesignation.com/");
    await browser.maximizeWindow();
  }
}
export const home = new Home();
