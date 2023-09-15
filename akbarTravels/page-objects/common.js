export default class Common {
  constructor() {
    this.$header = () => $('//div[@class ="logo"]');
  }
  async openURL() {
    await browser.url("https://www.akbartravels.com/");
    await browser.maximizeWindow();
  }
}
