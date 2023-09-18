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
  }
}
export const homePage = new HomePage();
