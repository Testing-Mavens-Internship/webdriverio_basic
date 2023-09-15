import { Common } from "./common.js";
class LoggedIn extends Common {
  constructor() {
    super();
    this.$loginButton = () =>
      $('//div[@class ="subm_btn"]//a[contains(text(),"Log In")]');

    this.$hiText = () => $('//span[@class ="user-name ng-binding"]');
    this.$successMessaage = () => $('//div[@class="toast toast-success"]');
    this.$locations = () => $('//input[@id="searchlocation"]');
    this.$locationChennai = () =>
      $(
        '//div[@class = "pac-item"]/span[contains(text(),"Tamil Nadu, India")]'
      );
    this.$verifyLocation = () =>
      $('//li[@role ="button"][contains(text(),"Chennai")]');
    
  }
  /**
   * Method to click on the login button after the signing up
   */
  async loginButtonClick() {
    await this.$loginButton().waitForDisplayed({ timeout: 7000 });
    await this.$loginButton().click();
  }
  /**
   * Method to click on the location and entering Chen for getting suggestion
   */
  async clickOnLocation() {
    await this.$locations().setValue("che");
  }
  /**
   * Method to click on chennai and going to groceries
   */
  async clickOnChennai() {
    await this.$locationChennai().waitForDisplayed({ timeout: 7000 });
    await this.$locationChennai().click();
  }

}
export const loginPage = new LoggedIn();
