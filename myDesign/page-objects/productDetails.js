import CommonPage from "../page-objects/common-page.js";

class ProductPage extends CommonPage {
  constructor() {
    super();
    this.$details = () => $('//h1[text()="Gojo Co-Ords Set for Men"]');
    this.$tShirtSize = (size) =>
      $(`//div[@class ="thwvsf_fields"]//span[text()="${size}"]`);
    this.$shortSize = (ssize) =>
      $(`//div[@class ="thwvsf_fields"]//span[text()="${ssize}"]`);
    this.$addCart = () => $('//button[text()=" Add to cart "]');
    this.$viewText = () =>
      $(
        '//div[text()=" “Gojo Co-Ords Set for Men” has been added to your cart."]'
      );
    this.$viewCart = () => $('//a[text()="View cart"]');
  }

  /**click on the required sizes of the products */
  async sizeOfProduct(size, ssize) {
    await this.$tShirtSize(size).scrollIntoView({ block: "center" });
    await this.$tShirtSize(size).waitForClickable(5000);
    await this.$tShirtSize(size).click();
    await this.$shortSize(ssize).click();
  }

  /**click on add to cart */
  async addToCart() {
    await this.$addCart().scrollIntoView({ block: "center" });
    await this.$addCart().waitForClickable(5000);
    await this.$addCart().click();
  }

  /**click on view cart */
  async viewTheCart() {
    await this.$viewCart().click();
  }
}
export const productPage = new ProductPage();
