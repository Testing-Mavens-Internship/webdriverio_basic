import { textBoxPage } from "../page-objects/textbox-page.js";

class ElementsPage {
  constructor() {
    this.$header = () => $("div.main-header", "Elements");

    this.$sideBar = (box) =>
      $(`//ul[@class="menu-list"]//span[text()="${box}"]`);
  }

  /**

     *

     * @param {string} tileNameInPage

     */

  async clickOnTile(tileNameInPage) {
    await this.$sideBar(tileNameInPage).scrollIntoView({ block: "center" });

    await this.$sideBar(tileNameInPage).waitForClickable(5000);

    await this.$sideBar(tileNameInPage).click();

    //await textBoxPage.$header(tileNameInPage).waitForDisplayed({timeout: 20000});
  }
}

export const elementsPage = new ElementsPage();
