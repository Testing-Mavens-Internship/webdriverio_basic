import Common from "./common-page.js";

class ProductPage extends Common {
  constructor() {
    super();
    this.$productPageHeading = (name) =>
      $(`//div[@class="summary entry-summary"]/h1[text()="${name}"]`);
    this.$sizeOfProduct = (size) => $(`//span[text()="${size}"]`);
    this.$addToCartButton = () => $('//button[text()=" Add to cart "]');
    this.$cartIcon = () => $('//li[@class="menu-item menu-item-cart"]/a');
  }
  /**
   * Method to add a product to cart after giving size
   * @param {String} size1
   * @param {String} size2
   */
  async addToCart(size1, size2) {
    await this.$sizeOfProduct(size1).click();
    await this.$sizeOfProduct(size2).click();
    await this.$addToCartButton().scrollIntoView();
    await this.$addToCartButton().waitForClickable({ timeout: 2000 });
    await this.$addToCartButton().click();

    await this.$cartIcon().scrollIntoView();
    await this.$cartIcon().waitForClickable({ timeout: 2000 });
    await this.$cartIcon().click();
  }
}

export const productPage = new ProductPage();
