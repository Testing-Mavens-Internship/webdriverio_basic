export default class Common {
  constructor() {
    this.$header = () => $('//div[@class="_3qX0zy" or @class="_16ZfEv"]');
    this.$closeTab = () => $('//*[text()="✕"]');
    this.$cityDeparture = (city) => $(`//span[text()="${city}"]`);
    this.$cityArrival = (name) =>
      $(`//span[@class="_271Zih" and text()="${name}"]`);
  }
  /**
   * Mehtod to load the website
   */
  async loadPage() {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
    await this.$closeTab().click();
    await this.$header().waitForDisplayed({ timeout: 6000 });
  }
}
