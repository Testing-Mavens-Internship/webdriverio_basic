import { homePage } from "./home-page.js";

export default class Common {
  constructor() {
    this.$header = () => $(`//span[contains(text(),"MavenKonnect")]`);
    this.$thankYou = () => $(`//h1[contains(text(),"THANK YOU")]`);
  }
  /**
   * Method to launch url
   */
  async launchUrl() {
    await browser.url("https://demotmwebsite.github.io/");
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({ timeout: 20000 });
    await homePage.$contactUs().waitForDisplayed({ timeout: 20000 });
  }
}
