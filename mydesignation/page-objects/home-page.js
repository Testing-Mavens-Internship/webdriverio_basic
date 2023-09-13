import CommonPage from "./common-page.js";

class HomePage extends CommonPage {
  constructor() {
    super();
    this.$selectProduct = (productName) =>
      $(`//a[text()="${productName}"]/ancestor::div[@class="owl-item cloned"]`);
    this.$verifyProduct = (productName) => $(`//h1[text()="${productName}"]`);
  }
  /**
   * pass productname
   * @param {string} productName
   */
  async selectProduct(productName) {
    await this.$selectProduct(productName).scrollIntoView({ block: "center" });
    //await this.$verifyProduct(productName).waitForClickable(3000);
    await this.$selectProduct(productName).click();
    await this.$verifyProduct(productName).waitForClickable(3000);
  }
}
export const homePage = new HomePage();
