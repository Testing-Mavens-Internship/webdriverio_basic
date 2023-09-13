import CommonPage from "./common.js";

class HomePage extends Common {
  constructor() {
    super();
    this.$selectProduct = (productName) =>
      $(`//a[text()="${productName}"]/ancestor::div[@class="owl-item cloned"]`);
    this.$verifyProduct = (productName) => $(`//h1[text()="${productName}"]`);
  }
  /**
   * Method to pass product name 
   * @param {string} productName
   */
  async selectProduct(productName) {
    await this.$selectProduct(productName).scrollIntoView({ block: "center" });
    await this.$selectProduct(productName).click();
    await this.$verifyProduct(productName).waitForClickable(3000);
  }
}
export const homePage = new HomePage();
