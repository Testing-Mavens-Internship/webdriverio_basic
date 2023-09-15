export class Common {
  constructor() {
    this.$header = () => $('//h3[contains(text(),"On-Demand Grocery")]');
    this.$errorHeader = () => $('//h1[text()= "404 Not Found"]');
  }

  async openURL() {
    if (this.$errorHeader().isDisplayed()) {
      browser.refresh();
    }
    await browser.url("https://edelivery.zoproduct.com/");
    await browser.maximizeWindow();
  }
}
