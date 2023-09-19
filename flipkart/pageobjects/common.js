import { flightPage } from "./flight-page.js";

export default class Common {
  constructor() {
    /**elements */
    this.$flipkartHeader = () => $('//div[@class="_3_C9Hx"]');
    this.$search = () => $('//input[@class="_3704LK"]');
    this.$product = (value) =>
      $(`//a[@class="_3QN6WI" and contains(text(),"${value}")]`);
    this.$travel = () => $('//*[text()="Travel"]');
    this.$x = () => $('//*[text()="✕"]');
  }
  /**method to open the website */
  async OpenUrl() {
    await browser.url("https://www.flipkart.com/");
    await browser.maximizeWindow();
    await this.$x().click();
  }
  /**method to navigate to travel page */
  async clickOnFlight(flightHeader) {
    await this.$travel().click();
    await flightHeader.waitForDisplayed({ timeout: 2000 });
  }
}
