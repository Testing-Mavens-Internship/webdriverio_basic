import Common from "./common.js";
class HomePage extends Common {
  constructor() {
    super();
    this.$selectSection = (section) => $(`//*[text()="${section}"]`);
  }
  /**
   * select category
   * @param {string} section
   */
  async selectProduct(section) {
    await this.$selectSection(section).click();
    await this.$secondHeader(section).waitForDisplayed({timeout : 6000})
  }
}
export const homePage = new HomePage();
