export default class Common {
  constructor() {
    this.$mainHeader = () => $(`//a[@href="/"]`); //Flipkart logo
    this.$checkBox = (time) => $(`//div[text()="${time}"]`); //departure checkbox && Airline checkbox
    this.$closeLogin = () => $('//button[text()="✕"]'); // login close icon
    this.$loginPageHeader = () => $(`//span[text()="Login"]`); //header on login popup
  }
  async launchUrl() {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
  }
}
