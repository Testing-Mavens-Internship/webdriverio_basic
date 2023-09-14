import CommonPage from "./common.js";
class HomePage extends CommonPage {
  constructor() {
    super();
    this.$selectSize = (size) => $(`//span[text()="${size}"]`);
    this.$cartButton = () =>
      $(`//button[@class="single_add_to_cart_button button alt"]`);
    this.$successMessage = () =>
      $(`//div[@class="box-content"][contains(text(),Sukuna)]`);
    this.$viewCart = () => $(`//a[@class="button wc-forward"]`);
    this.$cartIcon = () => $(`//li[@class="menu-item menu-item-cart"]`);
    this.$productName = () => $(`//td[@class="product-name"]`);
  }
  async selectSizes() {
    await this.$selectSize("XS").click();
    await this.$selectSize("30").click();
    await this.$cartButton().click();
    await this.$viewCart().click();
  }
  async clickOnCartIcon() {
    await this.$cartIcon().click();
  }
}
export const homePage = new HomePage();
