import CommonPage from "./common-page.js";

class LandingPage extends CommonPage {
  constructor() {
    super();
  }
  /**
   * choose item
   * @param {string} item
   */
  async clickOnItem(item) {
    await this.$selectItem(item).scrollIntoView({ block: "center" });
    await this.$selectItem(item).waitForDisplayed({ timeout: 3000 });
    await this.$selectItem(item).click();
  }
}

export const landingPage = new LandingPage();
