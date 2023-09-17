export default class Common {
  constructor() {
    this.$header = () => $('//div[@class="_3qX0zy"]');
    this.$closeTab1 = () => $('//button[@class="_2KpZ6l _2doB4z"]');
    this.$closeTab2 = () => $('//span[text()="X"]');
    this.$cityDeparture = (city) => $(`//span[text()="${city}"]`);
  }
  /**
   * Mehtod to load the website
   */
  async loadPage() {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
    let closeButton = await this.$closeTab1().isClickable();
    if (closeButton) {
      await this.$closeTab1().click();
    } else await this.$closeTab2().click();
    await this.$header().waitForDisplayed({ timeout: 3000 });
  }
}
