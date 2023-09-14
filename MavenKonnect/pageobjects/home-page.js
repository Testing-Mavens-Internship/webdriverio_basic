import Common from "./common.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$contactUsButton = () => $(`(//a[contains(text(),"Contact Us")])[2]`);
  }
  /**
   * Method for clicking contact us button
   */
  async clickOnContactUs() {
    await this.$contactUsButton().click()
 }

}
export const homePage = new HomePage();